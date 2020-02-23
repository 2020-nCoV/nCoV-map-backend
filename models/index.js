module.exports = {
    // 问卷管理相关
    question_datadb: require('./question_data'),
    question_paperdb: require('./question_paper'),
    question_topicdb: require('./question_topic'),

    // 用户相关
    userdb: require('./user'),

    //  行政区域相关
    area_codedb: require('./area_code'),

    // 疫情新闻相关
    infe_flowmsgdb: require('./infection_flowmsg'),
    infe_tidingdb: require('./infection_tiding'),

    // 实时疫情
    epid_mapdb: require('./epidemic_data'),
    epid_sumdb: require('./epidemic_sum'),

    // 建议反馈
    infection_tidingdb: require('./infection_tiding'),

    // 我有数据
    infection_tidingdb: require('./infection_tiding'),

};