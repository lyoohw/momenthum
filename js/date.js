const today = document.querySelector("#date");

const date = new Date();
const Month = date.getMonth() + 1;
const todayDate = date.getDate();

function dayOfTheWeek(){
    const week = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
    const days = week[date.getDay()];
    return days;
}

today.innerText = `${Month}월 ${todayDate}일 ${dayOfTheWeek()}`;