<template>
  <div id="navbar">
    <nav>
        <ul>
          <li class="logo">Ecommerce</li>
          <div class="items">
            <li> 
                <!-- link to Home -->
                <router-link to="/">Home</router-link>
              
            <li>
                <!-- link to Market -->
                <router-link to="/market">Market</router-link>
            </li>
            <li>
                <!-- link MyAccount -->
                <div class="link_myprofile" v-if="isLogged">
                  Soy Angelo  ( ͡° ͜ʖ ͡°)
                </div>
                <button v-else @click="setShowModal(true)" class="button">
                    Mi Cuenta
                </button>
            </li>
            <li >
              <input class="search-icon" type="search" placeholder="search">
            </li>
          </div>
        </ul>
    </nav>
  </div>
</template>

<script>
//importamos map mutations
import { mapMutations } from 'vuex'
//importamos el map state
import {mapState} from 'vuex'
export default {
    name:'NavBar',
    data(){
      return{
        
      }
    },
    methods: {
      ...mapMutations(['setShowModal']),
    },
    computed:{
      ...mapState(['isLogged'])
    }
}
</script>

<style lang="scss" scoped>

/* Estilos NAVBAR */
nav{
  background: #222222;
  padding: 10px 40px 10px 70px;
  border: 1px solid #000;
  border-left: none;
  border-right: none;
  
  ul{
    display: flex;
    list-style: none;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    li{
      margin: auto 20px;
      
    }
    li.logo{
      
        color: white;
        font-size: 30px;
        font-weight: 700;
    } 
    div.items{
      
      display: inline-flex;
      padding: 0 25px;
      a{
        text-decoration: none;
        font-size: 20px;
        font-weight: 600;
        /* padding: 0 12px; */
        color: white;

      }
      a.router-link-exact-active{
          color: #43D1AF;
        }
    }
    .link_myprofile{
      color: white;
    }
    .search-icon{
      height: 40px;
      width: 240px;
      border: none;
      border-radius: 5px ;
      outline: none;
      padding: 0 10px;
      color: #000;
      font-size: 1;
    
    }
  }

}

</style>

