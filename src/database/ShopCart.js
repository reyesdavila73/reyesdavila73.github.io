export default class ShopCart {
    constructor(){

    }
    static addToCart(product){
      console.log(product)
      let storage = [];
      let lastStorage = localStorage.getItem('shoppingCart')
      if (lastStorage != 'null') {
        storage = JSON.parse(lastStorage)
      }
      storage.push(product)
      localStorage.setItem('shoppingCart', JSON.stringify(storage))
    }

}
