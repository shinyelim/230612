//o
//oo
//ooo
///oooo
//ooooo
/*var pyramid = "";
for(i=0; i<5; i++){
  var chng = "";
  for(j=1; j<=i; j++){
   chng = chng + "o"; 
  }
  pyramid = pyramid + chng + "\n";
}
alert(pyramid);*/
//101,102,103,104,105,106,107식으로 호실번호를 만들어야 함
//전체 층은 10개의 가구가 존재한다.
//var result =[];
/*for(i=1; i<=9; i++){
for(k=1; k<=10; k++){
  //i+"0"+k <=k가 10보다 작을경우
 // i+k <=k가 10보다 클경우
}
if(k<10){
   result.push(i+"0"+k);
}else{
  result.push( ""+i+k);
}
}*/
//"1 2 3 4 5 /6 7 8  9 10 "
/*var result ="";
for(i=1; i<=10; i++){
  if(i >= 6){
    break;
  }else
  result = result + i + "";
}
alert(result);*/
//1 2  4 5   7 8  10 11 12 13...98 100
//3의 배수를 뺀다//
var result = "";
for(i=1; i<=100; i++){
  if(i%4 == 0){
    continue;
  }
  result = result + i + " ";
}
alert(result);
//%는 나누기할때하는 부호이다//
//
var filename = [
  ["ceo.html",".map.html",".prizehtml"],
  ["app.html","mobila.html","moemory.html"]
];

var menuname1 = [
  ["인사소개","제품소개"]
];
 var menuname2 = [
  ["일반가정","모바일","메모리"]
  ["CEO인사말","오시는길","수상실적"]
 ];
 var currentname = location.href;//http://aaaa.com/bb//index.html
 currentname = currentname.split("/");//"http:/",/","/"aaaa.com.bb./"index.html"
 //location:주어//                   //5
 var len = currentname.length;      //
 currentname = currentname[len-1];
 var depth1;
 var depth2;
 //
 //alert(currentname);

 for(i=0; i<menuname1.length; i++){

  for(k=0; k<filename[i].length; k++){
  } 
  if(currentname == filename[i][k]){
    depth1 =i;
    depth2 =k;
    break;
  }else
    
  
  if(depth1 !== undefined && depth2 != undefined ){
    var bc_1 = "&gt; <a> + menuname1[depth1] + </a>";
    var bc_2 = "&gt; <a href=''""></a>
    }
 }

 
  
  
  
 //메뉴의갯수를 자바스크립트에서알고싶으면
  
    
alert(depth1+","+depth2);                            //i<idname.length;을 쓰면 된다.//

 
