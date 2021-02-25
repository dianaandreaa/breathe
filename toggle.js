window.addEventListener("load", loadScreen);

function loadScreen() {
    console.log("loadScreen");
    document.querySelector(".happy").addEventListener("click", openHappy);
    document.querySelector(".sad").addEventListener("click", openSad);
    document.querySelector(".angry").addEventListener("click", openAngry);
}

//open Happy

function openHappy() {
    console.log("openHappy");
    document.querySelector(".content").classList.add("hidden");

    document.querySelector(".happyscreen").classList.remove("hidden");
    document.querySelector(".goback").addEventListener("click", goBack);
    document.querySelector(".yes").addEventListener("click", openChoice);
}

function goBack() {
    console.log("goBack");
    document.querySelector(".happyscreen").classList.add("hidden");
    document.querySelector(".content").classList.remove("hidden");
}

function openChoice() {
    console.log("openChoice");
    document.querySelector(".happyscreen").classList.add("hidden");
    document.querySelector(".happychoice").classList.remove("hidden");
    document.querySelector(".goback2").addEventListener("click", goBack2);
    
    document.querySelector(".game").addEventListener("click", openGame);
    document.querySelector(".comic").addEventListener("click", openComic);
    document.querySelector(".read").addEventListener("click", openRead);
}
function goBack2() {
    console.log("goBack2");
    document.querySelector(".happychoice").classList.add("hidden");
    document.querySelector(".content").classList.remove("hidden");
}

function openComic() {
    console.log("openComic");
    document.querySelector(".happyscreen").classList.add("hidden");
    document.querySelector(".happycomic").classList.remove("hidden");
    document.querySelector(".gobackhappy4").addEventListener("click", goBackhappy4);
}    

function goBackhappy4() {
    console.log("goBackhappy4");
    document.querySelector(".happycomic").classList.add("hidden");
    document.querySelector(".happychoice").classList.remove("hidden");
    }


    
function openGame() {
    console.log("openGame");
    document.querySelector(".happychoice").classList.add("hidden");
    document.querySelector(".happygame").classList.remove("hidden");
    document.querySelector(".goback3").addEventListener("click", goBack3);
    
    document.querySelector(".game1").addEventListener("click", loadTic);
    document.querySelector(".game3").addEventListener("click", loadFlower);
    
}
function goBack3() {
    console.log("goBack");
    document.querySelector(".happygame").classList.add("hidden");
    document.querySelector(".happychoice").classList.remove("hidden");
}
function loadTic() {
    document.querySelector(".happygame").classList.add("hidden");
    document.querySelector(".happytic").classList.remove("hidden");
    
    }

function loadFlower() {
    console.log("loadFlower");
    document.querySelector(".happygame").classList.add("hidden");
    document.querySelector(".happyflower").classList.remove("hidden");

}

//open Sad

function openSad() {
    console.log("openSad");
    document.querySelector(".content").classList.add("hidden");

    document.querySelector(".sadscreen").classList.remove("hidden");
    document.querySelector(".gobacksad").addEventListener("click", goBacksad);
    document.querySelector(".yessad").addEventListener("click", openChoicesad);
}

function goBacksad() {
    console.log("goBacksad");
    document.querySelector(".sadscreen").classList.add("hidden");
    document.querySelector(".content").classList.remove("hidden");
}

function openChoicesad() {
    console.log("openChoice");
    document.querySelector(".sadscreen").classList.add("hidden");
    document.querySelector(".sadchoice").classList.remove("hidden");
    document.querySelector(".gobacksad2").addEventListener("click", goBacksad2);
    
    document.querySelector(".gamesad").addEventListener("click", openGamesad);
    document.querySelector(".comicsad").addEventListener("click", openComicsad);
    document.querySelector(".readsad").addEventListener("click", openReadsad);
}
function goBacksad2() {
    console.log("goBacksad2");
    document.querySelector(".sadchoice").classList.add("hidden");
    document.querySelector(".content").classList.remove("hidden");
}

function openReadsad() {
    console.log("openComicsad");
    document.querySelector(".sadchoice").classList.add("hidden");
    document.querySelector(".sadread").classList.remove("hidden");
}

function openComicsad() {
    console.log("openComicsad");
    document.querySelector(".sadchoice").classList.add("hidden");
    document.querySelector(".sadcomic").classList.remove("hidden");
    document.querySelector(".gobacksad4").addEventListener("click", goBacksad4);
}

function goBacksad4() {
    console.log("goBacksad4");
    document.querySelector(".sadcomic").classList.add("hidden");
    document.querySelector(".sadchoice").classList.remove("hidden");
    }

function openGamesad() {
    console.log("openGamesad");
    document.querySelector(".sadchoice").classList.add("hidden");
    document.querySelector(".sadgame").classList.remove("hidden");
    document.querySelector(".gobacksad3").addEventListener("click", goBacksad3);
    
    document.querySelector(".game1sad").addEventListener("click", loadTicsad);
    document.querySelector(".game3sad").addEventListener("click", loadFlowersad);
    
}

function goBacksad3() {
    console.log("goBacksad3");
    document.querySelector(".sadgame").classList.add("hidden");
    document.querySelector(".sadchoice").classList.remove("hidden");
}

function loadTicsad() {
    document.querySelector(".sadgame").classList.add("hidden");
    document.querySelector(".sadtic").classList.remove("hidden");

}

function loadFlowersad() {
    document.querySelector(".sadgame").classList.add("hidden");
    document.querySelector(".sadflower").classList.remove("hidden");

}


//open Angry

function openAngry() {
    console.log("openangry");
    document.querySelector(".content").classList.add("hidden");

    document.querySelector(".angryscreen").classList.remove("hidden");
    document.querySelector(".gobackangry").addEventListener("click", goBackangry);
    document.querySelector(".yesangry").addEventListener("click", openChoiceangry);
}

function goBackangry() {
    console.log("goBackangry");
    document.querySelector(".angryscreen").classList.add("hidden");
    document.querySelector(".content").classList.remove("hidden");
}

function openChoiceangry() {
    console.log("openChoiceangry");
    document.querySelector(".angryscreen").classList.add("hidden");
    document.querySelector(".angrychoice").classList.remove("hidden");
    document.querySelector(".gobackangry2").addEventListener("click", goBackangry2);

    document.querySelector(".gameangry").addEventListener("click", openGameangry);
    document.querySelector(".comicangry").addEventListener("click", openComicangry);
    document.querySelector(".readangry").addEventListener("click", openReadangry);
}    

function goBackangry2() {
console.log("goBackangry2");
document.querySelector(".angrychoice").classList.add("hidden");
document.querySelector(".content").classList.remove("hidden");
}

function openComicangry() {
    console.log("openComicangry");
    document.querySelector(".angryscreen").classList.add("hidden");
    document.querySelector(".angrycomic").classList.remove("hidden");
    document.querySelector(".gobackangry4").addEventListener("click", goBackangry4);
}    

function goBackangry4() {
    console.log("goBackangry4");
    document.querySelector(".angrycomic").classList.add("hidden");
    document.querySelector(".angrychoice").classList.remove("hidden");
    }

function openGameangry() {
    console.log("openGameangry");
    document.querySelector(".angryscreen").classList.add("hidden");
    document.querySelector(".angrygame").classList.remove("hidden");
    document.querySelector(".gobackangry3").addEventListener("click", goBackangry3);

    document.querySelector(".game1angry").addEventListener("click", loadTicangry);
    document.querySelector(".game3angry").addEventListener("click", loadFlowerangry);
    
}    

function goBackangry3() {
console.log("goBackangry3");
document.querySelector(".angrygame").classList.add("hidden");
document.querySelector(".angrychoice").classList.remove("hidden");
}

function loadTicangry() {
    document.querySelector(".angrygame").classList.add("hidden");
    document.querySelector(".angrytic").classList.remove("hidden");
    
    }
function loadFlowerangry() {
    document.querySelector(".angrygame").classList.add("hidden");
    document.querySelector(".angryflower").classList.remove("hidden");

}
