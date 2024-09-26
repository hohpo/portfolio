function updateClock() {
    const now = new Date();
    const hour = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourDegree = (hour % 12) * 30 + minutes * 0.5; // 360deg / 12 hours = 30deg per hour
    const minuteDegree = minutes * 6 + seconds * 0.1; // 360deg / 60 minutes = 6deg per minute
    const secondsDegree = seconds * 6

    const hourHand = document.querySelector('.hour-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const secondsHand = document.querySelector('.cho-hand');

    hourHand.style.transform = `rotate(${hourDegree}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
    secondsHand.style.transform = `rotate(${secondsDegree}deg)`;
}

setInterval(updateClock, 1000);
updateClock(); // Initialize the clock on load


$(document).ready(function() {
    function toggleVisibility() {
        $('.end').css('visibility', function(_, visibility) {
            return visibility === 'visible' ? 'hidden' : 'visible';
        });
        setTimeout(toggleVisibility, 1000); // 1초 후에 다시 호출
    }
    toggleVisibility(); // 초기 호출
});
$(document).ready(function() {
    function animateText() {
        var text = "PORTFOLIO"; // 나타낼 텍스트
        var index = 0; // 글자 인덱스 초기화
        var displayText = ""; // 화면에 보여질 텍스트 초기화

        function showNextChar() {
            if (index < text.length) {
                displayText += text[index]; // 한 글자씩 추가
                $('#portfolio h1').text(displayText); // 텍스트 설정
                index++;
                setTimeout(showNextChar, 200); // 다음 글자를 300ms 후에 표시
            } else {
                setTimeout(resetText, 1000); // 텍스트가 다 나타난 후 1초 기다림
            }
        }

        function resetText() {
            displayText = ""; // 텍스트 초기화
            index = 0; // 인덱스 초기화
            $('#portfolio h1').text(""); // 화면에 텍스트 초기화
            setTimeout(showNextChar, 500); // 0.5초 후 다시 시작
        }

        showNextChar(); // 첫 번째 호출
    }

    animateText(); // 초기 실행
});
