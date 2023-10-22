import { createCarosel, revealOnScroll } from "./carosel.js";
import { contentArray } from "./content.js";
import { setCurrentCardIndex, curIndex } from "./globalState.js";

$(document).ready(function () {
    createCarosel(contentArray);

    $("main").scroll(function () {
        revealOnScroll(curIndex);
    });

    $(".nav-button").click(function () {
        const curButton = $(this).get(0);
        setCurrentCardIndex(curButton);
    });
});
