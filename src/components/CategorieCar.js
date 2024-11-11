export default class CategorieCarr {
    id = 0
    name = ""
    image = ""
    constructor(request){
        this.id = request.id
        this.name = request.name
        this.image = request.image
    }
    display(){
        return this.create_component()
    }
    create_component(){
        let base = document.createElement('li')
        let link = document.createElement('a')
        let name = document.createElement('span')
        let image = document.createElement('img')
        link.classList.add("categorie-link")
        base.classList.add('categorie-item')
        base.classList.add('swiper-slide')
        name.classList.add('categorie-name')
        name.innerHTML = this.name
        image.src = this.image
        image.classList.add('cat-wrap')
        link.appendChild(image)
        link.appendChild(name)
        base.appendChild(link)
        return base
    }
}