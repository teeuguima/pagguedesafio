<template>
    <div style="background-color: #EFEFEF">
        <sidebar/>
        <div class="container-fluid" id="container">
            <div class="row justify-content-end">
                <img src="../assets/img/logo-paggue.png" class="img-logo-paggue" id="logo-for-pages" alt="">
            </div>
            <div class="row" id="row-activity">
                <div class="col-xl-12">
                    <div class="box-activity">
                        <div class="pad-box">
                            <h3 class="title-box">Atividade da sua loja </h3>
                            <p class="describe-box">Acompanhe as informações sobre o desempenho do seu estabelecimento.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row row-pt pb-6" id="actions">
                <div class="col-xl-9">
                    <div class="d-flex">
                        <div class="box-action" @click="$router.push({name:'produtos'})">
                            <p class="title-action">Quero cadastrar <br>
                            meus produtos</p>
                            <img src="../assets/img/register-product.png" alt="">
                        </div>
                        <div class="box-action" @click="$router.push({name:'cupons'})">
                            <p class="title-action">Quero cadastrar <br>
                            cupons</p>
                            <img src="../assets/img/register-coupon.png" alt="">
                        </div>
                        <div class="box-action" @click="$router.push({name:'categorias'})">
                            <p class="title-action">Quero cadastrar <br>
                            categorias</p>
                            <img src="../assets/img/register-categories.png" alt="">
                        </div>
                        <div class="box-action">
                            <p class="title-action">Quero visualizar <br>
                            minha loja</p>
                            <img src="../assets/img/shop-view.png" alt="">
                        </div>
                    </div>
                    <div class="box-maquininha">
                        <div class="d-flex ">
                            <div class="row-maquininha">
                                <h3 class="title-maquininha">Paggue: a máquina de cartão pra <br> você vender muito</h3>
                                <p class="describe-maquininha">Sem burocracia, sem mensalidade e você ainda <br> acompanha as suas vendas em tempo real.</p>
                                <button class="btn-quero-maquininha">Quero minha Paggue</button>
                            </div>
                            <div class="img-smart">
                                <img src="../assets/img/smart-paggue.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 d-flex justify-content-end">
                    <div class="box-blog">
                        <div class="pad-blog">
                            <h3 class="title-blog">Preparamos vários conteúdos legais, para ajudar você a impulsionar seu negócio</h3>
                            
                                <a href="https://blog.paggue.io/" target="blank">
                                    <div class="d-flex">
                                        <p class="link-blog">Acesse nosso blog</p>
                                        <div class="text-center" id="button-blog">
                                            
                                        </div>
                                    </div>
                                </a>
                        </div>
                        <img src="../assets/img/blog.png" id="pd-img-blog" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import sidebar from './Sidebar.vue';
    export default {
        components: {
            sidebar,
        },
    }
</script>

<style scoped>
a{
    text-decoration: none;
}

.row-pt{
    padding-top: 20px;
}

.box-activity{
    background-color: white;
    border-radius: 15px;
    height: 190px;
    width: 100%;
}

.box-action{
    background-color: #870093;
    border-radius: 15px;
    cursor: pointer;
    height: 245px;
    margin-right: 35px;
    width: 190px; 
}

.title-action{
    color: white;
    font-weight: 500;
    font-size: 14px;
    margin:20px 0px 30px 22px;
}

.title-blog{
    color: #3A3A3A;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 10px;
}

.link-blog{
    color: #7C009F;
    font-size: 10px;
}

.box-blog{
    background-color: white;
    border-radius: 15px;
    height: 485px;
    width: 255px;
}

.box-maquininha{
    background-color: white;
    border-radius: 15px;
    height: 220px;
    margin-top: 20px;
    width: 990px;
}

.row-maquininha{
    padding: 20px 0px 0px 22px;
}

.title-maquininha{
    color: #767676;
    font-size: 20px;
    font-weight: 600;
}

.describe-maquininha{
    color: #767676;
    font-size: 14px;
    margin-bottom: 25px;
}

.btn-quero-maquininha{
    background-color: #FFE000;
    border: none;
    border-radius: 4px;
    color: #3A3A3A;
    font-size: 16px;
    font-weight: 600;
    height: 35px;
    width: 200px;
}

.pad-blog{
    padding: 18px 0px 115px 15px;
}

.img-smart{
    padding: 15px 0px 0px 140px;
}

#pd-img-blog{
    padding-left: 38px;
}

.pb-6{
    padding-bottom: 30px;
}
</style>