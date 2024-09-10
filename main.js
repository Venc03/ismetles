import { kutya1 } from "./model/adat.js"
import Kartya from "./view/Kartya.js"
import Kartyak from "./view/Kartyak.js"


const tartalom = $(".tartalom")
const kivKuLista = []
const kivElem = $(".kivalasztott")



new Kartyak(kutya1, tartalom)

$(window).on("kivalaszt", (event) => {
    kivKuLista.push(event.detail)
    console.log(kivKuLista)
    new Kartya(event.detail,kivElem)
})



