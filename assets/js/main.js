document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const yearElements = document.querySelectorAll("[data-year]");
  const testimonialTrack = document.querySelector("[data-testimonial-track]");
  const testimonialDots = document.querySelectorAll("[data-testimonial-dot]");
  const typewriters = document.querySelectorAll("[data-typewriter-text]");

  const ensureFloatingButtons = () => {
    if (!document.body || document.getElementById("fab-container")) {
      return;
    }

    const fabContainer = document.createElement("div");
    fabContainer.className = "fab-container";
    fabContainer.id = "fab-container";
    fabContainer.innerHTML = `
      <div class="fab-list" id="fab-list">
        <a href="https://wa.me/919100061092" class="fab-btn fab-whatsapp" id="fab-whatsapp" title="WHATSAPP US" aria-label="WhatsApp"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg></a>
        <a href="tel:+919100061092" class="fab-btn fab-call" id="fab-call" title="Call Us" aria-label="Call Now"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg></a>
      </div>
      <button class="fab-btn fab-dots" id="fab-dots" aria-label="More options">&#8943;</button>
    `;

    document.body.appendChild(fabContainer);
  };

  const legacyImageMap = {
    "image copy.png": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80",
    "image copy 2.png": "https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?auto=format&fit=crop&w=1200&q=80",
    "image copy 3.png": "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=1200&q=80",
    "image copy 4.png": "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=1200&q=80",
    "image copy 5.png": "https://images.unsplash.com/photo-1469521669194-babb45599def?auto=format&fit=crop&w=1200&q=80",
    "image copy 6.png": "https://images.unsplash.com/photo-1431274172761-fca41d930114?auto=format&fit=crop&w=1200&q=80",
    "image copy 7.png": "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1200&q=80",
    "image copy 8.png": "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80",
    "image copy 9.png": "https://images.unsplash.com/photo-1519197924294-4ba991a11128?auto=format&fit=crop&w=1200&q=80",
    "image copy 10.png": "https://images.unsplash.com/photo-1508182314998-3bd49473002f?auto=format&fit=crop&w=1200&q=80",
    "image copy 11.png": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    "image copy 12.png": "https://images.unsplash.com/photo-1538485399081-7c897f2de82b?auto=format&fit=crop&w=1200&q=80",
    "image copy 13.png": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?auto=format&fit=crop&w=1200&q=80",
    "image copy 14.png": "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1200&q=80",
    "image copy 15.png": "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
    "image copy 16.png": "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=1200&q=80",
    "image copy 17.png": "https://images.unsplash.com/photo-1527838832700-5059252407fa?auto=format&fit=crop&w=1200&q=80"
  };

  const buildLegacyPlaceholder = (label) => {
    const title = (label || "SLNS Destination").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800">
        <defs>
          <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#0B3C5D" />
            <stop offset="55%" stop-color="#2c5d7f" />
            <stop offset="100%" stop-color="#F97316" />
          </linearGradient>
        </defs>
        <rect width="800" height="800" fill="url(#bg)" rx="48" />
        <circle cx="126" cy="126" r="74" fill="rgba(255,255,255,0.16)" />
        <circle cx="680" cy="140" r="92" fill="rgba(255,255,255,0.08)" />
        <circle cx="640" cy="640" r="120" fill="rgba(255,255,255,0.08)" />
        <text x="72" y="610" fill="#ffffff" font-family="Inter, Arial, sans-serif" font-size="44" font-weight="700" letter-spacing="8">SLNS</text>
        <text x="72" y="690" fill="#ffffff" font-family="Inter, Arial, sans-serif" font-size="78" font-weight="800">${title}</text>
      </svg>
    `;

    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
  };

  const fixLegacyImageSources = () => {
    const legacyImages = document.querySelectorAll('img[src^="image copy"]');

    legacyImages.forEach(img => {
      const originalSrc = img.getAttribute("src") || "";
      const mappedSrc = legacyImageMap[originalSrc];
      const placeholderSrc = buildLegacyPlaceholder(img.alt || "SLNS Destination");

      img.onerror = () => {
        img.onerror = null;
        img.src = placeholderSrc;
      };

      img.src = mappedSrc || placeholderSrc;
      img.loading = "lazy";
      img.decoding = "async";
    });
  };

  const normalizeHeader = () => {
    const mainHeader = document.getElementById("main-header");
    if (!mainHeader) {
      return;
    }

    mainHeader.classList.remove("bg-primary", "text-white", "border-b", "border-white/10");
    mainHeader.classList.add("fixed", "top-0", "left-0", "right-0", "z-50");

    const navRow = mainHeader.querySelector("nav > div");
    if (navRow) {
      navRow.classList.remove("h-20", "lg:h-24");
    }

    const logoLink = mainHeader.querySelector('a[href="index.html"]');
    const logoImage = logoLink?.querySelector("img");
    if (logoImage) {
      logoImage.id = "header-logo";
      logoImage.className = "rounded-full object-cover border-2 border-accent/40";
    }

    const existingBrandText = logoLink?.querySelector("span");
    if (existingBrandText) {
      existingBrandText.className = "header-brand-text font-bold tracking-tight leading-tight";
    } else if (logoLink) {
      const brandText = document.createElement("span");
      brandText.className = "header-brand-text font-bold tracking-tight leading-tight";
      brandText.innerHTML = 'SLNS Management<br><span class="pl-3">Services</span>';
      logoLink.appendChild(brandText);
    }

    const desktopMenu = mainHeader.querySelector(".hidden.md\\:flex");
    if (desktopMenu) {
      desktopMenu.querySelectorAll("a").forEach(link => {
        if (link.href.includes("wa.me/919100061092")) {
          link.className = "btn-premium hover:text-accent transition-colors";
        } else {
          link.className = "hover:text-accent transition-colors";
        }
      });
    }

    const mobileMenuButton = document.getElementById("mobile-menu-btn");
    if (mobileMenuButton) {
      mobileMenuButton.classList.add("transition-colors");
    }
  };

  normalizeHeader();
  ensureFloatingButtons();
  fixLegacyImageSources();

  // Update Year
  const currentYear = new Date().getFullYear();
  yearElements.forEach(el => el.textContent = currentYear);

  // Header Scroll Effect
  if (header) {
    const syncHeader = () => {
      if (window.scrollY > 50) {
        header.classList.add("is-scrolled");
      } else {
        header.classList.remove("is-scrolled");
      }
    };
    syncHeader();
    window.addEventListener("scroll", syncHeader, { passive: true });
  }

  // Typewriter Effect
  if (typewriters.length > 0) {
    const type = (el) => {
      const text = el.getAttribute("data-typewriter-text") || "";
      let i = 0;
      el.textContent = "";
      const interval = setInterval(() => {
        if (i < text.length) {
          el.textContent += text.charAt(i);
          i++;
        } else {
          clearInterval(interval);
        }
      }, 50);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          type(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    typewriters.forEach(el => observer.observe(el));
  }

  // Testimonials Slider
  if (testimonialTrack && testimonialDots.length > 0) {
    let current = 0;
    const slides = testimonialTrack.querySelectorAll("[data-testimonial-slide]");
    const total = slides.length;

    const render = (idx) => {
      testimonialTrack.style.transform = `translateX(-${idx * 100}%)`;
      testimonialDots.forEach((dot, i) => {
        dot.classList.toggle("opacity-100", i === idx);
        dot.classList.toggle("opacity-40", i !== idx);
      });
    };

    testimonialDots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        current = i;
        render(current);
      });
    });

    setInterval(() => {
      current = (current + 1) % total;
      render(current);
    }, 5000);
  }

  // Mobile Menu
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenuClose = document.getElementById("mobile-menu-close");
  const mobileMenu = document.getElementById("mobile-menu");

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.remove("translate-x-full");
    });
  }

  if (mobileMenuClose && mobileMenu) {
    mobileMenuClose.addEventListener("click", () => {
      mobileMenu.classList.add("translate-x-full");
    });
  }

  if (mobileMenu) {
    const menuLinks = mobileMenu.querySelectorAll("a");
    menuLinks.forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("translate-x-full");
      });
    });
  }

  // Floating Action Buttons & Mobile Nav — Scroll Hide/Show
  const fabContainer = document.getElementById("fab-container");
  const mobileNav = document.getElementById("mobile-bottom-nav");
  const fabDots = document.getElementById("fab-dots");
  const fabList = document.getElementById("fab-list");

  let scrollTimer = null;
  let fabAutoOpenTimer = null;

  const setFabOpen = (isOpen) => {
    if (fabList) {
      fabList.classList.toggle("fab-open", isOpen);
    }
  };

  const showElements = () => {
    if (fabContainer) {
      fabContainer.classList.remove("nav-hidden");
    }
    if (mobileNav) {
      mobileNav.classList.remove("nav-hidden");
    }
  };

  const hideElements = () => {
    if (fabContainer) {
      fabContainer.classList.add("nav-hidden");
    }
    if (mobileNav) {
      mobileNav.classList.add("nav-hidden");
    }
    setFabOpen(false);
  };

  window.addEventListener("scroll", () => {
    clearTimeout(fabAutoOpenTimer);
    hideElements();
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => {
      showElements();
      fabAutoOpenTimer = setTimeout(() => {
        setFabOpen(true);
      }, 180);
    }, 600);
  }, { passive: true });

  // Three-dot toggle
  if (fabDots && fabList) {
    fabDots.addEventListener("click", () => {
      fabList.classList.toggle("fab-open");
    });
  }

  // Scroll Reveal
  const revealCandidates = [
    ...document.querySelectorAll(".reveal-on-scroll"),
    ...document.querySelectorAll("main section > div"),
    ...document.querySelectorAll("main section .grid > div"),
    ...document.querySelectorAll("main article"),
    ...document.querySelectorAll("main form"),
    ...document.querySelectorAll("footer .grid > div")
  ];

  const reveals = [...new Set(revealCandidates)].filter(el => {
    if (!el || el.closest("#mobile-menu, #fab-container, #mobile-bottom-nav")) {
      return false;
    }
    return el.getBoundingClientRect().height > 0;
  });

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.06, rootMargin: "0px 0px -4% 0px" });

  reveals.forEach((el, index) => {
    if (!el.classList.contains("reveal-on-scroll")) el.classList.add("reveal-on-scroll");
    if (!el.classList.contains("reveal-left") && !el.classList.contains("reveal-right") && !el.classList.contains("reveal-up")) {
      el.classList.add(index % 2 === 0 ? "reveal-left" : "reveal-right");
    }
    const isSectionWrapper = !!el.matches("main section > div, main form");
    el.style.transitionDelay = isSectionWrapper ? "0ms" : `${Math.min(index % 3, 2) * 60}ms`;
    revealObserver.observe(el);
  });

    // Active Page Highlighting (Header & Bottom Nav)
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  
  // Highlight Mobile Bottom Nav
  document.querySelectorAll("[data-nav-link]").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("is-active");
    }
  });

  
});
