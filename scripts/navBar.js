// creates each nav bar link item
export const createNavLink = (navItem) => {
    const { title, id } = navItem;
    return `
            <li>
                <a class="nav-button ${id === 1 ? "active" : ""}" 
                tabindex="1" href="#${id}">
                    <span>${title}</span>
                </a>
            </li>
            `;
};

// creates the nav bar
export const createNavBar = (contentArray, containerElement) => {
    const htmlString = contentArray.reduce(
        (acc, item) => (acc += createNavLink(item)),
        ""
    );
    containerElement.html(containerElement.html() + htmlString);
};

export const setNavBarActiveOnClick = (navArray, curButton) => {
    const visibleIndex = navArray.indexOf(curButton);
    navArray.forEach((item, index) => {
        if (index === visibleIndex) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });
};

export const setNavBarActiveOnScroll = (visibleIndex, navArray) => {
    navArray.forEach((item, index) => {
        if (index === visibleIndex) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });
};
