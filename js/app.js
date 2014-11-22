/*
* AngularJS app.js
*/

// function MainCtrl($scope) {
//   $scope.people = [
//     { firstName: 'Kazuhito', lastName: 'Hokamura' },
//     { firstName: 'Takeshi',  lastName: 'Takatsudo' },
//     { firstName: 'Akihiro',  lastName: 'Oyamada' },
//     { firstName: 'Kazuhori',  lastName: 'Tokuda' },
//     { firstName: 'Yukihisa',  lastName: 'Yamada' },
//   ];
// }

var app = {};

(function(app){
  app = angular.module('myApp', ['ngResource']);

  // コントローラーを定義
  app.controller('MainCtrl', function($scope) {
    $scope.name = 'ororo~';

    $scope.onClickBtn = function() {
      // 文字列を反対にする
      $scope.name = $scope.name.split('').reverse().join('');
    };
  });

  app.controller('FirstCtrl', function($scope) {
  });

  app.controller('SecondCtrl', function($scope) {
  });

  // ディレクティブを定義
  app.directive('myDirective', function() {
    // ...
  });


})(app || (app = {}));

function TodoCtrl($scope) {
  $scope.todos = [
    {text:'AngularJSの学習', done:true},
    {text:'AngularJSのアプリケーション構築', done:false}];
  $scope.addTodo = function() {
    $scope.todos.push({text:$scope.todoText, done:false});
    $scope.todoText = '';
  };
  $scope.remaining = function() {
    var count = 0;
    angular.forEach($scope.todos, function(todo) {
      count += todo.done ? 0 : 1;
    });
    return count;
  };
  $scope.archive = function() {
    var oldTodos = $scope.todos;
    $scope.todos = [];
    angular.forEach(oldTodos, function(todo) {
      if (!todo.done) $scope.todos.push(todo);
    });
  };
}
