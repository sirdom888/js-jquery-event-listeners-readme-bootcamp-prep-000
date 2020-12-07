//define functions here

function getIt() {
  $('p').on('click', function() {
    alert("hey!");
  });
}

function frameIt() {
  $('img').on('load', function(){
    document.getElementById('p').ClassList.add('tasty');
  });
}

function pressIt() {
  $('form').on('keydown', function(key){
    
  });
}

$(document).ready(function(){

// call functions here
getIt();
frameIt();

});
