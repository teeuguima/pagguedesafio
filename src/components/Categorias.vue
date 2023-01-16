<template>
    <div>
        <div class="bg-container">
            <sidebar/>
            <div class="container-fluid" id="container">
                <div class="row justify-content-end">
                    <img src="../assets/img/logo-paggue.png" class="img-logo-paggue" id="logo-for-pages" alt="">
                </div>
                <div class="box-categorias d-flex">
                    <div class="pad-box">
                        <h3 class="title-box">Categorias</h3>
                        <p class="describe-box">Cadastre as categorias destinadas a seus produtos</p>
                        <div class="d-flex">
                            <div>
                                <label for="" class="label mb-1 d-block">Nome</label>
                                <input type="text" v-model="nome" class="form" id="nome"/>
                            </div>
                        </div>
                        <button class="btn-purple btn-cadastrar" @click="adicionar">Cadastrar</button>
                    </div>
                    <div class="table-categorias">
                        <h3 class="title-box">Minhas categorias</h3>
                        <p class="describe-box" id="describe-table">Abaixo a lista das categorias cadastradas  </p>
                        <div style="overflow-y: scroll; width: 420px; height: 230px">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Código</th>
                                        <th scope="col">Nome</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(categoria, index) in categorias" :key="index">
                                        <td>{{ index }}</td>
                                        <td>{{ categoria.nome }}</td>
                                        <td style="cursor: pointer" @click="remover(index)"><font-awesome-icon icon="trash"></font-awesome-icon></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
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
                nome: '',
            }
        },
        computed: {
            ...mapGetters('categorias', {
                categorias: 'getCategorias'
            })
        },
        methods: {
            ...mapMutations('categorias', ['adicionarCategoria']),
            adicionar() {
                this.adicionarCategoria({nome: this.nome})
            },
            remover(index){
                this.$delete(this.categorias, index)
            }
        },
    }
</script>

<style scoped>
table{
    margin-top: 25px;
    width: 380px;
}


.container-fluid{
    padding-bottom: 26%;
}

#nome{
    width: 335px;
}

#describe-table{
    margin-bottom: 0px;
}
.box-categorias{
    background-color: white;
    border-radius: 15px;
    height: 320px;
    width: 100%;
}

.table-categorias{
    padding:19px 0px 30px 180px;
}

.btn-cadastrar{
    margin-top: 40px;
}
</style>