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
        `
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
                <button id="close-mobile-menu" class="close-menu">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18" stroke="#222222" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6 6L18 18" stroke="#222222" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>                
                </button>
            </nav>
        `
    )
}

function openMobileMenu() {
    const wrapper = document.createElement('div');
    wrapper.classList.add('mobile-menu-wrapp');
    wrapper.innerHTML = htmlMobileMenu();
    document.body.append(wrapper);
    accordeonInit();
}

function closeMobileMenu() {
    const wrapper = document.querySelector('.mobile-menu-wrapp');
    wrapper.classList.add('close');
}

function accordeonInit() {
    const dropdownMenus = document.querySelectorAll('.dropdown-menu');

    dropdownMenus.forEach((dropdownMenu) => {
    const link = dropdownMenu.querySelector('a');
    const submenu = dropdownMenu.querySelector('.services-mobile-list');

        link.addEventListener('click', (event) => {
            event.preventDefault();
            toggleAccordion(submenu);
        });
    });

    const closeMobileMenuBtn = document.getElementById('close-mobile-menu');
    closeMobileMenuBtn.addEventListener('click', function() {
        closeMobileMenu();
        setTimeout(() => {
            document.getElementById('open-mobile-menu').classList.remove('not-show')
        }, 400)
    })
}

function toggleAccordion(element) {
    element.classList.toggle('show');
}