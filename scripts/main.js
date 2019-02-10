function sendMail() {
    var link = "mailto:an.jakubow@gmail.com"
        + "?cc=" + encodeURI(document.getElementById('recipient-name').value)
        + "&subject=Wizyta domowa, kontakt"
        + "&body=" + encodeURI(document.getElementById('recipient-message').value)
    ;

    window.location.href = link;
}

$( document ).ready(function() {


});