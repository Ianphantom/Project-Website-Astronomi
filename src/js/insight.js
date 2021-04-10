import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/insight.css'
import 'bootstrap';
import '../../components/NavBar.js';
import '../../components/InsightContent';
import * as api from "./api.js";
import { sortInsight } from'./api.js';
window.sortInsight  = sortInsight;
window.addEventListener('load', api.getInsight(api.insight_url));
