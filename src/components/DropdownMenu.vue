<!-- src/components/DropdownMenu.vue -->
<template>
  <div v-if="isVisible" class="dropdown-menu">
    <ul>
      <li v-if="isLoggedIn">
        <router-link to="/profile">Perfil</router-link>
      </li>
      <li v-else>
        <router-link to="/login">Iniciar Sesión</router-link>
      </li>
      <li>
        <router-link to="/settings">Configuración</router-link>
      </li>
      <li>
        <router-link to="/logout">Cerrar Sesión</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'DropdownMenu',
  props: {
    isVisible: {
      type: Boolean,
      required: true
    },
    isLoggedIn: {
      type: Boolean,
      required: true
    }
  }
};
</script>

<style scoped>
.dropdown-menu {
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  color: black;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 100;
  width: 200px;
}
.dropdown-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.dropdown-menu ul li {
  padding: 10px;
  border-bottom: 1px solid #eee;
}
.dropdown-menu ul li a {
  text-decoration: none;
  color: black;
  display: block;
}
.dropdown-menu ul li a:hover {
  background: #f0f0f0;
}
</style>
