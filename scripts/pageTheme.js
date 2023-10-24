export const toggleHeaderFont = (pageRoot, curFont) => {
    if (curFont === "simplified") {
        pageRoot.css({
            "--header-font-family": `"Oleo Script Swash Caps", sans-serif`,
        });
        return "fancy";
    } else {
        pageRoot.css({
            "--header-font-family": `"Oleo Script", sans-serif`,
        });
        return "simplified";
    }
};

// allows for less code repetition when editing css class variables
const updateCssVariables = (
    navBackground,
    navHighlight,
    navText,
    bodyTextColor,
    bodyBackground,
    bodyBackgroundShadow,
    pageRoot
) => {
    pageRoot.css({
        "--nav-bar-background": `#${navBackground}`,
        "--nav-bar-background-highlight": `#${navHighlight}`,
        "--nav-bar-text-color": `#${navText}`,
        "--text-color": `#${bodyTextColor}`,
        "--background-color": `#${bodyBackground}`,
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
                "100809d2",
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
                "070D18d1",
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
                "1B140Bd1",
                pageRoot
            );
            break;
        }
        case 3: {
            updateCssVariables(
                "170813",
                "30242E",
                "C64E36",
                "FE925D",
                "170813cc",
                "170813d1",
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
                "271A2Dd2",
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
                "0F0713d2",
                pageRoot
            );
            break;
        }
        case 6: {
            updateCssVariables(
                "211E20",
                "2A2E34",
                "C3936E",
                "EAEAE5",
                "211E20cc",
                "211E20d3",
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
                "100809d2",
                pageRoot
            );
            break;
        }
    }
};
