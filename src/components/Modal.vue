<template>
  <div id="modal">
    <transition name="fade" appear>
        <div class="modal_overlay" v-if="showModal" @click="setShowModal(false)" ></div>
    </transition>
    <transition name="slide" appear>
        <div class="modal" v-if="showModal">
            <button @click="setShowModal(false)">X</button>
            <SignIn/>
        </div>
    </transition>
  </div>
</template>

<script>
//importamos map mutations
import { mapMutations } from 'vuex'
//importamos map State
import {mapState} from "vuex";
//importar componentes
import SignIn from '@/components/SignIn.vue'
import SignUp from '@/components/SignUp.vue'

export default {
    name:'Modal',
    components: {
      SignIn,
      SignUp
    } ,
    methods: {
      ...mapMutations(['setShowModal'])
    },
    computed:{
    ...mapState(['showModal'])
    }
}
</script>

<style scoped>
/* estilos de la capa oscura */
.modal_overlay{
 position: absolute;
 top: 0;
 left: 0;
 right: 0;
 bottom: 0;
 z-index: 98;
 background-color: rgba(0, 0, 0, 0.3);
}
/* animaciones del modal-overlay- la capa oscura */
.fade-enter-active,
.fade-leave-active {
 transition: opacity .5s;
}

.fade-enter,
.fade-leave-to {
 opacity: 0;
}
/* estilos del modal centrado */
.modal{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 99;
    
    width: 100%;
    max-width: 600px;
    background-color: #FFF;
    border-radius: 16px;
    
    padding: 25px; 
}
/* estilos de la entra y salida del modal */
.slide-enter-active,
.slide-leave-active {
 transition: transform .5s;
}

.slide-enter,
.slide-leave-to {
 transform: translateY(-50%) translateX(100vw);
}
/* Estilos del contenido del modal */
/* Estilos del tab de contenido */

</style>