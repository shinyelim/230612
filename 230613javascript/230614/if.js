//[if 조건에 따라 코드를 실행할지 말지 선택]
//true :맑으면, false//
/*var weater = true;



if(!weater){
  alert("우산챙기기!");
}*/

//기온이 4도 이하인 경우 외투 챙기기//
/*var temp = 23;
if(temp <=4 ){
  alert("외투챙기기!");
}*/

//훈련생의점수기준 판별 프로그램(기준:60점)//
/*var score = 54;
if(score >=60){
 alert("합격");
}else{
  alert("불합격");
}*/
//100분위 점수를 학점으로 변환하는 프로그램//
/*var jumsu = 55;
var hakjum;
if(jumsu >=90){
  alert("A");

}else if(jumsu >=80){
hakjum = "B";
}else if(jumsu >=75){
   hakjum = "C";
}else{
 hakjum = "F";
}
alert(hakjum);*/
//단 외국인경우는 어학점수는 반영하지않거나 선택사항이다.//
//and 조건을 위한 연습:졸업 가능//
//외국인경우는 영어,국어 중 하나의 점수가 60점이상//
var fore = true; //내국인:거짓/외국인:참//
var korea = 80;

var english = 68; //어학점수 60점이상//
var creadit = 120; //120학점 이상//
var engineer = true; //취득:참/미취득:거짓
/*if(english >=60 && creadit >=120 && engineer){
  alert("축하합니다. 드디어 졸업입니다.");
}else{
  alert("졸업조건을 총족하지 못했습니다.");
}*/
if(!korea >=60 && creadit >=120 && english >=60 && fore && engineer){
alert("축하합니다. 드디어 졸업입니다.")
}else{
  alert("졸업조건을 총족하지 못해서 졸업이 불가능합니다.")
}

