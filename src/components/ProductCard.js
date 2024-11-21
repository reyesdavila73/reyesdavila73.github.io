//@ts-check
import Notify from "./Notify.js"
import ShopCart from "../database/ShopCart.js"
export default class ProductCard {
    name = ""
    desc = ""
    image = ""
    dialog_id = ""
    discount = 0
    product_object = {}
    price = 0
    /**
     * 
     * @param {Object} request 
     * @opt {String} 
     */
    constructor(request) {
        this.product_object = request
        this.name = request.name
        this.desc = request.desc
        this.price = request.price
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
        let buyBtn = document.createElement('div')
        base.append(this.create_dialog())
        buyBtn.classList.add('at-card-buyBtn')
        buyBtn.innerText = "buy now!"
        buyBtn.addEventListener('click', () => {
            let dialogElement = document.getElementById(this.dialog_id)
            dialogElement?.showModal()
        })
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
        wrapper.appendChild(buyBtn)
        base.append(wrapper)
        base.classList.add('item')
        return base
    }
    create_dialog(){
        let dialog = document.createElement('dialog')
        dialog.classList.add('product-modal')
        this.dialog_id = `prod-dialog-${Math.random()  * 1000}`
        dialog.setAttribute('id', this.dialog_id)
        try {
            let container = document.createElement('div')
            let closeBtn = document.createElement('i')
            closeBtn.innerHTML = "x"
            closeBtn.classList.add('close-modal-btn')
            closeBtn.addEventListener('click', () =>{
                document.getElementById(this.dialog_id)?.close()
            })
            let image = document.createElement('div')
            image.style.backgroundImage = `url(${this.image})`
            image.classList.add('modal-image')
            let title = document.createElement('h3')
            title.classList.add('modal-title')
            title.innerText = this.name
            let description = document.createElement('p')
            description.classList.add('modal-description')
            description.innerHTML = this.desc
            let btnContainer = document.createElement('div')
            btnContainer.classList.add('modal-btn-container')
            let buyBtn = document.createElement('div')
            buyBtn.classList.add('modal-buy-btn')
            buyBtn.innerText = "Buy"
            buyBtn.addEventListener('click', () => {
                ShopCart.setToBuy(this);
                window.location.href = '/src/pages/buy-now.html'
            })
            let addToShopCar = document.createElement('div')
            addToShopCar.classList.add('modal-shop-car-btn')
            addToShopCar.innerText = "Add to Shopping Car"
            addToShopCar.addEventListener('click', () => {
                document.getElementById(this.dialog_id)?.close()
                Notify.info('elemento agregado al carrito')
                ShopCart.addToCart(this)
                // ShopCart.set('element', 'one')
            })
            btnContainer.appendChild(addToShopCar)
            btnContainer.appendChild(buyBtn)
            let modalInfoWrapper = document.createElement('div')
            modalInfoWrapper.classList.add('modal-info-wrapper')
            modalInfoWrapper.appendChild(title)
            modalInfoWrapper.appendChild(description)
            modalInfoWrapper.appendChild(btnContainer)
            container.classList.add('modal-container')
            container.appendChild(image)
            container.appendChild(modalInfoWrapper)
            container.appendChild(closeBtn)
            dialog.appendChild(container)
        } catch (error) {
            console.log(error)
            dialog.innerHTML = "modal not found :("
        }
        return dialog 
    }
}