(function () {
    const createRedux = (function(){

        function createStore(reducer){
            let state;
            const listeners = [];
            const dispatch = (action) => {
                state = reducer(state,action);
                listeners.forEach(listener => listener());
            }

            dispatch({})
            const getState = () => state;
            const subscribe = (listener) => {
                listeners.push(listener);
            };
            return {
                dispatch,
                getState,
                subscribe
            }
        }
        const combineReducers = (reducers) => {}
        const applyMiddleware = (middleware) => {}

        return{
            createStore,
            combineReducers,
            applyMiddleware,
        }
    })()




    if(!window.createRedux){
        window.$redux = window.createRedux = createRedux
    }
})()