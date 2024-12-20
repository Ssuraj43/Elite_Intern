
const quotes = [
    "If you want to walk fast, walk alone. If you want to walk far, walk together.",
    "Take the stones people throw at you and use them to build a monument.",
    "Ups and downs in life are very important to keep us going."
  ];
  
  document.querySelector(".quote blockquote").addEventListener("click", () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.querySelector(".quote blockquote").innerHTML = `${randomQuote} <span>- Ratan Tata</span>`;
  });  
  