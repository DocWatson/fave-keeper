var fkFriends = angular.module('fkFriends', []);


 function favoriteCtrl($scope, $http, socket) {
	$scope.formData = {};

	

	$http.get('/api/friends')
		.success(function(data) {
			$scope.friends = data;
			console.log(data);
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});

	socket.on('list:update', function (data) {
    	$scope.friends = data;
  	});

	$scope.addFriend = function() {
	    if($scope.newFriendText.text != '') {
	      $http.post('/api/friends', $scope.newFriendText)
				.success(function(data) {
					$scope.newFriendText = '';
					$scope.friends = data;
					socket.emit('list:update', data);
					console.log(data);
				})
				.error(function(data) {
					console.log('Error: ' + data);
				});
	    }
	};

	$scope.deleteFriend = function(id) {
		$http.delete('/api/friends/' + id)
			.success(function(data) {
				$scope.friends = data;
				socket.emit('list:update', data);
				console.log(data);
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};

	$scope.minusOne = function(id,score) {
		score -= 1;



		$http.post('/api/friends/score/' + id, {score: score})
				.success(function(data) {
					$scope.newFriendText = '';
					$scope.friends = data;
					socket.emit('list:update', data);
					console.log(data);
				})
				.error(function(data) {
					console.log('Error: ' + data);
				});
	};

	$scope.plusOne = function(id,score) {
		score +=1;

		$http.post('/api/friends/score/' + id, {score: score})
				.success(function(data) {
					$scope.newFriendText = '';
					$scope.friends = data;
					socket.emit('list:update', data);
					console.log(data);
				})
				.error(function(data) {
					console.log('Error: ' + data);
				});
	};
  	
}