# Website Design Project:

## Code Architecture principals/guidlines followed:

-   Single responsibility
    -   To the extent possible/reasonable avoided creating functions with side effects instead allowing functions to delegate as required.
-   Pure functions
    -   Avoided using variables in a function that were not passed into that functions parameters.
-   Component based approach
    -   More accurately a psuedo-component based approach as a fully component based approach appeared overkill.
    -   This allows for easier readability and allows for easier maintainability and upgradeability of code by reducing/organizing dependencies.
-   consideration of keyboard accessibility, all parts of the site are navigable solely through the utilization of the keyboard. There are some issues with this however. As anchor tags are pre-built to be keyboard accessible the user may find they are transported to the attributions page early by tabbing though the website.

## Features:

-   Dynamic rendering of the different pages and their content allows for significantly easier scalability for the site, simply by adding new paragraph content with it's html structure, an image, and a title, a new page is created dynamically. To adjust the css 'theme' of that page all that is required is an additional entry in the switch statement in pageTheme providing the hex codes for the each of the css variables.
-   A simple font adjustment heading
