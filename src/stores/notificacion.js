import { ref, watch, watchEffect } from "vue";
import { defineStore } from "pinia";

export const useNotificacionStore = defineStore("notificacion", () => {

   const texto = ref('');
   const error = ref(false);
   const mostrar = ref(false);

   // quitar la notificacion despues de 3 segundos
   watch(mostrar, () => {
      if (mostrar.value) {
         setTimeout(() => {
            texto.value = '';
            error.value = false;
            mostrar.value = false;
         }, 3000);
      }
   })
   // watchEffect(() => {
   //    if (mostrar.value) {
   //       setTimeout(() => {
   //          texto.value = '';
   //          error.value = false;
   //          mostrar.value = false;
   //       }, 3000);
   //    }
   // })

   return {
      texto,
      error,
      mostrar,
      // $reset
   }
})