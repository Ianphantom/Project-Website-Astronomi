class InsightContent extends HTMLElement {
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <a class="navbar-brand" style="font-size: 20px;">Sort BY</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item dropdown" style="font-size: 20px;">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            CAMERA
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" onclick="sortInsight('fhaz')">FHAZ</a>
                            <a class="dropdown-item" onclick="sortInsight('rhaz')">RHAZ</a>
                            <a class="dropdown-item" onclick="sortInsight('mast')">MAST</a>
                            <a class="dropdown-item" onclick="sortInsight('chemcam')">CHEMCAM</a>
                            <a class="dropdown-item" onclick="sortInsight('navcam')">NAVCAM</a>
                        </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="result" style="background: #26282F;">
            <div class="container containers" id="result">
                <div class="columns" id="insight-data1"></div>
                <div class="columns" id="insight-data2"></div>
                <div class="columns" id="insight-data3"></div>
            </div>
        </div>
            `;
    }
 }
  
 customElements.define("insight-content", InsightContent);