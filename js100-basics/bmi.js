function bmiCalculator(weight, height) {
  //let weightInKgs = weight/1000;
  let heightInMeters = height/100;
  return weight / (heightInMeters ** 2)
}

console.log(bmiCalculator(80, 180));