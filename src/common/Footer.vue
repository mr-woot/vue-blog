<template>
    <footer>
        Footer
    </footer>
</template>

<script>
    export default {
        name: 'Footer',
        props: {
            msg: String
        }
    }
</script>

<style scoped>
    footer {
        /* position: absolute;
            right: 0;
            bottom: 0;
            left: 0; */
        padding: 1rem;
        background-color: #2d2d2d;
        text-align: center;
        color: #fff;
    }
</style>