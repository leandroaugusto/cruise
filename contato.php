<?php include 'includes/header.php'; ?>

<section data-page="contato" class="container contact center">
	<article class="left col-50">
		<img src="images/contato/cruise-contato.jpg" class="image-full" alt="Cruise - Contato">
	</article>

	<article class="left col-50 vertical">
		<h2>
			<img src="images/shared/logo-white.png" alt="Logo Cruise - Oficial">
		</h2>
		<form action="">
			<input type="text" class="bg-darken" id="name" name="name" placeholder="Nome" required>
			<input type="email" class="bg-lighten" id="email" name="email" placeholder="E-mail" required>
			<input type="text" class="bg-lighten" id="subject" name="subject" placeholder="Assunto" required>
			<textarea  class="bg-darken" name="message" id="message" placeholder="Mensagem" required></textarea>

			<input type="submit" id="send" name="send" value="Enviar">
		</form>
	</article>
</section>

<?php include 'includes/footer.php'; ?>