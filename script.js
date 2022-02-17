const dropdownButtons = document.querySelectorAll(".dropdown-button");
const toggleButton = document.querySelector(".toggle-button");
const mobileMenus = document.querySelector("#mobilenav");
const mobileDropdownButtons = document.querySelectorAll(".mobile-dropdown")

/* Toggles dropdown menus for navbar links on Desktop, includes changing link arrow direction and closing other opened menus */
const toggleMenu = (event) => {
  if(event.target.className === "dropdown-link"){
    const arrow = event.target.getElementsByTagName("img")[0];
    arrow.classList.toggle("arrow-up")

    const parentListItem = event.target.closest("li");
    const currentDropdown = parentListItem.querySelector(".dropdown");
    currentDropdown.classList.toggle("dropdown-visible");

    /* Check all opened dropdown menus, if they're not the current active menu: remove their visible class and toggle their arrow image*/
    document.querySelectorAll(".dropdown-visible").forEach(item => {
      if (item === currentDropdown) return
      item.classList.remove("dropdown-visible");
      item.closest("li").getElementsByTagName("img")[0].classList.toggle("arrow-up");
    })
  }
}

/* Toggles dropdown menus for navbar links on mobile */
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

dropdownButtons.forEach(item => {
  item.addEventListener("click", toggleMenu);
})

mobileDropdownButtons.forEach(item => {
  item.addEventListener("click", toggleMobileMenu);
})

/* When the toggle button is clicked toggle the state of the mobile nav menu and toggle the button icon between an open and close icon */
toggleButton.addEventListener("click", () => {
  mobileMenus.classList.toggle("active");

  toggleButtonIcon = toggleButton.querySelector("img");
  toggleButtonIcon.classList.toggle("close-btn");
  if(toggleButtonIcon.classList.contains("close-btn")){
    toggleButtonIcon.src = "images/icon-close.svg";
  } else {
    toggleButtonIcon.src = "images/icon-hamburger.svg"
  }
})