function BMI2() {
    var x = Number(document.getElementById('height').value) / 100; // メートルに
    var y = Number(document.getElementById('weight').value);
    var bmi2 = y / (x * x); // BMIの計算

    var siwake;
  if(bmi2<18.5){
       siwake='低体重';}
  else if(bmi2<25){
       siwake='普通';}
  else {siwake='肥満';}  
    
    alert(bmi2);
}
