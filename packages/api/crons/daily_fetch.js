const rp = require('request-promise');
const models = require('../models');

module.exports = async () => {
  const api = 'https://view.inews.qq.com/g2/getOnsInfo?name=disease_h5';
  const { ret, data } = await rp({
    uri: api,
    method: 'GET',
    headers: {
      'User-Agent':
        'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
    },
    json: true,
  });

  // console.log(data);
  if (ret !== 0) {
    console.error('数据错误', ret, data);
  }

  // console.log(data);

  const body = JSON.parse(data);
  const payload = areaTree(body);

  // console.log(payload);

  await models.NcovReport.destroy({ where: {} });
  await models.NcovReport.bulkCreate(payload);
};

const snakeCase = require('lodash/snakeCase');

const objectKeyToSnakeCase = (obj, parentKey) => {
  return Object.entries(obj[parentKey]).reduce((prev, [key, value]) => {
    prev[snakeCase(`${parentKey}_${key}`)] = value;
    return prev;
  }, {});
};

const loopChildren = (children, region = '') => {
  return children
    .map((item) => {
      if (item.children) {
        return loopChildren(item.children, `${region}${item.name}`);
      }

      return {
        region: `${region}${item.name}`,
        ...objectKeyToSnakeCase(item, 'today'),
        ...objectKeyToSnakeCase(item, 'total'),
      };
    })
    .flat();
};

const areaTree = (data) => {
  return data.areaTree
    .map((item) => {
      if (item.name === '中国') {
        return loopChildren(item.children);
      }

      return {
        region: item.name,
        ...objectKeyToSnakeCase(item, 'today'),
        ...objectKeyToSnakeCase(item, 'total'),
      };
    })
    .flat();
};
