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

export const revealOnScroll = (currentIndex) => {
    const cards = $(".carosel-card").toArray();
    cards.forEach((item) => {
        const elementTop = item.getBoundingClientRect().top;
        const elementBottom = item.getBoundingClientRect().bottom;
        const viewportTop = $(window).scrollTop();
        const viewportBottom = viewportTop + $(window).height();
        const elementInView =
            elementBottom > viewportTop && elementTop < viewportBottom;
        if (elementInView) {
            setCurIndex(item.id - 1);
            //   item.children.item(numOfChildren - 1).classList.add("reveal");
            $(`#image${item.id}`).get(0).classList.add("reveal");
        } else {
            //   item.children.item(numOfChildren - 1).classList.remove("reveal");
            $(`#image${item.id}`).get(0).classList.remove("reveal");
        }
        const bodyHTML = $(":root");
        switch (currentIndex) {
            case 0:
                bodyHTML.css({
                    "--nav-bar-background": "#51291E",
                    "--nav-bar-background-highlight": "#301014",
                    "--nav-bar-text-color": "#7B886F",
                });
                break;
            case 1: {
                bodyHTML.css({
                    "--nav-bar-background": "#011936",
                    "--nav-bar-background-highlight": "#007E8F",
                    "--nav-bar-text-color": "#465362",
                });
                break;
            }
            case 2: {
                bodyHTML.css({
                    "--nav-bar-background": "#4b4237",
                    "--nav-bar-background-highlight": "#736b60",
                    "--nav-bar-text-color": "#5c9ead",
                });
                break;
            }
            case 3: {
                bodyHTML.css({
                    "--nav-bar-background": "#040F0F",
                    "--nav-bar-background-highlight": "#2D3A3A",
                    "--nav-bar-text-color": "#CE2029",
                });
                break;
            }
            case 4: {
                bodyHTML.css({
                    "--nav-bar-background": "#A51080",
                    "--nav-bar-background-highlight": "#FF2ECC",
                    "--nav-bar-text-color": "#E0FF4F",
                });
                break;
            }
            case 5: {
                bodyHTML.css({
                    "--nav-bar-background": "#160202",
                    "--nav-bar-background-highlight": "#370606",
                    "--nav-bar-text-color": "#07EDED",
                });
                break;
            }
            default: {
                bodyHTML.css({
                    "--nav-bar-background": "#4b4237",
                    "--nav-bar-background-highlight": "#736b60",
                    "--nav-bar-text-color": "#5c9ead",
                });
                break;
            }
        }
    });
};
