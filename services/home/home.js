import { config, cdnBase } from '../../config/index';

/** 获取首页数据 */
function mockFetchHome() {
  const { delay } = require('../_utils/delay');
  const { genSwiperImageList } = require('../../model/swiper');
  return delay().then(() => {
    return {
      swiper: genSwiperImageList(),
      tabList: [
        {
          text: '精选推荐',
          key: 0,
        },
        {
          text: '温情母亲节',
          key: 1,
        },
        {
          text: '夏日特惠',
          key: 2,
        },
        {
          text: '文创人气榜',
          key: 3,
        },
      ],
      activityImg: `${cdnBase}/activity/banner.png`,
    };
  });
}



/** 获取首页数据 */
export function fetchHome() {
  if (config.useMock) {
    return mockFetchHome();
  }
  return new Promise((resolve) => {
    resolve('real api');
  });
}
