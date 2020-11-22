
$( document ).ready(function() {
    count = randNum(1,4);
    for(var i=0; i < count; i++){
        house = makeHouse(i);
        peopleCount = randNum(1,5);
        for(var j=0; j < peopleCount; j++) {
            newChar(i, j);
            makeCharacter(i, j);
        }
       
    }
});

function makeCharacter(houseid, id) {
    $.getJSON("data.json", function (data) {
        $.each(data, function (index, value) {
            switch (index) {
                case "Characters":
                    if (randNum(0,1)) {
                        document.getElementById("first-name" + houseid + id).innerHTML = value.FemaleNames[randNum(0,Object.keys(value.FemaleNames).length-1)];
                    } else {
                        document.getElementById("first-name" + houseid + id).innerHTML = value.MaleNames[randNum(0,Object.keys(value.MaleNames).length-1)];
                    }
                    if (randNum(0,1)) {
                        document.getElementById("last-name" + houseid + id).innerHTML = value.UpperClassSurnames[randNum(0,Object.keys(value.UpperClassSurnames).length-1)];
                    } else {
                        document.getElementById("last-name" + houseid + id).innerHTML = value.LowerClassSurnames[randNum(0,Object.keys(value.LowerClassSurnames).length-1)];
                    }
                    break;
                /*case "CivilizedJobs":
                    document.getElementById("job").innerHTML = value[randNum(0,size-1)];
                    break;*/
                case "Goals":
                    var selection = randNum(0, Object.keys(value).length-1);
                    if (selection == 2) {
                        document.getElementById("goals" + houseid + id).innerHTML = "Aquire " + data.Items[randNum(0, Object.keys(value).length - 1)];
                    } else if (selection == 3) {
                        document.getElementById("goals" + houseid + id).innerHTML = "Craft " + data.Items[randNum(0, Object.keys(value).length - 1)];
                    } else if (selection == 5) {
                        document.getElementById("goals" + houseid + id).innerHTML = "Destroy " + data.Items[randNum(0, Object.keys(value).length - 1)];
                    }
                    else {
                        document.getElementById("goals" + houseid + id).innerHTML = value[selection];
                    }
                    break;
                case "Personalities":
                    document.getElementById("personality" + houseid + id).innerHTML = value[randNum(0,Object.keys(value).length-1)];
                    break;
            }
         });
    });
}

function makeHouse(id) {
    var main = document.getElementById("main");

    var houseTitleBox = document.createElement("div");
    houseTitleBox.setAttribute("class", "row");
    var houseTitle = document.createElement("h1");
    var houseText = document.createTextNode("House " + id);
    houseTitle.setAttribute("class", "mw-100");
    houseTitle.appendChild(houseText);
    houseTitleBox.appendChild(houseTitle);
    main.appendChild(houseTitleBox);

    var houseToggle = document.createElement("a");
    houseToggle.setAttribute("href", "#house" + id);
    houseToggle.setAttribute("class", "btn btn-info");
    houseToggle.setAttribute("data-toggle", "collapse");
    var houseToggletext = document.createTextNode("Toggle");
    houseToggle.appendChild(houseToggletext);
    main.appendChild(houseToggle);

    var house = document.createElement("div");
    house.setAttribute("class", "row");
    house.setAttribute("id", "house" + id);
    house.setAttribute("class", "collapse");
    main.appendChild(house);

    return house;
}

function newChar(houseid, id) {
    var outer = document.createElement("div");
    outer.setAttribute("class", "col-md");
    house.appendChild(outer);
    
    var heading = document.createElement("div");
    heading.setAttribute("class", "heading");
    outer.appendChild(heading);

    var firstname = document.createElement("h1");
    firstname.setAttribute("id", "first-name" + houseid + id);
    var lastname = document.createElement("h1");
    lastname.setAttribute("id", "last-name" + houseid + id);
    heading.appendChild(firstname);
    heading.appendChild(lastname);

    var dl = document.createElement("dl");
    var keyinfo = document.createElement("div");
    keyinfo.setAttribute("class", "subtitle");
    var keytext = document.createTextNode("Key Information");
    keyinfo.appendChild(keytext);
    dl.appendChild(keyinfo);
    outer.appendChild(dl);

    var dtpersonality = document.createElement("dt");
    var personalitytext = document.createTextNode("Personality");
    dtpersonality.appendChild(personalitytext);
    dl.appendChild(dtpersonality)
    var ddpersonality = document.createElement("dd");
    ddpersonality.setAttribute("id", "personality" + houseid + id);
    dl.appendChild(ddpersonality);

    var dtgoal = document.createElement("dt");
    var personalitytext = document.createTextNode("Goal");
    dtgoal.appendChild(personalitytext);
    dl.appendChild(dtgoal)
    var ddgoal = document.createElement("dd");
    ddgoal.setAttribute("id", "goals" + houseid + id);
    dl.appendChild(ddgoal);
}

function randNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateAll() {
    for(var i=0; i < count; i++){
        makeCharacter(i);
    }
}

function hideMore() {
    var x = document.getElementById("more");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}