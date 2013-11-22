function FavoriteCtrl($scope) {
  $scope.favorites = [];
 
  $scope.addFavorite= function() {
    if($scope.favoriteText != '') {
      $scope.favorites.push({text:$scope.favoriteText, score:0});
      $scope.favoriteText = '';
    }
  };
}