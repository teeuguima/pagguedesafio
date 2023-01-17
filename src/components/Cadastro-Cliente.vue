<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-xl-9 align-self-center">
        <div class="row justify-content-center" id="img">
          <img
            src="../assets/img/logo-paggue.png"
            class="img-logo-paggue"
            alt=""
          />
        </div>
        <div class="row justify-content-center">
          <div class="box-register text-center">
            <div id="form" class="text-start">
              <h3 class="title-form">
                Crie sua conta e aproveite os benefícios que <br />
                só a <span style="color: #7c009f">Paggue</span> oferece.
              </h3>
              <p class="subtitle-form">
                Preencha as informações abaixo e obtenha acesso ao nosso
                sistema.
              </p>
              <div class="d-flex mt-4">
                <div>
                  <label for="" class="label mb-1">Nome completo</label>
                  <input type="text" class="form" id="nome" v-model="nome" />
                </div>
                <div class="ms-3">
                  <label for="" class="label mb-1">CPF/CNPJ</label>
                  <input
                    type="tel"
                    v-mask="['###.###.###-##', '##.###.###/####-##']"
                    class="form"
                    id="doc"
                    @blur="trocarPessoa"
                    v-model="docIdentificacao"
                  />
                </div>
              </div>
              <div v-if="observerPessoa != 'fisica'">
                <div class="mt-inputs">
                  <label class="label mb-1">Razão Social</label>
                  <input
                    type="text"
                    class="form"
                    id="razao"
                    v-model="razao_social"
                  />
                </div>
                <div class="mt-inputs">
                  <label class="label mb-1">Nome fantasia</label>
                  <input
                    type="text"
                    class="form"
                    id="fantasia"
                    v-model="fantasia"
                  />
                </div>
              </div>
              <div class="mt-inputs" v-if="observerPessoa == 'fisica'">
                <label for="" class="label mb-1">Nome estabelecimento</label>
                <input
                  type="text"
                  class="form"
                  id="nome-estabelecimento"
                  v-model="nome_estabelecimento"
                />
              </div>
              <div class="d-flex mt-inputs">
                <div>
                  <label for="" class="label mb-1">Email</label>
                  <input type="text" class="form" id="email" v-model="email" />
                </div>
                <div class="ms-3">
                  <label for="" class="label mb-1">Senha</label>
                  <input
                    type="password"
                    class="form"
                    id="senha"
                    v-model="senha"
                  />
                </div>
              </div>
              <div class="mt-inputs">
                <label for="" class="label mb-1">Telefone</label>
                <input
                  type="tel"
                  v-mask="['(##) ####-####', '(##) #####-####']"
                  class="form"
                  id="telefone"
                  v-model="telefone"
                />
              </div>
              <div class="row justify-content-center">
                <button class="btn-purple" @click="criarConta">
                  Criar conta
                </button>
                <p class="sou-cliente text-center">Já é cliente Paggue?</p>
                <button class="btn-entrar" @click="$router.push('/')">
                  Entrar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
import { mask } from "vue-the-mask";

export default {
  directives: { mask },
  data() {
    return {
      pessoa: "fisica",
      nome: "",
      docIdentificacao: "",
      razao_social: "",
      fantasia: "",
      nome_estabelecimento: "",
      email: "",
      senha: "",
      telefone: "",
    };
  },
  computed: {
    observerPessoa() {
      return this.pessoa;
    },
  },
  methods: {
    ...mapMutations("cliente", ["adicionarCliente"]),
    ...mapActions("login", ["verificarUsuario"]),
    criarConta() {
      if (this.docIdentificacao == 14) {
        this.adicionarCliente({
          nome: this.nome,
          docIdentificacao: this.docIdentificacao,
          razao_social: this.razao_social,
          fantasia: this.fantasia,
          email: this.email,
          senha: this.senha,
          telefone: this.telefone,
        });
      } else if (this.docIdentificacao == 11) {
        this.adicionarCliente({
          nome: this.nome,
          docIdentificacao: this.docIdentificacao,
          nome_estabelecimento: this.nome_estabelecimento,
          email: this.email,
          senha: this.senha,
          telefone: this.telefone,
        });
      }
      this.verificarUsuario({ email: this.email, senha: this.senha }).then(
        (result) => {
          console.log(result);
          if (result) {
            this.$toast.error("Já existe um registro com este email");
          } else {
            this.$toast.success("Cadastro realizado, efetue login");
            this.$router.push("/");
          }
        }
      );
    },
    trocarPessoa() {
      console.log(this.docIdentificacao);
      if (this.docIdentificacao.length > 14) {
        this.pessoa = "juridica";
      } else if (this.docIdentificacao.length <= 14) {
        this.pessoa = "fisica";
      }
      var spliceDoc = this.docIdentificacao.replace(/[.\-/]/g, "");
      this.docIdentificacao = spliceDoc;
      console.log(this.docIdentificacao.length);
    },
  },
};
</script>

<style scoped>
#form {
  padding: 35px 50px 75px 30px;
}

#img {
  margin-top: 70px;
  margin-bottom: 50px;
}

#nome,
#email,
#telefone {
  width: 285px;
}

#doc,
#senha {
  width: 215px;
}

#razao,
#fantasia {
  width: 515px;
}

#nome-estabelecimento {
  width: 515px;
}

.container-fluid {
  background-color: #f9f9f9 !important;
}

.box-register {
  background-color: white;
  border-radius: 15px;
  height: 575px;
  width: 605px;
  margin-bottom: 67px;
}

.title-form {
  color: #3a3a3a;
  font-size: 18px;
  font-weight: 600;
}

.subtitle-form {
  color: #767676;
  font-size: 13px;
}

.label {
  color: #870093;
  display: block;
}

.form {
  background-color: #efefef;
  border: none;
  border-radius: 6px;
  height: 35px;
}

.mt-inputs {
  margin-top: 20px;
}

.sou-cliente {
  color: #777777;
  font-size: 10px;
  margin: 15px 0px 6px 0px;
}

.btn-purple {
  height: 40px;
  margin-top: 25px;
  width: 225px;
}

.btn-entrar {
  background-color: transparent;
  border: 1px solid #7c009f;
  border-radius: 4px;
  color: #7c009f;
  font-size: 14px;
  font-weight: 500;
  height: 40px;
  width: 225px;
}
</style>