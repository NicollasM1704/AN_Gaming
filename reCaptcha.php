<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $secretKey = "6LcM1poqAAAAADd2tjrjMwdnRbzmKOc5Q8Azqfic";
    $captcha = $_POST['g-recaptcha-response'];

    if (empty($captcha)) {
        die('Erro: Token do reCAPTCHA não encontrado.');
    }

    $response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret={$secretKey}&response={$captcha}");
    $responseKeys = json_decode($response, true);

    if (!$responseKeys['success'] || $responseKeys['score'] < 0.5) {
        die('Erro: Validação do reCAPTCHA falhou ou o score foi baixo.');
    }

    // Processar o formulário
    echo 'Formulário enviado com sucesso!';
}
?>
