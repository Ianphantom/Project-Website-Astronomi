class DescBar extends HTMLElement {
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.innerHTML = `
        <div class="container con-desc">
            <div class="desc">
                <h1 class="title">Get Closer</h1>
                <h3 class="title-desc">With The Space</h3>
                <p class="more-info">Look closer to the space with our brand new website that will help you to experience and see all the space's things</p>
                <div>
                <button class="button-more" onclick="window.location.href='card.html'">START HERE</button>
                </div>
            </div>
        </div>
            `;
    }
 }
  
 customElements.define("desc-bar", DescBar);