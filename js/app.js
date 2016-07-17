var a = function () {

    var app = angular.module('myapp', ['ngRoute']);

    app.config(configuration);
    app.run(init);


    configuration.$inject = ['$routeProvider'];
    init.$inject = ['$rootScope'];

    function configuration($routeProvider) {
        $routeProvider
        .when('/store', { templateUrl: '/Views/store.html', controller: 'storeController', controllerAs: 's' })
        .when('/product', { templateUrl: '/Views/product.html', controller: 'productController', controllerAs: 'p' })
        .when('/cart', { templateUrl: '/Views/cart.html', controller: 'cartController', controllerAs: 'c' })
        .otherwise({ redirectTo: '/store' });

    }

    function init($rootScope) {

        $rootScope.productCollection =
            [
              { 'name': 'Apple', 'description': 'Eat one every day to keep doctor away!', 'price': 12, 'properties': [{ 'name': 'Calories', 'value': 90 }, { 'name': 'Cartenoid', 'value': 0 }, { 'name': 'Fiber', 'value': 2 }, { 'name': 'Folates', 'value': 1 }, { 'name': 'Potassium', 'value': 1 }, { 'name': 'Vitamin C', 'value': 2 }] },
               { 'name': 'Grape', 'description': 'Wine is great, but grapes are even better', 'price': 8, 'properties': [{ 'name': 'Calories', 'value': 90 }, { 'name': 'Cartenoid', 'value': 0 }, { 'name': 'Fiber', 'value': 2 }, { 'name': 'Folates', 'value': 1 }, { 'name': 'Potassium', 'value': 1 }, { 'name': 'Vitamin C', 'value': 2 }] },
               { 'name': 'GrapeFruit', 'description': 'Pink or Red; always healthy and delicious', 'price': 11, 'properties': [{ 'name': 'Calories', 'value': 90 }, { 'name': 'Cartenoid', 'value': 0 }, { 'name': 'Fiber', 'value': 2 }, { 'name': 'Folates', 'value': 1 }, { 'name': 'Potassium', 'value': 1 }, { 'name': 'Vitamin C', 'value': 2 }] },
                { 'name': 'Papaya', 'description': 'Super-popular for breakfast', 'price': 5, 'properties': [{ 'name': 'Calories', 'value': 90 }, { 'name': 'Cartenoid', 'value': 0 }, { 'name': 'Fiber', 'value': 2 }, { 'name': 'Folates', 'value': 1 }, { 'name': 'Potassium', 'value': 1 }, { 'name': 'Vitamin C', 'value': 2 }] },
                { 'name': 'PineApple', 'description': 'Enjoy it (but dont forget to peal it first)', 'price': 4, 'properties': [{ 'name': 'Calories', 'value': 90 }, { 'name': 'Cartenoid', 'value': 0 }, { 'name': 'Fiber', 'value': 2 }, { 'name': 'Folates', 'value': 1 }, { 'name': 'Potassium', 'value': 1 }, { 'name': 'Vitamin C', 'value': 2 }] }
            ];

    }

}();

window.onload = function () {
    document.getElementById('loading').style.display = 'none';
    document.getElementById('views').style.display = 'block';
}
