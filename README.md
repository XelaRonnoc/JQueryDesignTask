# Website Design Project:

## Code Architecture principals/guidelines followed:

-   Single responsibility
    -   To the extent possible/reasonable avoided creating functions with side effects instead allowing functions to delegate as required.
-   Pure functions
    -   Avoided using variables in a function that were not passed into that functions parameters.
-   Component based approach
    -   More accurately a psuedo-component based approach as a fully component based approach appeared overkill.
    -   This allows for easier code readability and allows for easier maintainability and upgradeability of code by reducing/organizing dependencies.

## Features:

-   Consideration of keyboard accessibility, all parts of the site are navigable solely through the utilization of the keyboard. Additionally to prevent the experience being hampered by the use of accessibility tools, the the links on the final section can only be focused by the keyboard once the user is on that section.
-   Dynamic rendering of the different pages and their content allows for significantly easier scalability for the site, simply by adding new paragraph content with it's html structure, an image, and a title, a new page is created dynamically. To adjust the css 'theme' of that page all that is required is an additional entry in the switch statement in pageTheme providing the hex codes for the each of the css variables.
-   A simple font adjustment for the heading font was implemented in order to allow the titles to be more accessible to someone who may find the fancier styled font hard to read.
