export const createCaroselCard = (item) => {
    const { id, title, paragraph } = item;
    return `
    <div id='${id}' class="carosel-card ${id === 1 ? "reveal" : ""}">
    <h1>${title}</h1>
        <div id="paraId${id}" class='carosel-text-container'>
            <p>${paragraph}</p>
        </div>
    </div>
    `;
};
