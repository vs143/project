//getting elements
//SIDEBAR
const menuItems = document.querySelectorAll(".menu-items");

// MESSAGES
const messagesnotification = document.querySelector("#messages-notification");
const messages = document.querySelector(".messeges");
const message = messages.querySelectorAll(".messege");
const messageSearch = document.querySelector("#messege-search");

// =======================themes==================
const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".customize-theme");
let root = document.querySelector(":root");

// fontsize=====================================
const fontSize = document.querySelectorAll(".choose-size span");
// ===========================colors============================
const colorPalete = document.querySelectorAll(".choose-color  span");

// backgroud color=============================================
const Bg1 = document.querySelector(".bg-1");
const Bg2 = document.querySelector(".bg-2");
const Bg3 = document.querySelector(".bg-3");

// =================== SIDEBAR ======================
// remove menu items from all menu items
const changeActiveItem = () => {
  menuItems.forEach((item) => {
    item.classList.remove("active");
  });
};

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    changeActiveItem();
    item.classList.add("active");
    if (item.id != "notifications") {
      document.querySelector(".notifications-popup").style.display = "none";
    } else {
      document.querySelector(".notifications-popup").style.display = "block";
      document.querySelector(
        "#notifications .notification-count"
      ).style.display = "none";
    }
  });
});

// ====================== MESSAGES ======================

// searches chat
const searchmessage = () => {
  const val = messageSearch.value.toLowerCase();
  console.log(val);
  message.forEach((chat) => {
    let name = chat.querySelector("h5").textContent.toLowerCase();
    if (name.indexOf(val) != -1) {
      chat.style.display = "flex";
    } else {
      chat.style.display = "none";
    }
  });
};

// message key up event
messageSearch.addEventListener("keyup", searchmessage);

// highlighted messages card when message menu click
messagesnotification.addEventListener("click", () => {
  messages.style.boxShadow = "0 0 1rem var(--color-primary)";
  messagesnotification.querySelector(".notification-count").style.display =
    "none";
  setTimeout(() => {
    messages.style.boxShadow = "none";
  }, 1500);
});

// ===========================themes======================

theme.addEventListener("click", () => {
  themeModal.style.display = "grid";
});

const openThemeModel = (e) => {
  if (e.target.classList.contains("customize-theme")) {
    themeModal.style.display = "none";
  }
};

themeModal.addEventListener("click", openThemeModel);

const removeSizeSelector = () => {
  fontSize.forEach((size) => {
    size.classList.remove("active");
  });
};

// theme close==================================

fontSize.forEach((size) => {
  let fontSize;
  size.addEventListener("click", () => {
    removeSizeSelector();
    size.classList.toggle("active");
    if (size.classList.contains("font-size-1")) {
      fontSize = "10px";
      root.style.setProperty("----sticky-top-left", "5.4rem");
      root.style.setProperty("----sticky-top-right", "5.4rem");
    } else if (size.classList.contains("font-size-2")) {
      fontSize = "13px";
      root.style.setProperty("----sticky-top-left", "5.4rem");
      root.style.setProperty("----sticky-top-right", "-7rem");
    } else if (size.classList.contains("font-size-3")) {
      fontSize = "16px";
      root.style.setProperty("----sticky-top-left", "-2rem");
      root.style.setProperty("----sticky-top-right", "-17rem");
    } else if (size.classList.contains("font-size-4")) {
      fontSize = "19px";
      root.style.setProperty("----sticky-top-left", "-5rem");
      root.style.setProperty("----sticky-top-right", "-25rem");
    } else if (size.classList.contains("font-size-5")) {
      fontSize = "22px";
      root.style.setProperty("----sticky-top-left", "-15rem");
      root.style.setProperty("----sticky-top-right", "-35rem");
    }
    document.querySelector("html").style.fontSize = fontSize;
  });
});
// ==========================removeactivecolor===============
const removeactivecolor = () => {
  colorPalete.forEach((color) => {
    color.classList.remove("active");
  });
};

// ==================================color==================
colorPalete.forEach((color) => {
  color.addEventListener("click", () => {
    let primary;
    removeactivecolor();
    if (color.classList.contains("color-1")) {
      primaryHue = 252;
    } else if (color.classList.contains("color-2")) {
      primaryHue = 52;
    } else if (color.classList.contains("color-3")) {
      primaryHue = 352;
    } else if (color.classList.contains("color-4")) {
      primaryHue = 152;
    } else if (color.classList.contains("color-5")) {
      primaryHue = 202;
    }

    root.style.setProperty("--primary-color-hue", primaryHue);
  });
  // document.querySelector("html").color = primary;
});

// ================background theme==============

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;
const changeBG = () => {
  root.style.setProperty("--light-color-lightness", lightColorLightness);
  root.style.setProperty("--white-color-lightness", whiteColorLightness);
  root.style.setProperty("--dark-color-lightness", darkColorLightness);
};

Bg2.addEventListener("click", () => {
  lightColorLightness = "15%";
  whiteColorLightness = "28%";
  darkColorLightness = "95%";

  Bg2.classList.add("active");
  Bg1.classList.remove("active");
  Bg3.classList.remove("active");
  changeBG();
});
Bg3.addEventListener("click", () => {
  lightColorLightness = "80%";
  whiteColorLightness = "15%";
  darkColorLightness = "0%";

  Bg3.classList.add("active");
  Bg1.classList.remove("active");
  Bg2.classList.remove("active");
  changeBG();
});
Bg1.addEventListener("click", () => {
  lightColorLightness = "95%";
  whiteColorLightness = "10%";
  darkColorLightness = "0%";

  Bg1.classList.add("active");
  Bg2.classList.remove("active");
  Bg3.classList.remove("active");
  // changeBG();
  window.location.reload();
});
