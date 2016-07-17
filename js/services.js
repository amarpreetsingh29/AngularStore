var svc = function () {
angular.module('myapp')
.factory('storeAPI', storeAPI);
storeAPI.$inject = ['$http', '$rootScope'];
function storeAPI($http, $rootScope) {
    var fcobj = {};
    fcobj.cart = {};
    fcobj.cart.items = [];
    fcobj.cart.totalCost = 0;
    fcobj.cart.totalQty = 0;

    fcobj.find = function (collection, item) {
        for (var i = 0; i < collection.length; i++) {
            if (collection[i].name === item) {
                return collection[i];
            }
        }
    }


    fcobj.addToCart = function (item) {

        if (fcobj.cart.items.indexOf(item) === -1) {
            fcobj.cart.items.push(item);
            fcobj.cart.totalCost += item.price;
            ++fcobj.cart.totalQty;
        }
    }



    fcobj.remove = function (item) {
        var index = fcobj.cart.items.indexOf(item);
        if (index != -1) {
            fcobj.cart.items.splice(index, 1);
            if (item.quantity) {
                fcobj.cart.totalQty -= item.quantity;
                fcobj.cart.totalCost -= item.quantity * item.price;
                fcobj.resetItem(item);

            }
            else {
                fcobj.cart.totalCost -= item.price;
                --fcobj.cart.totalQty;
            }         
             
        }
    }

    fcobj.clearCart = function () {
      
        for (var i = 0; i < fcobj.cart.items.length; i++) {
            fcobj.resetItem(fcobj.cart.items[i]);
        }
        fcobj.resetCart();       
    }

    fcobj.resetItem = function (item) {
        if (item.quantity) {
            delete item.quantity;
        }
    }
    fcobj.resetCart = function () {
        fcobj.cart.items.length = 0;
        fcobj.cart.totalCost = 0;
        fcobj.cart.totalQty = 0;
    }
    return fcobj;
}

}();


