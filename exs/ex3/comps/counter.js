var template = document.createElement("template"); //<template> </template> RULE
template.innerHTML = `
<style>
    #counter {
        background-color:#DAD;
        display:flex;
    }

    #counter > button {
        width:35px;
        height:35px;
        font-size:24px;
        background-color:#BED;
        border:none;
        border-radius:5px;
        margin:5px;
    }

    #counter > div {
        flex:1;
        display:flex;
        justify-content: center;
        align-items: center;
    }

    #bar {
        width:0px;
        height:15px;
        background-color: #ADD;
    }
</style>
<div id='counter'>
    <button id='i_but'>+</button>
    <div id='number'>1</div>
    <button id='d_but'>-</button>
</div>
<div id='bar'></div>
`;

class TheCounter extends HTMLElement {
    constructor(){ //RULE
        super(); //RULE
        this.num = 1;
        this.attachShadow({mode:"open"}) //RULE
    }

    connectedCallback(){ //RULE
        this.shadowRoot.appendChild(template.content.cloneNode(true));//RULE
        this.shadowRoot.querySelector("#i_but").onclick = () => this.inc();
        this.shadowRoot.querySelector("#d_but").onclick = () => this.dec();
    }

    inc(){
        //debugger;
        this.num = this.num + 1;
        this.updateBar();
    }

    dec(){
        this.num = this.num - 1;
        this.updateBar();
    }

    updateBar(){
        this.shadowRoot.querySelector("#number").innerText = this.num;
        this.shadowRoot.querySelector("#bar").style.width = (this.num*10)+"px";
    }
}

customElements.define("the-counter", TheCounter)//RULE