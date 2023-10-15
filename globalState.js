export let curIndex = 0;

export const setCurrentCardIndex = (curButton) => {
    const navArray = $(".nav-button").toArray();
    navArray.forEach((item) => item.classList.remove("active"));
    curIndex = navArray.indexOf(curButton);
    navArray[curIndex].classList.add("active");
};

export const setCurIndex = (newIndex) => {
    const navArray = $(".nav-button").toArray();
    navArray.forEach((item) => item.classList.remove("active"));
    navArray[newIndex].classList.add("active");
    curIndex = newIndex;
};
