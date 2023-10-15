import { createCaroselCard } from "./card.js";
import { setCurIndex } from "./globalState.js";

export const createCarosel = (contentArray) => {
    const caroselContentContainer = $("main");
    const htmlString = contentArray.reduce(
        (acc, item) => (acc += createCaroselCard(item)),
        ""
    );
    caroselContentContainer.html(htmlString);
};

export const revealOnScroll = () => {
    const cards = $(".carosel-card").toArray();
    cards.forEach((item) => {
        const elementTop = item.getBoundingClientRect().top;
        const elementBottom = item.getBoundingClientRect().bottom;
        const viewportTop = $(window).scrollTop();
        const viewportBottom = viewportTop + $(window).height();
        const elementInView =
            elementBottom > viewportTop && elementTop < viewportBottom;

        if (elementInView) {
            item.classList.add("reveal");
            setCurIndex(item.id - 1);
        } else {
            item.classList.remove("reveal");
        }
    });
};
