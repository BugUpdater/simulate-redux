import compose from "./compose";

const applyMiddleware = function (...middlewares) {
  return function (oldCreateStore) {
    return function newCreateStore(reducer, initState) {
      const store = oldCreateStore(reducer, initState);

      /* const chain = [exception, time, logger]*/
      const chain = middlewares.map(middleware => middleware(store));
      
      // exception(time(logger(dispatch)))
      /* let dispatch = store.dispatch;
      chain.reverse().map(middleware => {
        dispatch = middleware(dispatch);
      });
      store.dispatch = dispatch; */
      store.dispatch = compose(...chain)(store.dispatch);

      return store;
    }
  }
}

export default applyMiddleware;
