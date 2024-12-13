grecaptcha.ready(function() {
    grecaptcha.execute('SUA_SITE_KEY_AQUI', { action: 'submit' }).then(function(token) {
        document.getElementById('contactForm').insertAdjacentHTML('beforeend', '<input type="hidden" name="g-recaptcha-response" value="' + token + '">');
    });
});