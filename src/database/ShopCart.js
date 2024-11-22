export default class ShopCart {
    constructor(){

    }
    static addToCart(product){
      console.log(product)
      let storage = [];
      let lastStorage = localStorage.getItem('shoppingCart')
      console.log(lastStorage)
      if (lastStorage != 'null' && lastStorage) {
        storage = JSON.parse(lastStorage)
      } else {
        this.resetCart()
      }
      storage.push(product)
      localStorage.setItem('shoppingCart', JSON.stringify(storage))
    }
    static resetCart(){
      localStorage.setItem('shoppingCart', '[]')
    }
    static removeFromCart(product){

    }
    static setToBuy(product){
      localStorage.setItem('scopedProduct', JSON.stringify(product))
    }

}
