import { createCard, createImage } from "./card.js";

export const createCards = (contentArray, containerElement) => {
    const htmlString = contentArray.reduce(
        (acc, item) => (acc += createCard(item)),
        ""
    );
    containerElement.html(containerElement.html() + htmlString);
};

export const createImages = (contentArray, containerElement) => {
    const htmlString = contentArray.reduce(
        (acc, item) => (acc += createImage(item)),
        ""
    );
    containerElement.html($("section").html() + htmlString);
};

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

export const updateCssVariables = (
    navBackground,
    navHighlight,
    navText,
    bodyTextColor,
    bodyBackgroundShadow,
    pageRoot
) => {
    pageRoot.css({
        "--nav-bar-background": `#${navBackground}`,
        "--nav-bar-background-highlight": `#${navHighlight}`,
        "--nav-bar-text-color": `#${navText}`,
        "--text-color": `#${bodyTextColor}`,
        "--background-shadow-color": `#${bodyBackgroundShadow}`,
    });
};

export const updatePagePallette = (visibleIndex, pageRoot) => {
    switch (visibleIndex) {
        case 0:
            updateCssVariables(
                "100809",
                "3B241D",
                "D4A775",
                "C3C3AC",
                "100809cc",
                pageRoot
            );
            break;
        case 1: {
            updateCssVariables(
                "070D18",
                "34282E",
                "007E8F",
                "DDA388",
                "070D18cc",
                pageRoot
            );
            break;
        }
        case 2: {
            updateCssVariables(
                "1B140B",
                "BF9857",
                "2D5953",
                "E7C678",
                "1B140Bcc",
                pageRoot
            );
            break;
        }
        case 3: {
            updateCssVariables(
                "170813",
                "30242E",
                "C64E36",
                "F4170E",
                "170813cc",
                pageRoot
            );
            break;
        }
        case 4: {
            updateCssVariables(
                "A51080",
                "FF2ECC",
                "E0FF4F",
                "93E1F1",
                "271A2Dcc",
                pageRoot
            );
            break;
        }
        case 5: {
            updateCssVariables(
                "0F0713",
                "25253D",
                "90585D",
                "EDB8AB",
                "0F0713cc",
                pageRoot
            );
            break;
        }
        default: {
            updateCssVariables(
                "100809",
                "3B241D",
                "D4A775",
                "C3C3AC",
                "100809cc",
                pageRoot
            );
            break;
        }
    }
};
