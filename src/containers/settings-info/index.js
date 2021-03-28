import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { headerNavigatePath } from '../../actions/navigation';
import { ROUTES } from '../../constants/routes';
import { isRequestSuccess } from '../../utils/store';
import { getSettingsInfo, updateSettingsInfo } from '../../actions/settingsInfo';

export const SettingsInfo = () => {
  const { isLoaded } = useSelector(({ settingsInfo: { data } }) => ({
    isLoaded: isRequestSuccess(data),
  }));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(headerNavigatePath(ROUTES.SETTINGS));

    if (isLoaded) {
      dispatch(updateSettingsInfo());
    } else {
      dispatch(getSettingsInfo());
    }
  }, []);

  return null;
};
