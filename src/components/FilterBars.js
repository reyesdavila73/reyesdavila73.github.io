//@ts-check
export default class FilterBar {
    id = 0
    name = ""
    avilable = ""
    /**
     * 
     * @param {Object} params 
     */
    constructor(params){
        this.name = params.name
        this.id = params.id
    }
    display(){
        this.component = this.create_component()
        return this.component
    }
    create_component(){
        let container = document.createElement('li')
        let name = document.createElement('span')
        let wrap = document.createElement('div')
        let check = document.createElement('input')
        check.setAttribute('type', 'checkbox')
        name.innerText = this.name
        container.classList.add('filter-bar')
        wrap.classList.add('filter-wrap')
        name.classList.add('filter-name')
        wrap.appendChild(name)
        wrap.appendChild(check)
        container.appendChild(name)
        container.addEventListener('click', function toggleSelection() {
            if (!this.classList.contains('filter-selected')){
                this.classList.add('filter-selected')
            } else {
                this.classList.remove('filter-selected')
            }
        })
        return container
    }
}