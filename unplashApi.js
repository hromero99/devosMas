


class UnplashApi extends ApiHandler{

    constructor(url,dom){
        super(url,dom)
        this.dom = dom
    }

    parsePhotos(photosList,dom)/*:Photos[]*/{
        let data = []
        photosList.forEach((photoObj) => {
            data.push(new Photo(
                photoObj.urls.small,
                photoObj.alternative_slugs.es,
                photoObj.width,
                photoObj.heigth
            ))
        })
        console.log(dom)
        dom.writePhotosInHtml(data)
        return data
    }


    fetchRandomPhotos(){
        console.log(this)
        return this.getRequest(this.parsePhotos,this.dom)
    }

}