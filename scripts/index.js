const userYear = document.querySelector('#user_year');
const userMonth = document.querySelector('#user_month');
const userDay = document.querySelector('#user_day');
const findBtn = document.querySelector('#find_btn');
const error = document.querySelectorAll('.error_msg');
const userInfo = document.querySelectorAll('#birthday_frm input');
console.log(userMonth,findBtn,error,userYear,userDay,userInfo);

//태어난 달을 입력안하고 버튼을 클릭하면
//error_msg2 출력하기
findBtn.addEventListener('click',function(){
    //태어난달의 값이 빈문자열과 같으면 콘솔실행
    if(userYear.value == '') error[0].style.display = 'block';
    else error[0].style.display = 'none';
    if(userMonth.value == '') msg_func(1,'block');
    else msg_func(1);
    if(userDay.value === '') msg_func(2,'block');
    //else msg_func(2)
    //if(userInfo.value )
});

//반복 목적 함수(이벤트 밖)
function msg_func(index, value='none'){
    return error[index].style.display = value;
};