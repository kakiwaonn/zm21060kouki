function BMI() {
    var x = Number(document.getElementById('height').value) / 100; // メートルに
    var y = Number(document.getElementById('weight').value);
    var bmi = y / (x * x); // BMIの計算

    var siwake;
    
    
    alert(bmi);
}



身長：<input type="text" id="height2">
<br>
体重：<input type="text" id="weight2">
<br>
<input type="button" value="BMI計算" onclick="BMI2();"> 
