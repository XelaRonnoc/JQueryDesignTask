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
                    "--nav-bar-background": "#100809",
                    "--nav-bar-background-highlight": "#3B241D",
                    "--nav-bar-text-color": "#D4A775",
                    "--text-color": "#C3C3AC",
                    "--background-shadow-color": "#100809cc",
                });
                break;
            case 1: {
                bodyHTML.css({
                    "--nav-bar-background": "#070D18",
                    "--nav-bar-background-highlight": "#34282E",
                    "--nav-bar-text-color": "#007E8F",
                    "--text-color": "#DDA388",
                    "--background-shadow-color": "#070D18cc",
                });
                break;
            }
            case 2: {
                bodyHTML.css({
                    "--nav-bar-background": "#1B140B",
                    "--nav-bar-background-highlight": "#BF9857",
                    "--nav-bar-text-color": "#2D5953",
                    "--text-color": "#E7C678",
                    "--background-shadow-color": "#1B140Bcc",
                });
                break;
            }
            case 3: {
                bodyHTML.css({
                    "--nav-bar-background": "#170813",
                    "--nav-bar-background-highlight": "#30242E",
                    "--nav-bar-text-color": "#C64E36",
                    "--text-color": "#F4170E",
                    "--background-shadow-color": "#170813cc",
                });
                break;
            }
            case 4: {
                bodyHTML.css({
                    "--nav-bar-background": "#A51080",
                    "--nav-bar-background-highlight": "#FF2ECC",
                    "--nav-bar-text-color": "#E0FF4F",
                    "--text-color": "#93E1F1",
                    "--background-shadow-color": "#271A2Dcc",
                });
                break;
            }
            case 5: {
                bodyHTML.css({
                    "--nav-bar-background": "#0F0713",
                    "--nav-bar-background-highlight": "#25253D",
                    "--nav-bar-text-color": "#90585D",
                    "--text-color": "#EDB8AB",
                    "--background-shadow-color": "#0F0713cc",
                });
                break;
            }
            default: {
                bodyHTML.css({
                    "--nav-bar-background": "#4b4237",
                    "--nav-bar-background-highlight": "#736b60",
                    "--nav-bar-text-color": "#5c9ead",
                    "--text-color": "#C3C3AC",
                    "--background-shadow-color": "#100809cc",
                });
                break;
            }
        }
    });
};
