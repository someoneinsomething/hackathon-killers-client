import React from 'react';

import Head from '../_head';
import { PAGE_TYPE } from '../../constants/meta';
import { PageLayout, ContentLayout, SectionLayout, ResponsiveLayout } from '../../components/layouts';
import { DealListFilter, DealList } from '../../containers';

const DealListPage = () => {
  return (
    <PageLayout>
      <Head id={PAGE_TYPE.DEAL_LIST} />
      <ContentLayout>
        <ResponsiveLayout size="default">
          <SectionLayout indent>
            <DealListFilter />
            <DealList />
          </SectionLayout>
        </ResponsiveLayout>
      </ContentLayout>
    </PageLayout>
  );
};

export default DealListPage;
