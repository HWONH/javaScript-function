// 함수구문 : 함수문(메모리) + 함수호출
var $func_01=document.querySelector("#func");
function img_src(){ // 2. 호출받은 호출명으로 함수를 실행
    $func_01.setAttribute("src", "img/pet.png");
}
// 함수문 : 아직 실행하지 말고 기다려!
img_src(); // 1. 함수를 호출(브라우저가 오픈이 되면 호출 시작)
// 함수 호출문 : 함수를 작동시키기 위한 액션
/* ---------------------------------------------------- */
var $func_02=document.querySelector("#ev_func");
function ch_img(){
    $func_02.setAttribute("src", "img/girl.png");
}
/* ---------------------------------------------------- */
var $func_03=document.querySelector("#btn_img");

var $num=2;
function ch_next(){
        $func_03.setAttribute("src", "img/pic-"+$num+".jpg"); // 2,3,4
        $num++; // 2라면 3으로 변경
        console.log($num); // 3,4
        if($num>4){
            $num=1;
        }
}
/* ---------------------------------------------------- */
var bg_arr=["#ffaaff", "#aaffaa", "#ffffaa", "#aaffff"];
var $body=document.querySelector("body");
var ch_num=0; // 변수 : 상단의 배열에 대한 인덱스번호
function changeBg(){
    $body.style.backgroundColor=bg_arr[ch_num];
    // $body.style.backgroundColor="#ffaaff"
    ch_num++;
    /* 
    if(ch_num>3){
        ch_num=0;
    }
     */
    if(ch_num==4){
        ch_num=0;
    } 
}