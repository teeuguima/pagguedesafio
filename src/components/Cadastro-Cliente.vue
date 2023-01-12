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
                        <input type="text" class="form" id="nome"/>
                    </div>
                    <div class="ms-3">
                        <label for="" class="label mb-1">CPF/CNPJ</label>
                        <input type="text" class="form" id="doc"/>
                    </div>
                </div>
                <div class="mt-inputs">
                    <label for="" class="label mb-1">Nome estabelecimento</label>
                    <input type="text" class="form" id="nome-estabelecimento"/>
                </div>
                <div class="d-flex mt-inputs">
                    <div>
                        <label for="" class="label mb-1">Email</label>
                        <input type="text" class="form" id="nome"/>
                    </div>
                    <div class="ms-3">
                        <label for="" class="label mb-1">Senha</label>
                        <input type="password" class="form" id="senha"/>
                    </div>
                </div>
                <div class="mt-inputs">
                    <label for="" class="label mb-1">Telefone</label>
                    <input type="text" class="form" id="telefone"/>
                </div>
                <button class="btn-purple">Criar conta</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#form {
  padding: 35px 50px 75px 30px;
}

#img {
  margin-top: 70px;
  margin-bottom: 50px;
}

#nome, #email, #telefone{
    width: 285px;
}

#doc, #senha{
    width: 215px;
}

#nome-estabelecimento{
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
  font-size: 16px;
  font-weight: 600;
}

.subtitle-form {
  color: #767676;
  font-size: 13px;
}

.label{
    color: #870093;
    display: block;
}

.form{
    background-color: #EFEFEF;
    border: none;
    border-radius: 6px;
    height: 35px;
}

.mt-inputs{
    margin-top: 20px;
}

.btn-purple{
    height: 40px;
    margin-top: 25px;
    width: 225px;
}
</style>