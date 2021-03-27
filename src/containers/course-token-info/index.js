import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { headerNavigatePath } from '../../actions/navigation';
import { ROUTES } from '../../constants/routes';

export const CourseTokenInfo = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(headerNavigatePath(ROUTES.COURSE));
  }, []);

  return <React.Fragment>{null}</React.Fragment>;
};
