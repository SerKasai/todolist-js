console.log('To Do List')

const app = new Vue({
  el: "#app",
  data: {
    newTodo: '',
    todoList: [
      'Fare la spesa',
      'Fare i compiti',
      'Buttare la spazzatura'
    ]
  },
  methods: {
    addTodo: function () {
      if (this.newTodo !== '') {
        this.todoList.push(this.newTodo);
        this.newTodo = '';
      }
    },
    deleteTodo: function (i) {
      this.todoList.splice(i, 1);
    }
  }
})