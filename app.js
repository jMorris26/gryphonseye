'use strict';

var app = angular.module('portfolio', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'partials/home.html'
  })
  .when('/madwire', {
    templateUrl: 'partials/madwire.html'
  })
  .otherwise({
    redirectTo: '/'
  });
});


app.directive('homescroll', [function(){
  return {
    templateUrl: 'partials/homecontent.html',
    link: function(){
      $('a[href^="#"]').on('click',function (e) {
          e.preventDefault();

          var target = this.hash;
          var $target = $(target);

          $('html, body').stop().animate({
              'scrollTop': $target.offset().top
          }, 900, 'swing', function () {
              window.location.hash = target;
          });
      });
    }
  };
}]);


app.directive('galleryimages', [function(){
  return {
    templateUrl: 'partials/gallery.html',
    link: function(){

      	$('.gallery').magnificPopup({
      		delegate: 'a',
      		type: 'image',
      		tLoading: 'Loading image #%curr%...',
      		mainClass: 'mfp-img-mobile',
      		gallery: {
      			enabled: true,
      			navigateByImgClick: true,
      			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
      		},
      		image: {
      			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      			titleSrc: function(item) {
      				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
      			}
      		}
      	});
    }
  };
}]);
