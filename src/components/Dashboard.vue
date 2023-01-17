<template>
  <div style="background-color: #efefef">
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
      <div class="row" id="row-activity">
        <div class="col-xl-12">
          <div class="box-activity">
            <div class="pad-box">
              <h3 class="title-box">Atividade da sua loja</h3>
              <p class="describe-box">
                Acompanhe as informações sobre o desempenho do seu
                estabelecimento.
              </p>
              <div class="row">
                <div class="col d-flex">
                  <img
                    src="../assets/img/statistic-sells.png"
                    class="img-statistic"
                    alt=""
                  />
                  <div class="margin-statistic">
                    <p class="describe-statistic">Vendas atingidas</p>
                    <p class="statistic">872</p>
                  </div>
                </div>
                <div class="col d-flex">
                  <img
                    src="../assets/img/coupons-using.png"
                    class="img-statistic"
                    alt=""
                  />
                  <div class="margin-statistic">
                    <p class="describe-statistic">Cupons usuados</p>
                    <p class="statistic">24</p>
                  </div>
                </div>
                <div class="col d-flex">
                  <img
                    src="../assets/img/cash.png"
                    class="img-statistic"
                    alt=""
                  />
                  <div class="margin-statistic">
                    <p class="describe-statistic">Faturamento</p>
                    <p class="statistic">R$ 19.322,00</p>
                  </div>
                </div>
                <div class="col d-flex">
                  <img
                    src="../assets/img/feedback.png"
                    class="img-statistic"
                    alt=""
                  />
                  <div class="margin-statistic">
                    <p class="describe-statistic">Avaliação</p>
                    <p class="statistic">4.6</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row row-pt pb-6" id="actions">
        <div class="col-xl-9">
          <div class="d-flex">
            <div class="box-action" @click="$router.push({ name: 'produtos' })">
              <p class="title-action">
                Quero cadastrar <br />
                meus produtos
              </p>
              <img src="../assets/img/register-product.png" alt="" />
            </div>
            <div class="box-action" @click="$router.push({ name: 'cupons' })">
              <p class="title-action">
                Quero cadastrar <br />
                cupons
              </p>
              <img src="../assets/img/register-coupon.png" alt="" />
            </div>
            <div
              class="box-action"
              @click="$router.push({ name: 'categorias' })"
            >
              <p class="title-action">
                Quero cadastrar <br />
                categorias
              </p>
              <img src="../assets/img/register-categories.png" alt="" />
            </div>
          </div>
          <div class="box-maquininha">
            <div class="d-flex">
              <div class="row-maquininha">
                <h3 class="title-maquininha">
                  Paggue: a máquina de cartão pra <br />
                  você vender muito
                </h3>
                <p class="describe-maquininha">
                  Sem burocracia, sem mensalidade e você ainda <br />
                  acompanha as suas vendas em tempo real.
                </p>
                <a href="https://paggue.io/#maquininhas" target="blank" style="text-decoration: none">
                    <button class="btn-quero-maquininha">Quero minha Paggue</button>
                </a>
              </div>
              <div class="img-smart">
                <img src="../assets/img/smart-paggue.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 d-flex justify-content-end">
          <div class="box-blog">
            <div class="pad-blog">
              <h3 class="title-blog">
                Preparamos vários conteúdos legais, para ajudar você a
                impulsionar seu negócio
              </h3>

              <a href="https://blog.paggue.io/" target="blank">
                <div class="d-flex align-items-center">
                  <p class="link-blog mb-0 me-2">Acesse nosso blog</p>
                  <div class="text-center" id="button-blog">
                    <img src="../assets/img/button-blog.png" alt="" />
                  </div>
                </div>
              </a>
            </div>
            <img src="../assets/img/blog.png" id="pd-img-blog" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sidebar from "./Sidebar.vue";
export default {
  components: {
    sidebar,
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}

#pd-img-blog {
  padding-left: 38px;
}

.row-pt {
  padding-top: 20px;
}

.box-activity {
  background-color: white;
  border-radius: 15px;
  height: 190px;
  width: 100%;
}

.box-action {
  background-color: #870093;
  border-radius: 15px;
  cursor: pointer;
  height: 245px;
  margin-right: 35px;
  width: 190px;
}

.title-action {
  color: white;
  font-weight: 500;
  font-size: 14px;
  margin: 20px 0px 30px 22px;
}

.title-blog {
  color: #3a3a3a;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 10px;
}

.link-blog {
  color: #7c009f;
  font-size: 12px;
}

.box-blog {
  background-color: white;
  border-radius: 15px;
  height: 485px;
  width: 255px;
}

.box-maquininha {
  background-color: white;
  border-radius: 15px;
  height: 220px;
  margin-top: 20px;
  width: 990px;
}

.row-maquininha {
  padding: 20px 0px 0px 22px;
}

.title-maquininha {
  color: #767676;
  font-size: 20px;
  font-weight: 600;
}

.describe-maquininha {
  color: #767676;
  font-size: 14px;
  margin-bottom: 25px;
}

.btn-quero-maquininha {
  background-color: #ffe000;
  border: none;
  border-radius: 4px;
  color: #3a3a3a;
  font-size: 16px;
  font-weight: 600;
  height: 35px;
  width: 200px;
}

.pad-blog {
  padding: 18px 0px 115px 15px;
}

.img-smart {
  padding: 15px 0px 0px 140px;
}

.pb-6 {
  padding-bottom: 30px;
}

.img-statistic {
  height: 40px;
  width: 40px;
}

.margin-statistic {
  margin-left: 8px;
}

.describe-statistic {
  color: #adadad;
  font-size: 10px;
  margin-bottom: 2px;
}

.statistic {
  color: #3a3a3a;
  font-size: 14px;
}
</style>