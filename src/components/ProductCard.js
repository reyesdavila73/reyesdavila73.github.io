//@ts-check
export default class ProductCard {
    name = ""
    desc = ""
    image = ""
    /**
     * 
     * @param {String} name 
     * @param {String} desc short description
     * @param {String} image path to .png file
     */
    constructor(name, desc, image) {
        this.name = name
        this.desc = desc
        this.image = image
        this.component = this.construct_component()
    }

    display(){
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
        // let image = document.createElement('img')
        title.textContent = this.name
        desc.textContent = this.desc
        imageCont.style.backgroundImage = `url(${this.image})`
        imageCont.classList.add('product-img')
        title.classList.add('no-margin')
        desc.classList.add('no-margin')
        base.appendChild(imageCont)
        base.appendChild(title)
        base.appendChild(desc)
        base.classList.add('item')
        return base
    }
}