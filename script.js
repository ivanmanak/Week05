var app = angular.module("myApp", []);

app.controller('MainCtrl', ['$scope','$filter', function ($scope, $filter){

  $scope.customers = [
    { 'id': 1, 'fullName': 'Bojan', 'address': 'Ilindenska', 'city': 'Skopje', 'pinCode': 1000, 'country': 'Macedonia'},
    { 'id': 2, 'fullName': 'Dejan', 'address': 'Ilindenska', 'city': 'Bitola', 'pinCode': 1000, 'country': 'Macedonia'}, 
    { 'id': 3, 'fullName': 'Petra', 'address': 'Ilindenska', 'city': 'Berovo', 'pinCode': 1000, 'country': 'Macedonia'},
    { 'id': 4, 'fullName': 'Petar', 'address': 'Ilindenska', 'city': 'Gostivar', 'pinCode': 1000, 'country': 'Macedonia'}, 
    { 'id': 5, 'fullName': 'Mile', 'address': 'Ilindenska', 'city': 'Vinica', 'pinCode': 1000, 'country': 'Macedonia'},
    { 'id': 6, 'fullName': 'Branka', 'address': 'Ilindenska', 'city': 'Valandovo', 'pinCode': 1000, 'country': 'Macedonia'}, 
    { 'id': 7, 'fullName': 'Damjana', 'address': 'Ilindenska', 'city': 'Resen', 'pinCode': 1000, 'country': 'Macedonia'},  
    { 'id': 8, 'fullName': 'Tino', 'address': 'Ilindenska', 'city': 'Ohrid', 'pinCode': 1000, 'country': 'Macedonia'},
    { 'id': 9, 'fullName': 'Dragana', 'address': 'Ilindenska', 'city': 'Skopje', 'pinCode': 1000, 'country': 'Macedonia'},
    { 'id': 10, 'fullName': 'Bojana', 'address': 'Ilindenska', 'city': 'Skopje', 'pinCode': 1000, 'country': 'Macedonia'},
  ];
  
  $scope.errorMessage = false;
  
  $scope.addRow = function () {
    var maxID = (Math.max.apply(null, $scope.customers.map(x => x.id)) || 0) + 1;
    
    if(!!$scope.customers.find(x => x.fullName === $scope.selectedCustomer.fullName && x.address === $scope.selectedCustomer.address)) {
      $scope.errorMessage = true;
      return;
    }
    $scope.customers.push({ 'id': $scope.selectedCustomer.id, 'fullName': $scope.selectedCustomer.fullName, 'address': $scope.selectedCustomer.address, 'city': $scope.selectedCustomer.city, 'pinCode': $scope.selectedCustomer.pinCode, 'country': $scope.selectedCustomer.country, });
    $scope.selectedCustomer.id = '';
    $scope.selectedCustomer.fullName = '';
    $scope.selectedCustomer.address = '';
    $scope.selectedCustomer.city = '';
    $scope.selectedCustomer.pinCode = '';
    $scope.selectedCustomer.country = '';    
  }
  
  $scope.remove = function () {
    var newDataList = [];
    $scope.selectedAll = false;
    angular.forEach($scope.customers, function(selected) {
      if(!selected.selected) {
        newDataList.push(selected);
      }
      $scope.customers = newDataList;
      $scope.selectedCustomer.id = '';
      $scope.selectedCustomer.fullName = '';
      $scope.selectedCustomer.address = '';
      $scope.selectedCustomer.city = '';
      $scope.selectedCustomer.pinCode = '';
      $scope.selectedCustomer.country = '';  
    });
  }
  
  $scope.checkAll = function () {
    $scope.selectedAll = false;
    if(!$scope.selectedAll) { 
      $scope.selectedAll = true;
    } else { 
      $scope.selectedAll = false;
    }
    angular.forEach($scope.customers, function(customer){
      customer.selected = $scope.selectedAll;
    });
  }
  $scope.singleCustomerselected = false;
  
  $scope.setSelectedCustomer = function (customer){
    if($scope.customers.filter(x => x.selected).length > 1){
      $scope.selectedCustomer = null;
      $scope.singleCustomerSelected = false;
    } else {
      $scope.selectedCustomer = angular.copy($scope.customers.find(x => x.selected));
      $scope.singleCustomerSelected = !!$scope.selectedCustomer;
    }
  }
  
  $scope.edit = function() {
    if(!!$scope.customers.find(x => x.fullName === $scope.selectedCustomer.fullName && x.address === $scope.selectedCustomer.address)) {
      $scope.errorMessage = true;
      return;
    }
    var customerToEdit = $scope.customers.find(x => x.id === $scope.selectedCustomer.id);
    customerToEdit .fullName = $scope.selectedCustomer.fullName;
    customerToEdit .address = $scope.selectedCustomer.address;
    customerToEdit .city = $scope.selectedCustomer.city;
    customerToEdit .pinCode = $scope.selectedCustomer.pinCode;
    customerToEdit .country = $scope.selectedCustomer.country;
  }

  
}]);