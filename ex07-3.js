function BMI() {
    var x = Number(document.getElementById('height').value) / 100; //メートル変換
    var y = Number(document.getElementById('weight').value);
   
    var bmi = y / (x * x); // BMI計算

    alert(bmi);
}
