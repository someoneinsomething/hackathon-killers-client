export const ROUTES = {
  COURSE: '/course',
  DEAL_LIST: '/deals',
  SETTINGS: '/settings',
};

export const PAGINATION_OFFSET = {
  DEAL_LIST: 50,
};

export const APP_MENU = [
  // {
  //   id: 1,
  //   tid: 'NAVIGATION.PATH.COURSE',
  //   path: ROUTES.COURSE
  // },
  {
    id: 1,
    tid: 'NAVIGATION.PATH.DEALS',
    path: ROUTES.DEAL_LIST,
  },
  {
    id: 2,
    tid: 'NAVIGATION.PATH.SETTINGS',
    path: ROUTES.SETTINGS,
  },
];
