//alert(window.innerHeight);
//open:open창과 또다른창이 똑같은것을 뜰때 EX)주소입력창
// 중요함!! set timeout(시한폭탄),seltnterval//
//setTimeout(function(){
//  alert("인사가 3초 늦었습니다. 안녕하세요.");
//}, 3000);
//location.href="htpp://goole.com";
/*redirect(리다이렉트)
a태그처럼 페이지를 이동할수있다. 사용하면 안되는 방법이다.*/

/*setInterval(function(){
document.body.innerHTML = document.body. innerHTML + "EO";
}, 500);*/
//EX) 시계
//setInterval:무한재생이다//
//function 앞에 add을 붙여도 됨//

//시계 만들기//
function chktime(){
  var now = new Date();  //Date:(월,일 등 모든시간개념에 쓰임)//
  var hour = now.getHours();
  var min = now.getMinutes();
  var ses = now.getSeconds();
  var msec = now.getMilliseconds();
  hour = addzero(hour);
  min = addzero(min);
  ses = addzero(ses);
  document.getElementById("si").innerHTML =  addzero(hour);
  document.getElementById("bun").innerHTML = addzero(min);
  document.getElementById("cho").innerHTML = addzero(ses);
  //document.getElementById("mcho").innerHTML = addzero2(mcho);//
  //alert(hour + ":" + min + ":" + ses);// 
}
function addzero(num){
if(num < 10 ){
   return "0"+num;
}else{
  return num;
}
}
/*function addzero2(num){
  if(num < 10){
    return "00"+num;
  }else if(num < 100){
    return "0"+num;
  }else{
    return num;
  }
}*/
//setInterval(chktime, 1);
//1000는 1초이다.//
// alert(document.getElementsByTagNameNS("span").lenght); //<-코팅에선 갯수라는의미를지님//
//var arr = [1,5,5,6,9,"a",true];
//var text = "zzzzzzz";
/*alert(text.length);
alert(text.split("").length);*/
/*document.getElementById("si").style.fontSize = "3em"
document.getElementById("si").style.color ="blue"
location.href = "";*/

document.getElementById("Reset").onclick = function(){
  location.reload();
}
//새로고침 버튼//
//number의메소드들은 현장에서 많이쓰인다.
//정수:소수점없는수/ 실수:소수점있는 수//
//숫자와관련된 전역메소드들은 참 중요하다//
 /*var a = window.prompt("더하기 할 첫번째 값을 입력하시오.");
 var b = window.prompt("더하기 할 첫번째 값을 입력하시오.");
 a = Number(a);
 b = Number(b);
 window.alert(a+b);*/

//7나누기3//
//alert(parseInt(7/2));
//alert(7%2);
//random,round,floor 3개가 실무에서 제일 많이 쓰인다.//
//random:최소,최대값을 지정하고 그 사이의 임의의 수를 추출하는 함수
//최소값:3, 최대값:6//
/*function rand(min,max){
Math.floor(Math.random()*(max-min+1) + min);
}
alert( rand(1,6) );
document.body.style.backgroundColor = "rgb("+rand(0.255)+")";
//alert( Math.floor(Math.random()*(6-3+1) + 3) );*/
//floor은 소수점을 없애지게 함//
//ceil:천장 / floor:바닥의미를 지님//
//round:반올림//
//power(pow):지수를 의미함//

//split:제일 중요함
//tostring//
//replace:지우고싶을때 지울수있는 기능//
//getMonth,GetDay 쓸때는 돌아오는 순서의 숫자로 브라우저에 나타남
//EX)07/일요일 = 6.7으로 나타남//
/*var now = new Date();
var year = now. getFullYear();
var month = now. getMonth()+1;
var day = now.getDay();
var date = now. getDate();
var daytext = ["월","화","수","목","금","토","일",];

alert(year+"-"+month +"-"+date+" "+daytext[day] + "요일");*/


//현재 년,월,일,시간을 설정하고싶으면 위의 공식처럼 하면 됨//

//제이퀴리에서 $(This)는 대명사이다. 
//id(#)는 단수 이고 ("")는 복수이다.//



