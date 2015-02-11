angular.module('apiTestApp')
  .controller('MainCtrl', ['$scope', 'JsonData', function ($scope, JsonData) {

    // こっちの書き方はNGパターン
    //$scope.items = JsonData.getSampleData().data;

    JsonData.getSampleData().then(function(res){
        $scope.items = res.data;
        $scope.show_loading = false; // ローディング中、を非表示へ
      }
    );

    $scope.show_loading = true; // ローディング中、を表示

  }])
;