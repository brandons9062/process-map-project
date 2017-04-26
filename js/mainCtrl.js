angular.module('mainApp')
    .controller('mainCtrl', function ($scope, clientService) {

        $scope.showNewClientCircle = true;
        $scope.showClientInfoForm = false;

        $scope.templateHolder = 'New Client';





        $scope.newClientClick = function () {

            $scope.showClientInfoForm = !$scope.showClientInfoForm;
            $scope.showNewClientCircle = !$scope.showNewClientCircle;

        };

        $scope.submitNewClientInfo = function (c) {
            clientService.submitNewClientInfo(c);
            $scope.templateHolder = c.clientNameInput;
            $scope.newClientClick();
        };
    });
