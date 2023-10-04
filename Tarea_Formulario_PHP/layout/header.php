<?php
  $path = $_SERVER["REQUEST_URI"];
  $estaEnIndex = $path === "/formulario/" || $path === "/formulario/index.php";
?>

<nav>
  <ul class="flex-row">
    <li>
      <a 
        href="index.php" 
        class="<?= ($estaEnIndex) ? "active" : " " ?>">
        Inicio
      </a>
    </li>
    <li>
      <a 
        href="mostrar.php" 
        class="<?= (!$estaEnIndex) ? "active" : " " ?>">
        Mostrar
      </a>
    </li>
  </ul>
</nav>
