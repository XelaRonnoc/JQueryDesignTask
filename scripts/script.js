import { createImages, createCards, revealOnScroll } from "./cardContainer.js";
import { updatePagePallette } from "./pageTheme.js";
import { contentArray } from "./content.js";
import {
    setNavBarActiveOnScroll,
    setNavBarActiveOnClick,
    createNavBar,
} from "./navBar.js";

$(document).ready(function () {
    // setup page
    const pageRoot = $(":root");
    createCards(contentArray, $("main"));
    createNavBar(contentArray, $("menu"));
    createImages(contentArray, $("section"));

    const navArray = $(".nav-button").toArray();
    const cardArray = $(".card").toArray();
    let visibleIndex = 0;

    // on scroll reveale the next image and update the nav bar
    $("main").scroll(function () {
        visibleIndex = revealOnScroll(cardArray);
        setNavBarActiveOnScroll(visibleIndex, navArray);
        updatePagePallette(visibleIndex, pageRoot);
    });

    // update nav bar, this will trigger onScroll and run that also however having
    // this click function improves nav bar response/transition
    $(".nav-button").click(function () {
        const curButton = $(this).get(0);
        setNavBarActiveOnClick(navArray, curButton);
    });
});
