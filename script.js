import {
    createImages,
    createCards,
    revealOnScroll,
    updatePagePallette,
} from "./cardContainer.js";
import { contentArray } from "./content.js";
import {
    setNavBarActiveOnScroll,
    setNavBarActiveOnClick,
    createNavBar,
} from "./navBar.js";

$(document).ready(function () {
    const pageRoot = $(":root");
    createCards(contentArray, $("main"));
    createNavBar(contentArray, $("menu"));
    createImages(contentArray, $("section"));

    const navArray = $(".nav-button").toArray();
    const cardArray = $(".card").toArray();
    let visibleIndex = 0;

    $("main").scroll(function () {
        visibleIndex = revealOnScroll(cardArray);
        setNavBarActiveOnScroll(visibleIndex, navArray);
        updatePagePallette(visibleIndex, pageRoot);
    });

    $(".nav-button").click(function () {
        const curButton = $(this).get(0);
        setNavBarActiveOnClick(navArray, curButton);
    });
});
