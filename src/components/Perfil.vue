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
              <div class="d-flex">
                <div>
                  <h3 class="title-box">Meu perfil</h3>
                  <p class="describe-box">
                    Gerencie as informações destinadas ao <br />
                    seu estabelecimento
                  </p>
                </div>
                <div id="edicao" v-if="isEdicao">
                  <button class="btn-editar" @click="edicao = true"> <font-awesome-icon icon="pencil-alt"></font-awesome-icon> Editar</button>
                </div>
              </div>
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
                        v-model="agencia"
                      />
                    </div>
                    <div>
                      <label for="" class="label mb-1 d-block">Conta</label>
                      <input
                        type="text"
                        class="form"
                        id="conta"
                        v-model="num_conta"
                      />
                    </div>
                    <div>
                      <label for="" class="label mb-1 d-block">Dígito</label>
                      <input
                        type="text"
                        class="form"
                        id="digito"
                        v-model="digito"
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
                        @blur="buscarEndereco"
                      />
                    </div>
                    <div>
                      <label for="" class="label mb-1 d-block">Estado</label>
                      <input
                        type="text"
                        class="form"
                        id="estado"
                        v-model="estado"
                      />
                    </div>
                    <div>
                      <label for="" class="label mb-1 d-block">Cidade</label>
                      <input
                        type="text"
                        class="form"
                        id="cidade"
                        v-model="cidade"
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
                        v-model="bairro"
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
                        v-model="logradouro"
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
                        v-model="complemento"
                      />
                    </div>
                    <div>
                      <label for="" class="label mb-1 d-block">Número</label>
                      <input
                        type="text"
                        class="form"
                        id="numero"
                        v-model="numero"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 class="title-section">Formas de pagamento</h3>
                  <div>
                    <label for="" class="label mb-1 d-block">Pagamento</label>
                    <!-- <input
                      type="text"
                      class="form"
                      id="validade"
                      v-model="pagamento"
                    /> -->
                    <v-select multiple v-model="pagamento" :options="forma_pagamento" id="validade" />
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
import { mapGetters, mapMutations } from 'vuex';
import cep from 'cep-promise'
export default {
  data() {
    return {
      conta: {
        agencia: "",
        num_conta: "",
        digito: "",
      },
      chave_pix: "",
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
      forma_pagamento: ['Cartão','Pix', 'À vista'],
      edicao: false,
    };
  },
  created () {
    if(this.getRegistro()){
      this.edicao = true
    }

  },
  computed: {
    isEdicao(){
      return this.edicao
    },
    agencia:{
      get(){
        if(this.getConta() != null){
          return this.getConta().agencia
        }else{
          return this.conta.agencia
        }
      },
      set(valor){
        this.conta.agencia = valor
      }
    },
    num_conta:{
      get(){
        if(this.getConta() != null){
          return this.getConta().num_conta
        }else{
          return this.conta.num_conta
        }
      },
      set(valor){
        this.conta.num_conta = valor
      }
    },
    digito:{
      get(){
        if(this.getConta() != null){
          return this.getConta().digito
        }else{
          return this.conta.digito
        }
      },
      set(valor){
        this.conta.digito = valor
      }
    },
    pix:{
      get(){
        if(this.getPix() != null){
          return this.getPix()
        }else{
          return this.chave_pix
        }
      },
      set(valor){
        this.chave_pix = valor
      }
    },
    cep:{
      get(){
        if(this.getEndereco() != null){
          return this.getEndereco().cep
        }else{
          return this.endereco.cep
        }
      },
      set(valor){
        this.endereco.cep = valor
      }
    },
    estado:{
      get(){
        if(this.getEndereco() != null){
          return this.getEndereco().estado
        }else{
          return this.endereco.estado
        }
      },
      set(valor){
        this.endereco.estado = valor
      }
    },
    cidade:{
      get(){
        if(this.getEndereco() != null){
          return this.getEndereco().cidade
        }else{
          return this.endereco.cidade
        }
      },
      set(valor){
        this.endereco.cidade = valor
      }
    },
    bairro:{
      get(){
        if(this.getEndereco() != null){
          return this.getEndereco().bairro
        }else{
          return this.endereco.bairro
        }
      },
      set(valor){
        this.endereco.bairro = valor
      }
    },
    logradouro:{
      get(){
        if(this.getEndereco() != null){
          return this.getEndereco().logradouro
        }else{
          return this.endereco.logradouro
        }
      },
      set(valor){
        this.endereco.logradouro = valor
      }
    },
    complemento:{
      get(){
        if(this.getEndereco() != null){
          return this.getEndereco().complemento
        }else{
          return this.endereco.complemento
        }
      },
      set(valor){
        this.endereco.complemento = valor
      }
    },
    numero:{
      get(){
        if(this.getEndereco() != null){
          return this.getEndereco().numero
        }else{
          return this.endereco.numero
        }
      },
      set(valor){
        this.endereco.numero = valor
      }
    },
    

  },
  methods: {
    ...mapGetters("perfil", ["getConta", "getPix", "getEndereco", "getPagamento", "getRegistro"]),
    ...mapMutations("perfil", ['alterarPerfil']),
    adicionar() {
      this.alterarPerfil({
        conta: this.conta,
        pix: this.pix,
        endereco: this.endereco,
        pagamento: this.pagamento,
      })
    },
    buscarEndereco(){
      cep(this.endereco.cep)
      .then((resp) =>{
        this.endereco.estado = resp.state
        this.endereco.cidade = resp.city
        this.endereco.bairro = resp.neighborhood
        this.endereco.logradouro = resp.street
      })
    }
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

.describe-box{
  margin-bottom: 28px;
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

.btn-editar{
  background-color: transparent;
  border: 1px solid #7C009F;
  border-radius: 4px;
  color: #7C009F;
  font-size: 13px;
  font-weight: 500;
  width: 120px;
  height: 30px;
  margin: 15px 0px 0px 94px;
}
</style>