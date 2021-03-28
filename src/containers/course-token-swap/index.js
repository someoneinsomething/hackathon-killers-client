import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { headerNavigatePath } from '../../actions/navigation';
import { ROUTES } from '../../constants/routes';
import { isRequestPending, isRequestSuccess, isUpdatePending, getData } from '../../utils/store';
import { getCourseTokenInfo, updateCourseTokenInfo } from '../../actions/courseTokenSwap';

import { CourseTokenSwapView } from './View';

export const CourseTokenSwap = () => {
  const [firstTokenValue, setFirstTokenValue] = useState(null);
  const [secondTokenValue, setSecondTokenValue] = useState(null);

  const dispatch = useDispatch();
  const { isLoading, isLoaded, data, isUpdating, pageLoading, firstToken, secondToken } = useSelector(
    ({
      courseTokenSwap: { data: courseData, firstToken: courseFirstToken, secondToken: courseSecondToken },
      navigation,
    }) => ({
      isLoading: isRequestPending(courseData),
      isLoaded: isRequestSuccess(courseData),
      isUpdating: isUpdatePending(courseData),
      data: getData(courseData),
      pageLoading: navigation.pageLoading,
      firstToken: courseFirstToken,
      secondToken: courseSecondToken,
    }),
  );

  useEffect(() => {
    dispatch(headerNavigatePath(ROUTES.COURSE));
  }, []);

  useEffect(() => {
    if (firstToken && secondToken) {
      if (isLoaded) {
        dispatch(updateCourseTokenInfo({ firstToken, secondToken }));
      } else {
        dispatch(getCourseTokenInfo({ firstToken, secondToken }));
      }
    }
  }, [firstToken, secondToken]);

  const loading = (pageLoading && !isLoaded) || isLoading;

  if (!firstToken || !secondToken) {
    return null;
  }

  return (
    <CourseTokenSwapView
      loading={loading}
      loaded={isLoaded}
      updating={isUpdating}
      data={data}
      firstToken={firstToken}
      secondToken={secondToken}
      firstTokenValue={firstTokenValue}
      secondTokenValue={secondTokenValue}
      setFirstTokenValue={setFirstTokenValue}
      setSecondTokenValue={setSecondTokenValue}
    />
  );
};
