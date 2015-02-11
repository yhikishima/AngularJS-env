angular.module('apiTestApp').factory('JsonData', function ($http) {
  return {
    getSampleData: function () {

      return $http.get('../data/data.json')
        .success(function(data, status, headers, config) {

          // 擬似的に、1秒間ウェイト
          var time = new Date().getTime();
          while (new Date().getTime() < time + 1000);

          return data;
        });
    }

  };

});