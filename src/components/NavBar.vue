<template>
  <div id="navbar">
    <nav>
        <ul>
            <li> 
                <!-- link to Home -->
                <router-link to="/">Home</router-link>
              
            <li>
                <!-- link to Market -->
                <router-link to="/market">Market</router-link>
            </li>
            <li>
                <!-- link MyAccount -->
                <button @click="setShowModal(true)" class="button">
                    Mi Cuenta
                </button>
            </li>
        </ul>
    </nav>
  </div>
</template>

<script>
//importamos map mutations
import { mapMutations } from 'vuex'

export default {
    name:'NavBar',
    data(){
      return{
        
      }
    },
    methods: {
      ...mapMutations(['setShowModal']),
    },
}
</script>

<style scoped>

#navbar a {
  font-weight: bold;
  color: #2c3e50;
}

#navbar a.router-link-exact-active {
  background-color:rgb(136, 204, 247) ;
  color: white;
}
ul{
  margin: 0;
  padding: 0;

  display: flex;
  justify-content: center;
}

li{
  list-style-type: none;

  margin: 1vw 2vw;
  font-size: 2.7vh;
  
}

a{
  text-decoration: none;
  padding: 1vw;
}

nav{
    width: 100%;
    background-color: #D6EFFF;
}
</style>

