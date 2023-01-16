<template>
    <div class="bg-container">
        <sidebar/>
        <div class="container-fluid" id="container">
            <div class="row justify-content-end">
                <img src="../assets/img/logo-paggue.png" class="img-logo-paggue" id="logo-for-pages" alt="">
            </div>
            <div class="box">
                <div class="pad-box">
                    <h3 class="title-box">Produtos</h3>
                    <p class="describe-box">Cadastre produtos que farão parte da sua loja.</p>
                    <div class="d-flex">
                        <div>
                            <label for="" class="label mb-1 d-block">Nome</label>
                            <input type="text" v-model="nome" class="form" id="nome"/>
                        </div>
                        <div>
                            <label for="" class="label mb-1">Preço</label>
                            <money class="form" v-model="preco" v-bind="money" id="preco"/>
                        </div>
                        <div>
                            <label for="" class="label mb-1">Estoque</label>
                            <div class="d-flex">
                                <input type="text" v-model="estoque" class="form" id="estoque"/>
                                <div class="counter">
                                    <div class="text-center" style="cursor: pointer">
                                        <font-awesome-icon icon="plus" @click="aumentar" id="plus"/>
                                    </div>
                                    <div class="text-center" style="cursor: pointer">
                                        <font-awesome-icon icon="minus" @click="diminuir" id="minus"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex mt-4">
                        <div class="">
                            <label for="" class="label mb-1">Descrição</label>
                            <textarea class="form" v-model="descricao" rows="40" cols="4" id="descricao"></textarea>
                    
                        </div>
                        <div>
                            <label for="" class="label mb-1">Categoria</label>
                            <div id="categoria">
                                <v-select v-model="categoria" :options="lista_categorias" />
                            </div>
                        </div>
                    </div>
                    <button class="btn-purple btn-cadastrar" @click="adicionar">Cadastrar</button>
                </div>
            </div>
            <div class="box list mt-3 pb-3">
                <div class="pad-box">
                    <h3 class="title-box">Produtos</h3>
                    <p class="describe-box">Cadastre produtos que farão parte da sua loja.</p>
                    <div style="overflow-y: scroll; width: 930px; height: 250px">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Código</th>
                                    <th scope="col">Nome</th> 
                                    <th scope="col">Descrição</th>
                                    <th scope="col">Categoria</th>
                                    <th scope="col">Estoque</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(produto, index) in produtos" :key="index">
                                    <td>{{ index }}</td>
                                    <td>{{ produto.nome }}</td>
                                    <td>{{ produto.descricao }}</td>
                                    <td>{{ produto.categoria }}</td>
                                    <td>{{ produto.estoque }}</td>
                                    <td><font-awesome-icon icon="trash"></font-awesome-icon></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
    export default {       
        data() {
            return {
                money: {
                    decimal: ',',
                    thousands: '.',
                    prefix: 'R$ ',
                    precision: 2,
                    masked: false
                },
                nome:'',
                preco: 0,
                estoque: 0,
                descricao: '',
                categoria: '',
            }
        },
        computed: {
            lista_categorias:{
                get(){
                    let lista = []
                    this.getCategorias().forEach(element => {
                        lista.push(element.nome)
                    });
                    return lista
                }
            },
            ...mapGetters('produtos', {
                produtos: 'getProdutos'
            })
        },
        methods: {
            ...mapGetters('categorias',['getCategorias']),
            ...mapMutations('produtos', ['adicionarProdutos']),
            adicionar() {
                this.adicionarProdutos(
                    {
                        nome: this.nome,
                        preco: this.preco,
                        estoque: parseInt(this.estoque),
                        descricao: this.descricao,
                        categoria: this.categoria
                    }
                )
            },
            aumentar(){
                let numero = parseInt(this.estoque)
                numero = numero + 1
                this.estoque = numero
            },
            diminuir(){
                let numero = parseInt(this.estoque)
                numero = numero - 1
                this.estoque = numero
            }
        },
        
    }
</script>

<style scoped>

input[type="tel"]{
    padding-left: 15px;
}

table{
    margin-top: 25px;
    width: 890px;
}


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
    width: 330px;
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
.box{
    background-color: white;
    border-radius: 15px;
    height: 415px;
    width: 100%;
}

.list{

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