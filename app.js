console.log("Hello world!")

function duel() {
    const p1Health = getAttributeValue("p1-health");
    const p1Armor = getAttributeValue("p1-armor");
    const p1DPS = getAttributeValue("p1-attack");

    const p2Health = getAttributeValue("p2-health");
    const p2Armor = getAttributeValue("p2-armor");
    const p2DPS = getAttributeValue("p2-attack");

    if (p1Health === null ||p1Armor === null || p1DPS === null|| p2DPS === null || p2Armor === null || p2Health === null) [
        alert("Please fill out all fields")
    ]

    let p1Time = (p1Armor * 2 / p2DPS) + ((p1Health - (p2DPS * (p1Armor / p2DPS))) / p2DPS);
    let p2Time = (p2Armor * 2 / p1DPS) + ((p2Health - (p1DPS * (p2Armor / p1DPS))) / p1DPS);

    if (p1Time > p2Time) {
        alert("Player 1 wins! The battle lasted " + p2Time + " seconds.");
    } else if (p2Time > p1Time) {
        alert("Player 2 wins! The battle lasted " + p1Time + " seconds.");
    } else {
        alert("It's a draw!");
    }
}
