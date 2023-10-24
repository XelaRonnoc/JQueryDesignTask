// creates html for card
export const createCard = (item) => {
    const { id, title, paragraph } = item;
    return `
    <div id='${id}' class="card ${id === 1 ? "reveal" : ""}">
    <h1>${title}</h1>
        <div id="paraId${id}" class='text-container'>
            <div>${paragraph}</div>
        </div>
    </div>
    `;
};

//creates html for image
export const createImage = (item) => {
    const { imageRef, alt, id } = item;
    return `
    <img
        id="image${id}"
        class="${id === 1 ? "reveal" : ""}"
        src="${imageRef}"
        alt="${alt}"
    />        
    `;
};
