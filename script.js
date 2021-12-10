// $(document).ready(function() {
    var button1 = $('#btn1');
    var button2 = $('#btn2');
    var timeblock = $('.timeblock');
    var saveBtn = $('.saveBtn');
    var hourSchedule = $('.hour');

    var input1 = $('#nine');
    var input2 = $('#ten');
    var input3 = $('#eleven');
    var input4 = $('#twelve');
    var input5 = $('#one');
    var input6 = $('#two');
    var input7 = $('#three');
    var input8 = $('#four');
    var input9 = $('#five');

    if (localStorage.getItem("hour 1")) {
        input1.val(localStorage.getItem("hour 1"));
    };

    button1.click(function() {
        console.log(input1.val());
        localStorage.setItem('hour 1', input1.val());
    });

    if (localStorage.getItem("hour 2")) {
        input2.val(localStorage.getItem("hour 2"));
    };
    button2.click(function() {
        console.log(input2.val());
        localStorage.setItem('hour 2', input1.val());
    });





// if (localStorage.getItem("hour 1")) {
//     input1.val(localStorage.getItem("hour 1"));
// };

// button1.click(function() {
//     console.log(input1.val());
//     localStorage.setItem('hour 1', input1.val());
// });

// var input1 = $('#nine');
// var input2 = $('#ten');
// var input3 = $('#eleven');
// var input4 = $('#twelve');
// var input5 = $('#one');
// var input6 = $('#two');
// var input7 = $('#three');
// var input8 = $('#four');
// var input9 = $('#five');

// for (hourSchedule) {
//     let (i = 0; i < 9; i++) {
        
//     }
// }



if (button1.val() == moment().hour()) {
    // console.log("current time");
    timeblock.css("background-color", "red");
} else if (button1.val() < moment().hour()) {
    // console.log("past time");
    timeblock.css("background-color", "gray");
} else if (button1.val() > moment().hour()) {
    // console.log("future time");
    timeblock.css("background-color", "green");
}

    // if (button2.val() == moment().hour()){
    //     timeblock.css("background-color", "red");
    //     console.log("current time");
    // } else if (button2.val() < moment().hour()) {
    //     console.log("past time");
    //     timeblock.css("background-color", "gray");
    // } else if (button2.val() > moment().hour()) {
    //     console.log("future time");
    //     timeblock.css("background-color", "green");
    // }




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

