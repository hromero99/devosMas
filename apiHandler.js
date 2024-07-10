

class ApiHandler{

    constructor(url,dom){
        this.url = url
        this.dom=dom
    }
    
    getRequest(processFunction,dom){
       
        fetch(this.url).then((response) => {
            if (response.ok)
                response.json().then((jsonData) => {   
                    processFunction(jsonData,dom)
                })
            
        }).catch((error) => {
            alert("ERROR")
            console.log(error)
        })
    }

    fetchRandomPhotos(){
        //Esta funcion su UNICA responsabilidad seria obtener las fotos de la API y devolverlas en un array de objetos photo
        const process = (data) => {
        }
        this.getRequest(process)
    }

    fetchSinglePhoto(){

    }
}