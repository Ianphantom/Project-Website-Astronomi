import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/news.css'
import 'bootstrap';
import '../../components/NavBar.js';
import * as api from "./api.js";
window.addEventListener('load', api.getNews(api.news_url));