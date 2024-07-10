

class DomHandler{

    constructor(parentElementId){
        this.parentElementId = parentElementId
        this.parentElement = document.getElementById(parentElementId)
    }


    writePhotosInHtml(photosList){
        photosList.map((photoObj, index) => {
            this.parentElement.appendChild(photoObj.getHtmlElement())
        })
    }
}