// @flow
import { AsyncStorage } from 'react-native';
import { persistStore } from 'redux-persist';
import ReduxPersist from '../config/ReduxPersist';
import rootSaga from '../sagas';
import DebugConfig from '../config/DebugConfig';

const updateReducers = (store: Object) => {
  const { reducerVersion } = ReduxPersist;
  const startup = () => store.dispatch(rootSaga());

  // Check to ensure latest reducer version
  AsyncStorage.getItem('reducerVersion')
    .then(localVersion => {
      if (localVersion !== reducerVersion) {
        if (DebugConfig.useReactotron) {
          console.tron.display({
            name: 'PURGE',
            value: {
              'Old Version:': localVersion,
              'New Version:': reducerVersion,
            },
            preview: 'Reducer Version Change Detected',
            important: true,
          });
        }
        // Purge store
        persistStore(store, null, startup).purge();
        AsyncStorage.setItem('reducerVersion', reducerVersion);
      } else {
        persistStore(store, null, startup);
      }
    })
    .catch(() => {
      persistStore(store, null, startup);
      AsyncStorage.setItem('reducerVersion', reducerVersion);
    });
};

export default { updateReducers };
