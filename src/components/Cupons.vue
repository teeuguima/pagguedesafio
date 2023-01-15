<template>
    <div>
        <div class="bg-container">
            <sidebar/>
            <div class="container-fluid" id="container">
                <div class="row justify-content-end">
                    <img src="../assets/img/logo-paggue.png" class="img-logo-paggue" id="logo-for-pages" alt="">
                </div>
                <div class="box-coupons d-flex">
                    <div class="form-register">
                        <h3 class="title-box">Cupons</h3>
                        <p class="describe-box">Adicione cupons e conquiste a clientela</p>
                        <div class="d-flex">
                            <div>
                                <label for="" class="label mb-1 d-block">Validade</label>
                                <input type="text" class="form" id="validade"/>
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
                        <button class="btn-purple btn-cadastrar">Cadastrar</button>
                    </div>
                    <div class="table-coupons">
                        <h3 class="title-box">Meus cupons</h3>
                        <p class="describe-box" id="describe-table">Controle seus cupons cadastrados</p>
                        <table class="table">
                            <thead>
                                <th scope="col">Código</th>
                                <th scope="col">Validade</th>
                                <th scope="col">Estoque</th>
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

#validade{
    width: 170px;
    margin-right: 20px;
}

#estoque{
    width: 80px;
}

#describe-table{
    margin-bottom: 0px;
}
.box-coupons{
    background-color: white;
    border-radius: 15px;
    height: 320px;
    width: 100%;
}

.table-coupons{
    padding:19px 0px 30px 180px;
}

.btn-cadastrar{
    margin-top: 40px;
}
</style>