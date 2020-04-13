<template>
  <div id="app">
    <NavBar/>
    <router-view/>
    <Modal  />
  </div>
</template>

<script>
//importar componentes
import NavBar from '@/components/NavBar.vue'
import Modal from '@/components/Modal.vue'

  export default {
    components: {
      NavBar,
      Modal
    } 
  }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

/*   list-style: none;
  text-decoration: none; */
}
/*Initial margin an padding del body */
/*  * {
       margin: 0;
       
   } */
body{
  margin:0;
}
h1,h2,h3,h4,h5,h6{
    margin:0;
}
/* Estilos tipo bootstrap */
*,
*::before,
*::after {
  box-sizing: border-box;
}
/* container */
.container {
  width: 100%;
  padding-right: 1rem;
  padding-left: 1rem;
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}
/* container fluid */
.container-fluid {
  width: 100%;
  padding-right: 1rem;
  padding-left: 1rem;
  margin-right: auto;
  margin-left: auto;
}
/* row */
.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -0.75rem;
  margin-left: -0.75rem;
}

.row > * {
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
  padding-right: 0.75rem;
  padding-left: 0.75rem;
}
/* columnas */
.col {
  flex: 1 0 0%;
  min-width: 0;
}
.col-1 {
  flex: 0 0 auto;
  width: 8.333333%;
}

.col-2 {
  flex: 0 0 auto;
  width: 16.666667%;
}

.col-3 {
  flex: 0 0 auto;
  width: 25%;
}

.col-4 {
  flex: 0 0 auto;
  width: 33.333333%;
}

.col-5 {
  flex: 0 0 auto;
  width: 41.666667%;
}

.col-6 {
  flex: 0 0 auto;
  width: 50%;
}

.col-7 {
  flex: 0 0 auto;
  width: 58.333333%;
}

.col-8 {
  flex: 0 0 auto;
  width: 66.666667%;
}

.col-9 {
  flex: 0 0 auto;
  width: 75%;
}

.col-10 {
  flex: 0 0 auto;
  width: 83.333333%;
}

.col-11 {
  flex: 0 0 auto;
  width: 91.666667%;
}

.col-12 {
  flex: 0 0 auto;
  width: 100%;
}
/* button */
.button{
  font-weight:400;
  padding:0.7em 1.7em;
  color:#FFFFFF;
  border-radius:0.2em;
  text-decoration:none;
  background-color:#3369ff;
  border: none;
  cursor: pointer;
  display:inline-block;
}
/* input forms */
input[type="email"],
input[type="password"],
input[type="text"],
input[type="number"]{
	outline: none;
	box-sizing: border-box;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	width: 100%;
	background: #fff;
	margin-bottom: 4%;
	border: 1px solid #ccc;
	padding: 3%;
	color: #555;
	font: 95% Arial, Helvetica, sans-serif;
}
input[type="submit"]{
	box-sizing: border-box;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	width: 30%;
	padding: 3%;
	background: #43D1AF;
	border-bottom: 2px solid #30C29E;
	border-top-style: none;
	border-right-style: none;
	border-left-style: none;	
	color: #fff;
}
input[type="submit"]:hover{
background: #2EBC99;
}
/* Estilos del componente tabs */
/* estilos del tab */
.tabs-component {
  margin: 0.5em 0;
}

.tabs-component-tabs {
  border: solid 1px #ddd;
  border-radius: 6px;
  margin-bottom: 5px;
}

@media (min-width: 700px) {
  .tabs-component-tabs {
    border: 0;
    align-items: stretch;
    display: flex;
    justify-content: flex-start;
    margin-bottom: -1px;
  }
}

.tabs-component-tab {
  color: #999;
  font-size: 14px;
  font-weight: 600;
  margin-right: 0;
  list-style: none;
}

.tabs-component-tab:not(:last-child) {
  border-bottom: dotted 1px #ddd;
}

.tabs-component-tab:hover {
  color: #666;
}

.tabs-component-tab.is-active {
  color: #000;
}

.tabs-component-tab.is-disabled * {
  color: #cdcdcd;
  cursor: not-allowed !important;
}

@media (min-width: 700px) {
  .tabs-component-tab {
    background-color: #fff;
    border: solid 1px #ddd;
    border-radius: 3px 3px 0 0;
    margin-right: .5em;
    transform: translateY(2px);
    transition: transform .3s ease;
  }

  .tabs-component-tab.is-active {
    border-bottom: solid 1px #fff;
    z-index: 2;
    transform: translateY(0);
  }
}

.tabs-component-tab-a {
  align-items: center;
  color: inherit;
  display: flex;
  padding: .75em 1em;
  text-decoration: none;
}

.tabs-component-panels {
  padding: 0em 0;
}

@media (min-width: 700px) {
  .tabs-component-panels {
    border-top-left-radius: 0;
    background-color: #fff;
    border: solid 1px #ddd;
    border-radius: 0 6px 6px 6px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .05);
    padding: 0em 0em;
  }
}
</style>
