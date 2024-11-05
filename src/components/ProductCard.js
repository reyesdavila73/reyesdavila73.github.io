//@ts-check
class ProductCard {
    name = ""
    desc = ""
    image = ""
    /**
     * 
     * @param {String} name 
     * @param {String} desc short description
     * @param {String} image path to .png file
     */
    new(name, desc, image) {
        this.name = name
        this.desc = desc
        this.image = image
        let component = this.construct_component()
        return component
    }

    construct_component() {
        let base = document.createElement('div')
        let title = document.createElement('h2')
        let desc = document.createElement('p')
        let image = document.createElement('img')
        title.textContent = this.name
        desc.textContent = this.desc
        image.src = this.image
        base.appendChild(image)
        base.appendChild(title)
        base.appendChild(desc)
        return base
    }
}
export default ProductCard