class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            </main>
            <footer>
                <ul>
                    <li>&copy;Gelos Enterprises Pty. Ltd., 2022-2023</li>
                </ul>
                <ul>
                    <li><a href="mailto:GE@studywithus.com.au">Email</a></li>
                    <li><a href="https://www.facebook.com/GE-studywithus"><img id="facebookIcon" src="images/icons8-facebook-30.png"
                                alt="facebook icon"></a></li>
                    <li><a href="https://www.instagram.com/GE-studywithus"><img id="instagramIcon" src="images/icons8-instagram-48.png"
                                alt="instagram icon"></a></li>
                    <li><a href="https://www.twitter.com/GE-studywithus"><img id="twitterIcon" src="images/icons8-twitter-32.png"
                                alt="Twitter icon"></a></li>
                    <li><a href="policies.html">Policies</a></li>
                </ul>
            </footer>
        `;
    }
}

customElements.define('gelos-footer', Footer); 