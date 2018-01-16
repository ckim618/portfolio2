$(document).ready(function() {
    var email = 'ckim618@gmail.com';
    var phone = '909-615-3529'

    $('.phone').text(phone);
    $('.email').text(email).attr('href', 'mailto:'+ email);
});