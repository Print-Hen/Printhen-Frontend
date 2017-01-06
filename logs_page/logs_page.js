'use strict';


angular.module("PrintHen.app", ['ui.router'])
.controller("HttpGetController", function ($scope, $http) {
       
       

        $scope.Login = function () {
            
            var fh =  new FormHelper()
                fh.append("username",$scope.username)
                fh.append("password",$scope.password)
                fh.append("smtp_hostname",$scope.smtp_hostname)
                fh.append("imap_hostname",$scope.imap_hostname)
                fh.append("admin_email",$scope.admin_email)
        		console.log("DATA")
        	 	console.log(fh.data)
            var config = {
                headers : {
                    'Content-Type': 'x-www-form-urlencoded'
                }
            }
              
             
            $http.post('http://printhen.local:8001/api/setmailconfig/', JSON.stringify(fh.data), config)
            .success(function (data, status, headers, config) {
                $scope.PostDataResponse = data;
                 console.log("Success");

                alert("Server Started Successfully");
            })
            .error(function (data, status, header, config) {
                $scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;

                    console.log("Wrong details");
                    alert("Please check the credintionals!! ");
                   
                  
            });
        }

    });
// function FormHelper() {
//  this.data = "";
 
//  this.append = function(name, val) {
//    if (this.data.length > 0) {
//      this.data += "&";
//    }
//    this.data += encodeURIComponent(name);
//    this.data += "=";
//    this.data += encodeURIComponent(val);
//  }
// }

function FormHelper() {
 this.data = {}
 
 this.append = function(name, val) {
    	this.data[name] = val
    

   }
}



angular.module("PrintHen.logs_page", ['ui.router'])


.controller('MainController', function($scope,$state,$http) {
	$scope.login=function(){
	  
	       console.log("kaja");
	}
});
