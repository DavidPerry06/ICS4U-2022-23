const app = Vue.createApp({
   data() {
      return {
         cart: [],
         premium: true
      }
   },
   methods: {
      addItem(id) {
         this.cart.push(id)
      },
      removeItem() {
         this.cart.pop()
      }
   }, 
   computed: {
      emptyCart(){
         return cart.length < 0
      }
   }
})