$(document).ready(function() {
    var email = 'ckim618@gmail.com';
    var phone = '909-615-3529'

    $('.phone').text(phone);
    $('.email').text(email).attr('href', 'mailto:'+ email);
    $('.live').on('click', liveButton);
    $('.code').on('click', codeButton);    
});

function liveButton() {
    console.log('clicked')
    window.open('https://www.thecubetube.com');
}
function codeButton() {
    console.log('clicked')
    window.open('https://github.com/ckim618/The_Cube_Tube');
}