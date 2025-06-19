console.log('To Do List')

const app = new Vue({
  el: "#app",
  data: {
    newTodo: '',
    todoList: [
      {
        text: 'Fare i compiti',
        done: 'true'
      },
      {
        text: 'Fare la spesa',
        done: 'false'
      },
      {
        text: 'Fare le pulizie',
        done: 'false'
      },
    ],
  },
  methods: {
    isDone: function () {
      const duty = document.getElementById("todo");
      if (this.todoList.done === true) {
        duty.classList.toggle(" done");
      }
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