$( document ).ready(function() {
   makeCharacter();
});

function makeCharacter() {
 
    var size = 24;

    $.getJSON("data.json", function (data) {
        $.each(data, function (index, value) {
            switch (index) {
                case "Characters":
                    if (randNum(0,1)) {
                        document.getElementById("first-name").innerHTML = value.FemaleNames[randNum(0,Object.keys(value.FemaleNames).length-1)];
                    } else {
                        document.getElementById("first-name").innerHTML = value.MaleNames[randNum(0,Object.keys(value.MaleNames).length-1)];
                    }
                    if (randNum(0,1)) {
                        document.getElementById("last-name").innerHTML = value.UpperClassSurnames[randNum(0,Object.keys(value.UpperClassSurnames).length-1)];
                    } else {
                        document.getElementById("last-name").innerHTML = value.LowerClassSurnames[randNum(0,Object.keys(value.LowerClassSurnames).length-1)];
                    }
                    break;
                /*case "CivilizedJobs":
                    document.getElementById("job").innerHTML = value[randNum(0,size-1)];
                    break;*/
                case "Assets":
                    document.getElementById("assets").innerHTML = value[randNum(0,Object.keys(value).length-1)];
                    break;
                case "Liabilities":
                    document.getElementById("liabilities").innerHTML = value[randNum(0,Object.keys(value).length-1)];
                    break;  
                case "Goals":
                    var selection = randNum(0, Object.keys(value).length-1);
                    if (selection == 2) {
                        document.getElementById("goals").innerHTML = "Aquire " + data.Items[randNum(0, Object.keys(value).length - 1)];
                    } else if (selection == 3) {
                        document.getElementById("goals").innerHTML = "Craft " + data.Items[randNum(0, Object.keys(value).length - 1)];
                    } else if (selection == 5) {
                        document.getElementById("goals").innerHTML = "Destroy " + data.Items[randNum(0, Object.keys(value).length - 1)];
                    }
                    else {
                        document.getElementById("goals").innerHTML = value[selection];
                    }
                    break;
                case "Misfortunes":
                    document.getElementById("misfortunes").innerHTML = value[randNum(0,Object.keys(value).length-1)];
                    break;
                case "Missions":
                    document.getElementById("missions").innerHTML = value[randNum(0,Object.keys(value).length-1)];
                    break;
                case "Appearances":
                    document.getElementById("appearance").innerHTML = value[randNum(0,Object.keys(value).length-1)];
                    break;
                case "PhysicalDetails":
                    document.getElementById("details").innerHTML = value[randNum(0,Object.keys(value).length-1)];
                    break;
                case "Clothing":
                    document.getElementById("clothing").innerHTML = value[randNum(0,Object.keys(value).length-1)];
                    break;
                case "Personalities":
                    document.getElementById("personality").innerHTML = value[randNum(0,Object.keys(value).length-1)];
                    break;
                case "Mannerisms":
                    document.getElementById("mannerism").innerHTML = value[randNum(0,Object.keys(value).length-1)];
                    break;
                case "Secrets":
                    var selection = randNum(0, 1);
                    if (selection) {
                        document.getElementById("secrets").innerHTML = data.Misfortunes[randNum(0, size - 1)];
                    } else {
                        document.getElementById("secrets").innerHTML = value[selection];
                    }
                    break;
                case "Reputations":
                    document.getElementById("reputations").innerHTML = value[randNum(0,size-1)];
                    break;
                case "Relationships":
                    document.getElementById("relationships").innerHTML = value[randNum(0,size-1)];
                    break;
                case "Methods":
                    document.getElementById("methods").innerHTML = value[randNum(0,size-1)];
                    break;
                case "Factions":
                    var selection = randNum(0,size-1);
                    if (selection == 21) {
                        document.getElementById("faction-type").innerHTML = data.Personalities[randNum(0, size-1)];
                    } else {
                       document.getElementById("faction-type").innerHTML = value[selection]; 
                    }
                    break;
                case "FactionTraits":
                    document.getElementById("faction-traits").innerHTML = value[randNum(0,size-1)];
                    break;
                case "FactionGoals":
                    document.getElementById("faction-goals").innerHTML = value[randNum(0,size-1)];
                    break;
            }
         });
    });
}

function randNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}