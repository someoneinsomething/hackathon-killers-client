import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { updateDealList } from '../../actions/dealList';
import { PAGINATION_OFFSET } from '../../constants/routes';

import { DealListFilterView } from './View';

export const DealListFilter = () => {
  const dispatch = useDispatch();
  const [checkboxValue, setCheckboxValue] = useState(null);

  const changeCheckboxValue = () => {
    if (checkboxValue) {
      dispatch(updateDealList({ skip: 0, take: PAGINATION_OFFSET.DEAL_LIST }));
    } else {
      dispatch(updateDealList({ skip: 0, take: PAGINATION_OFFSET.DEAL_LIST, profit: true }));
    }

    setCheckboxValue(!checkboxValue);
  };
  return <DealListFilterView checkboxValue={checkboxValue} changeCheckboxValue={changeCheckboxValue} />;
};
