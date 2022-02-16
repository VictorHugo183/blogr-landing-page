# Blogr landing page
This is my solution to the Blogr landing page challenge on Frontend Mentor. Frontend Mentor challenges help you improve your coding skills by building realistic projects.<br><br>
View live version here: https://victorhugo183.github.io/blogr-landing-page/

## The challenge

The challenge is to build out a landing page and get it looking as close to the design as possible.

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See active states for all interactive elements on the page

## Where to find everything

The task is to build out the project to the designs inside the `/design` folder. You will find both a mobile and a desktop version of the design. 

You will find all the required assets in the `/images` folder. The assets are already optimized.

There is also a `style-guide.md` file containing the information you'll need, such as color palette and fonts.

## Development Notes:

### Tools used:
<ul>
<li>HTML5</li>
<li>CSS3 - Flexbox, Variables, Media Queries</li>
<li>JavaScript - Used for navigation toggles</li>
</ul>

### Workflow:
<ul>
<li>Started by declaring CSS variables and global properties such as font-sizes according to design specifications</li>
<li>Sketched out and coded the HTML structure</li>
<li>Implemented desktop design first and then added responsiveness for mobile later with media queries</li>
</ul>

### Decisions:
<ul>
<li>I decided to code the desktop and mobile navigations separately as their designs varied substantially, this was easier than manipulating the styles of a single navigation component.</li>
</ul>

### What I learned:
<ul>
<li>
The navigation menu is my main takeaway from this challenge, the dropdown menus and the differences between mobile and desktop designs were a challenge for me, as previously I would either implement a basic design or use a library such as Bootstrap. By limiting myself to only CSS and vanilla JS I was able to learn how to implement those designs, which is a skill I expect to apply to many other front-end projects.
</li>
<li>
CSS positions: before this challenge I had a very limited understanding of how CSS positions (absolute & relative) actually worked, but manipulating images and menus with them made me understand them much better.
</li>
<li>How to toggle dropdown menus with JavaScript, below is a snippet of the code I wrote to achieve this:

```js
  const mobileDropdownButtons = document.querySelectorAll(".mobile-dropdown")

  const toggleMobileMenu = (event) => {
    if(event.target.className === "mobile-link"){
      const arrow = event.target.getElementsByTagName("img")[0];
      arrow.classList.toggle("arrow-up")

      const parentListItem = event.target.closest("li");
      const currentDropdown = parentListItem.querySelector(".mobile-dropdown-menu");
      currentDropdown.classList.toggle("mobile-dropdown-menu-visible");

      document.querySelectorAll(".mobile-dropdown-menu-visible").forEach(item => {
        if (item === currentDropdown) return
        item.classList.remove("mobile-dropdown-menu-visible");
        item.closest("li").getElementsByTagName("img")[0].classList.toggle("arrow-up");
      })
    }
  }

  mobileDropdownButtons.forEach(item => {
  item.addEventListener("click", toggleMobileMenu);
  })
```
</li>
</ul>

## Design Goal Overview:<br><br>

![Design preview for the Blogr landing page coding challenge](./design/desktop-preview.jpg)



