
<template>
    <div>
        <bb-header></bb-header>
        <router-view></router-view>
        <bb-footer></bb-footer>
    </div>
</template>

<script>

import Header from 'COMPONENTS/Header'
import Footer from 'COMPONENTS/Footer'

export default {
    components:{
        'bb-header': Header,
        'bb-footer': Footer
    },
    setup() {
        
    }
}
</script>

<style>

</style>
