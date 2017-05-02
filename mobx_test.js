import mobx, { observable, computed, runInAction } from './mobx.umd';

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


function Todo() {
  this.id = Math.random()
  this.first = false;
  mobx.extendObservable(this, {
    aaa: 111,
    bbb: 222
  })
  mobx.autorun(() => {
    console.log(this.aaa + " " + this.bbb);
    if (this.first) {
      console.log(' observableTodoStore.report: ' + observableTodoStore.report);

    }
    this.first = true;
  });

}
var vm = new Todo

observableTodoStore.addTodo("read MobX tutorial");
observableTodoStore.addTodo("try MobX");
vm.aaa = 1;
observableTodoStore.todos[0].completed = true;
observableTodoStore.todos[1].task = "try MobX in own project";
observableTodoStore.todos[0].task = "grok MobX tutorial";

runInAction(() => {
  vm.aaa = 0;
  vm.bbb = 0;
});

console.log(Object.keys(vm));