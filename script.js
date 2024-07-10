/* SOLID

S: Principio de responsabilidad unica
O: Principio abierto-cerrado
L: Principio de sustitucion Liskov 
I: Principio de segregacion de interfaz
D: 

*/


/*const main = async () => {
    const request = await fetch("https://api.unsplash.com/photos/",{
        headers: {
            "Authorization": "Client-ID wZvVf9IJmNNsWplxbKyGjxHd7FQ96lAeO9w4btgZC40"
        }
    })
    const data = await request.json()
    data.map((element,index) => {
        const imageElement = document.createElement("img")
        console.log(element)
        imageElement.src = element.urls.regular
        div.appendChild(imageElement)
    })

} */
const dom = new DomHandler("root")
const unplashApi = new UnplashApi("https://api.unsplash.com/photos?client_id=wZvVf9IJmNNsWplxbKyGjxHd7FQ96lAeO9w4btgZC40",dom)
unplashApi.fetchRandomPhotos()