$(document).ready(function() {
    var email = 'ckim618@gmail.com';
    var phone = '909-615-3529'

    $('.phone').text(phone);
    $('.email').text(email).attr('href', 'mailto:'+ email);
    $('.cubeTubeLive').on('click', cubeTubeLiveButton);
    $('.cubeTubeCode').on('click', cubeTubeCodeButton);  
    $('.southParkCode').on('click', southParkCodeButton);  
});

function cubeTubeLiveButton() {
    window.open('https://www.thecubetube.com');
}
function cubeTubeCodeButton() {
    window.open('https://github.com/ckim618/The_Cube_Tube');
}
function southParkCodeButton() {
    window.open('https://github.com/ckim618/South_Park_GuessingGame');
}