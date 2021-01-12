var btn = document.querySelector("#btn");
var img = document.querySelector("#img");
var quote = document.querySelector("#quote");
var container = document.querySelector("#container");

var imgarray = [
  "assets/butterfly.jpg",
  "assets/hill.jpg",
  "assets/poalerbear.jpg",
  "assets/puzzle.jpg",
  "assets/rainbow.jpg",
  "assets/sunset.jpg",
  "assets/unicorn.jpg",
  "assets/warf.jpeg",
  "assets/waterfall.jpg",
];

var verbarr = [
  "divulge",
  "envelop",
  "expunge",
  "discard",
  "traverse",
  "redeem",
  "espouse",
  "envision",
  "germinate",
  "abscond with",
  "ingratiate",
  "regret",
  "trust",
  "boast",
  "encroach upon",
  "retort",
  "bemoan",
  "encapsulate",
  "expose",
  "holiday with",
  "actualize",
  "refurbish",
  "postpone",
  "redeem",
  "argue with",
  "eradicate",
  "create",
  "articulate",
  "deify",
  "grow",
  "recapitulate",
  "indoctrinate",
  "examine",
  "obfuscate",
  "individuate",
  "inculcate",
  "parade-around",
];
var ingarr = [
  "spicing-up",
  "enveloping",
  "conflating",
  "entombing",
  "spying-on",
  "saddling-up",
  "climbing-aboard",
  "coddling",
  "deciphering",
  "embezzling",
  "allowing",
  "lampooning",
  "devaluing",
  "encountering",
  "inviting",
  "marooning",
  "reframing",
];
var nounarr = [
  "walrus",
  "mentor",
  "spice rack",
  "marmoset",
  "parishoner",
  "tycoon",
  "harbinger",
  "sycophant",
  "trenchcoat",
  "nephew",
  "seraphim",
  "stronghold",
  "cohort",
  "prisoner",
  "resentment",
  "scorekeeper",
  "desciple",
  "squad",
  "family",
  "hermit",
  "conquest",
  "spouse",
  "legend",
  "peacekeeper",
  "co-dependent",
  "mirage",
  "purpose",
];
var qualityarr = [
  "effusiveness",
  "trepadation",
  "resentment",
  "colonialism",
  "dendrophobia",
  "altruism",
  "restlesness",
  "salesmanship",
  "freedom",
  "philosophy",
  "loneliness",
  "prosperity",
  "allowance",
  "party-planning skill",
  "ambition",
  "mindset",
  "panache",
  "pluchritude",
  "humility",
  "moxy",
];

var fontarr = [
  "'Courgette', cursive",
  "'Berkshire Swash', cursive",
  "'Walter Turncoat', cursive",
  "'Princess Sofia', cursive",
  "'Marck Script', cursive",
];

var borderarr = [
  "12px solid pink",
  "12px solid #a8ffe8",
  "12px solid #b8a8ff",
  "12px solid #ffb8a8",
];

function Next() {
  quote.style.fontSize = "38px";
  quote.style.textAlign = "left";
  quote.style.marginTop = "75px";

  var noun = nounarr[Math.floor(Math.random() * nounarr.length)];
  var noun2 = nounarr[Math.floor(Math.random() * nounarr.length)];
  var verb = verbarr[Math.floor(Math.random() * verbarr.length)];
  var verb2 = verbarr[Math.floor(Math.random() * verbarr.length)];
  var verb3 = verbarr[Math.floor(Math.random() * verbarr.length)];
  var ing = ingarr[Math.floor(Math.random() * ingarr.length)];
  var quality = qualityarr[Math.floor(Math.random() * qualityarr.length)];
  var quality2 = qualityarr[Math.floor(Math.random() * qualityarr.length)];

  var quotearr = [
    "To " + verb + " what you " + verb2 + ", " + verb3 + " who you are ",
    "Your " + quality + " is all you need to be a " + noun,
    "When seeking your " +
      noun +
      ", the true journey is in " +
      ing +
      " your " +
      quality,
    "There are two types of people, those who " +
      verb +
      ", and those who " +
      verb2,
    "In a world full of " +
      noun +
      "s, have the " +
      quality +
      " to be a " +
      noun2,
    verb + ", </br>" + verb2 + ", </br>" + verb3,
  ];

  var randimg = Math.floor(Math.random() * imgarray.length);

  var border = borderarr[Math.floor(Math.random() * borderarr.length)];

  var randfont = fontarr[Math.floor(Math.random() * fontarr.length)];

  var randquote = quotearr[Math.floor(Math.random() * quotearr.length)];
  container.style.border = border;
  img.src = imgarray[randimg];
  quote.style.fontFamily = randfont;
  quote.innerHTML = randquote;

  if (randquote === quotearr[5]) {
    quote.innerHTML =
      "<span id='verb'>" +
      verb +
      ", </span> </br> <span id='verb2'>" +
      verb2 +
      ", </span> </br> <span id='verb3'>" +
      verb3 +
      "</span>";
    quote.style.textAlign = "center";
  }

  if (
    randquote === quotearr[5] &&
    window.matchMedia("(max-width: 500px)").matches
  ) {
    quote.style.textAlign = "center";
    quote.style.fontSize = "40px";
    quote.style.fontFamily = fontarr[1];
    quote.style.marginTop = "120px";
  } else if (
    (randquote === quotearr[2] || randquote === quotearr[3]) &&
    window.matchMedia("(max-width: 500px)").matches
  ) {
    quote.style.fontSize = "33px";
  }
}
