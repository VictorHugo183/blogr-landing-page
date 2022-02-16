const dropdownButtons = document.querySelectorAll(".dropdown-button");
const toggleButton = document.querySelector(".toggle-button");
const mobileMenus = document.querySelector("#mobilenav");
const mobileDropdownButtons = document.querySelectorAll(".mobile-dropdown")

const toggleMenu = (event) => {
  if(event.target.className === "dropdown-link"){
    const arrow = event.target.getElementsByTagName("img")[0];
    arrow.classList.toggle("arrow-up")

    const parentListItem = event.target.closest("li");
    const currentDropdown = parentListItem.querySelector(".dropdown");
    currentDropdown.classList.toggle("dropdown-visible");

    /* Check all opened dropdown menus, if they're not the current active menu: remove their visible class and toggle the arrow image*/
    document.querySelectorAll(".dropdown-visible").forEach(item => {
      if (item === currentDropdown) return
      item.classList.remove("dropdown-visible");
      item.closest("li").getElementsByTagName("img")[0].classList.toggle("arrow-up");
    })
  }
}

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

toggleButton.addEventListener("click", () => {
  mobileMenus.classList.toggle("active");
})