$(document).ready(function() {
    var email = 'ckim618@gmail.com';
    var phone = '909-615-3529'

    $('.phone').text(phone);
    $('.email').text(email).attr('href', 'mailto:'+ email);
    $('.cubeTubeLive').on('click', cubeTubeLiveButton);
    $('.cubeTubeCode').on('click', cubeTubeCodeButton); 
    $('.southParkLive').on('click', southParkLiveButton);    
    $('.southParkCode').on('click', southParkCodeButton); 
    $('.eatAbroadLive').on('click', eatAbroadLiveButton);
    $('.eatAbroadCode').on('click', eatAbroadCodeButton);  
});

function cubeTubeLiveButton() {
    window.open('https://www.thecubetube.com');
}
function cubeTubeCodeButton() {
    window.open('https://github.com/ckim618/The_Cube_Tube');
}
function southParkLiveButton() {
    window.open('https://dev.ckimcode.life/guessinggame');
}
function southParkCodeButton() {
    window.open('https://github.com/ckim618/South_Park_GuessingGame');
}
function eatAbroadLiveButton() {
    window.open('http://dev.ckimcode.life/eatabroad');
}
function eatAbroadCodeButton() {
    window.open('https://github.com/ckim618/eat_abroad');
}