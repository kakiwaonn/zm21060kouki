function BMI() {
    var x = Number(document.getElementById('height').value) / 100; // 身長をメートルに変換
    var y = Number(document.getElementById('weight').value);
    var bmi = y / (x * x); // BMIの計算

    alert(bmi);
}
