//@ts-check
import ProductCard  from './components/ProductCard.js'
import { ProductService } from './services/product-service.js';
let Product =  new ProductCard('Computadora', 'una compu guay!', './../assets/image.png');
let periferico =  new ProductCard('Audifonos XML', 'una audifono guay!', './../assets/image.png');
let periferico2 =  new ProductCard('Audifonos XML', 'una audifono guay!', './../assets/image.png');
let productos = [Product, periferico, periferico2]
const ProductWrapper = document.getElementById('prodWrap')

window.onload = () => {
    console.log("start on load app")
}
for (let index = 0; index < productos.length; index++) {
    let element = productos[index];
    let toShow = element.display()
    ProductWrapper?.appendChild(toShow)
    
}
ProductService.getAll()