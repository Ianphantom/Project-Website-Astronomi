class AstromBar extends HTMLElement {
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.innerHTML = `
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">Nasa Images and Video Library</h1>
                <div class="input-group mb-3 mt-3" style="width: 80%; margin: 0 auto;">
                    <input type="text" class="form-control query" id="query" placeholder="Ex: Orion">
                    <div class="input-group-append">
                    <button class="btn" type="button" onclick="searchAstronomy(document.getElementById('query').value)">Cari</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="result" style="background: #26282F;">
            <div class="container containers" id="result">
                <div class="columns" id="result1"></div>
                <div class="columns" id="result2"></div>
                <div class="columns" id="result3"></div>
            </div>
        </div>
            `;
    }
 }
  
 customElements.define("astrom-bar", AstromBar);