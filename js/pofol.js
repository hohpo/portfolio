(function () {
    const spanEl = document.querySelector('.header-text span')
    const txt = ['PORTFOLIO']
    let index = 0;
    let currentTxt = txt[index].split('')

    function writeTxt() {
        spanEl.textContent += currentTxt.shift()
        // 배열요소를 앞에서 부터 하나씩 출력
        // shift( ): 배열 맨 앞요소를 추출하고 추출한 요소를 원본배열에서 삭제

        if (currentTxt.length !== 0) {
            // length: 길이 ==같다 !==같지 않다
            // 아직 출력할게 남아있다.
            setTimeout(writeTxt, Math.floor(Math.random() * 100))
        } else {
            // 배열에 있는 모든 요소들이 전부 출력이 되었다.=> 지우는 함수실행
            currentTxt = spanEl.textContent.split()

            setTimeout(deleteTxt, 3000)
            // deletetxt 함수를 3초후에 실행해줘
        }
    }
    writeTxt()

    function deleteTxt() {
        currentTxt.pop()
        // pop():배열 요소를 끝에서부터 삭제

        spanEl.textContent = currentTxt.join('')

        if (currentTxt.length !== 0) {
            setTimeout(deleteTxt, math.floor(Math.random() * 100))
        } else {
            // 다음문장으로 넘어가기
            index = (index + 1) % txt.length
            currentTxt = txt[index].split('')
            writeTxt()
        }
    }
})()

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

VANTA.NET({
    el: ".container",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0xffffff,
    backgroundColor: 0x0,
    points: 9.00,
    maxDistance: 19.00,
    spacing: 17.00
})
VANTA.NET({
    el: ".firstv",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0xffffff,
    backgroundColor: 0x0,
    points: 9.00,
    maxDistance: 19.00,
    spacing: 17.00
  })
VANTA.NET({
    el: ".two",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0xffffff,
    backgroundColor: 0x0,
    points: 9.00,
    maxDistance: 19.00,
    spacing: 17.00
  })
VANTA.NET({
    el: ".three",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0xffffff,
    backgroundColor: 0x0,
    points: 9.00,
    maxDistance: 19.00,
    spacing: 17.00
  })

//   여기서는 비디오 제이커리

const items = document.querySelectorAll('.gallery-collection li')
const popup = document.querySelector('.popup')
const close = document.querySelector('.popup button')

items.forEach((el, index) => {
    el.addEventListener('mouseenter', function () {
        el.querySelector('video').play()
    })
    el.addEventListener('mouseleave', function () {
        el.querySelector('video').pause()
        el.querySelector('video').currentTime = 0
    })
    el.addEventListener('click', function () {
        let title = el.querySelector('h3').innerText
        let text = el.querySelector('p').innerText
        let videosrc = el.querySelector('video').getAttribute('src')

        popup.querySelector('.txt h2').innerText = title
        popup.querySelector('.txt p').innerText = text
        popup.querySelector('video').setAttribute('src', videosrc)
        popup.classList.add('on')
        popup.querySelector('video').play()

    })
})

close.addEventListener('click', function () {
    popup.classList.remove('on')
    popup.querySelector('video').pause()
})

// 여기는 클릭했을떄움직이는

// $(function () {
//     $('.button-container button').click(function () {
//         let idx = $(this).index()
//         let section = $('main > section').eq(idx)
//         let sectionDistance = section.offset().top

//         $('html, body').animate({
//             scrollTop: sectionDistance
//         })
//         $('main > section').removeClass('on')
//         $('main > section').eq(idx).addClass('on')
//     })
// })


$(document).ready(function() {
    // 스크롤 애니메이션
    $('.button-container .button').click(function() {
        var targetSection = '';

        if ($(this).find('span').text() === 'PROFILE') {
            targetSection = '.one';
        } else if ($(this).find('span').text() === 'VIDEO') {
            targetSection = '.two';
        } else if ($(this).find('span').text() === 'PICTURE') {
            targetSection = '.three';
        }

        if (targetSection) {
            $('html, body').animate({
                scrollTop: $(targetSection).offset().top
            }, 1000); // 1000ms = 1초
        }
    });

    // 기존 스크롤에 따른 버튼 색상 변경
    $(window).scroll(function() {
        var scrollTop = $(this).scrollTop();
        var oneOffset = $('.one').offset().top;
        var oneHeight = $('.one').outerHeight();

        if (scrollTop > oneOffset && scrollTop < oneOffset + oneHeight) {
            $('.one .button').css('background-color', 'blue');
        } else {
            $('.one .button').css('background-color', '');
        }
    });
});





//     $(window).scroll(function(){
//         console.log($(window).scrollTop())
//         if($(window).scrollTop() > 2700) {
//             $('main > section').removeClass('on')
//             $('main > section').eq(2).addClass('on')
//         }else if($(window).scrollTop() > 1800){
//             $('main > section').removeClass('on')
//             $('main > section').eq(1).addClass('on')
//         }else if($(window).scrollTop() > 500){
//             $('main > section').removeClass('on')
//             $('main > section').eq(0).addClass('on')

//         }
//     })
// })

// 여기서부터는 스크롤내릴때 불들어오는거

$(function(){
$(window).scroll(function () {
    $('#section > section').each(function () {
     if($(this).offset().top<=$(window).scrollTop() +50){
        $('.sc button').removeClass('on')
        let idx = $(this).index()
        $('.sc button').eq(idx).addClass('on')
     }

    })
    // 여기서부터는 스크롤 내리면 이미지바뀌는것
    console.log($(this).scrollTop())
    // 만약에 WINDOW 스크롤탑이 3900 이상이면/ .ONE 안에 있는 것들 HIDE, 이미지 보여라!
    if($(window).scrollTop()>=3900 ){
        $('.one .sc').hide()
        $('.one .aa').show()
    }
    else{
        $('.one .sc').show()
        $('.one .aa').hide()
    }

})


})


$(document).ready(function() {   
    setInterval(function() {
        $('.end').fadeIn(1000).delay(2000).fadeOut(1000);
    }, 3000); 
});