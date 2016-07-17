var ctrl = function () {

    angular.module('myapp')



.controller('storeController',storeController)
.controller('productController', productController)
.controller('cartController', cartController);

    storeController.$inject = ['$scope', '$rootScope', '$location', 'storeAPI'];
    productController.$inject = ['$scope', '$rootScope', '$location', 'storeAPI'];
    cartController.$inject = ['$scope','$location', 'storeAPI'];

    function storeController($scope, $rootScope, $location, storeAPI) {
        var vm = this;

        vm.productDetail = productDetail;

        vm.addToCart = addToCart;

        vm.viewCart = viewCart;

        vm.collection = $rootScope.productCollection;
        vm.cart = storeAPI.cart;

       
        //////

        function productDetail(item) {
            var name = item;
            $location.path('/product/').search({ name: name });
            
        }
        function addToCart(item) {
            storeAPI.addToCart(item);
        }
        function viewCart() {
            $location.path('/cart');
        }
    }
    function productController($scope, $rootScope, $location, storeAPI) {
        var vm = this;
        var temp = $location.search();
       
        var collection = $rootScope.productCollection;

        
        vm.addToCart = addToCart;
        vm.back = back;
        vm.remove = remove;
        vm.viewCart = viewCart;

        ////

        vm.cart = storeAPI.cart;
        vm.item = storeAPI.find(collection, temp.name);
        //vm.status = storeAPI.find(storeAPI.cart.items,temp.name)
        checkStatus();

        function addToCart() {
            storeAPI.addToCart(vm.item);
            checkStatus();
        }
        function back() {
            $location.path('/store').search({});
        }
        function remove() {
            storeAPI.remove(vm.item);
            checkStatus();
        }
        function viewCart() {
            $location.path('/cart').search({});
        }
        function checkStatus() {
            vm.status = storeAPI.find(storeAPI.cart.items, temp.name);
        }

    }
    function cartController($scope, $location, storeAPI) {
        var vm = this;
        vm.cart = storeAPI.cart;

        for (var i in vm.cart.items) {
            vm.cart.items[i].quantity = vm.cart.items[i].quantity || 1;
        }



        vm.clearCart = clearCart;

        vm.back = back;

        vm.remove = remove;
        vm.incQty = incQty;


        vm.decQty = decQty;

        vm.Cost = Cost;

        vm.Qty = Qty;

        ////

        function clearCart() {
            storeAPI.clearCart();
        }

        function back() {
            $location.path('/store').search({});
        }

        function remove(item) {
           storeAPI.remove(item);           
        }


        function incQty(item) {
            ++item.quantity;
            UpdateCart();
        }


       function decQty(item) {
            --item.quantity;
            if (item.quantity == 0) {
                storeAPI.remove(item);
            }
            UpdateCart();
        }

        function Cost() {
            var item, cost = 0;
            for (var i in vm.cart.items) {
                item = vm.cart.items[i]
                cost += item.price * item.quantity;
            }
            return cost;
        }

         function Qty() {
            var item, qty = 0;
            for (var i in vm.cart.items) {
                item = vm.cart.items[i]
                qty += item.quantity;
            }
            return qty;
        }


         function UpdateCart() {
             vm.cart.totalCost = vm.Cost();
             vm.cart.totalQty = vm.Qty();
         }
    }

}();
