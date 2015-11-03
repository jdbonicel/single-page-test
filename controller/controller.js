


app.controller('navController',['$scope', function($scope) {
	$scope.nav = [
	{
		link:'javascript:void(0);',
		title: 'JD',
		active: false,
		class: 'nav-brand'
	},
	{
		link:'#home',
		title: 'Home',
		active: true
	}, 
	{
		link:'#config',
		title: 'Config',
		active: false
	}];
	$scope.setActive = function(item, nav){
	  nav.some(function(item){
	    if(item.active){
	      return item.active = false;
	    }
	  });
	  item.active = true;
	};

}]);



app.controller('homeController',['$scope', function($scope) {
    $scope.title = 'Home';


}]);
 
 
app.controller('configController', ['$scope', function($scope) {
    $scope.title = 'Config';
}]);



