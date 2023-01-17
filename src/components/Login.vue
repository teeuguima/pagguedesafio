<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-xl-12 d-flex justify-content-center" id="login">
        <img
          src="../assets/img/login-paggue.png"
          class="img-login-paggue"
          alt=""
        />
        <div class="box-login">
          <div class="row justify-content-center">
            <img
              src="../assets/img/logo-paggue.png"
              class="img-logo-paggue"
              alt=""
            />
          </div>
          <div class="row justify-content-center" id="form">
            <div class="col-xl-10">
              <p class="describe">
                Gerencie sua loja de maneira simples e rápida
              </p>
              <div id="input-email">
                <div class="text-center bg-label" id="label-email">
                  <label for="" class="label">Email</label>
                </div>
                <input type="text" class="form" v-model="email" />
              </div>
              <div id="input-password">
                <div class="text-center bg-label" id="label-password">
                  <label for="" class="label">Senha</label>
                </div>
                <input :type="input_password" class="form" v-model="senha" />
                <a
                  style="position: absolute; top: 23%; left: 75%"
                  @click="showPassword"
                >
                  <font-awesome-icon
                    :icon="visibility"
                    style="cursor: pointer; color: #a5abb1"
                  />
                </a>
              </div>
              <div class="text-left">
                <button class="btn-purple btn-entrar" @click="login()">
                  Entrar
                </button>
                <a
                  class="link-registro"
                  @click="$router.push({ name: 'cadastro-cliente' })"
                  style="cursor: pointer"
                  >Ainda não é cliente paggue?
                  <span style="color: #7c009f">Cadastre-se</span></a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      email: "",
      senha: "",
      visibility: "eye",
      input_password: "password",
    };
  },
  computed: {},
  methods: {
    ...mapActions("login", ["auth"]),
    showPassword() {
      if (this.input_password == "password") {
        this.visibility = "eye-slash";
        this.input_password = "text";
      } else {
        this.visibility = "eye";
        this.input_password = "password";
      }
    },
    login() {
      this.auth({ email: this.email, senha: this.senha }).then((result) => {
        // console.log(result)
        if (result == true) {
          sessionStorage.setItem("email", this.email);
          this.$router.push({ name: "dashboard" });
        } else {
          this.$toast.error(
            "Não foi possível realizar o login, reveja suas credenciais."
          );
        }
      });
    },
  },
};
</script>

<style scoped>
#login {
  margin-top: 50px;
}

#form {
  margin-top: 25px;
  margin-left: 50px;
}

#input-email {
  margin-top: 40px;
}

#input-password {
  margin-top: 20px;
  position: relative;
}

#label-email {
  width: 40px;
}

#label-password {
  width: 50px;
}

.container-fluid {
  background-color: #f9f9f9 !important;
}

.img-logo-paggue {
  margin-top: 66px;
}

.box-login {
  background-color: white;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  height: 700px;
  width: 540px;
}

.form {
  background-color: transparent;
  border: 2px solid #adadad;
  display: block;
  width: 330px;
  border-radius: 6px;
  height: 40px;
}

.label {
  /* background-color: white; */
  color: #767676;
  display: block;
  font-size: 11px;
}

.describe {
  color: #767676;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 20px;
  text-align: left;
}

.img-login-paggue {
  height: 700px;
  width: 505px;
}

.btn-entrar {
  display: block;
  height: 40px;
  margin-top: 25px;
  margin-bottom: 20px;
  width: 330px;
}

.link-registro {
  color: #4d4d4d;
  font-size: 13px;
  font-weight: 500;
  margin-left: 25px;
  text-decoration: none;
}
</style>