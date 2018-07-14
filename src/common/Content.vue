<template>
    <div class="fw">
        <b-container class="section">
            <b-row>
                <b-col md="8" sm="12">
                    <router-view/>
                </b-col>
                <b-col md="4" sm="12">
                    <sidebar></sidebar>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import BlogContent from '../views/BlogContent'
    import Sidebar from '../containers/Sidebar'
    
    export default {
        name: 'Content',
        props: {
            msg: String
        },
        components: {
            BlogContent,
            Sidebar
        }
    }
</script>

<style scoped>
    .fw {
        width: 100%;
        background: rgb(250, 250, 250);
        flex: 1;
    }
    .section {
        height: 100%;
        overflow: hidden;
        padding: 2rem;
    }
</style>