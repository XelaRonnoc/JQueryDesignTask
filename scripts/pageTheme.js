// alows for less code repetion when editing css class variables
const updateCssVariables = (
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

// switch statement using the current index to select the css class variables for the page
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
