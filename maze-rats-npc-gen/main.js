$( document ).ready(function() {

    var size = 6;

    $.getJSON("data.json", function (data) {
        $.each(data, function (index, value) {
            switch (index) {
                case "Characters": 
                    if (randNum(0,1) == 0) {
                        document.getElementById("first-name").innerHTML = value.FemaleNames[randNum(0,size-1)];
                    } else {
                        document.getElementById("first-name").innerHTML = value.MaleNames[randNum(0,size-1)];
                    }
                    if (randNum(0,1) == 0) {
                        document.getElementById("last-name").innerHTML = value.UpperClassSurnames[randNum(0,size-1)];
                    } else {
                        document.getElementById("last-name").innerHTML = value.LowerClassSurnames[randNum(0,size-1)];
                    }
                    break;
                case "CivilizedJobs":
                    document.getElementById("job").innerHTML = value[randNum(0,size-1)];
                    break;
                case "Assets":
                    document.getElementById("assets").innerHTML = value[randNum(0,size-1)];
                    break;
                case "Liabilities":
                    document.getElementById("liabilities").innerHTML = value[randNum(0,size-1)];
                    break;  
                case "Goals":
                    document.getElementById("goals").innerHTML = value[randNum(0,size-1)];
                    break; 
                case "Misfortunes":
                    document.getElementById("misfortunes").innerHTML = value[randNum(0,size-1)];
                    break;
                case "Missions":
                    document.getElementById("missions").innerHTML = value[randNum(0,size-1)];
                    break;
                case "Appearances":
                    document.getElementById("appearance").innerHTML = value[randNum(0,size-1)];
                    break;
                case "PhysicalDetails":
                    document.getElementById("details").innerHTML = value[randNum(0,size-1)];
                    break;
                case "Clothing":
                    document.getElementById("clothing").innerHTML = value[randNum(0,size-1)];
                    break;
                case "Personalities":
                    document.getElementById("personality").innerHTML = value[randNum(0,size-1)];
                    break;
                case "Mannerisms":
                    document.getElementById("mannerism").innerHTML = value[randNum(0,size-1)];
                    break;
            }

            console.log(index);
         });
    });
    console.log(randNum(1,10));
});

function randNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}