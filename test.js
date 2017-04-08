
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

store_0.subscribe(function () {
    console.log('store_0 has been updated. Latest store state:', store_0.getState());
    // 在这里更新你的视图
})

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

class Todo {
    constructor(text) {
        this.id = Todo.nextTodoId++;
        this.text = text;
        this.completed = false;
    }
}

Todo.nextTodoId = 0;

var todo = new Todo('hell');
console.log(new Todo());
console.log(new Todo());

class Todos {
    constructor() {
        this.state = [];
    }

    add(todo) {
        this.state.push(todo);
    }
}

var todos = new Todos();
todos.add(new Todo());
todos.add(new Todo());
todos.add(new Todo());
todos.add(new Todo());
todos.add(new Todo());
console.log(todos);

var visibilityFilter = { '1': 'SHOW_ALL', '2': 'SHOW_ALL' };

var list = Object.keys(visibilityFilter).map(key => key);


console.log(list);


console.time('using[]')
for (var i = 0; i < 200000; i++) { var arr = [] };
console.timeEnd('using[]')

console.time('using new')
for (var i = 0; i < 200000; i++) { var arr = new Array };
console.timeEnd('using new')

import mobx, { observable, computed } from 'mobx';

class ObservableTodoStore {
    @observable todos = [];
    @observable pendingRequests = 0;

    constructor() {
        mobx.autorun(() => console.log(this.report));
    }

    @computed get completedTodosCount() {
        return this.todos.filter(
            todo => todo.completed === true
        ).length;
    }

    @computed get report() {
        if (this.todos.length === 0)
            return "<none>";
        return `Next todo: "${this.todos[0].task}". ` +
            `Progress: ${this.completedTodosCount}/${this.todos.length}`;
    }

    addTodo(task) {
        this.todos.push({
            task: task,
            completed: false,
            assignee: null
        });
    }
}

const observableTodoStore = new ObservableTodoStore();

observableTodoStore.addTodo("read MobX tutorial");
observableTodoStore.addTodo("try MobX");
observableTodoStore.todos[0].completed = true;
observableTodoStore.todos[1].task = "try MobX in own project";
observableTodoStore.todos[0].task = "grok MobX tutorial";
