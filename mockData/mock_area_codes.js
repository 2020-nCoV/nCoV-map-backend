const pool = require('../lib/pool');

let insertQueries = "INSERT INTO area_codes VALUES (1, '湖北', 'prov', -1);"+
                    "INSERT INTO area_codes VALUES (2, '湖南', 'prov', -1);"+
                    "INSERT INTO area_codes VALUES (420100, '武汉', 'city', 1);"+
                    "INSERT INTO area_codes VALUES (421100, '黄冈', 'city', 1);"+
                    "INSERT INTO area_codes VALUES (432100, '孝感', 'city', 1);"+
                    "INSERT INTO area_codes VALUES (410000, '长沙', 'city', 4);";

async function mock_area_code(){
    pool.query(insertQueries, (error, result) => {
        if(error){
            throw error;
        }

    })
}

module.exports = mock_area_code;