
angular.module("ToDoList", ["LocalStorageModule"])
.controller("ToDoController", function ($scope, localStorageService) {
    if (localStorageService.get("angular-todolist")) {
        $scope.todo = localStorageService.get("angular-todolist");
            console.log("hay cosas");
          

    } else {
        $scope.todo = [];
            console.log("No hay nada compa");
    }
    $scope.$watchCollection('todo', function (newValue, oldValue) {

       localStorageService.set("angular-todolist",$scope.todo);
       


    });
    
    $scope.addActv= function(){
        $scope.todo.push($scope.newActv);
        $scope.newActv={};
      
    }
    
    $scope.clean = function (){
        
        $scope.todo =[];
         localStorageService.set("angular-todolist", $scope.todo);
    };




});
