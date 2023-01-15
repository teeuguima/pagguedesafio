<template>
    <div style="background-color: #EFEFEF">
        <sidebar/>
        <div class="container-fluid">
            <component :is="page"></component>
        </div>
    </div>
</template>

<script>
import sidebar from './Sidebar.vue';
    export default {
        components: {
            sidebar,
        },
        data() {
            return {
                page: 'dashboard'
            }
        },
        computed: {
            routerLink() {
                return this.page 
            }
        },
    }
</script>

<style scoped>
.container-fluid{
    padding-left: calc(200px + 2rem);
    padding-right: 26px;
}
</style>