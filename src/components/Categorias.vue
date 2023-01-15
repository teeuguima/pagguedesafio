<template>
    <div>
        <div class="bg-container">
            <sidebar/>
            <div class="container-fluid" id="container">
                <div class="row justify-content-end">
                    <img src="../assets/img/logo-paggue.png" class="img-logo-paggue" id="logo-for-pages" alt="">
                </div>
                <div class="box-categorias d-flex">
                    <div class="form-register">
                        <h3 class="title-box">Categorias</h3>
                        <p class="describe-box">Cadastre as categorias destinadas a seus produtos</p>
                        <div class="d-flex">
                            <div>
                                <label for="" class="label mb-1 d-block">Nome</label>
                                <input type="text" class="form" id="nome"/>
                            </div>
                        </div>
                        <button class="btn-purple btn-cadastrar">Cadastrar</button>
                    </div>
                    <div class="table-categorias">
                        <h3 class="title-box">Minhas categorias</h3>
                        <p class="describe-box" id="describe-table">Abaixo a lista das categorias cadastradas  </p>
                        <table class="table">
                            <thead>
                                <th scope="col">Código</th>
                                <th scope="col">Nome</th>
                            </thead>
                            <tbody>
                                <tr>

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
    export default {
        
    }
</script>

<style scoped>
table{
    margin-top: 25px;
    width: 380px;
}

thead{
    color: white;
    background-color: rgb(119, 119, 119, 0.8);
    font-family: Poppins, sans-serif;
    font-size: 12px;
}
th{
    /* border-radius: 4px; */
    font-weight: 500;
    padding: 6px 0px 6px 15px;
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