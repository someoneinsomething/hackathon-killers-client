import { NAVIGATION } from '.';

export const headerNavigatePath = (path, { typePath, queries } = {}) => {
  if (typeof path === 'function') {
    path = path();
  }

  return (dispatch) =>
    dispatch({
      type: NAVIGATION.CHANGE_ACTIVE_PATH,
      activePath: path,
      typePath,
      queries,
    });
};

export const setNavigationQuery = (queries) => (dispatch) => {
  dispatch({ type: NAVIGATION.SET_QUERY, queries });
};

export const setPageLoading = (pageLoading) => {
  return {
    type: NAVIGATION.SET_PAGE_LOADING,
    pageLoading,
  };
};
