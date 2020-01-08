function mediaQuery(x) {
    if (x.matches) { // hvis media query matcher
        document.body.style.backgroundColor = "pink";
        deskUp();
        document.querySelector("#start").classList.remove("skjul")
    } else {
        document.body.style.backgroundColor = "pink";
        burgerUp();
        document.querySelector("#start").classList.remove("skjul")
    }
}



var x = window.matchMedia("(min-width: 770px)")
mediaQuery(x) // Call listener function at run time
x.addListener(mediaQuery) // Attach listener function on state changes

//--------------------------//






//--------------------------Desktop----------------------------------------//
function deskUp() {
    console.log("deskUp")




    //-------------------remove forrige listeners-----------------//
    document.querySelector("#cv_link").removeEventListener("mouseover", deskUp);

    document.querySelector("#pages").removeEventListener("mouseover", deskUp);
    document.querySelector("#logo_container").removeEventListener("mouseover", deskUp);
    document.querySelector("#home_link").removeEventListener("mouseover", deskUp);


    //document.querySelector("#tema2").removeEventListener("mouseout", deskUp);

    //document.querySelector("#tema3").removeEventListener("mouseout", deskUp);

    //document.querySelector("#tema4").removeEventListener("mouseout", deskUp);

    //document.querySelector("#tema5").removeEventListener("mouseout", deskUp);

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

    document.querySelector("#pages").addEventListener("mouseover", deskUp);
    document.querySelector("#logo_container").addEventListener("mouseover", deskUp);
    document.querySelector("#home_link").addEventListener("mouseover", deskUp);
    document.querySelector("#cv_link").addEventListener("mouseover", deskUp);




}


//------------------------------------vis tema/home--------------------//


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

    //-------------------- click---> seeT2 -----------//
    document.querySelector("#t2link1").addEventListener("click", seeT2);





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

    //-------------------- click---> seeT3 -----------//
    document.querySelector("#t3link1").addEventListener("click", seeT3);
    document.querySelector("#t3link2").addEventListener("click", seeT3);
    document.querySelector("#t3link3").addEventListener("click", seeT3);
    document.querySelector("#t3link4").addEventListener("click", seeT3);


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

    //-------------------- click---> seeT4 -----------//
    document.querySelector("#t4link1").addEventListener("click", seeT4);


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
    //-------------------- click---> seeT5 -----------//
    document.querySelector("#t5link1").addEventListener("click", seeT5);
    document.querySelector("#t5link2").addEventListener("click", seeT5);




}



function seeT2() {
    console.log("seeT2")
    //----------remove forrige------------//
    document.querySelector("#t2link1").removeEventListener("click", seeT2);


    //----------add skjul på andre------------//

    document.querySelector("#tema2").classList.add("skjul")
    document.querySelector("#tema3").classList.add("skjul")
    document.querySelector("#tema4").classList.add("skjul")
    document.querySelector("#tema5").classList.add("skjul")

    //----------add skjul på andre T------------//
    document.querySelector("#start").classList.add("skjul");

    document.querySelector("#t5").classList.add("skjul");
    document.querySelector("#t3").classList.add("skjul");
    document.querySelector("#t4").classList.add("skjul");


    //-------------------- vis T2-----------//
    document.querySelector("#t2").classList.remove("skjul");


}

function seeT3() {
    console.log("seeT3")
    //----------remove forrige------------//
    document.querySelector("#t3link2").removeEventListener("click", seeT3);
    document.querySelector("#t3link3").removeEventListener("click", seeT3);
    document.querySelector("#t3link4").removeEventListener("click", seeT3);
    document.querySelector("#t3link1").removeEventListener("click", seeT3);

    //----------add skjul på andre------------//

    document.querySelector("#tema2").classList.add("skjul")
    document.querySelector("#tema3").classList.add("skjul")
    document.querySelector("#tema4").classList.add("skjul")
    document.querySelector("#tema5").classList.add("skjul")

    //----------add skjul på andre T------------//
    document.querySelector("#start").classList.add("skjul")

    document.querySelector("#t2").classList.add("skjul")
    document.querySelector("#t5").classList.add("skjul")
    document.querySelector("#t4").classList.add("skjul")

    //-------------------- vis T3-----------//
    document.querySelector("#t3").classList.remove("skjul")


}

function seeT4() {
    console.log("seeT4")
    //----------remove forrige------------//
    document.querySelector("#t4link1").removeEventListener("click", seeT4);

    //----------add skjul på andre------------//

    document.querySelector("#tema2").classList.add("skjul")
    document.querySelector("#tema3").classList.add("skjul")
    document.querySelector("#tema4").classList.add("skjul")
    document.querySelector("#tema5").classList.add("skjul")

    //----------add skjul på andre T------------//
    document.querySelector("#start").classList.add("skjul")

    document.querySelector("#t2").classList.add("skjul")
    document.querySelector("#t3").classList.add("skjul")
    document.querySelector("#t5").classList.add("skjul")

    //-------------------- vis T5-----------//
    document.querySelector("#t4").classList.remove("skjul")


}


function seeT5() {
    console.log("seeT5")
    //----------remove forrige------------//
    document.querySelector("#t5link2").removeEventListener("click", seeT5);

    document.querySelector("#t5link1").removeEventListener("click", seeT5);

    //----------add skjul på sub-navs------------//

    document.querySelector("#tema2").classList.add("skjul")
    document.querySelector("#tema3").classList.add("skjul")
    document.querySelector("#tema4").classList.add("skjul")
    document.querySelector("#tema5").classList.add("skjul")

    //----------add skjul på andre T------------//
    document.querySelector("#start").classList.add("skjul")

    document.querySelector("#t2").classList.add("skjul")
    document.querySelector("#t3").classList.add("skjul")
    document.querySelector("#t4").classList.add("skjul")


    //-------------------- vis T5-----------//
    document.querySelector("#t5").classList.remove("skjul")


}




//------------------------------------mobile burger menu--------------------//


function burgerUp() {
    console.log("burgerUp")



    //----------remove forrige------------//
    document.querySelector("#t5link2").removeEventListener("click", burgerUp);

    document.querySelector("#t3link4").removeEventListener("click", burgerUp);
    document.querySelector("#t3link3").removeEventListener("click", burgerUp);

    document.querySelector("#t3link2").removeEventListener("click", burgerUp);

    document.querySelector("#menuknap").removeEventListener("click", burgerUp);
    document.querySelector("#t5link1").removeEventListener("click", burgerUp);
    document.querySelector("#t4link1").removeEventListener("click", burgerUp);
    document.querySelector("#t3link1").removeEventListener("click", burgerUp);
    document.querySelector("#t2link1").removeEventListener("click", burgerUp);




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

    //-------------------- click---> seeT2M -----------//

    document.querySelector("#t2link1").addEventListener("click", seeT2M);
    document.querySelector("#t2link1").addEventListener("click", burgerUp);


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

    //-------------------- click---> seeT3M -----------//

    document.querySelector("#t3link1").addEventListener("click", seeT3M);
    document.querySelector("#t3link1").addEventListener("click", burgerUp);
    document.querySelector("#t3link2").addEventListener("click", seeT3M);
    document.querySelector("#t3link2").addEventListener("click", burgerUp);
    document.querySelector("#t3link3").addEventListener("click", seeT3M);
    document.querySelector("#t3link3").addEventListener("click", burgerUp);
    document.querySelector("#t3link4").addEventListener("click", seeT3M);
    document.querySelector("#t3link4").addEventListener("click", burgerUp);


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

    //-------------------- click---> seeT5M -----------//

    document.querySelector("#t4link1").addEventListener("click", seeT4M);
    document.querySelector("#t4link1").addEventListener("click", burgerUp);


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

    //-------------------- click---> seeT5M -----------//

    document.querySelector("#t5link1").addEventListener("click", seeT5M);
    document.querySelector("#t5link1").addEventListener("click", burgerUp);
    document.querySelector("#t5link2").addEventListener("click", seeT5M);
    document.querySelector("#t5link2").addEventListener("click", burgerUp);




}

function seeT2M() {
    console.log("seeT2M")
    //----------remove forrige------------//
    document.querySelector("#t2link1").removeEventListener("click", seeT2M);

    //----------add skjul på andre------------//

    document.querySelector("#tema2").classList.add("skjul")
    document.querySelector("#tema3").classList.add("skjul")
    document.querySelector("#tema4").classList.add("skjul")
    document.querySelector("#tema5").classList.add("skjul")

    //----------add skjul på andre T------------//
    document.querySelector("#start").classList.add("skjul")

    document.querySelector("#t5").classList.add("skjul")
    document.querySelector("#t3").classList.add("skjul")
    document.querySelector("#t4").classList.add("skjul")


    //-------------------- vis T2-----------//
    document.querySelector("#t2").classList.remove("skjul")


}

function seeT3M() {
    console.log("seeT3M")
    //----------remove forrige------------//
    document.querySelector("#t3link4").removeEventListener("click", seeT3M);
    document.querySelector("#t3link3").removeEventListener("click", seeT3M);
    document.querySelector("#t3link2").removeEventListener("click", seeT3M);


    document.querySelector("#t3link1").removeEventListener("click", seeT3M);

    //----------add skjul på andre------------//

    document.querySelector("#tema2").classList.add("skjul")
    document.querySelector("#tema3").classList.add("skjul")
    document.querySelector("#tema4").classList.add("skjul")
    document.querySelector("#tema5").classList.add("skjul")

    //----------add skjul på andre T------------//
    document.querySelector("#start").classList.add("skjul")

    document.querySelector("#t2").classList.add("skjul")
    document.querySelector("#t5").classList.add("skjul")
    document.querySelector("#t4").classList.add("skjul")

    //-------------------- vis T3-----------//
    document.querySelector("#t3").classList.remove("skjul")


}

function seeT4M() {
    console.log("seeT4M")
    //----------remove forrige------------//
    document.querySelector("#t4link1").removeEventListener("click", seeT4M);

    //----------add skjul på andre------------//

    document.querySelector("#tema2").classList.add("skjul")
    document.querySelector("#tema3").classList.add("skjul")
    document.querySelector("#tema4").classList.add("skjul")
    document.querySelector("#tema5").classList.add("skjul")

    //----------add skjul på andre T------------//
    document.querySelector("#start").classList.add("skjul")

    document.querySelector("#t2").classList.add("skjul")
    document.querySelector("#t3").classList.add("skjul")
    document.querySelector("#t5").classList.add("skjul")

    //-------------------- vis T5-----------//
    document.querySelector("#t4").classList.remove("skjul")


}


function seeT5M() {
    console.log("seeT5M")
    //----------remove forrige------------//
    document.querySelector("#t5link2").removeEventListener("click", seeT5M);
    document.querySelector("#t5link1").removeEventListener("click", seeT5M);

    //----------add skjul på sub-navs------------//

    document.querySelector("#tema2").classList.add("skjul")
    document.querySelector("#tema3").classList.add("skjul")
    document.querySelector("#tema4").classList.add("skjul")
    document.querySelector("#tema5").classList.add("skjul")

    //----------add skjul på links------------//



    //----------add skjul på andre T------------//
    document.querySelector("#start").classList.add("skjul")

    document.querySelector("#t2").classList.add("skjul")
    document.querySelector("#t3").classList.add("skjul")
    document.querySelector("#t4").classList.add("skjul")


    //-------------------- vis T5-----------//
    document.querySelector("#t5").classList.remove("skjul")

}
