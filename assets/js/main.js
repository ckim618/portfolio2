$(document).ready(function() {
    clickHandlers();
});

function clickHandlers() {
    var email = 'ckim618@gmail.com';
    var phone = '909-615-3529';

    $('.phone').text(phone).attr('href', 'tel:19096153529');
    $('.email').text(email).attr('href', 'mailto:' + email);
    $('.resume').on('click', resumeButton);
    $('.cubeTubeLive').on('click', cubeTubeLiveButton);
    $('.cubeTubeLive').on('click', cubeTubeLiveButton);
    $('.cubeTubeCode').on('click', cubeTubeCodeButton);
    $('.southParkLive').on('click', southParkLiveButton);
    $('.southParkCode').on('click', southParkCodeButton);
    $('.emily-makeup').on('click', emilyKim);
    $('.southParkLive').on('click', southParkLiveButton);
    $('.bungieLive').on('click', bungieLiveButton);
    $('.pubgLive').on('click', pubgLiveButton);   
    $('.remyLive').on('click', remyLiveButton); 
    $('.sanAmigosLive').on('click', sanAmigosLiveButton);     
}

function resumeButton() {
    window.open('https://drive.google.com/file/d/1d0_-TtZzrK7wNa_uP9561cnPSjUqFTn2/view?usp=sharing');
}

function emilyKim() {
    window.open('http://emilykimmakeup.com');
}
function cubeTubeLiveButton() {
    window.open('https://www.thecubetube.com');
}
function cubeTubeCodeButton() {
    window.open('https://github.com/ckim618/The_Cube_Tube');
}
function southParkLiveButton() {
    window.open('https://peaceful-jepsen-76bdb2.netlify.com');
}
function southParkCodeButton() {
    window.open('https://github.com/ckim618/South_Park_GuessingGame');
}
function pubgLiveButton() {
    window.open('https://www.pubgesports.com');
}
function bungieLiveButton() {
    window.open('https://bungiefoundation.org/');
}
function remyLiveButton() {
    window.open('https://producers.remymartin.com/');
}
function sanAmigosLiveButton() {
    window.open('https://www.sanamigoscapital.com');
}