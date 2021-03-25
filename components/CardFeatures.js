class CardFeatures extends HTMLElement {
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.innerHTML = `
            <div class="container" style="margin-top: 40px;">
                <div class="row align-items-center">
                    <div class="col-md-6">
                        <h1 class="title-features">All Features</h1>
                        <p class="liveBusDesc">You just need to click on the card and see all the information that you need there. Hope that you enjoy this</p>
                    </div>
                    <div class="col-md-6">
                        <div class="row">
                            <div class="col-md-6 col-sm-6" style="margin-bottom: 30px;">
                                <a class="card-links" href="jumlahPenumpang.php?id=1">
                                    <div class="card h-100">
                                        <img src="../assets/image/Image 6.png" class="card-img-top" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">APOD</h5>
                                            <p class="card-text">Astronomi picture of the day</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-md-6 col-sm-6" style="margin-bottom: 30px;">
                                <a class="card-links" href="jumlahPenumpang.php?id=2">
                                    <div class="card h-100">
                                        <img src="../assets/image/Image 4.png" class="card-img-top" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">Insight</h5>
                                            <p class="card-text">Mars data gathered by NASA's Curiosity</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 col-sm-6" style="margin-bottom: 30px;">
                                <a class="card-links" href="jumlahPenumpang.php?id=3">
                                    <div class="card h-100">
                                        <img src="../assets/image/Image 5.png" class="card-img-top" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">Astronomy</h5>
                                            <p class="card-text">Image and Video about the space</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-md-6 col-sm-6" style="margin-bottom: 30px;">
                                <a class="card-links" href="jumlahPenumpang.php?id=4">
                                    <div class="card h-100">
                                        <img src="../assets/image/Image 3.png" class="card-img-top" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">EPIC</h5>
                                            <p class="card-text">Earth Polychromatic Imaging Camera</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
 }
  
 customElements.define("card-features", CardFeatures);