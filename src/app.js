//@ts-check
import ProductCard  from './components/ProductCard.js'
import { ProductService } from './services/product-service.js';
// let productos = [Product, periferico, periferico2]

import CategorieCarr from './components/CategorieCar.js';
import { CategoriesService } from './services/categories-services.js'
const ProductWrapper = document.getElementById('prodWrap')
const Navigation = document.getElementById('navbar')
const Carnival = document.getElementById('carnival')
 
const showCategories = () => {
    let categorias = CategoriesService.getSample()
    for (let cat = 0; cat < categorias.length; cat++) {
        let currCat = new CategorieCarr(categorias[cat])
        Carnival?.appendChild(currCat.display())
    }
}

const showAnchors = () => {
    try {
        let nav = document.getElementById('navbar')
        console.log(nav)
    if (!nav?.classList.contains("responsive")) {
        nav?.classList.add("responsive");
        console.log()
      } else {
        nav?.classList.remove("responsive");
      }    
    } catch (error) {
       alert(error) 
    }
    
}
const showProducts = () => {
    let productos = ProductService.getSample()
for (let index = 0; index < productos.length; index++) {
    let element = new ProductCard(productos[index]);
    ProductWrapper?.appendChild(element.display())
}
}
Navigation?.addEventListener('click', showAnchors)


window.onload = () => {
    console.log("start on load app...")
    showProducts()
    showCategories()
}