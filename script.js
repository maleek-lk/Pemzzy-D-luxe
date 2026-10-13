/* =========================================================
   ✦ EDITABLE SITE SETTINGS
   PEMZZY D'LUXE
========================================================= */

const SITE = {

  brand: "PEMZZY D'LUXE",

  slogan: "Designed around you. Defined by elegance.",

  whatsapp: "2349028214052",

  instagram: "pemzzy_luxury",

  location: "Abuja, Federal Capital Territory, Nigeria",

  hours: "Open 24 hours",

  assetPath: "assets/",

  // Replace these filenames if your repository uses different names.
  heroImage: "hero_image.webp",

  atelierImage: "dress-08.jpg",

  marquee: [
    "dress-01.jpg",
    "dress-02.jpg",
    "dress-03.jpg",
    "dress-05.jpg",
    "dress-08.jpg",
    "dress-09.jpg",
    "dress-11.jpg",
    "dress-13.jpg"
  ],

  products: [
    {
      id: 1,
      name: "Signature Piece 01",
      category: "Bespoke Fashion",
      image: "dress-01.jpg",
      price: "Price on request",
      description: "A distinctive design tailored to express your individual style."
    },
    {
      id: 2,
      name: "Signature Piece 02",
      category: "Contemporary Wear",
      image: "dress-02.jpg",
      price: "Price on request",
      description: "A refined fashion piece created with your personal style in mind."
    },
    {
      id: 3,
      name: "Signature Piece 03",
      category: "Occasion Wear",
      image: "dress-03.jpg",
      price: "Price on request",
      description: "A distinctive look for celebrations and special occasions."
    },
    {
      id: 4,
      name: "Signature Piece 04",
      category: "Elegant Essentials",
      image: "dress-04.jpg",
      price: "Price on request",
      description: "An elegant design that brings together comfort and individuality."
    },
    {
      id: 5,
      name: "Signature Piece 05",
      category: "Aso-Ebi",
      image: "dress-05.jpg",
      price: "Price on request",
      description: "A style for celebrations, gatherings, and memorable occasions."
    },
    {
      id: 6,
      name: "Signature Piece 06",
      category: "Bespoke Fashion",
      image: "dress-06.jpg",
      price: "Price on request",
      description: "A carefully considered design shaped around your fashion vision."
    },
    {
      id: 7,
      name: "Signature Piece 07",
      category: "Office Wear",
      image: "dress-07.jpg",
      price: "Price on request",
      description: "A polished style for a confident and professional appearance."
    },
    {
      id: 8,
      name: "Signature Piece 08",
      category: "Contemporary Wear",
      image: "dress-08.jpg",
      price: "Price on request",
      description: "A distinctive piece that celebrates your individual taste."
    },
    {
      id: 9,
      name: "Signature Piece 09",
      category: "Occasion Wear",
      image: "dress-09.jpg",
      price: "Price on request",
      description: "A beautiful option for special moments and celebrations."
    },
    {
      id: 10,
      name: "Signature Piece 10",
      category: "Bespoke Fashion",
      image: "dress-10.jpg",
      price: "Price on request",
      description: "A personalised style designed around your preferences."
    },
    {
      id: 11,
      name: "Signature Piece 11",
      category: "Elegant Essentials",
      image: "dress-11.jpg",
      price: "Price on request",
      description: "A sophisticated piece for a wardrobe that reflects your personality."
    },
    {
      id: 12,
      name: "Signature Piece 12",
      category: "Contemporary Wear",
      image: "dress-12.jpg",
      price: "Price on request",
      description: "A considered design with an emphasis on style and individuality."
    },
    {
      id: 13,
      name: "Signature Piece 13",
      category: "Aso-Ebi",
      image: "dress-13.jpg",
      price: "Price on request",
      description: "A celebration-ready look shaped around your preferred aesthetic."
    },
    {
      id: 14,
      name: "Signature Piece 14",
      category: "Office Wear",
      image: "dress-14.jpg",
      price: "Price on request",
      description: "A refined design for professional settings and everyday elegance."
    },
    {
      id: 15,
      name: "Signature Piece 15",
      category: "Special Occasions",
      image: "dress-15.jpg",
      price: "Price on request",
      description: "A personalised fashion choice for an occasion worth remembering."
    }
  ]

};


/* =========================================================
   SITE ENGINE
   Keep the code below unchanged when reusing the template.
========================================================= */

"use strict";

const asset = (file) => SITE.assetPath + file;

const getWhatsAppLink = (message = "") => {
  const number = String(SITE.whatsapp).replace(/\D/g, "");

  if (!number) {
    return "";
  }

  return (
    "https://wa.me/" +
    number +
    "?text=" +
    encodeURIComponent(message)
  );
};


/* =========================================================
   GENERAL SITE INITIALIZATION
========================================================= */

document.title = `${SITE.brand} | Elegance in Every Thread`;

document.querySelectorAll("[data-brand]").forEach((element) => {
  element.textContent = SITE.brand;
});

document.getElementById("year").textContent = new Date().getFullYear();


/* =========================================================
   HERO AND ATELIER IMAGES
========================================================= */

const heroImage = document.getElementById("heroImage");

if (heroImage && SITE.heroImage) {
  heroImage.src = asset(SITE.heroImage);
  heroImage.alt = `${SITE.brand} women's fashion`;
}

const atelierImage = document.getElementById("atelierImage");

if (atelierImage && SITE.atelierImage) {
  atelierImage.src = asset(SITE.atelierImage);
  atelierImage.alt = `Elegant women's fashion by ${SITE.brand}`;
}


/* =========================================================
   WHATSAPP LINKS
========================================================= */

document.querySelectorAll("[data-whatsapp]").forEach((link) => {
  const message = link.dataset.message || "";

  const url = getWhatsAppLink(message);

  if (url) {
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  } else {
    link.href = "#";
    link.addEventListener("click", (event) => {
      event.preventDefault();
      showToast("Please add a WhatsApp number in the site settings.");
    });
  }
});


/* =========================================================
   PRODUCT COLLECTION
========================================================= */

const productGrid = document.getElementById("productGrid");

const collectionCount = document.getElementById("collectionCount");

const productModal = document.getElementById("productModal");

const modalImage = document.getElementById("modalImage");

const modalTitle = document.getElementById("modalTitle");

const modalDescription = document.getElementById("modalDescription");

const modalPrice = document.getElementById("modalPrice");

const modalOrder = document.getElementById("modalOrder");

let lastFocusedElement = null;


function createProductCard(product, index) {
  const card = document.createElement("article");

  card.className = "product-card";

  card.tabIndex = 0;

  card.setAttribute("role", "button");

  card.setAttribute(
    "aria-label",
    `View details for ${product.name}`
  );

  card.style.animationDelay = `${Math.min(index * 45, 450)}ms`;

  const imageWrap = document.createElement("div");

  imageWrap.className = "product-image-wrap";

  const image = document.createElement("img");

  image.className = "product-image";

  image.src = asset(product.image);

  image.alt = product.name;

  image.loading = "lazy";

  image.decoding = "async";

  imageWrap.appendChild(image);


  const tag = document.createElement("span");

  tag.className = "product-tag";

  tag.textContent = "THE NUR EDIT";

  imageWrap.appendChild(tag);


  const viewButton = document.createElement("span");

  viewButton.className = "product-view";

  viewButton.setAttribute("aria-hidden", "true");

  viewButton.textContent = "↗";

  imageWrap.appendChild(viewButton);


  const info = document.createElement("div");

  info.className = "product-info";


  const infoMain = document.createElement("div");

  infoMain.className = "product-info-main";


  const name = document.createElement("h3");

  name.className = "product-name";

  name.textContent = product.name;


  const category = document.createElement("p");

  category.className = "product-category";

  category.textContent = product.category;


  infoMain.append(name, category);


  const price = document.createElement("span");

  price.className = "product-price";

  price.textContent = product.price;


  info.append(infoMain, price);

  card.append(imageWrap, info);


  card.addEventListener("click", () => {
    openProductModal(product, card);
  });

  card.addEventListener("keydown", (event) => {
    if (
      event.key === "Enter" ||
      event.key === " "
    ) {
      event.preventDefault();
      openProductModal(product, card);
    }
  });

  return card;
}


function renderProducts() {
  if (!productGrid) {
    return;
  }

  const fragment = document.createDocumentFragment();

  SITE.products.forEach((product, index) => {
    fragment.appendChild(createProductCard(product, index));
  });

  productGrid.replaceChildren(fragment);

  if (collectionCount) {
    collectionCount.textContent =
      `${SITE.products.length} CURATED STYLES`;
  }
}


renderProducts();


/* =========================================================
   PRODUCT DETAILS MODAL
========================================================= */

function openProductModal(product, triggerElement) {
  if (!productModal) {
    return;
  }

  lastFocusedElement = triggerElement;

  modalImage.src = asset(product.image);

  modalImage.alt = product.name;

  modalTitle.textContent = product.name;

  modalDescription.textContent = product.description;

  modalPrice.textContent = product.price;

  const message = [
    `Hello ${SITE.brand}, I am interested in this design.`,
    "",
    `Style: ${product.name}`,
    `Category: ${product.category}`,
    `Listed price: ${product.price}`,
    "",
    "Please share more details about availability, sizing, and ordering."
  ].join("\n");

  const whatsappUrl = getWhatsAppLink(message);

  if (whatsappUrl) {
    modalOrder.href = whatsappUrl;
    modalOrder.target = "_blank";
    modalOrder.rel = "noopener noreferrer";
    modalOrder.style.display = "inline-flex";
  } else {
    modalOrder.href = "#";
    modalOrder.style.display = "inline-flex";
  }

  productModal.classList.add("is-open");

  productModal.setAttribute("aria-hidden", "false");

  document.body.classList.add("modal-open");

  const closeButton = productModal.querySelector(".modal-close");

  if (closeButton) {
    closeButton.focus();
  }
}


function closeProductModal() {
  if (!productModal) {
    return;
  }

  productModal.classList.remove("is-open");

  productModal.setAttribute("aria-hidden", "true");

  document.body.classList.remove("modal-open");

  if (lastFocusedElement) {
    lastFocusedElement.focus();
    lastFocusedElement = null;
  }
}


document.querySelectorAll("[data-close-modal]").forEach((element) => {
  element.addEventListener("click", closeProductModal);
});


document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeProductModal();
  }
});


/* =========================================================
   INFINITE IMAGE MARQUEE
========================================================= */

const marqueeTrack = document.getElementById("marqueeTrack");


function createMarqueeImage(file, index, duplicate = false) {
  const frame = document.createElement("div");

  frame.className = "marquee-item";

  const image = document.createElement("img");

  image.src = asset(file);

  image.alt = duplicate
    ? ""
    : `${SITE.brand} fashion gallery image ${index + 1}`;

  image.loading = "lazy";

  image.decoding = "async";

  if (duplicate) {
    image.setAttribute("aria-hidden", "true");
  }

  frame.appendChild(image);

  return frame;
}


function renderMarquee() {
  if (!marqueeTrack || !SITE.marquee.length) {
    return;
  }

  const fragment = document.createDocumentFragment();

  SITE.marquee.forEach((file, index) => {
    fragment.appendChild(
      createMarqueeImage(file, index, false)
    );
  });

  SITE.marquee.forEach((file, index) => {
    fragment.appendChild(
      createMarqueeImage(file, index, true)
    );
  });

  marqueeTrack.replaceChildren(fragment);
}


renderMarquee();


/* =========================================================
   TOAST NOTIFICATIONS
========================================================= */

const toast = document.getElementById("toast");

let toastTimer;


function showToast(message) {
  if (!toast) {
    return;
  }

  toast.textContent = message;

  toast.classList.add("is-visible");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 3200);
}


/* =========================================================
   IMAGE FALLBACKS
   Display a graceful fallback if an image filename is incorrect.
========================================================= */

document.addEventListener("error", (event) => {
  const image = event.target;

  if (!(image instanceof HTMLImageElement)) {
    return;
  }

  if (image.dataset.fallbackApplied === "true") {
    return;
  }

  image.dataset.fallbackApplied = "true";

  image.style.opacity = "0.25";

  image.alt = "Image unavailable. Please check the asset filename.";
}, true);


/* =========================================================
   MOBILE-FRIENDLY MODAL FOCUS MANAGEMENT
========================================================= */

if (productModal) {
  productModal.addEventListener("keydown", (event) => {
    if (event.key !== "Tab") {
      return;
    }

    const focusable = [
      ...productModal.querySelectorAll(
        'button:not([disabled]), a[href]:not([href="#"])'
      )
    ].filter((element) => element.offsetParent !== null);

    if (!focusable.length) {
      return;
    }

    const first = focusable[0];

    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (
      !event.shiftKey &&
      document.activeElement === last
    ) {
      event.preventDefault();
      first.focus();
    }
  });
        }
