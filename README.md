# Website Design Project:

### Note: for best experience use firefox.

## Code Architecture principals/guidelines followed:

-   Single responsibility:
    -   To the extent possible/reasonable avoided creating functions with side effects instead allowing functions to delegate as required.
-   Pure functions:
    -   Avoided using variables in a function that were not passed into that functions parameters.
-   Component based approach:
    -   More accurately a psuedo-component based approach as a fully component based approach appeared overkill.
    -   This allows for easier code readability and allows for easier maintainability and upgradeability of code by reducing/organizing dependencies and reducing individual file size (lines of code).
    -   allows for easy and simple scalability
    -   at this scale only results in a minor impact to performance if any
    -   does not matter that SEO will be sub optimal due to the nature of the site (it is not an e-store for example).

## Features:

-   Consideration of keyboard accessibility, all parts of the site are navigable solely through the utilization of the keyboard (tab key). Additionally to prevent the experience being hampered by the use of accessibility tools, the the links on the final section can only be focused by the keyboard once the user is on that section.
-   Dynamic rendering of the different pages and their content allows for significantly easier scalability for the site, simply by adding new paragraph content with it's html structure, an image, and a title, a new page is created dynamically. To adjust the css 'theme' of that page all that is required is an additional entry in the switch statement in pageTheme providing the hex codes for the each of the css variables.
-   A simple font adjustment button for the heading font was implemented in order to allow the titles to be more accessible to someone who may find the fancier styled font hard to read.
-   High definition images that maintain a high level of quality even on large screen sizes.
