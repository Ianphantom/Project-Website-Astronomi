export const apikey = "TXr4zXrvXbcfdc1C1b6qBw4IbLArAeDyCSZmNvUZ";
export const apod_url = `https://api.nasa.gov/planetary/apod?api_key=${apikey}&count=10`;
export const insight_url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=mast&api_key=${apikey}`
export const insight_fhaz = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=${apikey}`
export const insight_rhaz = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=rhaz&api_key=${apikey}`
export const insight_chemcam = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=chemcam&api_key=${apikey}`
export const insight_navcam = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=navcam&api_key=${apikey}`
export const astrom_default = `https://images-api.nasa.gov/search?year_start=1920&year_end=2021`
// export const astrom_default = `https://images-api.nasa.gov/search?q=orion&page=1&media_type=video&year_start=1920&year_end=2021`
export const news_url = `https://spaceflightnewsapi.net/api/v2/articles?_limit`
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

export const sortInsight = (nav) =>{
    if(nav == "fhaz"){
        getInsight(insight_fhaz);
    }else if(nav == "rhaz"){
        getInsight(insight_rhaz);
    }else if(nav == "chemcam"){
        getInsight(insight_chemcam);
    }else if(nav == "navcam"){
        getInsight(insight_navcam);
    }else{
        getInsight(insight_url);
    }
}

export const getInsight = (url) =>{
    fetchAPI(url)
    .then(data => {
        loader.classList.remove('hidden');
        console.log("berhasil");
        showInsight(data);
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

export const showInsight = data => {
    let insightdata1 = "";
    let insightdata2 = "";
    let insightdata3 = "";
    let i = 0;
    data.photos.forEach(function (insight){
        let col = i % 3;
        switch (col) {
            case 0:
                insightdata1 += 
                `
                    <img class="insight-image" src="${insight.img_src}">
                `
                break;
            case 1:
                insightdata2 += 
                `
                    <img class="insight-image" src="${insight.img_src}">
                `
                break;
            case 2:
                insightdata3 += 
                `
                    <img class="insight-image" src="${insight.img_src}">
                `
        }
        i++;
    });
    document.getElementById("insight-data1").innerHTML = insightdata1;
    document.getElementById("insight-data2").innerHTML = insightdata2;
    document.getElementById("insight-data3").innerHTML = insightdata3;
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


export const getFavorites = () => {
    loader.classList.add('hidden');
    favoritesAPOD = JSON.parse(localStorage.getItem('nasaFavorites'));
    
    showApodFavorites(Object.values(favoritesAPOD));
    
    // document.getElementById("apod-data").innerHTML = favoritesAPOD;
}

export const showApodFavorites = data => {
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
                        <div class="p-2"><h5 class="clickable save card-title text-center" onclick="deleteNasaPictures('${apod.url}')">Delete</h5></div>
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
export function deleteNasaPictures(itemUrl) {
    if (favoritesAPOD[itemUrl]) {
      delete favoritesAPOD[itemUrl];
      // Set Favorites in localStorage
      localStorage.setItem('nasaFavorites', JSON.stringify(favoritesAPOD));
      getFavorites();
    }
}

export const getAstronomy = (url) =>{
    fetchAPI(url)
    .then(data => {
        console.log("berhasil");
        showAstoronomy(data);
    })
    .catch(error =>{
        console.log(error)
    })
}
export const searchAstronomy = (query) =>{
    let url = `https://images-api.nasa.gov/search?q=${query}&page=1&media_type=image,video&year_start=1920&year_end=2021`;
    getAstronomy(url);
}

export const showAstoronomy = (datas) =>{
    console.log(datas.collection.items)
    let astronomydata1 = "";
    let astronomydata2 = "";
    let astronomydata3 = "";
    let i = 1;
    datas.collection.items.forEach(function (apod){
        let col = i % 3;
        // console.log(apod.data[0].nasa_id)
        let content_type = apod.data[0].media_type;
        // console.log(content_type);
        switch (col) {
            case 0:
                if(content_type == "image"){
                    astronomydata3 += `
                    <img src="${apod.links[0].href}" class="card-img-top" alt="apod image">
                    `
                }else{
                    astronomydata3 += `
                    <video controls>
                        <source src="http://images-assets.nasa.gov/video/${apod.data[0].nasa_id}/${apod.data[0].nasa_id}~large.mp4" type="video/mp4">
                    </video>`
                }
                break;
            case 1:
                if(content_type == "image"){
                    astronomydata1 += `
                    <img src="${apod.links[0].href}" class="card-img-top" alt="apod image">
                    `
                }else{
                    astronomydata1 += `
                    <video controls>
                        <source src="http://images-assets.nasa.gov/video/${apod.data[0].nasa_id}/${apod.data[0].nasa_id}~large.mp4" type="video/mp4">
                    </video>`
                }
                break;
            case 2:
                if(content_type == "image"){
                    astronomydata2 += `
                    <img src="${apod.links[0].href}" class="card-img-top" alt="apod image">
                    `
                }else{
                    astronomydata2 += `
                    <video controls>
                        <source src="http://images-assets.nasa.gov/video/${apod.data[0].nasa_id}/${apod.data[0].nasa_id}~large.mp4" type="video/mp4">
                    </video>`
                }
        }
        i++;
    });
    document.getElementById("result1").innerHTML = astronomydata1;
    document.getElementById("result2").innerHTML = astronomydata2;
    document.getElementById("result3").innerHTML = astronomydata3;
}

export const getNews = (url) =>{
    fetchAPI(url)
    .then(data => {
        showNews(data);
    })
    .catch(error =>{
        console.log(error)
    })
}

export const showNews = (data) =>{
    let newsdata = "";
    data.forEach(function (apod){
        newsdata += `
        <div class="col-md-4 col-sm-6 mb-5">
            <div class="card h-100">
                <img src="${apod.imageUrl}" style="height:200px;" class="card-img-top" alt="apod image">
                <div class="card-body">
                    <div class="d-flex flex-row justify-content-center">
                        <a href="${apod.url} target="_blank"><div class="p-2"><h5 class="card-title text-left">${apod.title}</h5></div></a>
                    </div>
                    <p class="card-text">${apod.summary}</p>
                </div>
            </div>
        </div>
        `
    });
    document.getElementById("news").innerHTML = newsdata;
}