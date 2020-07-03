const exceptionMiddleware = (store) => (next) => (action) => {
  try {
    next(action);
  } catch (err) {
    console.error('error: ', err);
  }
};

export default exceptionMiddleware;
