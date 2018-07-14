<template>
    <div>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group id="emailGroup" label="Email address:" label-for="exampleInput1" description="We'll never share your email with anyone else.">
                <b-form-input id="email" type="email" v-model="form.email" required placeholder="Enter email">
                </b-form-input>
            </b-form-group>
            <b-form-group id="nameGroup" label="Your Name:" label-for="exampleInput2">
                <b-form-input id="name" type="text" v-model="form.name" required placeholder="Enter name">
                </b-form-input>
            </b-form-group>
            <b-row class="mb-3 mt2">
                <b-col md="4">
                    <b-button type="submit" variant="primary">Submit</b-button>
                </b-col>
                <b-col md="4">
                    <b-button type="reset" variant="danger">Reset</b-button>
                </b-col>
            </b-row>
        </b-form>
        <notifications group="subscribe" position="top right"/>
    </div>
</template>

<script>
    export default {
        name: 'subscribe-form',
        data() {
            return {
                form: {
                    email: '',
                    name: ''
                },
                show: true,
                isSuccess: false
            }
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault();
                const self = this;
                this.isSuccess = true;
                this.$notify({
                    group: 'subscribe',
                    title: 'Newsletter Subscribed',
                    text: 'Subscribed to our newsletter successfully',
                    // type: 'success',
                })
                setTimeout(function() {
                    self.isSuccess = false;
                    self.onReset(evt);
                }, 3000);
            },
            onReset(evt) {
                evt.preventDefault();
                /* Reset our form values */
                this.form.email = '';
                this.form.name = '';
                /* Trick to reset/clear native browser form validation state */
                this.show = false;
                this.$nextTick(() => {
                    this.show = true
                });
            }
        }
    }
</script>

<style scoped>
    .mt2 {
        margin-top: 2rem;
    }
</style>
