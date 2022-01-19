var template_banner = document.createElement("template"); //<template> </template> RULE
template_banner.innerHTML = `
<style>
h1{
    color:red;
}
</style>
<h1>BANNER</h1>
`;

class TheBanner extends HTMLElement {
    constructor(){ //RULE
        super(); //RULE
        this.attachShadow({mode:"open"}) //RULE
    }

    connectedCallback(){ //RULE
        this.shadowRoot.appendChild(template_banner.content.cloneNode(true));//RULE
    }
}

customElements.define("the-banner", TheBanner)//RULE