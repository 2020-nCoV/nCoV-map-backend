const logger = require('log4js').getLogger('question-data');
const assert = require('assert');
const router = require('express').Router();
const { buffer } = require('../lib/index');
const { area_codedb } = require('../models/index');

module.exports = require('express').Router()
    .post('/add',async (req, res) => {
        let obj = {id: req.body.id, name: req.body.name, level: req.body.level, superior: req.body.superior};
        let item = await area_codedb.create(obj);
        logger.info(item);
        if (item) {
            res.json({
                status: {code: 0, msg: "创建成功"},
                data: item
            })
        } else {
            res.json({
                status: {code: -1, msg: "创建失败"},
                data: item
            })
        }
    })
    .post('/detail',async (req, res) => {
        let id = req.body.id;
        let item = await area_codedb.find_one(id);
        if (item) {
            res.json({
                status: {code: 0, msg: "查询成功"},
                data: item
            })
        } else {
            res.json({
                status: {code: -1, msg: "查询失败"},
                data: item
            })
        }
    })
    .post('/list',async (req, res) => {
        let items = await area_codedb.find_all();
        if (items.length) {
            res.json({
                status: {code: 0, msg: "查询成功"},
                data: items
            })
        } else {
            res.json({
                status: {code: -1, msg: "查询失败"},
                data: items
            })
        }
    });

/* add
router.post('/', async (req, res) => {
    let obj = {id:3,chooise:JSON.stringify(["eeee","bb","aa"]),addtime:Date.now()};
    let abc = await question_datadb.create(obj);
    abc = abc.dataValues;
    logger.info(abc);
    let timestmp = Date.now();
    abc.addtime = timestmp;
    logger.info(await question_datadb.set(abc.id,abc));
    logger.info(await question_datadb.find_all());
    logger.info(await question_datadb.find_one(abc.id));
    logger.info(await question_datadb.find_where({addtime:timestmp}));
    logger.info(await question_datadb.set(abc.id,abc));
    logger.info(await question_datadb.delete({id:abc.id}));


    let stat = { code:200, msg:"获取成功" };
    let data = { "index":"data"};
    res.json({status:stat, data:data})
});

module.exports = router;
*/