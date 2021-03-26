const apikey = "TXr4zXrvXbcfdc1C1b6qBw4IbLArAeDyCSZmNvUZ";
const apod_url = `https://api.nasa.gov/planetary/apod?api_key=${apikey}&count=10`;

const status = response => {
    if(response.status !== 200){    
        console.log("Error : " + response.status);
        return Promise.reject(new Error(response.statusText));
    }else{
        return Promise.resolve(response);
    }
}

const json = response => {
    return response.json();
}

const error = error => {
    console.log("Error" + error);
}

const fetchAPI = url => {
    return fetch(url)
    .then(status)
    .then(json)
    .catch(error)
}

const getAPOD = () =>{
    fetchAPI(apod_url)
    .then(data => {
        showApod(data)
    })
    .catch(error =>{
        console.log(error)
    })
}

const showApod = data => {
    let apoddata = "";
    data.forEach(function (apod){
        apoddata += `
        <div class="col-md-10 col-sm-10 mb-5">
            <div class="card h-100">
                <img src="${apod.url}" class="card-img-top" alt="apod image">
                <div class="card-body">
                    <div class="d-flex flex-row justify-content-center">
                        <div class="p-2"><h5 class="card-title text-center">${apod.title}</h5></div>
                        <div class="p-2"><h5 class="card-title text-center">•</h5></div>
                        <div class="p-2"><h5 class="clickable save card-title text-center" onclick="saveNasaPictures()">Save</h5></div>
                    </div>
                    <p class="card-text">${apod.explanation}</p>
                </div>
            </div>
        </div>
        `
    });
    document.getElementById("apod-data").innerHTML = apoddata;
}

document.addEventListener("DOMContentLoaded", function() {
    getAPOD();
})
