document.addEventListener('DOMContentLoaded', () => {
    emailjs.init('service_qjgo4jw'); // Substitua pelo seu User ID do EmailJS

    const form = document.getElementById('email-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Substitua pelo seu Service ID e Template ID
        emailjs.send("service_qjgo4jw","template_4nejjg4")
            .then(() => {
                alert('E-mail enviado com sucesso!');
                form.reset(); // Limpa o formulário
            })
            .catch((error) => {
                console.error('Erro ao enviar e-mail:', error);
                alert('Falha ao enviar o e-mail.');
            });
    });
});
