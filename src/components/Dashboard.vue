<template>
    <div style="background-color: #EFEFEF">
        <sidebar/>
        <div class="container-fluid">
            <div class="row justify-content-end">
                <img src="../assets/img/logo-paggue.png" class="img-logo-paggue" alt="">
            </div>
            <div class="row row-pt" id="row-activity">
                <div class="col-xl-12">
                    <div class="box-activity">

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
.row-pt{
    padding-top: 20px;
}

.img-logo-paggue{
    margin: 27px 30px 0px 0px;
    width: 100px;
}

.container-fluid{
    padding-left: calc(200px + 2rem);
    padding-right: 26px;
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
    height: 245px;
    width: 190px;
    margin-right: 35px;
}

.title-action{
    color: white;
    font-weight: 500;
    font-size: 14px;
    margin:20px 0px 30px 22px;
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
    width: 865px;
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


.img-smart{
    padding: 15px 0px 0px 140px;
}

.pb-6{
    padding-bottom: 30px;
}
</style>