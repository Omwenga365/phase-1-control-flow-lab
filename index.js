function scuberGreetingForFeet(feet) {
if(feet<=400){
  return 'If this one is on me!'
  scuberGreetingForFeet(199);
} else if(feet>=2001 && feet <=2500) {
  return 'I will gladly take yourthirty bucks.'
  scuberGreetingForFeet(2001);
}else if (feet > 2500) {
  return 'No can do.'
  scuberGreetingForFeet(2501);
}
function ternaryCheckCity (city) {
  if (city == "NYC") {
    return "ok,sounds good."
  }else if (city != "NYC") {
    return 'no go'
  }
}



function switchOnCharmFromTip(tip)
  switch (tip) {
    case "generous":return 'Thank you so much.';
    case "not as generous":return 'Thank you';
    default:return 'Bye';
  }
}
