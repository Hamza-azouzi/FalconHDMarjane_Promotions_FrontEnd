console.log("working");
const loading = document.getElementById("loading"),
  nav = document.getElementById("nav"),
  foot = document.getElementById("foot"),
  indexContent = document.getElementById("indexContent"),
  centerLoginForm = document.getElementById("centerLoginForm"),
  managerGetsPromotions = document.getElementById("managerGetsPromotions"),
  managerGetsProducts = document.getElementById("managerGetsProducts"),
  managerAddsPromotions = document.getElementById("managerAddsPromotions"),
  managerAddsAisleHolder = document.getElementById("managerAddsAisleHolder"),
  getPromotionsTab = () => {
    managerGetsPromotions.style.display = "block";
    managerGetsProducts.style.display = "none";
    managerAddsPromotions.style.display = "none";
    managerAddsAisleHolder.style.display = "none";
  },
  getProductsTab = () => {
    managerGetsPromotions.style.display = "none";
    managerGetsProducts.style.display = "block";
    managerAddsPromotions.style.display = "none";
    managerAddsAisleHolder.style.display = "none";
  },
  addPromotionsTab = () => {
    managerGetsPromotions.style.display = "none";
    managerGetsProducts.style.display = "none";
    managerAddsPromotions.style.display = "block";
    managerAddsAisleHolder.style.display = "none";
  },
  addAisleHolderTab = () => {
    managerGetsPromotions.style.display = "none";
    managerGetsProducts.style.display = "none";
    managerAddsPromotions.style.display = "none";
    managerAddsAisleHolder.style.display = "block";
  };

setTimeout(() => {
  loading.style.animation = "fade 0.5s linear";
  setTimeout(() => {
    loading.style.display = "none";
    foot.style.display = "block";
    nav.style.display = "block";
    indexContent.style.display = "block";
  }, 500);
}, 2000);
