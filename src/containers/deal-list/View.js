import React from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';

import { Loader, AlertSection } from '../../components';
import { ListActionTitle } from '../../components/titles';
import { Box } from '../../components/cards';
import { SkeletonDataList } from '../../components/skeletons';

const LoaderComponent = () => (
  <React.Fragment>
    <Loader />
    <SkeletonDataList />
  </React.Fragment>
);

const DealList = dynamic(() => import('./List').then((module) => module.DealList), {
  loading: LoaderComponent,
});

export const DealListView = ({ loading, loaded, deals, paginationAction, updating, updateList }) => {
  const isEmpty = loaded && deals.list.length === 0;

  return (
    <div>
      <Box variant="outlined">
        <ListActionTitle
          divider={!isEmpty}
          tid="DEAL.DEAL_LIST.TITLE"
          action={updateList}
          actionTid="DEAL.DEAL_LIST.UPDATE_BUTTON"
        />
        {loading && <LoaderComponent />}
        {updating && <Loader />}
        {loaded && deals.list.length !== 0 && (
          <DealList
            // paginationAction={paginationAction}
            // pagination={deals.list.pagination}
            updating={updating}
            list={deals.list}
            data={deals.data}
          />
        )}
      </Box>
      <AlertSection info={isEmpty} infoMessage="DEAL.DEAL_LIST.EMPTY_LIST" />
    </div>
  );
};

DealListView.propTypes = {
  loading: PropTypes.bool,
  loaded: PropTypes.bool,
  deals: PropTypes.object,
  updating: PropTypes.bool,
  paginationAction: PropTypes.func,
  updateList: PropTypes.func,
};
