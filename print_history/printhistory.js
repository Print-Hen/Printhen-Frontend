'use strict';


angular.module("PrintHen.myApp", ['ui.router'])
.controller("subController", function ($scope, $http) {

 
        console.log("pori")
  

        $scope.data;
        $scope.go = function () {
          
          console.log("pori2");
  

            var fh =  new FormHelper()
               
            var config = {
                headers : {
                    'Content-Type': 'x-www-form-urlencoded'
                }
            }



            $http.post('http://printhen.local:8001/api/getprinthistory/', JSON.stringify(fh.data), config)
            .success(function (data, status, headers, config) {
                $scope.PostDataResponse = data.history;
                 $scope.data = $scope.PostDataResponse
                // console.log("narendra")
              
            })
            .error(function (data, status, header, config) {
                $scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;

                    console.log("World")
            });
        };



            // Another function for search printhistory
             $scope.searchVal = ""
             $scope.search = function () {
                  //$scope.data.splice(0,$scope.data.length)      
                 $scope.data = [];
                 console.log("welcme");
    
     // array Declaration

 
                 //console.log(JSON.stringify($scope.PostDataResponse))
                    var data = $scope.PostDataResponse;
                    var i;
                    var r  = "ra";
                    for (i = 0; i < data.length; i++) { 
                      //console.log(data[i].email)
                      //console.log($scope.searchVal.toLowerCase())
                      //console.log(r.indexOf("raghuram8892@gmail.com"))
                      var patt = new RegExp($scope.searchVal);
                      var res = patt.test(data[i].email);
                      console.log((($scope.searchVal).toLowerCase()).indexOf(data[i].email))
                      if (res)
                          $scope.data.push(data[i]);
                          console.log($scope.searchVal + "Matches " + data[i].email);
                    }
                    
        };

              


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






angular.module('PrintHen.print_history', ['ui.router'])

.controller('abcController', function($scope,$state,$http) {
	$scope.collect=function(){
       console.log("ASSF");
	}

});	