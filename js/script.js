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
/* ---------------------------------------------------- */
// fnc(매개변수) => 외부의 데이터 값을 전달받아서 변수로 활용하겠다는 함수구문 내부의 변수 지칭
function fnc(name, region){ 
    // 2. var name="홍길동", var region="서울" 5. var name="김수현", region="부산"
    console.log(name);
    console.log(region);
    document.write("저의 이름은 "+name+"이며 사는 곳은 "+region+"입니다","<br>");
    // 3. 출력&실행
}
fnc("홍길동", "서울"); // 1. 함수 호출
fnc("김수현", "부산"); // 4. 다시 함수 호출

function ch_img($img, $txt){
    document.write("<img src='img/"+$img+"' alt="+$txt+">");
}
ch_img("ace.png", "앞면");
ch_img("card.png", "뒷면");
/* ---------------------------------------------------- */
// 내장함수란, 자바스크립트 코드 내부에서 이미 지정된 용어를 사용함으로써 각 기능을 적용하여 활용하기 위한 도구
var $question_num=isNaN("6-3");
console.log($question_num) // true
// eval() 내장함수;결합할 수 없는 요소들을 강제 결합(문자형 데이터를 갖고 있는 숫자 예시 - "1000")
var $eval=eval("1000*2000");
console.log($eval); // 2000000
/* ---------------------------------------------------- */
var $num=400; // 전역(global)변수;함수문 내외부에 모두 영향을 미칠 수 있는 변수
function calc_01(){ // 2. 함수문 실행
    var $num=300; // 3. 변수에 대한 정의/지역(local) 변수;함수문 내부에서만 사용할 수 있음
    return $num; // 4. 지역변수에 대한 데이터 값을 돌려준다 => calc_01() 최초의 호출문 값 전달
}
calc_01();
console.log($num); // 400
/* var final_num=calc_01(); // 1. 함수문 호출 5. final_num = return문에 의해 돌려받은 데이터 값을 최종 전역 변수에 저장
document.write(final_num, "<br>"); // 300