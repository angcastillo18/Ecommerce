<template>
  <div id="signup">
    <h1>Registro</h1>
    <p>Ingresa tu email, dni, celular y contraseña para registrarte:</p>
    <form action="" method="POST">
        <input type="text" name="field1" placeholder="Nombre" required>
        <input type="text" name="field2" placeholder="Apellidos" required>
        <input type="email" name="field3" placeholder="Email" required>
        <input type="number" name="field4" placeholder="Celular" required>
        <input type="password" name="field5" placeholder="Contraseña" required>
        <input type="password" name="field6" placeholder="Confirmar contraseña" required>
        <input type="submit" value="Registrar" />
    </form>
  </div>
</template>

<script>
export default {
    name:'SignUp'
}
</script>

<style scoped>
#signup{
	font: 95% Arial, Helvetica, sans-serif;
	max-width: 600px;
	margin: 10px auto;
	padding: 16px;
	background: #F7F7F7;
}
#signup p{
	background: #43D1AF;
	padding: 20px 0;
	font-size: 140%;
	font-weight: 300;
	text-align: center;
	color: #fff;
	margin: 16px 0px 16px 0px;
}


</style>