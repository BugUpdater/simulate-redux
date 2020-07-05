# simulate-redux
Simulate Redux from simple to complex.

从零编写一个功能完整的Redux。

## Demo1 simple-store
Create a simple store that can: get state/subscribe/change state.

## Demo2 limit-change-store
Limit change by dispatching actions.

## Demo3 multiple-reducers
Combine reducers

## Demo4 init-state-by-reducer
Init state by reducer and trigger in createStore.

## Demo5 middleware
Logger middleware and exception middleware.

## Demo6 improved-middleware
- Place middlewares in a seperate folder and be more extensible.
- Use applyMiddleware to combine the array of middlewares.

## Demo7 full-redux
Other improvements:
- Unsubscribe store
- Use simple store in middlewares
```js
const simpleStore = { getState: store.getState };
const chain = middlewares.map(middleware => middleware(simpleStore));
```
- Support to omit initState
```js
// old
const store = createStore(reducer, {}, rewriteCreateStoreFunc);
// new
const store = createStore(reducer, rewriteCreateStoreFunc);

// change code
function craeteStore(reducer, initState, rewriteCreateStoreFunc){
    if (typeof initState === 'function'){
    rewriteCreateStoreFunc = initState;
    initState = undefined;
  }
  ...
}
```
- Add replaceReducer in createStore to support lazy load of reducer.
- Add bindActionCreators to simplify dispatching actions.
