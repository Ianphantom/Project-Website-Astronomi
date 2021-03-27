class ApodContent extends HTMLElement {
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.innerHTML = `
        <div class="content">
            <div class="container mt-3">
                <div class="d-flex justify-content-end bd-highlight mb-3 navigasi">
                    <!-- nav -->
                </div>
            </div>
            <div class="apod-title mt-5 mb-5"><h3 class="text-center">Astronomi Picture Of the Day</h3></div>
            <div class="container data">
                <div class="row justify-content-md-center px-3" id="apod-data">
                    <!-- data api -->
                </div>
            </div>
        </div>
        `;
    }
 }
  
 customElements.define("apod-content", ApodContent);