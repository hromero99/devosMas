

class Photo{

    // URL, alt, width, height
    constructor(url,alt,width,height){
        this.url = url
        this.alt = alt
        this.width = width
        this.height = height
    }

    getJson(){
        return {
            url: this.url,
            alt: this.alt,
            width: this.width,
            height: this.height
        }
    }

    getHtmlElement(){

        const img = document.createElement("img")
        img.src=this.url
        img.alt=this.alt
        img.style.height = this.height
        img.style.width = this.width
        return img

    }

    
}