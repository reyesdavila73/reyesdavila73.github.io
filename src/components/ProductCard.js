//@ts-check
export default class ProductCard {
    name = ""
    desc = ""
    image = ""
    discount = 0
    /**
     * 
     * @param {Object} request 
     * @opt {String} 
     */
    constructor(request) {
        this.name = request.name
        this.desc = request.desc
        this.image = request.img
        if (request.has_disc){
            this.discount = request.discount
        }
    }

    display(){
        this.component = this.construct_component()
        return this.component
    }
    /**
     * 
     * @returns HTMLDiv
     */
    construct_component() {
        let base = document.createElement('div')
        let title = document.createElement('h3')
        let desc = document.createElement('p')
        let imageCont = document.createElement('div')
        let wrapper = document.createElement('div')
        if (this.discount) {
            let discount = document.createElement('div')
            discount.classList.add("discount")
            discount.innerHTML = this.discount.toString() + "%"
            base.appendChild(discount)
        }
        // let image = document.createElement('img')
        title.textContent = this.name
        desc.textContent = this.desc
        imageCont.style.backgroundImage = `url(${this.image})`
        imageCont.classList.add('product-img')
        title.classList.add('no-margin')
        desc.classList.add('no-margin')
        wrapper.appendChild(imageCont)
        wrapper.appendChild(title)
        wrapper.appendChild(desc)
        wrapper.classList.add('card-wrapp')
        base.append(wrapper)
        base.classList.add('item')
        return base
    }
}