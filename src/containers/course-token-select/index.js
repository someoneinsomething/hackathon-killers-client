import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CourseTokenSelectView } from './View';

const TOKENS_SELECT = [
  {
    id: 1,
    value: 'YFI',
    tid: 'COURSE.TOKEN.YFI',
  },
];

export const CourseTokenSelect = () => {
  const dispatch = useDispatch();

  const { token } = useSelector(({ courseTokenInfo }) => ({
    token: courseTokenInfo,
  }));

  const handleChangeToken = (e, value) => {
    console.log(e, value);
  };

  return <CourseTokenSelectView tokens={TOKENS_SELECT} value={token} changeValue={handleChangeToken} />;
};
