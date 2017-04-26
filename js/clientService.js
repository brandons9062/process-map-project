angular.module('mainApp').service('clientService', function () {

    var clients = [];

    this.ClientInfo = function (id, name, address, totalARR, primaryContactName, numberOfEmployees, gtm, packages, salesRep, region, implementationTeam, csm) {
        {
            this.id = id;
            this.name = name;
            this.address = address;
            this.totalARR = totalARR;
            this.primaryContactName = primaryContactName;
            this.numberOfEmployees = numberOfEmployees;
            this.gtm = gtm;
            this.packages = packages;
            this.salesRep = salesRep;
            this.region = region;
            this.implementationTeam = implementationTeam;
            this.csm = csm;
        }
    };


    this.submitNewClientInfo = function (c) {
        this.newClientInfo = new this.ClientInfo(c.clientIdInput, c.clientNameInput, c.clientAddressInput, c.clientTotalArrInput, c.clientPrimaryContactNameInput, c.clientNumberOfEmployeesInput, c.clientGtmInput, c.clientPackagesInput, c.clientSalesRepInput, c.clientRegionInput, c.clientImplementationTeamInput, c.clientCsmInput);

        for (var i = 0; i < clients.length; i++) {
            if (clients[i].id == c.clientIdInput) {
                clients.splice(i, 1);
            }
        }
        clients.push(this.newClientInfo);
        console.log(clients);
    }


});
