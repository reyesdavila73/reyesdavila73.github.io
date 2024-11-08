//@ts-chec
// import { baseURL} from './base-service.js'
import { BaseService } from './base-service.js'
export class ProductService extends BaseService {
    static getAll(){
        console.log(this.baseURL)
    }
}