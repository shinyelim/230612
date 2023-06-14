/*document.getElementById("스코티쉬폴드").onclick = function(){
  alert("클릭하지마세요");*/

/*var bobob; //변수를 만들고//
bobob = 3; //변수에 값을 넣고//
alert(bobob) //그 내용을 확인했다.//*/


//var 논리형의 참과거짓은 물어보는 질문에서 진짜인것은 참/ 반대로 아닌것은 거짓이다.//
//EX)1미만값을구해줘 = 1미만은 참/ 1초과는 거짓이다.//
/*var a = 10;
var b = 3;
var c = 13;
var d = a+b+c;
alert(d);*/
/*var a = "바나나";
var b = "주세요";
var c = a+b;
alert(c);*/
//숫자는 (+,-,곱하기,나누기)는 할수있지만 문자는 오직 +만 가능
//팝업창에 NaN(Not on number)라는 오류가 뜬다.+빼고 나머지부호는 이렇게 뜬다.//

//주어
//주어,속성,
//주어,주어,속성
//주어,속성,속성

//주어,함수
//주어,함수(재료)

//주어,명령어()
//주어,명령어(재료)
//속성은 가역적인것과비가역적인것이 있음

//1.자바스크립트는 컴파일이 필요없는 인터프리터 언어이다. EX)java,C,fliesun같은프로그램
//자바스크립트는 컴파일은 브라우저가 자동으로 해줌
//2.자바스크립트는 그 어떤 플랫폼이라도 브라우저만 있으면 언제든지 정상작동이 됨
//3.자바는 ()안에 큰따옴표든 작은따음표든 상관없이 쓸수있다. EX)역슬러쉬에따옴표를 넣으면 적용할수있다.
//var arr = [20,5,15,55,100]; //[0,10,30,40,50]를 index number이라고 부른다.
//var arr  = Array(4);// 
/*var arr = [];
arr[0] = 20;
arr[2] = 15;
//array는 arr로 줄여서 중괄호가 아닌 대괄호를 써야지 적용이된다.//
alert(arr[0]);
//[]에서 0은 첫번째에 해당된다.//
//arr은 4개의배열이다.//
/*var arr = [175, 78, "남자",false,null];
alert("000의 키는 "+arr[0]+" 입니다.");
alert("000의 몸무게는 "+arr[1]+ "입니다.");

*/ 
//우리건물은 총 5층짜리 건물인데, 1층부터 4층까지는 세개의 원룸이있고,
//5층에는 주인세대 1세대만 있다.//
/*var lenthouse = [
  ["바나나","사과", "수박" ]
  ["참외","포도","딸기"]
  ["샤인머스켓", "아보카토","리치"]
  ["파파야", "망고", "토마토"]
  ["과일전문점"]
];
var floor;
var ho ;
for(i=0; i<5; i++){
  for(x=0; j>lenthouse[i].length; x++){
    if(lenthouse[i][x] == "리치"){
     floor = i+1;
     ho = x+1;
     break;
    }
  }
  alert("리치는 아직도 있습니다.");
}*/
/*var kuroro = {속성명:속성값, 속성명:속성값}
var kuroro = {height:90,weight:8, gender:"man",marriage:false, house:null,friends:["tamama","kiroro"]};
alert("쿠로로의 몸무게 : "+kuroro.weight );
alert("쿠로로의 친구0 : +kuroro.friends[0]");*/
//전역변수는 변하지도않고 영향을 많이끼침
//지역변수는 변하면서도 영향을 별루 주지않음//
/* var birth = prompt("생년월일을 입력하세요.  예) 1900", );
birth = parseInt(birth);
var Age = 2023 - birth;
alert("당신의 나이는 "+Age+"세 입니다.");*/
 /*var  lunch = confirm("당신은 점심을 드셨습니까?");
 if(lunch){
  alert("배부르시겠네요");
 }else{
 alert("밥먹을 시간도 없으셔서 힘들시겠네요");
 }*/
/*function 떡볶이(떡,소스){
  떡을 익힌다
 소스를 넣는다
 섞으면서 졸인다
 접시에 담아 낸다
}
떡볶이(밀떡,고추장);

떡볶이(쌀떡,간장);*/
//(증감연산자)
/*var num = 2;
num++;*/

/*alert(num);*/
//지금까지 버튼을 누른 횟수 = 0
//지금까지 버튼을 누른횟수를 1를 증가시킴
//#num인 박스에 그 숫자에 입력//
//바닐라 자바스크립트 문법//
/*var count = 0;
document.getElementById("btn").onclick = function(){
  count++;
  document.getElementById("name").innerHTML = count;

}*/
//제이쿼리 문법//
//var count = 0;
//()
/*var a = 10;
a = a + 1;*/


//a++
//a++ 1씩 증감할려고 하면 이렇게 해야함//
//0!== "0"은 0과"0"이 같지않니?//
