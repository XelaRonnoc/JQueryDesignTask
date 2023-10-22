export let curIndex = 0;

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
