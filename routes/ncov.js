const logger = require('log4js').getLogger('question-data');
const { Op } = require('sequelize');
const assert = require('assert');
const { buffer } = require('../lib/index');
const { epid_mapdb, epid_sumdb} = require('../models/index');

module.exports = require('express').Router()
    .post('/add',async (req, res) => {
        let obj = {
            id:        req.body.id,
            areaid:    req.body.areaid,
            longitude: req.body.longitude,
            latitude:  req.body.latitude,
            normal:    req.body.normal,
            infection: req.body.infection,
            doubt:     req.body.doubt,
            serious:   req.body.serious,
            death:     req.body.death,
            rehab:     req.body.rehab,
            timestmp:  Date.now(),
        };
        let item_sum = await epid_sumdb.find_one(req.body.areaid);
        if (!item_sum)
            item_sum = await epid_sumdb.create({
                id:    obj.areaid,
                longitude: obj.longitude,
                latitude:  obj.latitude,
                normal:    obj.normal,
                infection: 0,
                doubt:     0,
                serious:   0,
                death:     0,
                rehab:     0,
                timestmp:  obj.timestmp,
            });
        await epid_sumdb.set(obj.areaid, {
            id:    item_sum.areaid,
            longitude: item_sum.longitude,
            latitude:  item_sum.latitude,
            normal:    item_sum.normal,
            infection: item_sum.infection + req.body.infection,
            doubt:     item_sum.doubt + req.body.doubt,
            serious:   item_sum.serious + req.body.serious,
            death:     item_sum.death + req.body.death,
            rehab:     item_sum.rehab + req.body.rehab,
            timestmp:  obj.timestmp
        })
        let item = await epid_mapdb.create(obj);
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
        let id = req.body.areaid;
        let timestmp = req.body.timestmp;
        let item = await epid_mapdb.find_where({[Op.and]:[{areaid: id}, {timestmp: timestmp}]});
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
        let items = await epid_mapdb.find_all();
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
    })
    .post('/sum',async (req, res) => {
        let item = await epid_sumdb.find_one(req.body.areaid);
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
    .post('/sum_list',async (req, res) => {
        let items = await epid_sumdb.find_all();
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
    })

