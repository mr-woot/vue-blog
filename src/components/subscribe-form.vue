<template>
    <div>
        <form @submit="validateBeforeSubmit" class="sub-form">
            <div class="form-group" :class="{'has-error': errors.has('name') }">
                <label class="control-label" for="name">Full Name</label>
                <input class="form-control" name="name" v-model="name" v-validate="'required'" :class="{'input': true, 'text-danger': errors.has('name') }" type="text" placeholder="Full Name">
                <span v-show="errors.has('name')" class="text-danger">{{ errors.first('name') }}</span>
            </div>
            <div class="form-group" :class="{'has-error': errors.has('email') }">
                <label class="control-label" for="email">Email</label>
                <input class="form-control" name="email" v-model="email" v-validate="'required|email'" :class="{'input': true, 'text-danger': errors.has('email') }" type="text" placeholder="Email">
                <span v-show="errors.has('email')" class="text-danger">{{ errors.first('email') }}</span>
            </div>
            <button class="btn btn-primary btn-inline" type="submit">Submit</button>
            <button class="btn btn-success btn-inline" v-on:click="onReset">Reset</button>
        </form>
        <notifications group="subscribe" position="bottom right" />
    </div>
</template>

<script>
export default {
  name: "subscribe-form",
  data() {
    return {
      email: "",
      name: "",
      isSuccess: false
    };
  },
  methods: {
    validateBeforeSubmit(evt) {
      evt.preventDefault();
      const self = this;
      this.$validator.validateAll().then(function() {
        if (!self.errors.any()) {
          self.onSubmit(evt);
        }
      });
    },
    onSubmit(evt) {
      evt.preventDefault();
      this.isSuccess = true;
      this.$notify({
        group: "subscribe",
        title: "Newsletter Subscribed",
        text: "Subscribed to our newsletter successfully"
      });
    },
    onReset(evt) {
      evt.preventDefault();
      this.email = "";
      this.name = "";
      this.$nextTick(() => {
        this.$validator.reset();
      });
    }
  }
};
</script>

<style scoped>
.mt2 {
  margin-top: 2rem;
}
.sub-form {
  border-radius: 4px;
  -webkit-box-shadow: 0 2px 6px 0 rgba(34, 34, 34, 0.08),
    0 0 0 0px rgba(0, 0, 0, 0.08);
  box-shadow: 0 2px 6px 0 rgba(34, 34, 34, 0.08), 0 0 0 0px rgba(0, 0, 0, 0.08);
  background: #fff;
  padding: 1.5rem;
  border: 1px solid rgba(0, 0, 0, 0.125);
}
</style>
