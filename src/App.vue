<template>
  <div id="app">
    <div class="container">
      <form @submit.prevent="onSubmit">
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
        <div class="invalid-feedback-custom" v-if="!$v.email.uniqEmail">
          Учётная запись с таким email уже существует
        </div>

        <div class="form-group">
          <label for="password">Password</label>
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
          Минимальная длина пароля {{ $v.password.$params.minLength.min }} символов. Сейчас {{ password.length }}
        </div>

        <div class="form-group">
          <label for="confirmPassword">Confirm password</label>
          <input
            type="password"
            id="confirmPassword"
            v-model="confirmPassword"
            class="form-control"
            :class="validatedConfirmPassword"
            @blur="$v.confirmPassword.$touch()"
          >
        </div>
        <div class="invalid-feedback-custom" v-if="!$v.confirmPassword.sameAs">
          Пароли должны совпадать
        </div>
        <div class="valid-feedback-custom" v-if="this.confirmPassword == this.password && this.$v.password.required">
          Пароли совпадают
        </div>

        <button
          style="margin-top: 20px;"
          class="btn btn-success"
          type="submit"
          :disabled="$v.$invalid"
        >Зарегистрироваться</button>

      </form>
    </div>
<!--<pre>{{$v}}</pre>-->
  </div>
</template>

<script>

import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'


export default {
  name: 'app',
  data () {
    return {
      title: 'Custom form',
      email: '',
      password: '',
      confirmPassword: '',
    }
  },
  methods: {
    onSubmit(){
      console.log('Email', this.email)
      console.log('Password', this.password)
    }
  },
  validations: {
    email: {
      required,
      email,
      uniqEmail: function (newEmail) {
        if(newEmail === '') return true
        return new Promise( ((resolve, reject) => {
              setTimeout(() => {
                const value = newEmail !== 'molevs@mail.ru'
                resolve(value)
              }, 0)
            }
        ))
      },
    },
    password: {
      minLength: minLength(6),
      required
    },
    confirmPassword: {
      sameAs: sameAs('password')
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
    },
    validatedConfirmPassword(){
      if( this.confirmPassword == this.password && this.$v.password.required ){
        return 'is-valid'
      } else if(this.$v.password.$error || !this.$v.confirmPassword.sameAs){
        return 'is-invalid'
      }

      // { 'is-invalid' : $v.password.$error }
    }
  },
}
</script>

<style scoped>
 .container{
   padding-top: 30px;
 }
 #email, #password, #confirmPassword{
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
 .form-group{
   margin-top: 10px;
 }

</style>
