import Sample from './../../resources/categories.js'
import { BaseService } from './base-service.js'
export class CategoriesService extends BaseService {
    static getAll(){
        console.log(this.baseURL)
    }
    static getSample(){
        return Sample
    }
}