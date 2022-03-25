# cau truc 7-1: 7 folder import 1 file chinh de sd :v nhung h sass moi update them cai @use vs @forward neu caan nhac xem lai.

## dung node-sass k dung dc @use,@forward chi dung dc @import

- abstracts: bien,ham, mixim,... cai ma k bien dich ra css
- base: cac style ap dung cho toan project (kieu chuan, co chu,..)
  -components(modules): thanh phan sd lai dc ( nut,nav,anh,....)
  -layout: bo cuc trang( tieu de,chan tran,...(bo cuc the semantic))
  -pages: style rieng cac trang
  -theme: mac dinh hay nguoi dung thiet lap
  -vendor: ghi de style ban dau cua trang, style cua tv, khung,(b4,jq,..)...
  -main: chen may tm kia vao, tep chinh compile ra css

_source:_ [o day](https://itnext.io/structuring-your-sass-projects-c8d41fa55ed4)

# The 7–1 Pattern

## The architecture known as the 7–1 pattern (7 folders, 1 file), is a widely-adopted structure that serves as a basis for large projects. You have all your partials organised into 7 different folders, and a single file sits at the root level (usually named main.scss) to handle the imports — which is the file you compile into CSS.

**Sample 7–1 directory structure:**

sass/
|
|– abstracts/ (or utilities/)
| |– \_variables.scss // Sass Variables
| |– \_functions.scss // Sass Functions
| |– \_mixins.scss // Sass Mixins
|
|– base/
| |– \_reset.scss // Reset/normalize
| |– \_typography.scss // Typography rules
|
|– components/ (or modules/)
| |– \_buttons.scss // Buttons
| |– \_carousel.scss // Carousel
| |– \_slider.scss // Slider
|
|– layout/
| |– \_navigation.scss // Navigation
| |– \_grid.scss // Grid system
| |– \_header.scss // Header
| |– \_footer.scss // Footer
| |– \_sidebar.scss // Sidebar
| |– \_forms.scss // Forms
|
|– pages/
| |– \_home.scss // Home specific styles
| |– \_about.scss // About specific styles
| |– \_contact.scss // Contact specific styles
|
|– themes/
| |– \_theme.scss // Default theme
| |– \_admin.scss // Admin theme
|
|– vendors/
| |– \_bootstrap.scss // Bootstrap
| |– \_jquery-ui.scss // jQuery UI
|
`– main.scss // Main Sass file

- **Abstracts (or utilities):** holds Sass tools, helper files, variables, functions, mixins and other config files. These files are meant to be just helpers which don’t output any CSS when compiled.

- **Base:** holds the boilerplate code for the project. Including standard styles such as resets and typographic rules, which are commonly used throughout your project.

- **Components (or modules):** holds all of your styles for buttons, carousels, sliders, and similar page components (think widgets). Your project will typically contain a lot of component files — as the whole site/app should be mostly composed of small modules.

- **Layout:** contains all styles involved with the layout of your project. Such as styles for your header, footer, navigation and the grid system.

- **Pages:** any styles specific to individual pages will sit here. For example it’s not uncommon for the home page of your site to require page specific styles that no other page receives.

- **Themes:** this is likely not used in many projects. It would hold files that create project specific themes. For example if sections of your site contain alternate color schemes.

- **Vendors:** contains all third party code from external libraries and frameworks — such as Normalize, Bootstrap, jQueryUI, etc. However, there is often a need to override vendor code. If this is required, its good practice to create a new folder called vendors-extensions/ and then name any files after the vendors they overwrite. The filevendors-extensions/\_bootstrap.scss would contain all your Bootstrap overrides — as editing the vendor files themselves, isn’t generally a good idea.

- **Main.scss:** This file should only contain your imports! For example..

@import 'abstracts/variables';
@import 'abstracts/functions';
@import 'abstracts/mixins';

@import 'vendors/bootstrap';
@import 'vendors/jquery-ui';

@import 'base/reset';
@import 'base/typography';

@import 'layout/navigation';
@import 'layout/grid';
@import 'layout/header';
@import 'layout/footer';
@import 'layout/sidebar';
@import 'layout/forms';

@import 'components/buttons';
@import 'components/carousel';
@import 'components/slider';

@import 'pages/home';
@import 'pages/about';
@import 'pages/contact';

@import 'themes/theme';
@import 'themes/admin';
