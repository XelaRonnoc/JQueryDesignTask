export const createCaroselCard = (item) => {
    const { id, title, paragraph, img, imgAlt } = item;
    return `
    <div id='${id}' class="carosel-card ${id === 1 ? "reveal" : ""}">
        <div class='carosel-text-container'>
            <h1>${title}</h1>
            <p>${paragraph}</p>
        </div>
        <section class="${
            id === 1 ? "reveal" : ""
        }" style="background-image: url(${img});"></section>
    </div>
    `;
};

// export const createCaroselCard = (item) => {
//     const { id, title, paragraph, img, imgAlt } = item;
//     return `
//     <div id='${id}' class="carosel-card ${
//         id === 1 ? "reveal" : ""
//     }" style="background-image: url(${img});">
//         <div class='carosel-text-container'>
//             <h1>${title}</h1>
//             <p>${paragraph}</p>
//         </div>
//     </div>
//     `;
// };
