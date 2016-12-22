<?php
    if (isset($_POST["enviar"])) {
        $date = date("d/m/Y h:i");

        $nome = $_POST['nome'];
        $email = $_POST['email'];
        $assunto = $_POST['assunto'];
        $textodamensagem = $_POST['mensagem'];

        $headers = "From: Contato <leandroacosta2008@hotmail.com>"."\n"; // remetente //showroom@cruiseoficial.com.br

        $configuracao_da_mensagem_original="

            ENVIADO POR:\n
            Nome: $nome\n
            Email: $email\n
            Mensagem: $textodamensagem\n
            ENVIADO EM: $date

        ";

        @mail('leandroacosta2008@hotmail.com', $assunto, $configuracao_da_mensagem_original, $headers);
    }
?>

<?php include 'includes/header.php'; ?>
    
    <section data-page="contato" class="container contact center">
        <article class="left col-50">
            <img src="images/contato/cruise-contato.jpg" class="image-full" alt="Cruise - Contato">
        </article>

        <article class="left col-50 vertical">
            <h2>
                <img src="images/shared/logo-white.png" alt="Logo Cruise - Oficial">
            </h2>
            <div class="image-full success-message">
                <h2>Contato enviado com sucesso!</h2>
            </div>
        </article>
    </section>

<?php include 'includes/footer.php'; ?>