<template>
  <div id="signin">
    <h1>Login</h1>
    <p>Hola ingresa a tu cuenta:</p>
    <form action="" method="POST">
        <input type="email" name="field1" placeholder="Email" require>
        <input type="password" name="field2" placeholder="Contraseña" required>
        <input type="submit" value="Ingresar" />
    </form>
  </div>
</template>

<script>
export default {
    name:'SignIn'
}
</script>

<style scoped>
#signin{
	font: 95% Arial, Helvetica, sans-serif;
	max-width: 600px;
	margin: 10px auto;
	padding: 16px;
	background: #F7F7F7;
}

#signin p{
	background: #43D1AF;
	padding: 20px 2px;
	font-size: 140%;
	font-weight: 300;
	text-align: center;
	color: #fff;
	margin: 16px 16px 16px 16px;
}


</style>