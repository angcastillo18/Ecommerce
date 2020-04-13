<template>
  <div id="modal" v-if="showModal">
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div >
              <div class="modal-header">
                  <button class="modal-default-button button" @click="setShowModal(false)">
                    X
                  </button>
              </div>
              <tabs cache-lifetime="0" :options="{ defaultTabHash: 'first-tab' }">
                  <tab id="first-tab" name="Iniciar Sesión">
                      <SignIn/>
                  </tab>
                  <tab id="second-tab" name="Registrarme">
                      <SignUp/>
                  </tab>
              </tabs>
            </div>
<!--             <div class="modal-footer">
              <slot name="footer">
                
              </slot>
            </div> -->
          </div>
        </div>
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

<style  scoped>

.modal-mask {
  position: absolute;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;

}

.modal-wrapper {
  display: table-cell;
  vertical-align: top;
  
}

.modal-container {
  max-width: 600px;
  margin: 4% auto;
  padding: 5px 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;

}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
  background-color: rgb(250, 40, 40);
}
/* Transiciones */
.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>