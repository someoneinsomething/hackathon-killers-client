import React from 'react';

import Head from '../_head';
import { PAGE_TYPE } from '../../constants/meta';
import { PageLayout, ContentLayout, SectionLayout, ResponsiveLayout } from '../../components/layouts';
import { CourseTokenSelect, CourseTokenInfo } from '../../containers';

const DealListPage = () => {
  return (
    <PageLayout>
      <Head id={PAGE_TYPE.COURSE} />
      <ContentLayout>
        <ResponsiveLayout size="default">
          <SectionLayout indent>
            <CourseTokenSelect />
            <CourseTokenInfo />
          </SectionLayout>
        </ResponsiveLayout>
      </ContentLayout>
    </PageLayout>
  );
};

export default DealListPage;
