   // scores
   var playerTotal= 0; 
   var wins= 0;
   var losses = 0;
  
  // Generates random number to guess
  var Random=Math.floor(Math.random()*102+19);
  
  //Generate random number for each crystal
  var num1= Math.floor(Math.random()*12+1);
  var num2= Math.floor(Math.random()*12+1);
  var num3= Math.floor(Math.random()*12+1);
  var num4= Math.floor(Math.random()*12+1);

// Reset game
function reset(){
      Random=Math.floor(Math.random()*102+19);
      $('#randomScore').text(Random);
      num1= Math.floor(Math.random()*12+1);
      num2= Math.floor(Math.random()*12+1);
      num3= Math.floor(Math.random()*12+1);
      num4= Math.floor(Math.random()*12+1);
      playerTotal= 0;
      $('#totalScore').text(playerTotal);
      } 

$(document).ready(function(){
  $('#wins').text(wins);
  $('#losses').text(losses);

//random number
  $('#randomScore').text(Random);

//wins
function woohoo(){
alert("You win! Have some fruit.");
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
// Click events that dont work
  $('.strawberry').on ('click', function(){
    playerTotal = playerTotal + num1;
    console.log("New playerTotal= " + playerTotal);
    $('#totalScore').text(playerTotal); 
        if (playerTotal == Random){
          woohoo();
        }
        else if ( playerTotal > Random){
          loser();
        }   
  })  
  $('.lemon').on ('click', function(){
    playerTotal = playerTotal + num2;
    console.log("New playerTotal= " + playerTotal);
    $('#totalScore').text(playerTotal); 
        if (playerTotal == Random){
          woohoo();
        }
        else if ( playerTotal > Random){
          loser();
        } 
  })  
  $('.watermellon').on ('click', function(){
    playerTotal = playerTotal + num3;
    console.log("New playerTotal= " + playerTotal);
    $('#totalScore').text(playerTotal);

          if (playerTotal == Random){
          woohoo();
        }
        else if ( playerTotal > Random){
          loser();
        } 
  })  
  $('.pineapple').on ('click', function(){
    playerTotal = playerTotal + num4;
    console.log("New playerTotal= " + playerTotal);
    $('#totalScore').text(playerTotal); 
      
          if (playerTotal == Random){
          woohoo();
        }
        else if ( playerTotal > Random){
          loser();
        }
  });   
}); 