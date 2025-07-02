fetch("./advice.json")
.then( response => response.json())
.then( advice => {

    let text = "Ce n'est pas en devenant Hokage qu'on gagne la reconnaissance des autres, c'est en gagnant la reconnaissance des autres qu'on devient Hokage.";

    function typeText(index) {
        document.querySelector(".change-advice").style.display = "none";
        if ( index < text.length ) {
            document.querySelector(".advice").innerHTML += text[index];
            setTimeout(() => typeText( index + 1 ), 50);
        }
        else {
            document.querySelector(".change-advice").style.display = "flex";
        }
    }

    typeText(0);

    document.querySelector(".change-advice").addEventListener("click", () => {
        let randomIndex = Math.floor( Math.random()*advice.messages.length); 
        document.querySelector(".advice-id").textContent = randomIndex;
        document.querySelector(".advice").innerHTML = "";
        text= '"' + advice.messages[randomIndex] + '"';
        typeText(0);
    });
} );

