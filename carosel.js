import { createCaroselCard } from "./card.js";
import { setCurIndex } from "./globalState.js";

export const createCarosel = (contentArray) => {
    const caroselContentContainer = $("main");
    const htmlString = contentArray.reduce(
        (acc, item) => (acc += createCaroselCard(item)),
        ""
    );
    caroselContentContainer.html(caroselContentContainer.html() + htmlString);
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
        const numOfChildren = item.children.length;
        if (elementInView) {
            setCurIndex(item.id - 1);
            //   item.children.item(numOfChildren - 1).classList.add("reveal");
            $(`#image${item.id}`).get(0).classList.add("reveal");
        } else {
            //   item.children.item(numOfChildren - 1).classList.remove("reveal");
            $(`#image${item.id}`).get(0).classList.remove("reveal");
        }
    });
};
