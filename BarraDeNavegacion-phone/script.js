const list = document.querySelectorAll('.list');
function activeLink(){
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}

list.forEach((item) =>
item.addEventListener('click',activeLink));

$('#contenido').load('home.html');

$(document).ready(function() {
    $('#home').click(function() {
        $('#contenido').load('home.html');
    });
});

$(document).ready(function() {
    $('#about').click(function() {
        $('#contenido').load('about.html');
    });
});

$(document).ready(function() {
    $('#service').click(function() {
        $('#contenido').load('service.html');
    });
});

$(document).ready(function() {
    $('#contact').click(function() {
        $('#contenido').load('contact.html');
    });
});

$(document).ready(function() {
    $('#login').click(function() {
        $('#contenido').load('login.html');
    });
});