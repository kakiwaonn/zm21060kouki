function imgchange5(){document.getElementById('logo3').src='image/animal_cat_kowai.png';}
function imgchange6(){document.getElementById('logo3').src='image/cat_koubakozuwari_brown.png';}

function hyoji(){//表示する元画像
var gazou="image/cat_koubakozuwari_brown.png";
  //テキストボックスの文字数
var cnt=document.timer.moji.value.length;
  //画像が全部表示されているか確認
if(cnt<1){
  //現在より1文字多く切り出して表示
  document.timer.moji.value=str.substr(0,cnt+1);}
else{
  //全て表示されたら、空文字に戻す
  document.timer.moji.value="";}}
function startfnc(){//関数hyoji()を3000ミリ秒間隔で呼び出す
  setInterval("hyoji()",3000);}
