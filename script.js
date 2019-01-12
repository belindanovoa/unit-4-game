 // scores
   var userTotal= 0; 
   var wins= 0;
   var losses = 0;

// Generates random number to guess
  var Random=Math.floor(Math.random() * 102 + 19);
  
//Generate random number for each fruit
  var fruit1= Math.floor(Math.random() * 12 + 1);
  var fruit2= Math.floor(Math.random() * 12 + 1);
  var fruit3= Math.floor(Math.random() * 12 + 1);
  var fruit4= Math.floor(Math.random() * 12 + 1);

//random number
$('.randomScore').text(Random);

// Reset game
function reset(){
  Random=Math.floor(Math.random() * 102 + 19);
  $('.randomScore').text(Random);
  fruit1= Math.floor(Math.random() * 12 + 1 );
  fruit2= Math.floor(Math.random() * 12 + 1);
  fruit3= Math.floor(Math.random() * 12 + 1);
  fruit4= Math.floor(Math.random() * 12 + 1);
  userTotal= 0;
  $('#totalScore').text(userTotal);
  } 

// Scoreboard
$(document).ready(function(){
  $('#wins').text(wins);
  $('#losses').text(losses);

//wins
function winner(){
alert("You win! Blessed Be the Fruit...");
  wins++; 
  $('#wins').text(wins);
  reset();
}
//losses
function loser(){
alert ("No fruit for you!");
  losses++;
  $('#losses').text(losses);
  reset();
}
// Click events
$('.strawberry').on ('click', function(){
    userTotal = userTotal + fruit1;
    console.log("New userTotal= " + userTotal);
    $('#totalScore').text(userTotal); 
        if (userTotal == Random){
          winner();
        }
        else if ( userTotal > Random){
          loser();
        }   
  })  
$('.raspberry').on ('click', function(){
  userTotal = userTotal + fruit2;
    console.log("New userTotal= " + userTotal);
    $('#totalScore').text(userTotal); 
        if (userTotal == Random){
          winner();
        }
        else if ( userTotal > Random){
          loser();
        } 
  })  
$('.watermellon').on ('click', function(){
  userTotal = userTotal + fruit3;
  console.log("New userTotal= " + userTotal);
    $('#totalScore').text(userTotal);
          if (userTotal == Random){
          winner();
        }
        else if ( userTotal > Random){
          loser();
        } 
  })  

$('.pineapple').on ('click', function(){
    userTotal = userTotal + fruit4;
    console.log("New userTotal= " + userTotal);
    $('#totalScore').text(userTotal); 
          if (userTotal == Random){
          winner();
        }
        else if ( userTotal > Random){
          loser();
        }
  });   
}); 