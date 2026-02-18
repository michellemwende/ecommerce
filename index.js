const translations = {
      en: {
        siteName: "My Website",
        title: "Welcome!",
        desc: "This website is currently in English.",
        button: "English"
      },
      sw: {
        siteName: "Tovuti Yangu",
        title: "Karibu!",
        desc: "Tovuti hii iko kwa Kiswahili.",
        button: "Kiswahili"
      }
    };

    // Default language
    let currentLang = "en";

    const siteName = document.getElementById("site-name");
    const title = document.getElementById("title");
    const desc = document.getElementById("desc");
    const langBtn = document.getElementById("langBtn");

    // Function to change language
    function changeLang() {
      currentLang = currentLang === "en" ? "sw" : "en";

      siteName.textContent = translations[currentLang].siteName;
      title.textContent = translations[currentLang].title;
      desc.textContent = translations[currentLang].desc;
      langBtn.textContent = translations[currentLang].button;
      document.documentElement.lang = currentLang;
    }

    // Button click event
    langBtn.addEventListener("click", changeLang);
 const USD_TO_KSH = 130; // 1 USD ≈ 130 KSh

    let currentCurrency = "USD";

    const priceElement = document.getElementById("price");
    const currencyBtn = document.getElementById("currencyBtn");

    // Initial price in USD
    let basePrice = 100;

    function switchCurrency() {
      if (currentCurrency === "USD") {
        // Switch to KSh
        const priceKsh = basePrice * USD_TO_KSH;
        priceElement.textContent = `KSh ${priceKsh.toLocaleString()}`;
        currencyBtn.textContent = "KSh (KES)";
        currentCurrency = "KES";
      } else {
        // Switch to USD
        priceElement.textContent = `$${basePrice}`;
        currencyBtn.textContent = "USD ($)";
        currentCurrency = "USD";
      }
    }

    currencyBtn.addEventListener("click", switchCurrency);
  