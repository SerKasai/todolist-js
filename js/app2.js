console.log('To Do List')

const app = new Vue({
  el: "#app",
  data: {
    newTodo: '',
    todoList: [
      {
        text: 'Fare i compiti',
        done: false
      },
      {
        text: 'Fare la spesa',
        done: true
      },
      {
        text: 'Fare le pulizie',
        done: false
      },
    ],
  },
  methods: {
    toggle: function (i) {
      const { done } = this.todoList[i];
    },
    addTodo: function () {
      if (this.newTodo !== '') {
        this.todoList.push({ text: this.newTodo, done: false });
        this.newTodo = '';
      }
    },
    deleteTodo: function (i) {
      this.todoList.splice(i, 1);
    },
  },
})