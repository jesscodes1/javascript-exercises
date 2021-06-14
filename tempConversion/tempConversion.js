const ftoc = function(x) {
  let celcius = 0;

  celcius = (x - 32) * (5/9);

  if(celcius != 0){
    return Math.round(10*celcius)/10;
  }

  return celcius;
};

const ctof = function(x) {
  let fahrenheit = 0;

  fahrenheit = (x * (9/5) + 32);

  if(fahrenheit != 0){
    return Math.round(10*fahrenheit)/10;
  }
  return fahrenheit;
};

module.exports = {
  ftoc,
  ctof
};
