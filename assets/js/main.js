document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuButton = document.querySelector("[data-mobile-menu-button]");
  const mobileMenu = document.querySelector("[data-mobile-menu]");
  const year = document.querySelector("[data-year]");
  const testimonialTrack = document.querySelector("[data-testimonial-track]");
  const testimonialDots = document.querySelectorAll("[data-testimonial-dot]");
  const contactForm = document.querySelector("[data-contact-form]");
  const header = document.querySelector("header");
  const footer = document.querySelector("footer");
  const typewriters = document.querySelectorAll("[data-typewriter-text]");
  const floatingWhatsApp = document.querySelector('a.fixed[href^="https://wa.me/"]');
  const floatingCall = document.querySelector('a.fixed[href^="tel:"]');
  const pageName = window.location.pathname.split("/").pop() || "index.html";

  if (year) year.textContent = new Date().getFullYear();

  if (footer) {
    footer.className = "site-footer";
    footer.innerHTML = `
      <div class="footer-premium max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-12">
        <div class="grid md:grid-cols-4 gap-10 text-sm">
          <div>
            <img src="assets/images/slns-logo.png?v=20260422c" alt="SLNS Management Services logo" class="header-logo-match mb-4" />
            <h3 class="text-white text-2xl font-bold">SLNS Management Services</h3>
            <p class="mt-4 text-white/85 leading-relaxed">Your trusted consultancy partner for overseas education, work abroad, tourist services, and global travel support.</p>
            <a href="https://wa.me/919999999999" class="inline-block mt-5 px-4 py-2 rounded-full border border-white/45 text-white text-xs hover:bg-white/10 transition">WhatsApp</a>
          </div>
          <div>
            <h4 class="text-white font-semibold text-base">Quick Links</h4>
            <ul class="mt-4 space-y-2.5 text-white/90">
              <li><a href="index.html" class="hover:text-white">Home</a></li>
              <li><a href="about.html" class="hover:text-white">About Us</a></li>
              <li><a href="services.html" class="hover:text-white">Our Services</a></li>
              <li><a href="contact.html" class="hover:text-white">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 class="text-white font-semibold text-base">Services</h4>
            <ul class="mt-4 space-y-2.5 text-white/90">
              <li><a href="study-abroad.html" class="hover:text-white">Study Abroad</a></li>
              <li><a href="work-abroad.html" class="hover:text-white">Work Abroad</a></li>
              <li><a href="tourist-services.html" class="hover:text-white">Tourist Services</a></li>
              <li><a href="other-services.html" class="hover:text-white">Other Services</a></li>
            </ul>
          </div>
          <div>
            <h4 class="text-white font-semibold text-base">Contact Us</h4>
            <ul class="mt-4 space-y-2.5 text-white/90">
              <li><a href="tel:+919999999999" class="hover:text-white">+91 99962 00355</a></li>
              <li><a href="mailto:slnsmanagementservices@gmail.com" class="hover:text-white break-all">slnsmanagementservices@gmail.com</a></li>
              <li><a href="https://wa.me/919999999999" class="hover:text-white">Chat with us</a></li>
            </ul>
          </div>
        </div>
        <div class="mt-10 pt-6 border-t border-white/25 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-white/90">
          <p>&copy; <span data-year></span> SLNS Management Services. All rights reserved.</p>
          <div class="flex flex-wrap gap-5">
            <a href="#" class="hover:text-white">Terms & Conditions</a>
            <a href="#" class="hover:text-white">Privacy Policy</a>
            <a href="#" class="hover:text-white">Refund Policy</a>
          </div>
        </div>
      </div>
    `;
    const yearInFooter = footer.querySelector("[data-year]");
    if (yearInFooter) yearInFooter.textContent = new Date().getFullYear();
  }

  if (header) {
    header.classList.add("site-header");
    const syncHeaderState = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 24);
    };
    syncHeaderState();
    window.addEventListener("scroll", syncHeaderState, { passive: true });
  }

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  const navItems = [
    { key: "home", href: "index.html", label: "Home", icon: "⌂" },
    { key: "services", href: "services.html", label: "Services", icon: "◫" },
    { key: "about", href: "about.html", label: "About", icon: "◎" },
    { key: "contact", href: "contact.html", label: "Contact", icon: "✆" },
  ];

  const activeKey =
    pageName === "index.html"
      ? "home"
      : [
            "services.html",
            "study-abroad.html",
            "work-abroad.html",
            "tourist-services.html",
            "other-services.html",
          ].includes(pageName)
        ? "services"
        : pageName === "about.html"
          ? "about"
          : pageName === "contact.html"
            ? "contact"
            : "home";

  const bottomNav = document.createElement("nav");
  bottomNav.className = "mobile-bottom-nav";
  bottomNav.setAttribute("aria-label", "Mobile bottom navigation");
  bottomNav.innerHTML = navItems
    .map(
      (item) => `
        <a href="${item.href}" class="mobile-bottom-nav__item${
          item.key === activeKey ? " is-active" : ""
        }">
          <span class="mobile-bottom-nav__icon" aria-hidden="true">${item.icon}</span>
          <span class="mobile-bottom-nav__label">${item.label}</span>
        </a>
      `
    )
    .join("");
  document.body.appendChild(bottomNav);

  if (floatingWhatsApp || floatingCall) {
    const floatingWrap = document.createElement("div");
    floatingWrap.className = "floating-actions";

    const actions = document.createElement("div");
    actions.className = "floating-actions-list";

    if (floatingWhatsApp) {
      floatingWhatsApp.className = "floating-action floating-action--whatsapp";
      floatingWhatsApp.innerHTML = '<span aria-hidden="true">&#9993;</span>';
      floatingWhatsApp.setAttribute("aria-label", "Chat on WhatsApp");
      actions.appendChild(floatingWhatsApp);
    }

    if (floatingCall) {
      floatingCall.className = "floating-action floating-action--call";
      floatingCall.innerHTML = '<span aria-hidden="true">&#9742;</span>';
      floatingCall.setAttribute("aria-label", "Call now");
      actions.appendChild(floatingCall);
    }

    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "floating-toggle";
    toggle.setAttribute("aria-label", "Toggle quick actions");
    toggle.textContent = "...";

    toggle.addEventListener("click", () => {
      floatingWrap.classList.toggle("floating-actions--collapsed");
    });

    floatingWrap.appendChild(actions);
    floatingWrap.appendChild(toggle);
    document.body.appendChild(floatingWrap);

    let scrollTimer;
    const showActions = () => {
      floatingWrap.classList.remove("floating-actions--collapsed");
    };

    const hideActions = () => {
      floatingWrap.classList.add("floating-actions--collapsed");
    };

    window.addEventListener(
      "scroll",
      () => {
        hideActions();
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(showActions, 180);
      },
      { passive: true }
    );
  }

  if (typewriters.length > 0) {
    const typeSequentially = (index) => {
      if (index >= typewriters.length) return;

      const element = typewriters[index];
      const fullText = element.getAttribute("data-typewriter-text") || "";
      let charIndex = 0;
      element.textContent = "";

      const run = () => {
        if (charIndex <= fullText.length) {
          element.textContent = fullText.slice(0, charIndex);
          charIndex += 1;
          setTimeout(run, 120);
        } else {
          setTimeout(() => typeSequentially(index + 1), 180);
        }
      };

      run();
    };

    typeSequentially(0);
  }

  const revealTargets = document.querySelectorAll(
    "main section > div, .card-hover, article, form, .premium-glass"
  );
  if (revealTargets.length > 0 && "IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    revealTargets.forEach((element, index) => {
      element.classList.add("reveal-on-scroll");
      element.style.transitionDelay = `${Math.min(index % 4, 3) * 90}ms`;
      revealObserver.observe(element);
    });
  }

  if (testimonialTrack && testimonialDots.length > 0) {
    let current = 0;
    const slides = testimonialTrack.querySelectorAll("[data-testimonial-slide]");
    const total = slides.length;

    const renderSlide = (index) => {
      testimonialTrack.style.transform = `translateX(-${index * 100}%)`;
      testimonialDots.forEach((dot, i) => {
        dot.classList.toggle("bg-white", i === index);
        dot.classList.toggle("bg-white/40", i !== index);
      });
    };

    testimonialDots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        current = i;
        renderSlide(current);
      });
    });

    setInterval(() => {
      current = (current + 1) % total;
      renderSlide(current);
    }, 5000);
  }

  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = document.querySelector("#name")?.value?.trim() || "";
      const phone = document.querySelector("#phone")?.value?.trim() || "";
      const email = document.querySelector("#email")?.value?.trim() || "";
      const service = document.querySelector("#service")?.value?.trim() || "";
      const message = document.querySelector("#message")?.value?.trim() || "";

      const text = `Hello SLNS Management Services,

My name is ${name}.
Phone: ${phone}
Email: ${email}
Service interested: ${service}
Message: ${message}

I would like guidance for my global opportunity journey.`;
      window.location.href = `https://wa.me/919999999999?text=${encodeURIComponent(text)}`;
    });
  }
});

