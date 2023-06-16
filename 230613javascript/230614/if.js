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
var korea = 50;

var english = 68; //어학점수 60점이상//
var creadit = 110; //120학점 이상//
var engineer = true; //취득:참/미취득:거짓




/*if(english >=60 && creadit >=120 && engineer){
  alert("축하합니다. 드디어 졸업입니다.");
}else{
  alert("졸업조건을 총족하지 못했습니다.");
}*/
/*if(korea >=60 && creadit <=120 && english >=60 && fore && engineer){
alert("축하합니다. 드디어 졸업입니다.")
}else{
  alert("졸업조건을 총족하지 못해서 졸업이 불가능합니다.")
}*/
 
/*if(fore == true){ //(fore == true):조건절//
  //외국인 졸업사정
}else{
if(english >=60 && creadit >=120 && engineer)  //내국인 졸업사정
}*/
//(68 >=60 && creadit >=120 && true)
//true && true && true = true(모든게 참)//
//총족하는 요건들중에서 한개라도 거짓이 나올경우에는 거짓으로 판단//
//참+참=참,참+거짓=거짓,거짓+거짓=거짓(&&경우만)/
//(or조건경우에는 참+거짓도 참으로 나올수있다.)//


/*(부동산 알아보기)
새직장을 얻어서 직장 근처에 집을 얻고 싶다.
직장으로부터 반경 10키로 이내에 있는 집을 가지고 싶다.
주말마다 여가생활을 해야하니 주차가 가능한 집이었으면 좋겠다.(필수)
직장으로부터 반경 10키로 이내에 있는 집을 가지고싶다.(필수)
전용면적이 20평 이상이었으면 좋겠다.
엘리베이터가 반드시 있었으면 좋겠다.(필수)
전용면적이 20평 이상이었으면 좋겠다.(옵션)

전용면적이 20평이상 이거나 주변에 상가가 반경 1키로 이내에 있었으면 좋겠다.*/

/*var company = 14;
var parking = true;
var elevator =false;
var area = 21;
var shop = 0.8;
var home = [
  {
    company: 15,
    parking: true,
    elevator: false,   //home[0].company(home의 0번째)//
    area: 21,
    shop: 0.8
  },

  {
    company: 9,
    parking: true,
    elevator: true,
    area: 24,
    shop: 1.5
  },

  {
    company: 2,
    parking: true,
    elevator: false,
    area: 22,
    shop: 0.2
  },

  {
    company:8,
    parking: true,
    elevator: true,
    area: 20,
    shop: 0.5
  },

  {
    company: 12,
    parking: true,
    elevator: true,
    area: 22,
    shop: 0.3
  }

];
//home 은 배수이다//
/*if(company <=10 && parking && elevator && (area >=20 ||  )){

}else*/
/*if(home[0].company <= 10 && home[0].parking
  && home[0]. elevator && (home[0].area >=20 || home[0].shop <=1)){

  }
  //for는 ~동안이라는 의미//
  var x = "";
for(i=0 ; i<4 ; i++){
x = x + "*";
//n번 반복하는 for문 정공식
for(i=0 ; i<n ; i++){
  //반복할 내용//
}
//0~100까지의 자연수를 모두 더한값을 구하는 프로그램
var sum = 0;
for(i=1; i<=100; i++){
sum = sum + i;
}
}
alert(x);
//1.0+1*/

//i<=,숫자1을 더해서 하면 총족될수있는수가 나올수있다.//

  //시작값(iteration count 약자로 i라고 합니다.),
//i는 0으로 시작해서 반복할때맏다 1씩 증가하는데 그 i가 5보다 작은동안은
//계속반복함//
//5부터 10까지의 자연수의 총 합계를 구하는 프로그램
//5+6+7+8+9+10 = ?
/*var Turn = 0;
for(i=5; i<=10; i++){
  Turn = Turn + i;
}
alert(Turn);*/

//10+9+8+7+6+5//
//10/9이런순으로 하고싶을땐 밑에있는 공식대로 해보라
/*var nu = "";
for( 1=10 ; i>=5 ; i-- ){
  nu = nu + i + "/";
}
if(i !=5){
  nu = nu + nu +"/";
}else{
  nu = nu + i;
}
alert(nu);
//마지막순간에 /를 붙이고싶지않으면 "/"를 뺌
/*10 9 8 7 6 5 
-0 -1-2-3-4-5*/
for(연도){
  for(월){}
}



