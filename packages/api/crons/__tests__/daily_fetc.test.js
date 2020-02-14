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

describe('Daily fetch', () => {
  test('flating data', () => {
    const exampleData = {
      areaTree: [
        {
          name: '中国',
          children: [
            {
              name: '湖北',
              children: [
                {
                  name: '武汉',
                  today: {
                    confirm: 13436,
                    suspect: 0,
                    dead: 0,
                    heal: 0,
                    isUpdated: true,
                  },
                  total: {
                    confirm: 32994,
                    suspect: 0,
                    dead: 1036,
                    heal: 1915,
                    showRate: false,
                    showHeal: false,
                    deadRate: 3.14,
                    healRate: 5.8,
                  },
                },
                {
                  name: '孝感',
                  today: {
                    confirm: 123,
                    suspect: 0,
                    dead: 0,
                    heal: 0,
                    isUpdated: true,
                  },
                  total: {
                    confirm: 2874,
                    suspect: 0,
                    dead: 49,
                    heal: 207,
                    showRate: false,
                    showHeal: false,
                    deadRate: 1.7,
                    healRate: 7.2,
                  },
                },
              ],
            },
            {
              name: '广东',
              children: [
                {
                  name: '深圳',
                  today: {
                    confirm: 5,
                    suspect: 0,
                    dead: 0,
                    heal: 0,
                    isUpdated: true,
                  },
                  total: {
                    confirm: 391,
                    suspect: 0,
                    dead: 0,
                    heal: 81,
                    showRate: false,
                    showHeal: false,
                    deadRate: 0,
                    healRate: 20.72,
                  },
                },
                {
                  name: '广州',
                  today: {
                    confirm: 4,
                    suspect: 0,
                    dead: 0,
                    heal: 0,
                    isUpdated: true,
                  },
                  total: {
                    confirm: 327,
                    suspect: 0,
                    dead: 0,
                    heal: 78,
                    showRate: false,
                    showHeal: false,
                    deadRate: 0,
                    healRate: 23.85,
                  },
                },
              ],
            },
          ],
        },
        {
          name: '日本',
          today: {
            confirm: 0,
            suspect: 0,
            dead: 0,
            heal: 0,
            isUpdated: false,
          },
          total: {
            confirm: 247,
            suspect: 0,
            dead: 1,
            heal: 1,
            showRate: false,
            showHeal: true,
            deadRate: 0.4,
            healRate: 0.4,
          },
        },
        {
          name: '新加坡',
          today: {
            confirm: 0,
            suspect: 0,
            dead: 0,
            heal: 0,
            isUpdated: false,
          },
          total: {
            confirm: 58,
            suspect: 0,
            dead: 0,
            heal: 15,
            showRate: false,
            showHeal: true,
            deadRate: 0,
            healRate: 25.86,
          },
        },
      ],
    };

    const flatted = areaTree(exampleData);
    console.log(flatted);
    expect(flatted[0]).toHaveProperty('region', '湖北武汉');
    expect(flatted[0]).toHaveProperty('today_confirm', 13436);
  });
});
