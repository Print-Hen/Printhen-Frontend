'use strict';


angular.module("PrintHen.app", ['ui.router'])
.controller("HttpGetController", function ($scope, $http) {
       
      $scope.username;
       $scope.password;
       $scope.smtp_hostname;
       $scope.imap_hostname;
       $scope.admin_email;

        $scope.$on('$viewContentLoaded', function(){
              $scope.getDetails();
              console.log("sss")
        });
       $scope.getDetails = function() {
           $http.post('http://printhen.local:8001/api/getdetails/',null)
                .success(function (data, status) {
                    $scope.username = data.username
                    $scope.password = data.password
                    $scope.smtp_hostname = data.smtp_hostname
                    $scope.imap_hostname = data.imap_hostname
                    $scope.admin_email = data.admin_email
            }).error(function(data,status,headers,config){
                    alert("Error fetching data");
            });
       }
       var validateInput = function() {
         if($scope.username == null) {
            return false;
         }
       
         else if($scope.password == null) {
            return false;
         }
         else if($scope.imap_hostname == null) {
            return false;
         }
         else if($scope.smtp_hostname == null) {
            return false;
         }
         else if($scope.admin_email == null) {
            return false;
         }
         else {
            return true;
         }
       }

        $scope.Login = function () {
            console.log("VAL"  + validateInput())
            if(validateInput()) {
                $scope.token = 0;
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
                
                    var i;
                    if((fh.data.username == data.username) && (fh.data.password == data.password) && 
                        (fh.data.imap_hostname == data.imap_hostname) && (fh.data.smtp_hostname == data.smtp_hostname) 
                        && (fh.data.admin_email == data.admin_email)) { 
                        alert("Configuration saved successfully")
                    }
                    else {
                        alert("Something went wrong try reloading!");
                    }
                })
                .error(function (data, status, header, config) {
                    $scope.ResponseDetails = "Data: " + data +
                        "<hr />status: " + status +
                        "<hr />headers: " + header +
                        "<hr />config: " + config;
 
                  
                        alert("Please check the credintionals!! ");
                   
                  
                });
            }
        else {
            alert("Please fill in all the fields")
        }
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
