class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const currentPage = this.getAttribute('current-page') || 'home';
        this.innerHTML = `
            <header>
                <!-- header top -->
                <div id="headerTop">
                    <!-- search bar and icons -->
                    <ul>
                        <li><input type="text" placeholder="Search.."><img id="searchIcon" src="images/icons8-search-50.png" alt="search icon"></li>
                    </ul>
                    <!-- LOGO -->
                    <a href="index.html"><img id="logoImg" src="images/company_logo.png" alt="company LOGO"></a>
                </div>
                <!-- navigation header main-->
                <div id="responsive-menu">
                    <div class="menu-icon">
                        <a href="#menu-expand"><img id="menuIcon" src="images/menu_icon.png" alt="Responsive Menu icon"></a>
                    </div>
                    <nav class="menu">
                        <ul>
                            <li><a href="index.html" ${currentPage === 'home' ? 'id="current"' : ''}>HOME</a></li>
                            <li><a href="about.html" ${currentPage === 'about' ? 'id="current"' : ''}>ABOUT US</a></li>
                            <li><a href="qualification.html" ${currentPage === 'qualification' ? 'id="current"' : ''}>QUALIFICATION</a></li>
                            <li><a href="enquiry.html" ${currentPage === 'enquiry' ? 'id="current"' : ''}>ENQUIRY</a></li>
                            <li><a href="contact.html" ${currentPage === 'contact' ? 'id="current"' : ''}>CONTACT</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main>
                <div id="bg">
                    <h1>GELOS</h1>
                </div>
        `;
    }
}

customElements.define('gelos-header', Header); 