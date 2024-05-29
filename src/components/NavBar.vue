<template>
    <header class="py-1 px-5 flex items-center fixed top-0 w-full justify-between z-50 bg-black bg-opacity-50 text-white hidden sm:flex" id="navbar">
      <div class="flex flex-grow basis-0">
        <img class="rounded-full w-14" src="../assets/imagen/logo.ico" alt="Logoheader">
      </div>
      <nav>
        <ul class="flex text-lg space-x-12">
          <li><a href="#">Inicio</a></li>
          <li><a href="productos.html">Productos</a></li>
          <li><a href="#">Nosotros</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>
      <div class="flex flex-grow basis-0 justify-end items-center space-x-12">
        <div class="relative">
          <div class="header__cart--notification absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">0</div>
          <img src="../assets/imagen/shopping_bag_icon-white.svg" alt="Shopping Bag">
        </div>
          <img src="../assets/imagen/icons/avatar.svg" alt="" srcset="">
      </div>
    </header>
  </template>