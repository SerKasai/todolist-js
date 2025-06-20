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
      console.log(done);

      this.todoList[i].done = !done
    },
    addTodo: function () {
      if (this.newTodo !== '') {
        this.todoList.push({ text: this.newTodo, done: false });
        this.newTodo = '';
      }
    },
    deleteTodo: function (i) {
      const { done } = this.todoList[i];
      if (done) {
        this.todoList.splice(i, 1);
      } else {
        const res = confirm('La task non è completata. Sei sicurto di volerla cancellare?');
        console.log(res);
        if (res) {
          this.todoList.splice(i, 1);
        }
      }
    },
  },
})