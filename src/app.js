//@ts-check
import ProductCard  from './components/ProductCard.js'
import { ProductService } from './services/product-service.js';
// let productos = [Product, periferico, periferico2]
import Notify from './components/Notify.js';
import CategorieCarr from './components/CategorieCar.js';
import { CategoriesService } from './services/categories-services.js'
import categories from '../resources/categories.js';
import FilterBar from './components/FilterBars.js';

const ProductWrapper = document.getElementById('prodWrap')
const Navigation = document.getElementById('navbar')
const Carnival = document.getElementById('carnival')
const Filters = document.getElementById('filter-list')
const ProductQueryInput = document.getElementById('product-query')

let ActiveFilters = []
let ActiveQuery = ""
const showCategories = () => {
    let categorias = CategoriesService.getSample()
    for (let cat = 0; cat < categorias.length; cat++) {
        let currCat = new CategorieCarr(categorias[cat])
        Carnival?.appendChild(currCat.display())
    }
}

const showAnchors = () => {
    try {
        let anchors = document.getElementById('responsive-anchors')
        let nav = document.getElementById('navbar')
    if (!anchors?.classList.contains("responsive-anchors-container-responsive")) {
        anchors?.classList.add("responsive-anchors-container-responsive");
        nav?.classList.add('show-anchors')
      } else {
        anchors?.classList.remove("responsive-anchors-container-responsive");
        nav?.classList.remove('show-anchors')
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
const showProductsWithFilter = filters => {
    let productos = ProductService.getSampleWithFilters(filters)
    for (let index = 0; index < productos.length; index++) {
        let element = new ProductCard(productos[index]);
        ProductWrapper?.appendChild(element.display())
    }
}
/**
 * 
 * @param {FilterBar} element 
 */
const updateActiveFilters = (element) => {
        if (ActiveFilters.includes(element.id)){
            ActiveFilters.splice(ActiveFilters.indexOf(element.id))
        } else {
            ActiveFilters.push(element.id)
        }
        console.log(ActiveFilters)
        updateProductPool()
}
const updateActiveQuery = () => {
    ActiveQuery = ProductQueryInput?.value.toLowerCase();
    console.log(ActiveQuery)
    updateProductPool()
}
const updateProductPool = () => {
    try {
        ProductWrapper.innerHTML = ""
    } catch (error) {
        console.log(error)
    }
    let filterObject = {
        "categories":ActiveFilters,
        "query":ActiveQuery
    }
    showProductsWithFilter(filterObject)
    
}
const showFilters = () =>{
    let filters = CategoriesService.getSample()
    for (let index = 0; index < filters.length; index++) {
        console.log('new filter')
        let element = new FilterBar(filters[index]);
        let filterbar = element.display()
        filterbar.addEventListener('click', () => updateActiveFilters(element))
        Filters?.appendChild(filterbar)        
    }
}

Navigation?.addEventListener('click', showAnchors)
ProductQueryInput?.addEventListener('change', updateActiveQuery)

window.onload = () => {
    console.log("start on load app...")
    showProducts()
    showCategories()
    showFilters()
}
