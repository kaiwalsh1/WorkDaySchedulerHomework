$(document).ready(function() {

    var input1 = $('#nine');
    var button1 = $('#btn1');
    var input2 = $('#ten');
    var button2 = $('#btn2');
    var timeblock = $('.timeblock');
    var buttons = $('.btn-primary');

    
    if (localStorage.getItem("hour 1")) {
        input1.val(localStorage.getItem("hour 1"));
    };

    button1.click(function() {
        console.log(input1.val());
        localStorage.setItem('hour 1', input1.val());
    });
    button2.click(function() {
        console.log(input2.val());
        localStorage.setItem('hour 2', input1.val());
    });


    if (button1.val() == moment().hour()) {
        console.log("current time");
        timeblock.css("background-color", "red");
    } else if (button1.val() < moment().hour()) {
        console.log("past time");
        timeblock.css("background-color", "gray");
    } else if (button1.val() > moment().hour()) {
        console.log("future time");
        timeblock.css("background-color", "green");
    }
})

// for (let i = 0; i < 9; i++) {
//     if (buttons.val() == moment().hour()) {
//         console.log("current time");
//         timeblock.css("background-color", "red");
// } else if (button1.val() < moment().hour()) {
//     console.log("past time");
//     timeblock.css("background-color", "gray");
// } else if (button1.val() > moment().hour()) {
//     console.log("future time");
//     timeblock.css("background-color", "green");
// }
// };