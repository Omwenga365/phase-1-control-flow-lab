// Write your code here!
 function scuberGreetingForFeet(feet){
  if (feet<=400) {
    return "This one is on me!"
  }

else if (feet > 2000 && feet < 2500) {
    return "I will gladly take your thirty bucks."
}
  else {
    return "No can do."
  }
}


scuberGreetingForFeet(); 

function ternaryCheckCity(NYC, Pittsburgh){
// Write your code here!
let city = NYC
return city === "NYC" ? "Ok, sounds good." : "No go."
}
ternaryCheckCity()



function switchOnCharmFromTip(tip){
// Write your code her
switch (tip) {
case 'generous':
return "Thank you so much.";
  break;

  case 'not as generous':
return "Thank you.";
    break;

default:
return "Bye."
}  

}