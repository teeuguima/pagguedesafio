<template>
  <div class="l-navbar" id="nav-bar">
    <nav class="nav">
      <div>
        <div class="profile">
          <span class="nav_logo-name d-block">Cliente Paggue</span>
          <!-- <span class="nav_logo-name">{{$session.getItem('email')}}</span>  -->
          <span
            class="nav_logo-name ver-perfil"
            @click="$router.push({ name: 'perfil' })"
            >Ver perfil</span
          >
        </div>
        <div class="nav_list">
          <router-link to="/dashboard" :active-class="active" exact>
            <a class="nav_link">
              <font-awesome-icon
                class="bx bx-grid-alt nav_icon"
                icon="home-lg"
              ></font-awesome-icon>
              <span class="nav_name">Home</span>
            </a>
          </router-link>
          <router-link to="/produtos" :active-class="active" exact>
            <a class="nav_link">
              <font-awesome-icon
                class="bx bx-grid-alt nav_icon"
                icon="box-open"
              ></font-awesome-icon>
              <span class="nav_name">Produtos</span>
            </a>
          </router-link>
          <router-link to="/cupons" :active-class="active" exact>
            <a class="nav_link">
              <font-awesome-icon
                class="bx bx-grid-alt nav_icon"
                icon="ticket-alt"
              ></font-awesome-icon>
              <span class="nav_name">Cupons</span>
            </a>
          </router-link>

          <router-link to="/categorias" :active-class="active" exact>
            <a class="nav_link">
              <font-awesome-icon
                class="bx bx-grid-alt nav_icon"
                icon="tags"
              ></font-awesome-icon>
              <span class="nav_name">Categorias</span>
            </a>
          </router-link>
        </div>
      </div>
      <router-link to="/">
        <a class="nav_link">
          <font-awesome-icon
            class="bx bx-grid-alt nav_icon"
            icon="right-from-bracket"
          ></font-awesome-icon>
          <span class="nav_name">Sair</span>
        </a>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "active",
    };
  },
};
</script>

<style scoped>
.profile {
  padding: 53px 20px 40px 30px;
}

::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap");

:root {
  --header-height: 3rem;
  --nav-width: 150px !important;
  --first-color: #4723d9;
  --first-color-light: #afa5d9;
  --white-color: #f7f6fb;
  --body-font: "Nunito", sans-serif;
  --normal-font-size: 1rem;
  --z-fixed: 100;
}

*,
::before,
::after {
  box-sizing: border-box;
}

body {
  position: relative;
  margin: var(--header-height) 0 0 0;
  padding: 0 1rem;
  font-family: var(--body-font);
  font-size: var(--normal-font-size);
  transition: 0.5s;
}

a {
  text-decoration: none;
}

.header {
  width: 100%;
  height: var(--header-height);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  background-color: var(--white-color);
  z-index: var(--z-fixed);
  transition: 0.5s;
}

.header_toggle {
  color: var(--first-color);
  font-size: 1.5rem;
  cursor: pointer;
}

.header_img {
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;
}

.header_img img {
  width: 40px;
}

.l-navbar {
  position: fixed;
  /* border-top-right-radius: 15px;
      border-bottom-right-radius: 15px; */
  top: 0;
  left: -30%;
  width: 200px;
  height: 100vh;
  background-color: #7c009f;
  padding: 0.5rem 1rem 0 0;
  transition: 0.5s;
  z-index: 100;
}

.nav {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
}

.nav_logo,
.nav_link {
  display: grid;
  grid-template-columns: max-content max-content;
  align-items: center;
  column-gap: 1rem;
  padding: 0.5rem 0 0.5rem 1.5rem;
}

.nav_logo {
  margin-bottom: 2rem;
}

.nav_logo-icon {
  font-size: 1.25rem;
  color: white;
}

.nav_logo-name {
  color: white;
  font-size: 13px;
  font-weight: 500;
}

.nav_link {
  position: relative;
  margin-bottom: 1.5rem;
  transition: 0.3s;
  color: white;
  font-size: 13px;
  font-weight: 500;
}

.nav_link:hover {
  color: white;
}

.show {
  left: 0;
}

.body-pd {
  padding-left: calc(var(--nav-width) + 1rem);
}

.active {
  color: #41ddb1 !important;
}

.active::before {
  content: "";
  position: absolute;
  left: 0;
  width: 2px;
  height: 32px;
  background-color: #41ddb1;
}

.nav_icon {
  font-size: 1.25rem;
  color: white;
}

.height-100 {
  height: 100vh;
}

.ver-perfil {
  cursor: pointer;
  font-weight: 400;
  text-decoration: underline;
}

@media screen and (min-width: 768px) {
  body {
    margin: calc(var(--header-height) + 1rem) 0 0 0;
    padding-left: calc(var(--nav-width) + 2rem);
  }

  .header {
    height: calc(var(--header-height) + 1rem);
    padding: 0 2rem 0 calc(var(--nav-width) + 2rem);
  }

  .header_img {
    width: 40px;
    height: 40px;
  }

  .header_img img {
    width: 45px;
  }

  .l-navbar {
    left: 0;
    padding: 1rem 1rem 0 0;
  }

  .show {
    width: calc(var(--nav-width) + 156px);
  }

  .body-pd {
    padding-left: calc(var(--nav-width) + 188px);
  }
}
</style>