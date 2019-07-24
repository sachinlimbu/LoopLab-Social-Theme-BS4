// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$('#year').text(new Date().getFullYear());

$('body').scrollspy({ target: '#main-nav' });

// Add smooth scrolling
$('#main-nav a').on('click', function (e) {
    // Check for a hash value
    if (this.hash !== '') {
        // Prevent default behavior
        e.preventDefault();

        // Store hash
        const hash = this.hash;

        // Animate smooth scroll
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 900, function () {
            // Add hash to URL after scroll
            window.location.hash = hash;
        });
    }
});