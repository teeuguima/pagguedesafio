<template>
  <div>
    <div class="bg-container">
      <sidebar />
      <div class="container-fluid" id="container">
        <div class="row justify-content-end">
          <img
            src="../assets/img/logo-paggue.png"
            class="img-logo-paggue"
            id="logo-for-pages"
            alt=""
          />
        </div>
        <div class="row justify-content-center">
          <div class="box-profile d-flex">
            <div class="pad-box">
              <h3 class="title-box">Meu perfil</h3>
              <p class="describe-box">
                Gerencie as informações destinadas ao <br />
                seu estabelecimento
              </p>
              <div>
                <div>
                  <h3 class="title-section">Conta bancária</h3>
                  <div class="d-flex">
                    <div>
                      <label for="" class="label mb-1 d-block">Agência</label>
                      <input
                        type="text"
                        class="form"
                        id="agencia"
                        v-model="conta.agencia"
                      />
                    </div>
                    <div>
                      <label for="" class="label mb-1 d-block">Conta</label>
                      <input
                        type="text"
                        class="form"
                        id="conta"
                        v-model="conta.numero"
                      />
                    </div>
                    <div>
                      <label for="" class="label mb-1 d-block">Dígito</label>
                      <input
                        type="text"
                        class="form"
                        id="digito"
                        v-model="conta.digito"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 class="title-section">Chave Pix</h3>
                  <div>
                    <label for="" class="label mb-1 d-block">Chave</label>
                    <input type="text" class="form" id="chave" v-model="pix" />
                  </div>
                </div>
                <div>
                  <h3 class="title-section">Endereço</h3>
                  <div class="d-flex">
                    <div>
                      <label for="" class="label mb-1 d-block">CEP</label>
                      <input
                        type="text"
                        class="form"
                        id="cep"
                        v-model="endereco.cep"
                      />
                    </div>
                    <div>
                      <label for="" class="label mb-1 d-block">Estado</label>
                      <input
                        type="text"
                        class="form"
                        id="estado"
                        v-model="endereco.estado"
                      />
                    </div>
                    <div>
                      <label for="" class="label mb-1 d-block">Cidade</label>
                      <input
                        type="text"
                        class="form"
                        id="cidade"
                        v-model="endereco.cidade"
                      />
                    </div>
                  </div>
                  <div class="d-flex endereco">
                    <div>
                      <label for="" class="label mb-1 d-block">Bairro</label>
                      <input
                        type="text"
                        class="form"
                        id="bairro"
                        v-model="endereco.bairro"
                      />
                    </div>
                    <div>
                      <label for="" class="label mb-1 d-block"
                        >Logradouro</label
                      >
                      <input
                        type="text"
                        class="form"
                        id="logradouro"
                        v-model="endereco.logradouro"
                      />
                    </div>
                  </div>
                  <div class="d-flex endereco">
                    <div>
                      <label for="" class="label mb-1 d-block"
                        >Complemento</label
                      >
                      <input
                        type="text"
                        class="form"
                        id="complemento"
                        v-model="endereco.complemento"
                      />
                    </div>
                    <div>
                      <label for="" class="label mb-1 d-block">Número</label>
                      <input
                        type="text"
                        class="form"
                        id="numero"
                        v-model="endereco.numero"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 class="title-section">Formas de pagamento</h3>
                  <div>
                    <label for="" class="label mb-1 d-block">Pagamento</label>
                    <input
                      type="text"
                      class="form"
                      id="validade"
                      v-model="pagamento"
                    />
                  </div>
                </div>
              </div>
              <button class="btn-purple btn-cadastrar" @click="adicionar">
                Cadastrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      conta: {
        agencia: "",
        numero: "",
        digito: "",
      },
      pix: "",
      endereco: {
        cep: "",
        estado: "",
        cidade: "",
        bairro: "",
        logradouro: "",
        complemento: "",
        numero: "",
      },
      pagamento: "",
      forma_pagamento: [],
    };
  },
  methods: {
    adicionar() {},
  },
};
</script>

<style scoped>
#agencia,
#bairro,
#cep {
  width: 155px;
  margin-right: 20px;
}

#conta {
  width: 165px;
  margin-right: 20px;
}
#digito {
  width: 65px;
}
#chave {
  width: 340px;
}
#estado {
  width: 60px;
  margin-right: 20px;
}
#cidade {
  width: 170px;
}
#logradouro {
  width: 250px;
}
#complemento {
  width: 233px;
  margin-right: 20px;
}
#numero {
  width: 170px;
}
#pagamento {
  width: 323px;
}

#describe-table {
  margin-bottom: 0px;
}

.container-fluid {
  padding-bottom: 26%;
}

.box-profile {
  background-color: white;
  border-radius: 15px;
  height: auto;
  padding: 0px;
  width: 590px;
}

.endereco {
  margin-top: 20px;
}

.table-coupons {
  padding: 19px 0px 30px 180px;
}

.btn-cadastrar {
  margin-top: 40px;
}

.title-section {
  color: #4d4d4d;
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 15px;
}

.title-section:nth-child(n + 1) {
  margin-top: 25px;
}
</style>