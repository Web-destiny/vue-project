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
            :class="validatedEmail"
            @blur="$v.email.$touch()"
          >
        </div>
        <div class="invalid-feedback-custom" v-if="this.$v.email.$error">
          Это обязательное поле
        </div>
        <div class="invalid-feedback-custom" v-if="!$v.email.email">
          Введите корректный email
        </div>
        <div class="valid-feedback-custom" v-if="$v.email.email && $v.email.required">
          Корректный email
        </div>

        <div class="form-group">
          <label for="email">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            class="form-control"
            :class="validatedPassword"
            @blur="$v.password.$touch()"
          >
        </div>
        <div class="invalid-feedback-custom" v-if="!$v.password.minLength">
          Минимальная длина пароля {{ $v.password.$params.minLength.min }} символов. Сейчас {{ password.length }}.
        </div>

      </form>
    </div>
<pre>{{$v}}</pre>
  </div>
</template>

<script>

import { required, email, minLength } from 'vuelidate/lib/validators'


export default {
  name: 'app',
  data () {
    return {
      title: 'Custom form',
      email: '',
      password: '',
    }
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      minLength: minLength(6)
    }
  },
  computed: {
    validatedEmail(){
      // return (this.$v.email.$error) ? 'is-invalid' : 'is-valid'
      if(this.$v.email.$error){
        return 'is-invalid'
      }else if(this.$v.email.email && this.$v.email.required){
        return 'is-valid'
      }
    },
    validatedPassword(){
      if(this.$v.password.$error){
        return 'is-invalid'
      } else if( this.password.length >= this.$v.password.$params.minLength.min ){
        return 'is-valid'
      }

      // { 'is-invalid' : $v.password.$error }
    }
  }
}
</script>

<style scoped>
 .container{
   padding-top: 30px;
 }
 #email, #password{
   width: 400px;
 }
 .invalid-feedback-custom {
   width: 100%;
   margin-top: 0.25rem;
   font-size: .875em;
   color: #dc3545;
 }
 .valid-feedback-custom {
   width: 100%;
   margin-top: 0.25rem;
   font-size: .875em;
   color: #198754;
 }

</style>
