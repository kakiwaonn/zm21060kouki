function tosi(){
var nenn=document.getElementById('seirekinenn').value;
var tosi2;
  
if(nenn % 4==0 && nenn % 100 !==0 || nenn % 400==0);
{ tosi2='閏年';}
else {(tosi2='平年');}
  
alert('西暦は'+nenn+'年は'+tosi2+);}

  var siwake;
  if(bmi2<18.5){
       siwake='低体重';}
  else if(bmi2<25){
       siwake='普通';}
  else {siwake='肥満';}

//<p>西暦年<input type="text" id="seirekinenn"></p>
//<input type="button" value="西暦年解答" onclick="tosi();">  

//倫理演算子
//4で割り切れる　400でも割り切れる　閏年
// 100で割り切れ400で割り切れない　平年 
