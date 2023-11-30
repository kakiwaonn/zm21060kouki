function tosi(){
var nenn=document.getElementById('seirekinenn').value;
var tosi;
  
if(nenn % 4==0 && nenn % 100 !==0 || nenn % 400==0 );}
{ tosi='閏年';}
else{tosi='平年';}
  

//<p>西暦年<input type="text" id="seirekinenn"></p>
//<input type="button" value="西暦年解答" onclick="tosi();">  


//倫理演算子
//4で割り切れる　400でも割り切れる　閏年
// 100で割り切れ400で割り切れない　平年 
