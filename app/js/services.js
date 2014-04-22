'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [])
    .value('version', '0.1')

    .service('capService',
        function()
        {
            this.capThatShiz = function(strCapMe)
            {
                var boutToBeCapped = "";
                var asGoodAsCapped = "";
                var re = /[A-Z]/;
                var validGarbage;
                boutToBeCapped = strCapMe.split(" ");

                for(var i = 0; i < boutToBeCapped.length; i++)
                {
                    validGarbage = re.exec(boutToBeCapped[i].charAt(0).toUpperCase());

                    if (!validGarbage)
                    {
                        alert("Get that non-alpha gabage out of here!");
                        asGoodAsCapped = "";
                        i = boutToBeCapped.length;
                    }
                    else
                    {
                        //boooo probably better way to do this since i'm removing the space then adding back :(
                        asGoodAsCapped = asGoodAsCapped +
                            boutToBeCapped[i].charAt(0).toUpperCase() + boutToBeCapped[i].substring(1) + " ";
                        //hmmmm i boutToBeCapped
                    }
                }

                return asGoodAsCapped.trim();
            }
        });
