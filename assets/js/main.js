$(document).ready(function() {
    var email = 'ckim618@gmail.com';
    var phone = '909-615-3529'

    $('.phone').text(phone);
    $('.email').text(email).attr('href', 'mailto:'+ email);
    $('.resume').attr('href', 'https://drive.google.com/file/d/1q6CxJ-EED9TxEeyE0JxohUGdyo7TxYB1/view?usp=sharing');
    $('.cubeTubeLive').on('click', cubeTubeLiveButton);
    $('.cubeTubeCode').on('click', cubeTubeCodeButton); 
    $('.southParkLive').on('click', southParkLiveButton);    
    $('.southParkCode').on('click', southParkCodeButton); 
    $('.eatAbroadLive').on('click', eatAbroadLiveButton);
    $('.eatAbroadCode').on('click', eatAbroadCodeButton);  
    $('.natoursLive').on('click', natoursLiveButton);
    $('.natoursCode').on('click', natoursCodeButton);  
});


function cubeTubeLiveButton() {
    window.open('https://www.thecubetube.com');
}
function cubeTubeCodeButton() {
    window.open('https://github.com/ckim618/The_Cube_Tube');
}
function southParkLiveButton() {
    window.open('http://guess.ckimcode.life/');
}
function southParkCodeButton() {
    window.open('https://github.com/ckim618/South_Park_GuessingGame');
}
function eatAbroadLiveButton() {
    window.open('http://ckimcode.life/eatabroad');
}
function eatAbroadCodeButton() {
    window.open('https://github.com/ckim618/eat_abroad');
}
function natoursLiveButton() {
    window.open('http://ckimcode.life/natours/');
}
function natoursCodeButton() {
    window.open('https://github.com/ckim618/natours');
}