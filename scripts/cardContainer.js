import { createCard, createImage } from "./card.js";

// creates all html cards
export const createCards = (contentArray, containerElement) => {
    const htmlString = contentArray.reduce(
        (acc, item) => (acc += createCard(item)),
        ""
    );
    containerElement.html(containerElement.html() + htmlString);
};

// creates all html for images
export const createImages = (contentArray, containerElement) => {
    const htmlString = contentArray.reduce(
        (acc, item) => (acc += createImage(item)),
        ""
    );
    containerElement.html($("section").html() + htmlString);
};

// loops through all elements in viewport, when it finds the element in the view port it
// adds the reveal class setting the associated images opacity to 1 from default 0
export const revealOnScroll = (cardArray) => {
    let visibleIndex = 0;
    cardArray.forEach((item) => {
        const elementTop = item.getBoundingClientRect().top;
        const elementBottom = item.getBoundingClientRect().bottom;
        const viewportTop = $(window).scrollTop();
        const viewportBottom = viewportTop + $(window).height();
        const elementInView =
            elementBottom > viewportTop && elementTop < viewportBottom;

        if (elementInView) {
            visibleIndex = item.id - 1;
            $(`#image${item.id}`).get(0).classList.add("reveal");
        } else {
            $(`#image${item.id}`).get(0).classList.remove("reveal");
        }
    });
    return visibleIndex;
};
