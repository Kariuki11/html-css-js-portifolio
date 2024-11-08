function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  
  // //Dark mode
  // function toggleTheme() {
  //   document.body.classList.toggle("dark-theme");
  //   const themeToggleButton = document.getElementById("theme-toggle");
    
  //   // Change icon based on the theme
  //   if (document.body.classList.contains("dark-theme")) {
  //     themeToggleButton.textContent = "☀️"; // Light mode icon
  //   } else {
  //     themeToggleButton.textContent = "🌙"; // Dark mode icon
  //   }
  // }
  
  