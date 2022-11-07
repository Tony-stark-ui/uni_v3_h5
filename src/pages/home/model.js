export const leaderOperationBtns = [
  {
    imgUrl: new URL('../../../static/home/u13.png', import.meta.url).href,
    text: '服务企业',
    link: '/pages/enterpriseList/index',
  },
  {
    imgUrl: new URL('../../../static/home/u13.png', import.meta.url).href,
    text: '服务记录',
    link: '/pages/serveLog/index',
  },
  {
    imgUrl: new URL('../../../static/home/u13.png', import.meta.url).href,
    text: '问题反馈',
    link: '/pages/issue/index',
  },
]

export const userOperationBtns = [
  {
    imgUrl: new URL('../../../static/home/u13.png', import.meta.url).href,
    text: '服务记录',
    link: '/pages/enterpriseUserServeList/index',
  },
  {
    imgUrl: new URL('../../../static/home/u13.png', import.meta.url).href,
    text: '服务评价',
    link: `/pages/enterpriseUserServeList/index?eval=${true}`,
  },
  {
    imgUrl: new URL('../../../static/home/u13.png', import.meta.url).href,
    text: '问题反馈',
    link: '/pages/enterpriseUserProblem/index',
  },
]

export const userListItemConfig = {
  title: 'content',
  footLeft: 'userName',
  footRight1: 'serviceDate',
  showFootRight2: false,
}
