<?php
  $name = $_GET["name"] ?? "Sin Nombre";
  $age = $_GET["age"] ?? "0";
  $email = $_GET["email"] ?? "Sin correo electronico";
  $password = $_GET["password"] ?? "123456";
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mostrar</title>
  <link rel="stylesheet" href="./styles/navbar.css">
  <link rel="stylesheet" href="./styles/global.css">
  <link rel="stylesheet" href="./styles/footer.css">
  <link rel="stylesheet" href="./styles/mostrar.css">
</head>
<body>
  <?php require('./layout/header.php'); ?>
  <main>
    <h1>Mostrar Información</h1>
    <div class="rounded shadow">
      <p class="form-info">Nombre: <span><?= $name ?></span></p>
      <p class="form-info">Edad: <span><?= $age ?></span></p>
      <p class="form-info">Correo Electronico: <span><?= $email ?></span></p>
      <p class="form-info">Contraseña: <span><?= $password ?></span></p>
    </div>
  </main>
  <?php require('./layout/footer.php'); ?>
</body>
</html>