import {
    createCarosel,
    revealOnScroll,
    updatePagePallette,
} from "./carosel.js";
import { contentArray } from "./content.js";
import {
    setNavBarActiveOnScroll,
    setNavBarActiveOnClick,
} from "./globalState.js";

$(document).ready(function () {
    const pageRoot = $(":root");
    const caroselContentContainer = $("main");
    createCarosel(contentArray, caroselContentContainer);

    const navArray = $(".nav-button").toArray();
    const cardArray = $(".carosel-card").toArray();
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
