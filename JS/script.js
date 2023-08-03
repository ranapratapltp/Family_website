const close_menu = document.getElementsByClassName("close_menu")[0];
const hamburger_button = document.getElementsByClassName("hamburgerButton")[0];
const mobile_menu = document.getElementsByClassName("mobile_menu")[0];

const toggleMobileMenu = () => {
  mobile_menu.classList.toggle("open");
  mobile_menu.classList.toggle("close");
  if (mobile_menu.classList.contains("open")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "scroll";
  }
};

close_menu.addEventListener("click", toggleMobileMenu);
hamburger_button.addEventListener("click", toggleMobileMenu);
