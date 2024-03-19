$("#MarsRover").validate({});

function selectRover() {
    if (document.getElementById("Curiosity").checked) {
        return document.getElementById("Curiosity").value
    }
    if (document.getElementById("Spirit").checked){
        return document.getElementById("Spirit").value
    }
    if (document.getElementById("Opportunity").checked){
        return document.getElementById("Opportunity").value
    }
}

function specifyDate(){
    let tempdate = document.getElementById("picturedate");

    if (document.getElementById("Curiosity").checked) {
        tempdate.value = "2012-08-06";
        tempdate.min = "2012-08-06";
        tempdate.max = "2019-09-28";
    }

    if (document.getElementById("Spirit").checked) {
        tempdate.value = "2004-01-05";
        tempdate.min = "2004-01-05";
        tempdate.max = "2004-03-21";
    }

    if (document.getElementById("Opportunity").checked) {
        tempdate.value = "2004-01-26";
        tempdate.min = "2004-01-26";
        tempdate.max = "2018-06-11";
    }

}



async function searchImage() {
    let roverChoice = selectRover();
    let dateChoice = document.getElementById("picturedate").value;

    var apiKey = "gsz7tNb1JrpQloqHaVdKR7NaahgytsIyPp2cMBSa";

    let myURL =
        "https://api.nasa.gov/mars-photos/api/v1/rovers/" +
        roverChoice +
        "/photos?earth_date=" +
        dateChoice +
        "&page=1&api_key=" + apiKey;

    let msg = await fetch(myURL);

    if (msg.status >= 200 && msg.status <= 299) {
        let msgJSONText = await msg.text();
        let msg1 = JSON.parse(msgJSONText);
        if (msg1.photos.length) {
            for (let i = 1; i < msg1.photos.length; i++) {
                document.getElementById("image" + i).src = msg1.photos[i].img_src;
                document.getElementById("image" + i).title = msg1.photos[i].camera.full_name;
                document.getElementById("anchor" + i).href = msg1.photos[i].img_src;
            }
        }
    }
}

function clearForm() {
    document.getElementById("Curiosity").checked = false;
    document.getElementById("Opportunity").checked = false;
    document.getElementById("Spirit").checked = false;
    document.getElementById("picturedate").value = "";
    document.getElementById("picturedate").min = "";
    document.getElementById("picturedate").max = "";
    document.getElementById("error").innerHTML = "";
    document.getElementById("roverError").innerHTML = "";
    document.getElementById("picturedateError").innerHTML = "";
}