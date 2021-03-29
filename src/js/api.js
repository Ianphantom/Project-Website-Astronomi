export const apikey = "TXr4zXrvXbcfdc1C1b6qBw4IbLArAeDyCSZmNvUZ";
export const apod_url = `https://api.nasa.gov/planetary/apod?api_key=${apikey}&count=10`;
export let resultArrayAPOD = [];
export let favoritesAPOD = {};
export const loader = document.querySelector('.loader');
export const status = response => {
    if(response.status !== 200){    
        console.log("Error : " + response.status);
        return Promise.reject(new Error(response.statusText));
    }else{
        return Promise.resolve(response);
    }
}

export const json = response => {
    return response.json();
}

export const error = error => {
    console.log("Error" + error);
}

export const fetchAPI = url => {
    return fetch(url)
    .then(status)
    .then(json)
    .catch(error)
}

export const getAPOD = () =>{
    fetchAPI(apod_url)
    .then(data => {
        loader.classList.remove('hidden');
        showApod(data);
        resultArrayAPOD = data;
        console.log(resultArrayAPOD)
    })
    .catch(error =>{
        console.log(error)
    })
}

export const showApod = data => {
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
                        <div class="p-2"><h5 class="clickable save card-title text-center" onclick="saveNasaPictures('${apod.url}')">Save</h5></div>
                    </div>
                    <p class="card-text">${apod.explanation}</p>
                </div>
            </div>
        </div>
        `
    });
    document.getElementById("apod-data").innerHTML = apoddata;
    loader.classList.add('hidden');
}

export const saveNasaPictures = (apodurl) => {
    const saveConfirmed = document.querySelector('.save-confirmed');
    console.log(apodurl);
    resultArrayAPOD.forEach(function(item){
        if(item.url.includes(apodurl) && !favoritesAPOD[apodurl]){
            favoritesAPOD[apodurl] = item;
        }
        saveConfirmed.hidden = false;
        setTimeout(() => {
            saveConfirmed.hidden = true;
        }, 2000);
        localStorage.setItem('nasaFavorites', JSON.stringify(favoritesAPOD));
    })
}