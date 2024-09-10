export default class Kartya{

    #kutyaAdat= {}
    #szuloElem

    constructor(adat, szuloElem){ 
        this.#kutyaAdat = adat
        this.#szuloElem = szuloElem
        this.kutyaKiir()
        this.gombElem = $(".valaszt:last")
        this.gombKatt()
    }

    kutyaKiir(){
        this.#szuloElem.append(`
            <div class="card col-lg-4 col-md-6">
                <div class="card-body">
                    Name: <h3 class="card-title">${this.#kutyaAdat.nev}</h3>
                    Sex: <p class="card-text">${this.#kutyaAdat.nem}</p>
                    Age: <p class="card-text">${this.#kutyaAdat.kor}</p>
                </div>
                <button class="valaszt btn btn-success">Kiválaszt</button> 
            </div>
        `)
    }

    gombKatt(){
        this.gombElem.on("click",() => {
            const e = new CustomEvent("kivalaszt", {detail:this.#kutyaAdat})
            window.dispatchEvent(e)

        })
    }


}