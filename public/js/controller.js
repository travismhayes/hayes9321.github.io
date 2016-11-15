angular.module('appCtrl', [])
.controller('HomeCtrl', ['$scope', '$document', function ($scope, $document) {
  $scope.navCollapsed = true;

//handle scroll home and scroll to contact
  var duration = 1000;

    //scroll home
    $scope.toTheTop = function() { 
      $document.scrollTopAnimated(0, duration)
    };

    //scroll to contact info
    $scope.toContact = function(){ 
    var contact = angular.element(document.getElementById('Contact'));
      $document.scrollToElement(contact, 0, duration);
    };

//handle images hiding and showing on demo screen
   angular.element(document).ready(function(){
    $scope.imgClass = []
    $scope.imgClass.push('hide'); //on document load, hide image until mouseover event 
      $scope.showBigImg = function (imgsrc){ //handle class change for css animations
          $scope.imgClass.pop('hide') && $scope.imgClass.push('show');
        }
      $scope.hideBigImg = function(imgsrc){ //re-hide image until mouseover event happens again
          $scope.imgClass.pop('show') && $scope.imgClass.push('hide');
        }
    });
}])
.controller('CarouselDemoCtrl', function ($scope) {
  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  var slides = $scope.slides = [];
  var currIndex = 0;

  $scope.addSlide = function() {
    var newWidth = 600 + slides.length + 1;
    slides.push({
      image: ['public/css/images/pokemon-phaser.jpg', 'public/css/images/pack-that.png','public/css/images/pokemon-phaser.jpg', 'public/css/images/pack-that.png'][slides.length % 4],
      text: ['FACEBOOK COMMENT GENERATOR','PACK THAT','POKEMON PHASER','PORTFOLIO'][slides.length % 4],
      link:["https://www.google.com","https://repl.it/languages/javascript","https://www.google.com","https://www.google.com"][slides.length % 4],
      id: currIndex++
    });
  };

  $scope.randomize = function() {
    var indexes = generateIndexesArray();
    assignNewIndexesToSlides(indexes);
  };

  for (var i = 0; i < 4; i++) {
    $scope.addSlide();
  }

  // Randomize logic below

  function assignNewIndexesToSlides(indexes) {
    for (var i = 0, l = slides.length; i < l; i++) {
      slides[i].id = indexes.pop();
    }
  }

  function generateIndexesArray() {
    var indexes = [];
    for (var i = 0; i < currIndex; ++i) {
      indexes[i] = i;
    }
    return shuffle(indexes);
  }


  function shuffle(array) {
    var tmp, current, top = array.length;

    if (top) {
      while (--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
      }
    }

    return array;
  }
});
