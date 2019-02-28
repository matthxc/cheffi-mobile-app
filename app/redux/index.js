import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import configureStore from './CreateStore';
import rootSaga from '../sagas';
import ReduxPersist from '../config/ReduxPersist';

/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
  nav: require('./NavigationRedux').reducer,
});

export default () => {
  let finalReducers = reducers;
  // If rehydration is on use persistReducer otherwise default combineReducers
  if (ReduxPersist.active) {
    const persistConfig = ReduxPersist.storeConfig;
    finalReducers = persistReducer(persistConfig, reducers);
  }

  const configureStoreConst = configureStore(finalReducers, rootSaga);
  let { sagasManager } = configureStoreConst;
  const { sagaMiddleware, store } = configureStoreConst;

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./').reducers; // eslint-disable-line
      store.replaceReducer(nextRootReducer);

      const newYieldedSagas = require('../sagas').default;
      sagasManager.cancel();
      sagasManager.done.then(() => {
        sagasManager = sagaMiddleware.run(newYieldedSagas);
      });
    });
  }

  return store;
};
