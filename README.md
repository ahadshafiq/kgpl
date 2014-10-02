
# Pattern Library
This document will describe the structure of each pattern and its behaviour under various screen sizes.
It includes code playground snippets to help with experimenting.
# Hosting: 
The page is deployed here on heroku: http://kgpl.herokuapp.com/
# Scaffolding:
App uses Yeoman + SCSS as scaffolding.
-------------------------------------------------------------------------------
## SASS Code Structure
<pre>
├─ app/
    └── styles
        ├── advanced **All files in folder will @import "../settings/settings";**
        │   ├── _accordions.scss
        │   ├── _carousels.scss
        │   ├── _navigation.scss
        │   └── _tabs.scss
        ├── basic **All files in folder will @import "../settings/settings";**
        │   ├── _buttons.scss
        │   ├── _feedback.scss
        │   ├── _forms.scss
        │   ├── _grid.scss
        │   ├── _icons.scss
        │   ├── _normalize.scss
        │   └── _typography.scss
        ├── main.scss **Will just import all scss files
        ├── presentation.scss **Contains all styles pertaining to displaying the pattern library only and not to be used in actual elements.
        └── settings
            └── _settings.scss **Contains all the varibles (colors) that most of the scss files link to
</pre>
-------------------------------------------------------------------------------
## HTML Code Structure
<pre>
├─ app/
    └── index.html 
    └── scripts
    │   └── main.js ** Uses jQuery's .load() to load individual .html files on button clicks in the nav and loads it into the #explanations div in index.html.
    └── pages
    │    ├── theAnimations.html
    │    ├── theBlankSlate.html
    │    ├── theCharts.html
    │    ├── theFeedback.html
    │    ├── theForms.html
    │    ├── theGridSystem.html
    │    ├── theIcons.html
    │    ├── theNavigation.html
    │    ├── theTypography.html
   
</pre>
-------------------------------------------------------------------------------
## The Grid System

**Description**

- 12 columns
- Responsive, fluid
- Columns will be wrapped in a container .row
- Each column will have the class of .col-$
- Also create a .container class that wraps all content and centers it on the page. The container must be fluid in width.

**Responsive Behaviour**

- In smaller screen sizes (<1024px) the columns will have their gutter width halved
- In mobile sizes (<768px) all columns will get a 100% width

## Typography

**Elements**

- Headings
- Paragraphs
- Bold, em, strike, link
- Code blocks
- Lists
- Blockquotes

## Buttons

**Description**

- 2 styles: default, primary
- 3 sizes: small, default and large
- Styles for all HTML elements: `<a>, <button>, <input type="button">, <input type="submit">`

## Form Elements

**Elements**

- Inputs
- Radio and checkboxes (custom controls)
- Pre-made forms: sign-in, sign-up, contact

## Icons

**Description**

- Will use FontAwesome
- Styles for bordered icons
- Styles for square, rounded or circle border
- 3 different sizes: default, large, huge

## Feedback

**Description**

- 4 message boxes: information, success, error, warning

## Navigation

**Elements and Characteristics**

- Navbar: side menu and top menu
- The menu is built from scratch

**Responsive Behaviour**

- In mobile sizes (<768px) the top menu will be moved to the top of side-menu.

## Animations

**Description**

- Will use the animate.css library by Dan Eden

