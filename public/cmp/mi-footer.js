class MiFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /* html */
            `Copyright &copy; 2020 Jose Luis Monreal Eusebio .`;
    }
}
customElements.define("mi-footer", MiFooter);