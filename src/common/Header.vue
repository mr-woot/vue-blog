<template>
    <header class="header">
        <h1 v-once>{{msg}}</h1>
    </header>
</template>

<script>
    export default {
        name: 'Header',
        props: {
            msg: String
        }
    }
</script>

<style scoped>
header {
    /* border-bottom: 1px solid #ccc; */
    background: lightgreen;
    box-shadow: 0px 1px 10px #000;
}
h1 {
    padding: 2rem 0;
    text-align: center;
    margin-bottom: 0;
}
</style>
