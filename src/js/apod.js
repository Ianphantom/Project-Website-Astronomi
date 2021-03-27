import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/apod.css'
import 'bootstrap';
import '../../components/NavBar.js';
import '../../components/ApodContent.js';
import * as api from "./api.js";
import { saveNasaPictures } from'./api.js';
window.saveNasaPictures  = saveNasaPictures;
document.addEventListener("DOMContentLoaded", function() {
    loadNav();
   
    function loadNav() {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status != 200) return;
   
          // Muat daftar tautan menu
          document.querySelectorAll(".navigasi").forEach(function(elm) {
            elm.innerHTML = xhttp.responseText;
          });
        }
      };
      xhttp.open("GET", "../../pages/apodNav.html", true);
      xhttp.send();
    }

    let page = window.location.hash.substr(1);
    if (page === "" || page == "apodcard"){
        api.getAPOD();
    }
    
});
