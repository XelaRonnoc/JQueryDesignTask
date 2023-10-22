export const createCard = (item) => {
    const { id, title, paragraph } = item;
    return `
    <div id='${id}' class="card ${id === 1 ? "reveal" : ""}">
    <h1>${title}</h1>
        <div id="paraId${id}" class='text-container'>
            <p>${paragraph}</p>
        </div>
    </div>
    `;
};
