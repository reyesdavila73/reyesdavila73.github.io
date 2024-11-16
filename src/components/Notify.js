//@ts-check
export default class Notify{
    alert_id = ""
    msg = ""
    /**
     * show a message on top of screen an 
     * desapearce in 3 seconds
     * @param {String} msg a message to show
     */
    static info(msg){
        let alert = document.createElement('div')
        this.alert_id = `alert-info-${(Math.random() * 1000).toFixed()}`
        alert.id = this.alert_id
        alert.classList.add('notify-info')
        alert.classList.add('notify')
        alert.innerText = msg
        document.body.appendChild(alert)
        setTimeout(() => {
            document.getElementById(alert.id)?.remove()
        }, 3000)
    }
    /**
     * 
     * @param {String} msg 
     */
    static alert(msg){
        let alert = document.createElement('div')
        this.alert_id = `alert-info-${(Math.random() * 1000).toFixed()}`
        alert.id = this.alert_id
        alert.classList.add('notify-alert')
        alert.classList.add('notify')
        alert.innerText = msg
        document.body.appendChild(alert)
        setTimeout(() => {
            document.getElementById(alert.id)?.remove()
        }, 3000)
    }
    static warn(msg){
        let alert = document.createElement('div')
        this.alert_id = `alert-info-${(Math.random() * 1000).toFixed()}`
        alert.id = this.alert_id
        alert.classList.add('notify-warn')
        alert.classList.add('notify')
        alert.innerText = msg
        document.body.appendChild(alert)
        setTimeout(() => {
            document.getElementById(alert.id)?.remove()
        }, 3000)
    }
}