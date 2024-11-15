//@ts-chec
// import { baseURL} from './base-service.js'
import Sample from './../../resources/products.js'
import { BaseService } from './base-service.js'
export class ProductService extends BaseService {
    static getAll(){
        console.log(this.baseURL)
    }
    static getSample(){
        return Sample
    }
    /**
     * 
     * @param {Object} filters {
     *  :categories = [],
     *  :query = ""
     *  }
     */
    static getSampleWithFilters(filters){
        let result = Sample;
        let categories = filters.categories
        let query = filters.query
        if (categories.length > 0){
            result = this.removeNonCategorieItems(result, categories)
        } 
        if (filters.query != ""){
            result = this.removeNonQueryItems(result, query)
        }
        return result
    }
    static removeNonCategorieItems(items, filters){
        let result = [];
        for (let index = 0; index < items.length; index++) {
            let currentCat = items[index].categorie
            if (filters.includes(currentCat)){
                result.push(items[index])
            }
        }
        return result
    }
    static removeNonQueryItems(items, query){
        let result = []
        for (let index = 0; index < items.length; index++) {
            let currentName = items[index].name.toLowerCase()
            if(currentName.includes(query)){
                result.push(items[index])
            }
        }
        return result
    }
}