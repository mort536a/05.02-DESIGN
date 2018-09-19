let dest = document.querySelector(".retContainer"),

    retter = [],

    kategori = "alle";

document.addEventListener("DOMContentLoaded", hentJson);



// Hent data til HTML //

async function hentJson() {

    let jsonData = await fetch("menukort.json");

    retter = await jsonData.json();

    visRetter();

}



// Filtrering af retter //

document.querySelectorAll(".menu-item").forEach(knap => {

    knap.addEventListener("click", filter)

});



function filter() {

    dest.textContent = "";

    kategori = this.getAttribute("data-kategori");

    visRetter();

}



function visRetter() {

    let temp = document.querySelector(".retTemplate");

    let dest = document.querySelector(".retContainer");



    // Løb menuen igennem og lav en klon //

    retter.forEach(ret => {

        if (ret.kategori == kategori || kategori == "alle") {

            let klon = temp.cloneNode(true).content;



            // Indsæt data i klonen //

            klon.querySelector("[data-navn]").textContent = ret.navn;

            klon.querySelector("[data-billede]").src = "imgs/large/" + ret.billede + "-large.jpg";

            klon.querySelector("[data-billede]").alt = "Billede af " + ret.navn;

            klon.querySelector("#gridKnap").addEventListener("click", () => {

                visKurv(ret);

            });

            klon.querySelector("[data-beskrivelse]").textContent = ret.beskrivelse;

            klon.querySelector("[data-pris]").textContent = ret.pris;

            klon.querySelector("[data-id]").setAttribute("data-id", ret.id);



            // Placer klon i DOM //

            dest.appendChild(klon);

        }
        document.querySelectorAll(".ret").forEach(ret => {
            ret.addEventListener("click", markering);

        })



    });



}


function markering() {
    this.classList.add("borderimg")

}

function visKurv() {
    document.querySelector("#kurv").style.display = "block";

}

// Modal view af individuel ret //

//function visModal(retten) {
//
//
//
//    let modal = document.querySelector("#modal");
//
//    modal.classList.add("vis");
//
//    modal.querySelector(".modal-navn").textContent = retten.navn;
//
//    modal.querySelector(".modal-billede").src = "imgs/large/" + retten.billede + "-large.jpg";
//
//    modal.querySelector(".modal-billede").alt = "Foto af" + retten.navn;
//
//    modal.querySelector(".modal-beskrivelse").textContent = retten.beskrivelse;
//
//    modal.querySelector(".modal-pris").textContent = "Pris " + retten.pris + " DKK";
//
//    modal.querySelector("button").addEventListener("click", skjulModal);
//
//    console.log(retten);
//
//}
//
//
//
//function skjulModal() {
//
//    document.querySelector("#modal").classList.remove("vis");
//
//}
