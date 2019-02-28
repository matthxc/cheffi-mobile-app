function* rootSaga() {
  if (__DEV__ && console.tron) {
    console.tron.log('Init root saga');
  }
}

export default rootSaga;
