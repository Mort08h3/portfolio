function mediaQuery(x) {
    if (x.matches) { // hvis media query matcher
        document.body.style.backgroundColor = "yellow";
        deskUp();
    } else {
        document.body.style.backgroundColor = "pink";
        burgerUp();
    }
}

var x = window.matchMedia("(min-width: 770px)")
mediaQuery(x) // Call listener function at run time
x.addListener(mediaQuery) // Attach listener function on state changes
//--------------------------Desktop----------------------------------------//
function deskUp() {
    console.log("deskUp")

    //-------------------remove forrige listeners-----------------//
    document.querySelector("#tema2").removeEventListener("mouseout", deskUp);

    document.querySelector("#tema3").removeEventListener("mouseout", deskUp);

    document.querySelector("#tema4").removeEventListener("mouseout", deskUp);

    document.querySelector("#tema5").removeEventListener("mouseout", deskUp);

    //-------------------skjul andre menuer--------------->
    document.querySelector("#tema2").classList.add("skjul")
    document.querySelector("#tema3").classList.add("skjul")
    document.querySelector("#tema4").classList.add("skjul")
    document.querySelector("#tema5").classList.add("skjul")

    //-------------------- aktiver dropdown-----------//
    document.querySelector("#links").classList.remove("skjul")

    //---------------------add eventlistener mouseover---> tema2-------------//
    document.querySelector("#tema2_link").addEventListener("mouseover", visTema2D);

    //---------------------add eventlistener---> tema2-------------//
    document.querySelector("#tema3_link").addEventListener("mouseover", visTema3D);
    //---------------------add eventlistener---> tema2-------------//
    document.querySelector("#tema4_link").addEventListener("mouseover", visTema4D);
    //---------------------add eventlistener---> tema2-------------//
    document.querySelector("#tema5_link").addEventListener("mouseover", visTema5D);
}

//------------------------------------vis tema--------------------//

function visTema2D() {
    console.log("visTema2D")
    //----------add skjul på andre------------//

    document.querySelector("#tema5").classList.add("skjul")
    document.querySelector("#tema3").classList.add("skjul")
    document.querySelector("#tema4").classList.add("skjul")

    //----------remove forrige------------//
    document.querySelector("#tema2").removeEventListener("click", visTema2);

    //---------------------hide links-----------------//


    //-------------------- vis subnav-----------//
    document.querySelector("#tema2").classList.remove("skjul")
    //-------------------- mouseout=skjul----> deskUp -----------//
    document.querySelector("#tema2").addEventListener("mouseout", deskUp);

}

function visTema3D() {
    console.log("visTema3D")
    //----------add skjul på andre------------//

    document.querySelector("#tema2").classList.add("skjul")
    document.querySelector("#tema5").classList.add("skjul")
    document.querySelector("#tema4").classList.add("skjul")
    //----------remove forrige------------//
    document.querySelector("#tema3").removeEventListener("click", visTema3);
    //-------------------- vis subnav-----------//
    document.querySelector("#tema3").classList.remove("skjul")
    //-------------------- mouseout=skjul----> deskUp -----------//
    document.querySelector("#tema3").addEventListener("mouseout", deskUp);

}

function visTema4D() {
    console.log("visTema4D")
    //----------add skjul på andre------------//

    document.querySelector("#tema2").classList.add("skjul")
    document.querySelector("#tema3").classList.add("skjul")
    document.querySelector("#tema5").classList.add("skjul")

    //----------remove forrige------------//
    document.querySelector("#tema4").removeEventListener("click", visTema4);
    //-------------------- vis subnav-----------//
    document.querySelector("#tema4").classList.remove("skjul")
    //-------------------- mouseout=skjul----> deskUp -----------//
    document.querySelector("#tema4").addEventListener("mouseout", deskUp);

}

function visTema5D() {
    console.log("visTema5D")
    //----------add skjul på andre------------//

    document.querySelector("#tema2").classList.add("skjul")
    document.querySelector("#tema3").classList.add("skjul")
    document.querySelector("#tema4").classList.add("skjul")

    console.log("visTema5D")
    //----------remove forrige------------//
    document.querySelector("#tema5").removeEventListener("click", visTema2);
    document.querySelector("#tema5").removeEventListener("click", visTema3);
    document.querySelector("#tema5").removeEventListener("click", visTema4);
    document.querySelector("#tema5").removeEventListener("click", visTema5);
    //-------------------- vis subnav-----------//
    document.querySelector("#tema5").classList.remove("skjul")
    //-------------------- mouseout=skjul----> deskUp -----------//
    document.querySelector("#tema5").addEventListener("mouseover", deskOver5);

}

function deskOver5() {
    console.log("deskOver5")
    //-------------remove forrige listeners----------------------------//
    document.querySelector("#tema5").removeEventListener("mouseover", deskOver5);
    //--------------- mouseout ----> deskUp---------------------//
    document.querySelector("#tema5").addEventListener("mouseout", deskUp);


}

//------------------------------------mobile burger menu--------------------//


function burgerUp() {
    console.log("burgerUp")

    //----------remove forrige------------//
    document.querySelector("#menuknap").removeEventListener("click", burgerUp);
    //--------------------- skjul subnavs-----------------//
    document.querySelector("#tema2").classList.add("skjul")
    document.querySelector("#tema3").classList.add("skjul")
    document.querySelector("#tema4").classList.add("skjul")
    document.querySelector("#tema5").classList.add("skjul")

    //-------------------- vælg ikon-----------//
    document.querySelector("#menux").classList.add("skjul")
    document.querySelector("#menuknap").classList.remove("skjul")

    //-------------------- fjern dropdown-----------//
    document.querySelector("#links").classList.add("skjul")



    //----------------add eventlister-----------------//

    document.querySelector("#menuknap").addEventListener("click", burgerDown);
}

function burgerDown() {
    console.log("burgerDown")
    //----------remove forrige------------//
    document.querySelector("#menuknap").removeEventListener("click", burgerDown);

    //-------------------- aktiver dropdown-----------//
    document.querySelector("#links").classList.remove("skjul")

    //-------------------- vælg ikon-----------//

    document.querySelector("#menux").classList.remove("skjul")
    document.querySelector("#menuknap").classList.add("skjul")




    //---------------------add eventlistener---> burgerUp-------------//
    document.querySelector("#menux").addEventListener("click", burgerUp);

    //---------------------add eventlistener---> tema2-------------//
    document.querySelector("#tema2_link").addEventListener("click", visTema2);

    //---------------------add eventlistener---> tema2-------------//
    document.querySelector("#tema3_link").addEventListener("click", visTema3);
    //---------------------add eventlistener---> tema2-------------//
    document.querySelector("#tema4_link").addEventListener("click", visTema4);
    //---------------------add eventlistener---> tema2-------------//
    document.querySelector("#tema5_link").addEventListener("click", visTema5);
}

//------------------------------------vis tema--------------------//

function visTema2() {
    console.log("visTema2")
    //----------add skjul på andre------------//

    document.querySelector("#tema5").classList.add("skjul")
    document.querySelector("#tema3").classList.add("skjul")
    document.querySelector("#tema4").classList.add("skjul")

    //----------remove forrige------------//
    document.querySelector("#tema2").removeEventListener("click", visTema2);

    //---------------------hide links-----------------//


    //-------------------- vis subnav-----------//
    document.querySelector("#tema2").classList.remove("skjul")

}

function visTema3() {
    console.log("visTema3")
    //----------add skjul på andre------------//

    document.querySelector("#tema2").classList.add("skjul")
    document.querySelector("#tema5").classList.add("skjul")
    document.querySelector("#tema4").classList.add("skjul")
    //----------remove forrige------------//
    document.querySelector("#tema3").removeEventListener("click", visTema3);
    //-------------------- vis subnav-----------//
    document.querySelector("#tema3").classList.remove("skjul")

}

function visTema4() {
    console.log("visTema4")
    //----------add skjul på andre------------//

    document.querySelector("#tema2").classList.add("skjul")
    document.querySelector("#tema3").classList.add("skjul")
    document.querySelector("#tema5").classList.add("skjul")

    //----------remove forrige------------//
    document.querySelector("#tema4").removeEventListener("click", visTema4);
    //-------------------- vis subnav-----------//
    document.querySelector("#tema4").classList.remove("skjul")

}

function visTema5() {

    //----------add skjul på andre------------//

    document.querySelector("#tema2").classList.add("skjul")
    document.querySelector("#tema3").classList.add("skjul")
    document.querySelector("#tema4").classList.add("skjul")

    console.log("visTema5")
    //----------remove forrige------------//
    document.querySelector("#tema5").removeEventListener("click", visTema2);
    document.querySelector("#tema5").removeEventListener("click", visTema3);
    document.querySelector("#tema5").removeEventListener("click", visTema4);
    document.querySelector("#tema5").removeEventListener("click", visTema5);
    //-------------------- vis subnav-----------//
    document.querySelector("#tema5").classList.remove("skjul")
    //-------------------- mouseout=skjul----> burgerUp -----------//

}
