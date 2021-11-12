(function() {
  'use strict';

  // two way data vinding (to UI)がvueの特徴

  // data vindingとは、dataとUIを結びつける意味
  // two wayは、dataを更新すればUIが更新され、UIが更新されればdataが更新される

  var vm = new Vue({
    el: '#app',
    data: {
      newItem: '',
      todos: [{
        title: 'task1',
        isDone: false
      }, {
        title: 'task2',
        isDone: false
      }, {
        title: 'task3',
        isDone: true
      }]
    },
    methods: {
      addItem: function() {
        var item = {
          title: this.newItem,
          isDone: false
        };
        this.todos.push(item);
        this.newItem = '';
      },
      purge: function() {
        if (!confirm('delete finished?')) {
          return;
        }
          // this.todos = this.todos.filter(function(todo) {
          //   return !todo.isDone;
          // });
          this.todos = this.remaining;
      }
    },

computed: {
  remaining: function() {
    // var items = this.todos.filter(function(todo) {
    //   return !todo.isDone;
    // });
    // return items.length;
    return this.todos.filter(function(todo) {
      return !todo.isDone;
    });
  }
}
  });
})();
