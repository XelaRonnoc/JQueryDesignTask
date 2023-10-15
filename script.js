import { createCarosel, revealOnScroll } from "./carosel.js";
import { contentArray } from "./content.js";
import { setCurrentCardIndex } from "./globalState.js";

$(document).ready(function () {
    createCarosel(contentArray);

    $("main").scroll(function () {
        revealOnScroll();
    });

    $(".nav-button").click(function () {
        const curButton = $(this).get(0);
        setCurrentCardIndex(curButton);
    });
});
