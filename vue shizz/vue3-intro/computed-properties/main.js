const app = Vue.createApp({
   data() {
      return {
         selectedVariant: 0,
         cart: 0,
         product: 'Socks',
         brand: 'Vue Mastery',
         details: ['50% cotton', '30% wool', '20% polyester'],
         variants: [
            { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity : 50, onSale : true },
            { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity : 0, onSale : false },
         ]
      }
   },
   methods: {
      addToCart() {
         this.cart += 1
      },
      updateImage(variantImage) {
         this.image = variantImage
      },
      updateVariant(index){
         this.selectedVariant = index
      }
   },
   computed: {
      title() {
         return this.brand + ' ' + this.product
      },
      image() {
         return this.variants[this.selectedVariant].image
      },
      inStock() { // 0 is considered false along wit hnull, undefined, NaN
         return this.variants[this.selectedVariant].quanity
      },
      onSale(){
         return this.variants[this.selectedVariant].onSale ? this.title + ' On Sale' : ' '
      },
      description() {
         return this.inStock && this.onSale ? 'In Stock - On sale' : 'In Stock'
      }
   }
})