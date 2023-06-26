const widthWindow = window.innerWidth < 800;

if(widthWindow) {
    const openMobileMenuBtn = document.getElementById('open-mobile-menu');
    openMobileMenuBtn.addEventListener('click', function() {
        this.classList.add('not-show');
        setTimeout(openMobileMenu, 400)
    });
}

function htmlMobileMenu() {
    return (
        `<div class="mobile-menu-wrapp">
            <nav class="navigation-mobile">
                <ul class="navigation-mobile-list">
                    <li class="navigation-mobile-item">
                        <a href="index.html">Головна</a>
                    </li>
                    <li class="navigation-mobile-item dropdown-menu">
                        <a href="#">Послуги</a>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.25 5.625L7.5 9.375L3.75 5.625" stroke="white"></path>
                        </svg>
                        <ul class="services-mobile-list">
                            <li class="services-mobile-item">
                                <a href="repair-dryers.html">Ремонт сушильних машин</a>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.5 15L7.5 10L12.5 5" stroke="white"></path>
                                </svg>
                            </li>
                            <li class="services-mobile-item">
                                <a href="repair-dryers.html">Ремонт сушильних машин</a>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.5 15L7.5 10L12.5 5" stroke="white"></path>
                                </svg>
                            </li>
                            <li class="services-mobile-item">
                            <a href="repair-dishwashers.html">Ремонт посудомийних машин</a>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.5 15L7.5 10L12.5 5" stroke="white"></path>
                            </svg>
                        </li>
                        </ul>
                    </li>
                    <li class="navigation-mobile-item">
                        <a href="about-us.html">Про нас</a>
                    </li>
                    <li class="navigation-mobile-item">
                        <a href="prices.html">Ціни</a>
                    </li>
                    <li class="navigation-mobile-item">
                        <a href="contacts.html">Контакти</a>
                    </li>
                </ul>
            </nav>
        </div>`
    )
}

function openMobileMenu() {
    console.log('aboba')
}