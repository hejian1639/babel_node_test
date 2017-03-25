
var obj = {};

obj['1'] = 'a';
console.log(obj);

obj['1'] = 'b';
console.log(obj);

obj['str'] = 'c';
console.log(obj);

var userReducer = function (state = {}, action) {
    console.log('userReducer was called with state', state, 'and action', action)

    switch (action.type) {
        case 'ADD_PERSON':
            state[action.name] = action.age;
            return state;

        default:
            return state;
    }
}
import { createStore, combineReducers } from 'redux'

var store_0 = createStore(userReducer)

console.log('store_0 state after initialization:', store_0.getState())

store_0.dispatch({
    type: 'ADD_PERSON',
    name: "John",
    age: 33
})

console.log('store_0 state after action ADD_PERSON:', store_0.getState())

store_0.dispatch({
    type: 'ADD_PERSON',
    name: "Lisa",
    age: 33
})

console.log('store_0 state after action ADD_PERSON:', store_0.getState())

console.log('store_0 state after action ADD_PERSON:', store_0.getState()["John"])
