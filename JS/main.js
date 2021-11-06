(function() {
  'use strict';

  // two way data vinding (to UI)がvueの特徴

  // data vindingとは、dataとUIを結びつける意味
  // two wayは、dataを更新すればUIが更新され、UIが更新されればdataが更新される

  var vm = new Vue({
    el: '#app',
    data: {
      todos: [
        'task 1',
        'task 2',
        'task 3'
      ]
    }
  });
})();
