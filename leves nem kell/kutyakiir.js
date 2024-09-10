export function kutyaKiir(kutya1){
    const tartalom = $(".tartalom")
    tartalom.append(`
        <div class="card col-lg-4 col-md-6">
            <div class="card-body">
                Name: <h3 class="card-title">${kutya1.nev}</h3>
                Sex: <p class="card-text">${kutya1.nem}</p>
                Age: <p class="card-text">${kutya1.kor}</p>
            </div>
            <button class="valaszt btn btn-success">Kiválaszt</button> 
        </div>
    `)
}