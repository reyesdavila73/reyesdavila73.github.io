export default class ShopCart {
    constructor(){

    }
    static addToCart(product){
      let storage = [];
      let lastStorage = localStorage.getItem('shoppingCart')
      if (lastStorage != 'null') {
        storage = JSON.parse(lastStorage)
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
