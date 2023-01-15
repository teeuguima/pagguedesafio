<template>
    <div class="bg-container">
        <sidebar/>
        <div class="container-fluid" id="container">
            <div class="row justify-content-end">
                <img src="../assets/img/logo-paggue.png" class="img-logo-paggue" id="logo-for-pages" alt="">
            </div>
            <div class="box-register">
                <div class="form-register">
                    <h3 class="title-box">Produtos</h3>
                    <p class="describe-box">Cadastre produtos que farão parte da sua loja.</p>
                    <div class="d-flex">
                        <div>
                            <label for="" class="label mb-1 d-block">Nome</label>
                            <input type="text" class="form" id="nome"/>
                        </div>
                        <div>
                            <label for="" class="label mb-1">Preço</label>
                            <money class="form" v-bind="money" id="preco"/>
                        </div>
                        <div>
                            <label for="" class="label mb-1">Estoque</label>
                            <div class="d-flex">
                                <input type="text" class="form" id="estoque"/>
                                <div class="counter">
                                    <div class="text-center">
                                        <font-awesome-icon icon="plus" id="plus"/>
                                    </div>
                                    <div class="text-center">
                                        <font-awesome-icon icon="minus" id="minus"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex mt-4">
                        <div class="">
                            <label for="" class="label mb-1">Descrição</label>
                            <textarea class="form" rows="40" cols="4" id="descricao"></textarea>
                    
                        </div>
                        <div>
                            <label for="" class="label mb-1">Categoria</label>
                            <v-select v-model="selected" />
                        </div>
                    </div>
                    <button class="btn-purple btn-cadastrar">Cadastrar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        
        data() {
            return {
                money: {
                    decimal: ',',
                    thousands: '.',
                    prefix: 'R$ ',
                    precision: 2,
                    masked: false
                } 
            }
        },
        
    }
</script>

<style scoped>

#nome, #preco, #descricao {
    margin-right: 20px;
}

#nome{
    width: 330px;
}
#preco{
    color: #767676;
    font-family: Roboto, sans-serif;
    font-size: 13px;
    width: 200px;
}
#descricao{
    width: 330px;
    height: 95px;
}
#categoria{

}
#estoque{
    width: 80px;
}
#plus{
    color: #026B1F;
    font-size: 11px;
    padding: 3px;
}
#minus{
    color: #B40000;
    font-size: 11px;
    padding: 3px;
    padding-bottom: 4px;
}
.box-register{
    background-color: white;
    border-radius: 15px;
    height: 415px;
    width: 100%;
}

input[type="tel"]{
    padding-left: 15px;
}

.counter{
    background-color: #EFEFEF;
    border-radius: 4px;
    height: 40px;
    margin-left: 5px;
    width: 25px;
}

.btn-cadastrar{
    margin-top: 25px;
}

</style>