const loggerMiddleware = (store) => (next) => (action) => {
  console.log(`\n【 state before 】===>\n`, store.getState());
  console.log(`\n【 action 】===>\n`, action);
  next(action);
  console.log(`\n【 state after 】===>\n`, store.getState());
};

export default loggerMiddleware;
