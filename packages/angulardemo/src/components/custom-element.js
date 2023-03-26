const template = document.createElement('template');
template.innerHTML = `
<style>h2 { color:red; }
</style>
<h2></h2>
<div>
<slot/>
</div>
<div>
  Price: <slot name="price" />
</div>
<button style="display:none;">Buy it!</button>
`;

class MyProduct extends HTMLElement {
  static get observedAttributes() {
    return ['name'];
  }
  
  constructor() {
    super();
    this.attachShadow({mode:'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector('h2').innerText = this.getAttribute('name');
  }
  
  hide() {
    this.shadowRoot.querySelector('button').style.display = 'none';
  }
  
  show() {
    this.shadowRoot.querySelector('button').style.display = 'block';
  }
  
  get name() {
    return this.shadowRoot.querySelector('h2').innerText;
  }
  
  set name(value) {
    this.shadowRoot.querySelector('h2').innerText = value;
  }
  
  attributeChangedCallback(name, oldValue, newValue) {
    if(name === 'name') {
      this.shadowRoot.querySelector('h2').innerText = newValue;
    }
  }
    
  connectedCallback() {
    this.shadowRoot.querySelector('button').addEventListener('click', () => this.dispatchEvent(new Event('buy', {})));
  }

  disconnectedCallback() {
    this.shadowRoot.querySelector('button').removeEventListener('click');
  }
}

window.customElements.define('my-product', MyProduct);
