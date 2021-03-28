import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { headerNavigatePath } from '../../actions/navigation';
import { ROUTES, PAGINATION_OFFSET } from '../../constants/routes';
import { getDealList, updateDealList } from '../../actions/dealList';
import { getData, isRequestSuccess, isRequestPending, isUpdatePending } from '../../utils/store';

import { DealListView } from './View';

export const DealList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { isLoading, isLoaded, dealsData, isUpdating, pageLoading } = useSelector(
    ({ dealList: { data }, navigation }) => ({
      isLoading: isRequestPending(data),
      isLoaded: isRequestSuccess(data),
      isUpdating: isUpdatePending(data),
      dealsData: getData(data),
      pageLoading: navigation.pageLoading,
    }),
  );
  const dispatch = useDispatch();

  const updateList = () => {
    dispatch(
      updateDealList({
        skip: 0,
        take: PAGINATION_OFFSET.DEAL_LIST,
      }),
    );
  };

  useEffect(() => {
    dispatch(headerNavigatePath(ROUTES.DEAL_LIST));

    if (isLoaded) {
      dispatch(
        updateDealList({
          skip: 0,
          take: PAGINATION_OFFSET.DEAL_LIST,
        }),
      );
    } else {
      dispatch(
        getDealList({
          skip: 0,
          take: PAGINATION_OFFSET.DEAL_LIST,
        }),
      );
    }
  }, []);

  const paginationAction = () => {
    const page = currentPage + 1;
    dispatch(
      updateDealList({
        skip: 0,
        take: PAGINATION_OFFSET.DEAL_LIST * page,
      }),
    );
    setCurrentPage(page);
  };

  const loading = (pageLoading && !isLoaded) || isLoading;

  return (
    <DealListView
      loading={loading}
      loaded={isLoaded}
      updating={isUpdating}
      deals={dealsData}
      paginationAction={paginationAction}
      updateList={updateList}
    />
  );
};
