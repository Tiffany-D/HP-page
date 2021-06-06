    function houseHogwarts() {
            let name = prompt("What's your name?");
            let house = prompt(
                "What house are you in? eg: Gryffindor, Slytherin, Hufflepuff, Ravenclaw"
            );
            if (house === "Gryffindor") {
                alert(
                    " Hi " + name + " Welcome to Hogwarts " + " Congratulations, you're a Gryffindor "
                );
            } else if (house === "Slytherin") {
                alert(
                    " Hi " + name + " Welcome to Hogwarts " + " Congratulations, you're a Slytherin "
                );
            } else if (house === "Hufflepuff") {
                alert(
                    " Hi " + name + " Welcome to Hogwarts " + " Congratulations, you're a Hufflepuff"
                );
            } else if (house === "Ravenclaw") {
                alert(
                    " Hi " + name + " Welcome to Hogwarts " + " Congratulations, you're a Ravenclaw"
                );
            }
        }
        let discoverYourHogwartsHouseOnPottermore = document.querySelector(
            "button"
        );
        discoverYourHogwartsHouseOnPottermore.addEventListener(
            "click",
            houseHogwarts
        );