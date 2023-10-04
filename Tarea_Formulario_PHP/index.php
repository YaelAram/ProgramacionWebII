<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Formulario</title>
    <link rel="stylesheet" href="./styles/navbar.css">
    <link rel="stylesheet" href="./styles/global.css">
    <link rel="stylesheet" href="./styles/footer.css">
    <link rel="stylesheet" href="./styles/index.css">
  </head>
  <body>
    <?php require('./layout/header.php'); ?>
    <main>
      <h1>Registro de Usuario</h1>
      <form action="mostrar.php" class="shadow rounded">
        <label for="name-field">Nombre:</label>
        <input type="text" name="name" id="name-field" class="rounded">
        <label for="age-field">Edad:</label>
        <input type="number" name="age" id="age-field" class="rounded" min="0" max="100">
        <label for="email-field">Correo Electronico:</label>
        <input type="email" name="email" id="email-field" class="rounded">
        <label for="password-field">Contraseña:</label>
        <input type="password" name="password" id="password-field" class="rounded">
        <button type="submit" class="rounded">Registrar</button>
      </form>
    </main>
    <?php require('./layout/footer.php'); ?>
  </body>
</html>
