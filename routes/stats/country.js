const logger = require('log4js').getLogger('question-prop');
const assert = require('assert');
const router = require('express').Router();
const { buffer, pool} = require('../../lib');
const { area_codedb, epid_mapdb } = require('../../models');

const queryCityData = 'SELECT * FROM '+
                            '(SELECT areaid, infection, doubt, death, rehab, superior, cityname '+
                                'FROM (SELECT areaid, SUM(infection) as infection, SUM(doubt) as doubt, '+
                                    'SUM(death) as death, SUM(rehab) as rehab '+
                                    'FROM public.epidemic_data '+
                                    'GROUP BY areaid '+
                                    ') as ep '+
                                'JOIN (SELECT name as cityname, id, superior FROM public.area_codes) as ac '+
                                'ON ep.areaid = ac.id) as citydata '+
                            'JOIN (SELECT name as provname, id FROM area_codes) as provdata '+
                            'ON citydata.superior = provdata.id;';
const queryProvData = 'SELECT SUM(infection) as infection, SUM(doubt) as doubt, SUM(death) as death, SUM(rehab) as rehab, provname, id '+
                        'FROM '+
                        '(SELECT * FROM '+
                            '(SELECT areaid, infection, doubt, death, rehab, superior, cityname '+
                                'FROM (SELECT areaid, SUM(infection) as infection, SUM(doubt) as doubt, '+
                                    'SUM(death) as death, SUM(rehab) as rehab '+
                                    'FROM public.epidemic_data '+
                                    'GROUP BY areaid '+
                                    ') as ep '+
                                'JOIN (SELECT name as cityname, id, superior FROM public.area_codes) as ac '+
                                'ON ep.areaid = ac.id) as citydata '+
                            'JOIN (SELECT name as provname, id FROM area_codes) as provdata '+
                            'ON citydata.superior = provdata.id) as prov '+
                        'GROUP By id, provname ;';

router.get('/', (req, res) => {
    
    pool.query(queryCityData, (error, cityResults) => {
        if (error) {
          res.status(500);
          throw error;
        }
        pool.query(queryProvData, (error, provResults) => {
            if(error){
                res.statsu(500);
                throw error;
            }
            let countryResult = []
            let provData = {}
            provResults.rows.forEach(provElement => {
                provData['provinceName'] = provElement.provname + '省';
                provData['provinceShortName'] = provElement.provname;
                provData['confirmedCount'] = parseInt(provElement.infection);
                provData['suspectedCount'] = parseInt(provElement.doubt);
                provData['curedCount'] = parseInt(provElement.rehab);
                provData['deadCount'] = parseInt(provElement.death);
                provData['comment'] = 'Not Applicable (model does not contain this column)';
                provid = provElement.id;
                // location id omited because of the China's postcode system
                
                provData['cities'] = []
                let cityData = {}
                cityResults.rows.forEach(cityElement =>{
                    if(cityElement.superior == provid){
                        cityData['cityName'] = cityElement.cityname;
                        cityData['confirmedCount'] = parseInt(cityElement.infection);
                        cityData['suspectedCount'] = parseInt(cityElement.doubt);
                        cityData['curedCount'] = parseInt(cityElement.rehab);
                        cityData['deadCount'] = parseInt(cityElement.death);
                        cityData['locationId'] = cityElement.areaid;
                        provData['cities'].push(cityData);
                    }
                    cityData = {}
                })

                countryResult.push(provData);
                provData = {};
            });
            res.status(200).json(countryResult)
        })
      });

});

module.exports = router;