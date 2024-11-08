//@ts-check
import ProductCard  from './components/ProductCard.js'
import { ProductService } from './services/product-service.js';
// let productos = [Product, periferico, periferico2]
const ProductWrapper = document.getElementById('prodWrap')

window.onload = () => {
    console.log("start on load app...")
}
let productos = ProductService.getSample()
for (let index = 0; index < productos.length; index++) {
    let element = new ProductCard(productos[index]);
    ProductWrapper?.appendChild(element.display())
}
