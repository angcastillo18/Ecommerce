<template>
  <div id="signin">
    <h1>Login</h1>
    <p>Hola ingresa a tu cuenta:</p>
    <form @submit.prevent="login"  method="POST">
		<p v-if="errors.length">
			<b>Por favor, corrija el(los) siguiente(s) error(es):</b>
			<ul>
			<li v-for="error in errors">{{ error }}</li>
			</ul>
		</p>
        <input v-model="email" type="email" name="field1" placeholder="Email" >
        <input v-model="password" type="password" name="field2" placeholder="Contraseña" >
        <input v-show="!loading" type="submit" value="Ingresar" />
		<loader v-show="loading" />
    </form>
  </div>
</template>

<script>
//importamos axios
import axios from 'axios';
//importar componentes
import loader from '@/components/Loader.vue'
//importamos mapmutations
import { mapMutations } from 'vuex'
export default {
	name:'SignIn',
	components:{
		loader
	},
	data() {
		return {
			errors: [],
			email: null,
			password: null,
			loading:false
		}
	},
	methods:{
		...mapMutations(['setShowModal','setIsLogged']),
		checkForm() {
			//console.log(this.email);
			this.errors = [];
			//null or empty == true
			if (!this.email) {
				this.errors.push('El correo electrónico es obligatorio.');
			} else if (!this.validEmail(this.email)) {
				this.errors.push('El correo electrónico debe ser válido.');
			}

			if (!this.password) {
				this.errors.push("La contraseña es obligatoria.");
			}

			if (!this.errors.length) {
				return true;
			}
/* 			//cancela el evento,cualquier acción por defecto que deba producirse no ocurrira
			e.preventDefault(); */
		},
		validEmail: function (email) {
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		//metodo test , prueba si el patron existe
		return re.test(email);
		},
		login(){
			this.loading=true;
			if(this.checkForm()){
				axios.post('https://ecommerce-auth-api.herokuapp.com/api/users/signin',{
					email:this.email,
					password:this.password
				})
				.then(res=>{
					//console.log(res.status);
					if(res.status==200){
						this.setShowModal(false);
						this.setIsLogged(true);
					}
					this.$cookies.set('userToken',res.data.data);
				})
				.catch(error=>{
					    if (error.response) {
							// The request was made and the server responded with a status code
							// that falls out of the range of 2xx
							this.errors.push(error.response.data.data);
							//console.log(error.response.data.data);
						} else if (error.request) {
							// The request was made but no response was received
							// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
							// http.ClientRequest in node.js
							console.log(error.request);
						} else {
							// Something happened in setting up the request that triggered an Error
							console.log('Error', error.message);
						}
							console.log(error.config);
				}).finally(()=>{
					this.loading=false;
				})
			}else{
				this.loading=false;
			}
		}

	}
}
</script>

<style lang="scss" scoped>
#signin{
	font: 95% Arial, Helvetica, sans-serif;
	max-width: 600px;
	margin: 0 auto;
	padding: 16px;
	background: #F7F7F7;
  h1{
    margin-top: 15px;
  }
  p{
    background: #43D1AF;
    padding: 20px 0;
    font-size: 140%;
    font-weight: 300;
    text-align: center;
    color: #fff;
    margin: 16px 0px 16px 0px;
  }
  form{
	  p{
		  background-color: #DC3545;
	  }
  }
}

</style>