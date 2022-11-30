<template>
  <div id="app">
    <div class="container">
      <form>
        <div class="form-group">
          <h1>{{ title }}</h1>
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            v-model="email"
            class="form-control"
            :class="{ 'is-invalid' : $v.email.$error }"
            @blur="$v.email.$touch()"
          >
        </div>
        <div class="invalid-feedback" v-if="!$v.email.required">
          Это обязательное поле
        </div>
        <div class="invalid-feedback" v-if="!$v.email.email">
          Введите корректный email
        </div>

      </form>
    </div>

  </div>
</template>

<script>

import { required, email } from 'vuelidate/lib/validators'


export default {
  name: 'app',
  data () {
    return {
      title: 'Custom form',
      email: ''
    }
  },
  validations: {
    email: {
      required,
      email
    },
  }
}
</script>

<style scoped>
 .container{
   padding-top: 30px;
 }
 #email{
   width: 400px;
 }
 .invalid-feedback {
   width: 100%;
   margin-top: 0.25rem;
   font-size: .875em;
   color: #dc3545;
   display: block;
 }

</style>
