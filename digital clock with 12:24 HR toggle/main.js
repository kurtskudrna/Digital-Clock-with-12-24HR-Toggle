
let hoursInput = document.querySelector('.hour')
let minutesInput = document.querySelector('.minutes')
let secondsInput = document.querySelector('.seconds')
let ampmInput = document.querySelector('.am-pm');
let button = document.getElementById('button')

$(button).click(function () {
    if ($(this).hasClass('active')) {
        $(this).removeClass('active')
    } else {
        $(this).addClass('active')
    }
});

function twentyFourHours() {
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();

    hoursInput.innerText = hours;
    minutesInput.innerText = minutes;
    secondsInput.innerText = seconds;

    if (hours < 12) {
        ampmInput.innerText = 'AM'
    } else {
        ampmInput.innerText = "PM"
    }

}

function checkTime() {
    setInterval(() => {

        let today = new Date();

        let hours = today.getHours();
        let minutes = today.getMinutes();
        let seconds = today.getSeconds();

        hoursInput.innerText = hours;
        minutesInput.innerText = minutes;
        secondsInput.innerText = seconds;

        if (button.classList.contains('active')) {
            if (hours == 0) {
                hoursInput.innerText = 12;
            } else if (hours > 12) {
                hoursInput.innerText = hours - 12;
            } else {
                hoursInput.innerText = hours;
            }
            if (hours < 12) {
                ampmInput.innerText = 'AM'
            } else {
                ampmInput.innerText = "PM"
            }
        } else {
            twentyFourHours();
        }


    }, 1000);
}

checkTime();




