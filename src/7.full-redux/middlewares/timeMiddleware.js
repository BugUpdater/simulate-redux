const timeMiddleware = (store) => (next) => (action) => {
  console.log('\n ★   time:', new Date().getTime());
  next(action);
};

export default timeMiddleware;
