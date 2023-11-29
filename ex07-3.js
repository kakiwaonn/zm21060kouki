function BMI() {
  var x = Number(document.getElementById('sinntyou').value) / 100; // 身長をメートルに変換
  var y = Number(document.getElementById('taijyuu').value);
  var bmi = y / (x * x); // BMIの計算

    alert('bmi');
}
