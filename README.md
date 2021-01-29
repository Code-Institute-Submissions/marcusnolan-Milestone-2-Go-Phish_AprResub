<h1 align="center">Go Phish</h1>
<h1 align="center"><img src="./assets/images/readme/go-phish-mock1.png"/></h1>

<a href="https://marcusnolan.github.io/Milestone-2-Go-Phish/"><img src="./assets/images/cyber-thief-blue logo.png" width="25px"/> : Go Phish Live Website</a>

<a href="https://github.com/marcusnolan/Milestone-2-Go-Phish"><img src="./assets/images/readme/github-logo.png" width="25px"/> : Go Phish Github Repository</a>

## About
Go Phish is a card memory game created to educate people about the ongoing threat of cybercrime, specifically Phishing while also letting them test their memory and have some fun. It consists of a 12 card deck with 6 pairs of 2 cards within. Each pair represents a form of phishing with a small logo designed to potray it. I hope you enjoy playing!

## Table of Contents
**[User Experience](#user-experience)** 

**[Features](#features)**

**[Technologies Used](#technologies-used)**

**[Testing](#testing)**

**[Deployment](#deployment)**

**[Known Bugs](#known-bugs)**

**[Credits](#credits)**

<img src="./assets/images/readme/go-phish-mock2.jpg"/>

## User Experience

### User Stories
- #### As a general user;
    1. I want to be informed about phishing and the various types of phishing.
    1. I want to intuitively navigate through the site to browse the content.
    1. I want to enjoy the design and for it to add to the overall feel of a game.
    1. I want to learn how to play the game with ease.
    1. I want to find a variety of difficulties to test my memory.
    1. I want be able to keep track of the amount of flips it has taken me to complete the game.
    1. see how long it has taken me to complete the game.
- #### As a casual player;
    1. I want to have fun when playing go phish.
    1. I want the game itslef to be easy to comprehened and play.
    1. I want to be able to casually flip between levels and pages with simple to use navigation.  
- #### As an experienced gamer;
    1. I want to be able to test my abilities with a variety of difficulties.
    1. I want to be encouraged to play again and again.
- #### As the game developer;
    1. I want to educate people while also ensuring they enjoy the game and have fun.
    1. I want to provide very easy to use navigation and game controls.    
    1. I want to have a light hearted and colourful design for players to enjoy.



### design

- #### Colour Scheme
    - As a game, a contasting colour scheme was needed while portraying fun and enjoyable feeling. 
    The colours chosen were Strong Blue (#2980CC), Bright Red (#EE2A30) and White (#FFF).  
    <img src="./assets/images/readme/go-phish-colour-palette.png" height="100px"/>

- #### Typography
    - The font used for the title, logo and headings is Bangers which is a cursive font. This font gives a very fun comic book/game feel and is perfect for the site.

        <img src="./assets/images/readme/bangers-font.png" height="30px" />

    - The font used for the paragraphs, game info and navigation is Montserrat. It is part of the Sans-Serif family and is very legible while also informal enough to be used for a game. 

        <img src="./assets/images/readme/montserrat-font.png" height="30px" />


- #### Imagery
    - The logo was bought off <a href="https://www.vectorstock.com/royalty-free-vector/thief-hacking-a-computer-icon-cyber-attack-vector-21584120?refer=eml">Vector stock</a> and I made a few tweaks using Adobe Photoshop. 
    - The Cartoon fish used was downloaded off <a href="https://webstockreview.net/pict/getfirst">Web Stock Review</a> and all edits were made by me using Adobe Photoshop. 
- #### Wireframes/Mockups
    - Wireframes and mockups were created using Adobe XD. Both mobile and desktop versions are linked below;
        
        - <a href="./assets/images/readme/wireframes/go-phish-index-wireframe.png"> Home & About</a>
        - <a href="./assets/images/readme/wireframes/go-phish-index-wireframe-mobile.png"> Home & About - Mobile</a>
        - <a href="./assets/images/readme/wireframes/go-phish-game-wireframe.png"> Game</a>
        - <a href="./assets/images/readme/wireframes/go-phish-game-wireframe-mobile.png"> Game - Mobile</a>
        - <a href="./assets/images/readme/wireframes/go-phish-how-to-play-wireframe.png"> How To Play</a>
        - <a href="./assets/images/readme/wireframes/go-phish-how-to-play-wireframe-mobile.png"> How To Play - Mobile</a>
        - <a href="./assets/images/readme/wireframes/go-phish-contact-wireframe.png"> Contact</a>
        - <a href="./assets/images/readme/wireframes/go-phish-contact-wireframe-mobile.png"> Contact - Mobile</a>


## Features

### Existing Features

#### Common Features Across All Pages
- **Header** - allows user to easily navigate across all pages
    - Navigation is included in the header to let the user intuitively locate it.
    - Navigation links chnage colour when hovered over. This lets the visitor know that it is clickable.
    - The navigation link, matching the page that the user is visiting, changes colour to let the user quickly establish which page she/he is visiting.
    - Navigation links collapse in a personalized hamburger menu when viewed in mobile/tablet sizes.
    - Colors have been chosen with optimum contrast in mind to be pleasant to the eye and legible.
- **Accessibility**
    - All images have a description in case the image link breaks as well as helping screen readers.
    - The hamburger menu has aria-label added to let users with screen readers know where the toggleable menu is.
- **Buttons**
    - All buttons are styled in a similar way to provide consistency across the page. When hovering over a button, the text will change color in a similar fashion to the navigation bar to give the user a clear understanding that it is clickable.
- **Responsiveness**
    - All Pages are responsive and provide the same functionality regardless of the viewport size and device brand/orientation.


### Specific to Pages
- **Home & About**
    - Buttons to play all 4 game difficulties on top of the easy to use navigation bar make it incredibly obvious and simple to play the game. 
    - A small summary of what is phishing followed by a deck explaining the different types of phishing, featuring all 6 cards that players will see during the game. 
    - Each card in the deck is clickable and will bring the user to the section of which type of phishing they are looking at below. 
- **Play**
    - The game pages themself are kept simple to let the user focus on their progress and playing experience. 
    - There is a game-info section that contains the time remaining, flips and level. 
    Below the game info is the game itself. 3 rows of 4 cards on desktop and tablet and 6 rows of 2 cards on mobile. 
- **How To Play**
    - A simple paragraph explaining the game and how a user can actually play it is all that is needed for the how to play page. Any user that clicks on How To Play knows xactly what they are looking for and what they should expect. 
- **Contact**
    - Another form using input fields to gather contact details off a user while categorizing which level they are querying and a small text box to receive their message. 
    - Google Maps was added with a funny/false location of a fish market in Denmark with the name "Go Fish".


    ### Future Features
 
    - In the future, I would like to implement a leaderboard where users can proudly show their scores on a live leaderboard viewable to everyone. 
    - I would also like to add a shuffl function after a certain amount of clicks. 


## Technologies Used

### Languages Used

- [HTML5](https://en.wikipedia.org/wiki/HTML5)
- [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)

### Frameworks, Libraries and Programs Used

- [Bootstrap v4.5.3](https://getbootstrap.com/) - Used for the responsive layout as well as custom components such as image carousel, navigation bar and footer.
- [jquery](https://jquery.com/) - Used in some of the clickable elements such as collapsable 'hamburger' nav bar.
- [popper.js](https://popper.js.org/) - Used in some of the clickable elements such as collapsable 'hamburger' nav bar.
- [Font Awesome](https://fontawesome.com/) - Font Awesome was used to add social icons and complement the design.
- [Google Fonts](https://fonts.google.com/) - Google Fonts was used to import 'Lato', 'Oswald' and 'Euphoria Script' fonts in the main.css stylesheet.
- [Git](https://git-scm.com/) - Git was used to allow for tracking of any changes in the code and for the version control.
- [GitPod](https://www.gitpod.io/) - GitPod, connected to GitHub, hosted the coding space and allowed the projected to be committed to the Github repository.
- [Github](https://github.com/) - GitHub is used to host the project files and publish the live website by using Git Pages.
- [Illustrator](https://www.adobe.com/ie/products/illustrator.html) - Illustrator was used to create the Ian Kearney Coaching logo.
- [Photoshop](https://www.adobe.com/ie/products/photoshop.html) - Photoshop was used to resize all the images used on the site.
- [Balsamiq Wireframes](https://balsamiq.com/) - Balsamiq was used to create wireframes and mockups.
- [Unsplash](https://tinyjpg.com/) - Unsplashwas used to download royalty free images for banner images on home, pricing and book a lesson pages.

## Testing

 ### Functionality Testing
- #### Navigation bar
    - All links are working and have been tested.
    - The hamburger menu appears on screen sizes smaller than 992px. When clicked/tapped, it expands to reveal page links. These have been tested and are working as expected.
- #### Footer
    - All the social links are clicked, they open the relevant social media page in a new tab.
    - When the 'Contact' icon is clicked, it opens the contact page.
    - both navigation buttons for the carousel work on all devices. 
- #### The home page image carousel
    - Images change automatically with 5-second intervals.
    - When the navigation buttons are clicked on, the image changes correctly and smoothly.
-  #### All external links were tested to make sure they open up the correct pages in new tabs
    - All social links in the footer bring the user to the relevant social channel home page. 
- #### All internal links were tested to make sure that all pages are correctly connected 
    - Navigation links bring the user to the relevant pages
    - Brand word located in the navigation bar always brings the user to the home page

### CSS3 validator - Pass
<a href="http://jigsaw.w3.org/css-validator/check/referer">
        <img style="border:0;width:88px;height:31px"
            src="http://jigsaw.w3.org/css-validator/images/vcss"
            alt="Valid CSS!" />- Ian Kearney Coaching
    </a> 

### HTML5 validator
- Home & About - Pass 
- Testimonials - Pass 
- Pricing - Pass 
- Book A Lesson - Pass 
- Contact Me - Pass 

### Usability Testing
- To test the ease of navigation, legibility, layout of content etc, this website was shared with few friends and family of different ages and different levels of computer/smart device knowledge. There were no issues identified regarding the simplicity of navigating or ease of reading or viewing content the website.
- The testers also clicked all links on a variety of devices and browsers and all came back working correctly. 

### Compatibility Testing
- Browser Compatibility on mobile, tablet and desktop;
    - Safari - successfull 
    - Chrome - successfull 
    - Firefox - successfull 
    - Opera - successfull 

- OS Compatibility was tested on iOS 14.0.1, Android 11.0, MacOS Catalina 10.15.7, iPadOS 14.1 and Windows 10. 
- The devices used in this testing include Macbook Pro Retina, Dell laptop, iPad Air, iPhone 8 Plus, iPhone 6s, samsung s9 and other android mobile phones.


### Performance Testing
- Overall WebPage Performance Test was done using [WebPageTest](https://www.webpagetest.org/) with test location set to Dulles, USA and test browser set to Chrome. Some areas of improvement according to this website are Security of the site, image compression and Cache Static Content.
    - Home & About - [Results](https://www.webpagetest.org/result/201110_DiHE_a280e61339f04cb6664646649202f1e6/)
    - Testimonials - [Results](https://www.webpagetest.org/result/201110_DiQE_fb74c405b4d87ab3e96f9254d41c80e0/)
    - Pricing - [Results](https://www.webpagetest.org/result/201110_Di25_d8f1171e7fc39a784c261eba56e79e4b/)
    - Book A Lesson - [Results](https://www.webpagetest.org/result/201110_DiH7_54f39ae4fc8c5ed3e4e90f6814f53ab5/)
    - Contact Me - [Results](https://www.webpagetest.org/result/201110_DiSC_2cf9d1a7f789f8d36a1489b65a1dd899/)


## Deployment 

### Publishing the site
This website was published using [GitHub Pages](https://pages.github.com/). The procedure is outlined below.
1. Go to the GitHub website and log in.
2. On the left-hand side, you'll see all your repositories, select the appropriate one. ([Repository](https://github.com/marcusnolan/MS1-Ian-Kearney-Coaching) used for this project).
3. Under the name of your chosen Repository you will see a ribbon of selections, click on 'Settings' located on the right hand side.
4. Scroll down till you see 'GitHub Pages' heading.
5. Under the 'Source' click on the dropdown and select 'master branch' then under the next dropdown select '/docs' followed by pressing save.
6. The page will reload and you'll see the link of your published page displayed under 'GitHub' pages.
7. It takes a few minutes for the site to be published, wait until the background of your link changes to a green color before trying to open it.


### Cloning 
If you wish to clone or download this repository to your local device you can follow the procedure outlined below.
1. Go to the GitHub website and log in.
2. Locate the [Repository](https://github.com/marcusnolan/MS1-Ian-Kearney-Coaching) used for this project.
3. Under the Repository name locate 'the 'code' button which is to the left of the 'gitpod' button in green.
4. To clone the repository using HTTPS click the link under Clone  "HTTPS".
5. Open your Terminal and go to a directory where you want the cloned directory to be copied in.
6. Type `Git Clone` and paste the URL you copied from the GitHub.
7. To create your local clone press `Enter`

## Known Bugs

There are no identified bugs currently.

## Credits

### Code
- Bootstrap library was used to create a responsive design and create form, modal, navbar, footer, card, and image carousel elements.

### Content 
- All code was written by myself, Marcus Nolan. 
- Writing up the README file;
    - I viewed the code institute [sample readme](https://github.com/Code-Institute-Solutions/StudentExampleProjectGradeFive). 
    - I used the [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#code). 
    - I also got insperation from other students within the slack channel for user centric front end development and peer reviews. 
- The content itself was either written by myself, got directly from Ian Kearney or from the [Dromoland Castle Golf website](https://www.dromoland.ie/golf/golf-pro-coaching/)
- All testimonials are from Ian Kearney's [ast clients but feature a different name and avatar on the site.]

### Media 
- All images featuring Ian Kearney were sent by him or screenshotted frames from a [promotional video](https://www.youtube.com/watch?v=7r0gJoqnmLs) for golf in Dromoland Castle.
- One of 3 banner images on the home page carousel and the banner images from the pricing and book a lesson pages were downloaded from [Unsplash](https://unsplash.com/)
- The logo was designed by myself, Marcus Nolan.

### Acknowledgements
- I have to thank Ian Kearney and all the team from Dromoland Castle for being so helpful and letting me use their content and brand for the site. 
- Thank you to everyone who took their time to provide me constructive feedback on the Slack community page and of course my friends and family.
- Big thanks to my mentor for putting up with my questions and giving me great insights.
