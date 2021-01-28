<h1 align="center">Go Phish</h1>
<h1 align="center"><img src="./assets/images/readme/am-i-responsive-ian-kearney-coaching.png" /></h1>

<a href="https://marcusnolan.github.io/MS1-Ian-Kearney-Coaching/"><img src="./assets/images/logos/ikc-logo-blue.jpg" width="25px"/> : Ian Kearney Coaching Live Website</a>

<a href="https://github.com/marcusnolan/MS1-Ian-Kearney-Coaching/"><img src="./assets/images/logos/github-logo.png" width="25px"/> : Ian Kearney Coaching Github Repository</a>

## About
The Ian Kearney Coaching website was created to help golfers in the southwest of Ireland easily contact, book and learn about lessons with top class teaching professional, Ian Kearney. Previously, golfers would have to ring or email just to get a call back on information about lessons, let alone actually booking them. This also provides a contact free way of enquiring which in these modern days is a necessity. 


## Table of Contents
**[User Experience](#user-experience)** 

**[Features](#features)**

**[Technologies Used](#technologies-used)**

**[Testing](#testing)**

**[Deployment](#deployment)**

**[Known Bugs](#known-bugs)**

**[Credits](#credits)**

## User Experience

### User Stories
- #### As a golfer looking to improve the quality of my game with the help af a teaching professional for the first time;
    1. I want to easily understand the purpose and the layout of the site without additional instructions needed.
    1. I want to intuitively navigate through the site to browse the content.
    1. I want to enjoy the design and for it to add to the overall feel of professionalism and quality.
    1. I want to learn about my potential new coach and his career in teaching.
    1. I want to find a variety of lesson options to target specific areas of my game.
- #### As a golfer who is looking for new ways to improve, such as someone who has gotten lessons from teaching professionals before and feels it is time to learn from a new coach;
    1. I want to explore why Ian Kearney is the next coach for me and what his previous clients have said about him in testimonials.
    1. I want to feel like Ian Kearney understands what he is talking about and has extensive knowledge in coaching.
    1. I want to be able to digest the pricing structure easily and compare it to previous coaches. 
- #### As a visitor who has already visited this website and is returning to book a second or third lesson;
    1. I want to be able to use the website on any device so I can keep it handy.
    1. I want to use the navigation at all times and have it readily available so I can quickly navigate from one page to another.


### design

- #### Colour Scheme
    - As this site was based more on functionality, a contasting colour scheme was needed while portraying a light hearted and enjoyable feeling to align with Ian's style of teaching and personality. 
    The colours chosen were Strong Blue (#2980CC), Dark Grey (#737373) and White (#FFF).  
    <img src="./assets/images/readme/ian-kearney-coaching-colour-palette.png" height="100px"/>

- #### Typography
    - The main font used is a sans-serif type of font 'Lato' with sans-serif as a fallback font. This font is easy to read as it's not decorated and fits in well with full width shapes and div's as it is a somewhat narrow font.

        <img src="./assets/images/readme/ian-kearney-coaching-lato-font.png" height="30px" />

    - The secondary font used for the nav-bar is 'Oswald' with sans-serif as a fallback.

        <img src="./assets/images/readme/ian-kearney-coaching-oswald-font.png" height="30px" />

    - The font used for Ian's Signature is 'Euphoria-script' with sans-serif as a fallback. 

        <img src="./assets/images/readme/ian-kearney-coaching-euphoria-script-font.png" height="30px" />


- #### Imagery
    - Images on this website are a combonation of both Images of/from Ian Kearney himself and from unsplash where you can access royalty free images. Images on this site are used to convey Ian's top level coaching history and also the caliber of playing he is used to. They are also used as a banner for each page. 

- #### Wireframes/Mockups
    - Wireframes and moclups were created using Balsamiq Wireframes. Both mobile and desktop versions are in the same image for each page linked below;
        
        - <a href="https://github.com/marcusnolan/MS1-Ian-Kerney-Coaching/blob/9e49ffa887a6fd0447a17b40668ee8ffed77a22e/assets/mockups/index.html.png"> Home & About</a>
        - <a href="https://github.com/marcusnolan/MS1-Ian-Kerney-Coaching/blob/9e49ffa887a6fd0447a17b40668ee8ffed77a22e/assets/mockups/testimonials.html.png"> Testimonials</a>
        - <a href="https://github.com/marcusnolan/MS1-Ian-Kerney-Coaching/blob/9e49ffa887a6fd0447a17b40668ee8ffed77a22e/assets/mockups/pricing.html.png"> Pricing</a>
        - <a href="https://github.com/marcusnolan/MS1-Ian-Kerney-Coaching/blob/9e49ffa887a6fd0447a17b40668ee8ffed77a22e/assets/mockups/book-a-lesson.html.png"> Book A Lesson</a>
        - <a href="https://github.com/marcusnolan/MS1-Ian-Kerney-Coaching/blob/9e49ffa887a6fd0447a17b40668ee8ffed77a22e/assets/mockups/contact.html.png"> Contact Me</a>


## Features

### Existing Features

#### Common Features Across All Pages
- **Header** - allows user to easily navigate across all pages
    - Navigation is included in the header to let the user intuitively locate it.
    - Navigation links chnage colour when hovered over. This lets the visitor know that it is clickable.
    - The navigation link, matching the page that the user is visiting, stays underlined to let the user quickly establish which page she/he is visiting.
    - Pages that have already been visited in the navigation slightly change to a darker color to let users know what pages they have already visited. 
    - Navigation links collapse in a personalized hamburger menu when viewed in mobile sizes.
    - Colors have been chosen with optimum contrast in mind to be pleasant to the eye.
- **Page Banner Images**
    - Banners for all pages have been styled in the same manner which gives the user a feeling of cohesion and familiarity.
    - The image is stuck to the top of the page so that it is easier to read the text below rather than having it fixed and causing potential issues with legibility.
    - The Banner text is responsive depending on the viewport width to avoid overspilling.
- **Accessibility**
    - All Pages have a description in case the image link breaks as well as helps screen readers.
    - The hamburger menu has aria-label added to let users with screen readers know where the toggleable menu is.
    - (WAI ARIA used whenever appropriate as an indication to the screen readers when something is or is not accessible)
- **Buttons**
    - All buttons are styled in the same way to provide consistency across the page. When hovering over a button, the text will change to a darker color in a similar fashion to the navigation bar to give the user a clear understanding that it is clickable.
- **Responsiveness**
    - All Pages are responsive and provide the same functionality regardless of the viewport size and device brand/orientation.
- **Footer**
    - The Footer has been designed to be at the bottom of the page, regardless of the amount of content. This aids the overall user experience.
    - A logo carousel has been placed in the footer to let users know Ian's qualifications and premium partners.
    - As a main feature of the website, an ability to go to the contact page felt necessary to have in the footer for ease and speed. 
    - Social links have been grouped together to signify their connection when hovered over, change in color. Please excuse the fact that the social links currently go to the channels home pages as Ian has not set them up yet.


### Specific to Pages
- **Home & About**
    - A carousel of images that is responsive and changes dimensions depending on the viewport size is set as the banner-image of the home page to give users a further understanding of the page without having to scroll or read.
    - A short quote from Ian about his philosophy to golf coaching to let the user know what the purpose of the page is.
    - A summary of Ian's Early career and coaching career give a very simple yet effective introduction to the website and indeed Ian.
- **Testimonials**
    - Five testimonials from some of Ian's clients over the years.
    - A small line to say how each person has improved during their time with Ian by showing how their golfing handicaps have dropped.
    - An avatar for each person was added to give the page a more personal feel. 
- **Pricing**
    - Four boxes are used to outline the different lesson options and their prices. Obviously the main feature of any pricing page is indeed the price itself which is highlighted using a different colour and font weight compared to the other text on the page.
- **Book A Lesson**
    - The booking form features simple text, email, phone number, select and date input fields. 
    - It offers users the chance to chose a time of lesson to suit they're day to day lives. 
- **Contact Me**
    - Another form using input fields to gather contact details off a user while also dividing their query into different categories and offering them the chance to explain the query with a text box. 
    - The address and contact details of the academy where Ian teaches out of was also added to avoid users having to fill out a form to get the directions each time they have a lesson for example. 


    ### Future Features
 
- In the future, I would like to implement a calendar feature where you can see exactly what availability Ian has without having to contact him. Using a software such as calendly would do. 
- Integrate a payment system using strype to maintain as little physical contact as possible and ease of operating for Ian Kearney. 
- An opportunity for Ian's clients to leave a testimonial to be added to the website and/or a comment section beneath each testimonial. 


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
