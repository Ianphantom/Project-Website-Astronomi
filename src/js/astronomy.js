import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/astronomy.css'
import 'bootstrap';
import '../../components/NavBar.js';
import '../../components/AstromBar.js';
import * as api from "./api.js";
import { searchAstronomy } from'./api.js';
window.searchAstronomy  = searchAstronomy;
window.addEventListener('load', api.getAstronomy(api.astrom_default));