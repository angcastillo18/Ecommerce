<template>
  <div id="signup">
    <h1>Registro</h1>
    <p>Ingresa tu email, dni, celular y contraseña para registrarte:</p>
    <form @submit="checkForm" action="" method="POST">
        <p v-if="errors.length">
          <b>Por favor, corrija el(los) siguiente(s) error(es):</b>
          <ul>
          <li v-for="error in errors">{{ error }}</li>
          </ul>
        </p>
        <input v-model="name" type="text" name="name" placeholder="Nombre" required>
        <input v-model="lastName" type="text" name="lastName" placeholder="Apellidos" required>
        <input v-model="email" type="email" name="email" placeholder="Email" required>
        <input v-model="phone" type="number" name="phone" placeholder="Celular" required>
        <input v-model="password" type="password" name="password" placeholder="Contraseña" required>
        <input v-model="confirmPassword" type="password" name="confirmPassword" placeholder="Confirmar contraseña" required>
        <input  type="submit" value="Registrar" />
    </form>
  </div>
</template>

<script>
export default {
    name:'SignUp',
    data() {
      return {
        errors: [],
        name:null,
        lastName:null,
        email: null,
        phone:null,
        password: null,
        confirmPassword:null
      }
    },
    methods: {
      checkForm: function (e) {
        console.log(this.email);
        this.errors = [];
        //null or empty == true
        if (!this.name) {
          this.errors.push("El nombre es obligatorio.");
        }
        if (!this.lastName) {
          this.errors.push("El apellido es obligatorio.");
        }
        if (!this.email) {
          this.errors.push('El correo electrónico es obligatorio.');
        } else if (!this.validEmail(this.email)) {
          this.errors.push('El correo electrónico debe ser válido.');
        }

        if (!this.phone) {
          this.errors.push("El número de celular es obligatorio.");
        }
        if (!this.password) {
          this.errors.push("La contraseña es obligatoria.");
        }
        
        if (!this.confirmPassword) {
          this.errors.push("La contraseña de confirmación es obligatoria.");
        }else if(this.password!==this.confirmPassword){
          this.errors.push("Las contraseñas no coinciden.");
        }

        if (!this.errors.length) {
          return true;
        }
        //cancela el evento,cualquier acción por defecto que deba producirse no ocurrira
        e.preventDefault();
      },
      validEmail: function (email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      //metodo test , prueba si el patron existe
      return re.test(email);
      }
    },
}
</script>

<style lang="scss" scoped>
#signup{
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