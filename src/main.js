import "./style.css";

// ─── Keyboard Layout Mappings (foreign char → QWERTY equivalent) ───
const LAYOUTS = {
  russian: {
    й: "q",
    ц: "w",
    у: "e",
    к: "r",
    е: "t",
    н: "y",
    г: "u",
    ш: "i",
    щ: "o",
    з: "p",
    х: "[",
    ъ: "]",
    ф: "a",
    ы: "s",
    в: "d",
    а: "f",
    п: "g",
    р: "h",
    о: "j",
    л: "k",
    д: "l",
    ж: ";",
    э: "'",
    я: "z",
    ч: "x",
    с: "c",
    м: "v",
    и: "b",
    т: "n",
    ь: "m",
    б: ",",
    ю: ".",
    ".": "/",
    Й: "Q",
    Ц: "W",
    У: "E",
    К: "R",
    Е: "T",
    Н: "Y",
    Г: "U",
    Ш: "I",
    Щ: "O",
    З: "P",
    Х: "{",
    Ъ: "}",
    Ф: "A",
    Ы: "S",
    В: "D",
    А: "F",
    П: "G",
    Р: "H",
    О: "J",
    Л: "K",
    Д: "L",
    Ж: ":",
    Э: '"',
    Я: "Z",
    Ч: "X",
    С: "C",
    М: "V",
    И: "B",
    Т: "N",
    Ь: "M",
    Б: "<",
    Ю: ">",
    ",": "?",
    ё: "`",
    Ё: "~",
    "№": "#",
  },
  french: {
    a: "q",
    z: "w",
    q: "a",
    m: ";",
    w: "z",
    A: "Q",
    Z: "W",
    Q: "A",
    M: ":",
    W: "Z",
    à: "0",
    é: "2",
    è: "7",
    ù: "'",
    "&": "1",
    é: "2",
    '"': "3",
    "'": "4",
    "(": "5",
    "-": "6",
    è: "7",
    _: "8",
    ç: "9",
    à: "0",
    "²": "`",
    $: "]",
    "*": "\\",
    ù: "'",
    µ: "\\",
    ",": "m",
    ";": ",",
    ":": ".",
    "!": "/",
  },
  german: {
    z: "y",
    y: "z",
    ö: ";",
    ä: "'",
    ü: "[",
    ß: "-",
    Z: "Y",
    Y: "Z",
    Ö: ":",
    Ä: '"',
    Ü: "{",
    "°": "~",
    "§": "#",
  },
  arabic: {
    ض: "q",
    ص: "w",
    ث: "e",
    ق: "r",
    ف: "t",
    غ: "y",
    ع: "u",
    ه: "i",
    خ: "o",
    ح: "p",
    ج: "[",
    د: "]",
    ش: "a",
    س: "s",
    ي: "d",
    ب: "f",
    ل: "g",
    ا: "h",
    ت: "j",
    ن: "k",
    م: "l",
    ك: ";",
    ط: "'",
    ئ: "z",
    ء: "x",
    ؤ: "c",
    ر: "v",
    لا: "b",
    ى: "n",
    ة: "m",
    و: ",",
    ز: ".",
    ذ: "`",
    "َ": "Q",
    "ً": "W",
    "ُ": "E",
    "ٌ": "R",
    لإ: "T",
    إ: "Y",
    "'": "U",
    "÷": "I",
    "×": "O",
    "؛": "P",
    "<": "{",
    ">": "}",
    "ِ": "A",
    "ٍ": "S",
    "]": "D",
    "[": "F",
    لأ: "G",
    أ: "H",
    ـ: "J",
    "،": "K",
    "/": "L",
    ":": '"',
    "~": "Z",
    "ْ": "X",
    "{": "C",
    "}": "V",
    لآ: "B",
    آ: "N",
    "'": "M",
    ",": "<",
    ".": ">",
    "؟": "?",
  },
  thai: {
    normal: {
      // Number row: ` 1 2 3 4 5 6 7 8 9 0 - =
      _: "`",
      ๅ: "1",
      ภ: "4",
      ถ: "5",
      "ุ": "6",
      "ึ": "7",
      ค: "8",
      ต: "9",
      จ: "0",
      ข: "-",
      ช: "=",
      // Top row: q w e r t y u i o p [ ] \
      ๆ: "q",
      ไ: "w",
      ำ: "e",
      พ: "r",
      ะ: "t",
      "ั": "y",
      "ี": "u",
      ร: "i",
      น: "o",
      ย: "p",
      บ: "[",
      ล: "]",
      ฃ: "\\",
      // Home row: a s d f g h j k l ; '
      ฟ: "a",
      ห: "s",
      ก: "d",
      ด: "f",
      เ: "g",
      "้": "h",
      "่": "j",
      า: "k",
      ส: "l",
      ว: ";",
      ง: "'",
      // Bottom row: z x c v b n m , . /
      ผ: "z",
      ป: "x",
      แ: "c",
      อ: "v",
      "ิ": "b",
      "ื": "n",
      ท: "m",
      ม: ",",
      ใ: ".",
      ฝ: "/",
    },
    shift: {
      // Number row shift: ~ ! @ # $ % ^ & * ( ) _ +
      "๑": "@",
      "๒": "#",
      "๓": "$",
      "๔": "%",
      "ู": "^",
      "๕": "&",
      "๖": "*",
      "๗": "(",
      "๘": ")",
      "๙": "_",
      "๐": "+",
      // Top row shift: Q W E R T Y U I O P { } |
      "๐": "Q",
      ฎ: "E",
      ฑ: "R",
      ธ: "T",
      "ํ": "Y",
      "๊": "U",
      ณ: "I",
      ฯ: "O",
      ญ: "P",
      ฐ: "{",
      ฅ: "|",
      // Home row shift: A S D F G H J K L : "
      ฤ: "A",
      ฆ: "S",
      ฏ: "D",
      โ: "F",
      ฌ: "G",
      "็": "H",
      "๋": "J",
      ษ: "K",
      ศ: "L",
      ซ: ":",
      // Bottom row shift: Z X C V B N M < > ?
      ฉ: "C",
      ฮ: "V",
      "ฺ": "B",
      "์": "N",
      ฒ: "<",
      ฦ: ">",
    },
  },
  spanish: {
    ñ: ";",
    Ñ: ":",
    "¡": "=",
    "¿": "/",
    "´": "'",
  },
  korean: {
    ㅂ: "q",
    ㅈ: "w",
    ㄷ: "e",
    ㄱ: "r",
    ㅅ: "t",
    ㅛ: "y",
    ㅕ: "u",
    ㅑ: "i",
    ㅐ: "o",
    ㅔ: "p",
    ㅁ: "a",
    ㄴ: "s",
    ㅇ: "d",
    ㄹ: "f",
    ㅎ: "g",
    ㅗ: "h",
    ㅓ: "j",
    ㅏ: "k",
    ㅣ: "l",
    ㅋ: "z",
    ㅌ: "x",
    ㅊ: "c",
    ㅍ: "v",
    ㅠ: "b",
    ㅜ: "n",
    ㅡ: "m",
    ㅃ: "Q",
    ㅉ: "W",
    ㄸ: "E",
    ㄲ: "R",
    ㅆ: "T",
    ㅒ: "O",
    ㅖ: "P",
  },
  japanese: {
    ぬ: "1",
    ふ: "2",
    あ: "3",
    う: "4",
    え: "5",
    お: "6",
    や: "7",
    ゆ: "8",
    よ: "9",
    わ: "0",
    ほ: "-",
    へ: "^",
    た: "q",
    て: "w",
    い: "e",
    す: "r",
    か: "t",
    ん: "y",
    な: "u",
    に: "i",
    ら: "o",
    せ: "p",
    ち: "a",
    と: "s",
    し: "d",
    は: "f",
    き: "g",
    く: "h",
    ま: "j",
    の: "k",
    り: "l",
    れ: ";",
    け: "'",
    つ: "z",
    さ: "x",
    そ: "c",
    ひ: "v",
    こ: "b",
    み: "n",
    も: "m",
    ね: ",",
    る: ".",
  },
};

// Reverse maps: for each language, map QWERTY key → foreign char (for keyboard display)
const REVERSE_LAYOUTS = {};
for (const [lang, map] of Object.entries(LAYOUTS)) {
  REVERSE_LAYOUTS[lang] = {};
  // Handle nested layouts (e.g. thai has normal/shift)
  if (map.normal || map.shift) {
    for (const subMap of [map.normal, map.shift]) {
      if (!subMap) continue;
      for (const [foreign, qwerty] of Object.entries(subMap)) {
        if (qwerty.length === 1 && qwerty >= "a" && qwerty <= "z") {
          REVERSE_LAYOUTS[lang][qwerty] = foreign;
        }
      }
    }
  } else {
    for (const [foreign, qwerty] of Object.entries(map)) {
      if (qwerty.length === 1 && qwerty >= "a" && qwerty <= "z") {
        REVERSE_LAYOUTS[lang][qwerty] = foreign;
      }
    }
  }
}

// ─── QWERTY Keyboard Rows ───
const KEYBOARD_ROWS = [
  [
    { key: "`", label: "`", wide: false },
    { key: "1", label: "1" },
    { key: "2", label: "2" },
    { key: "3", label: "3" },
    { key: "4", label: "4" },
    { key: "5", label: "5" },
    { key: "6", label: "6" },
    { key: "7", label: "7" },
    { key: "8", label: "8" },
    { key: "9", label: "9" },
    { key: "0", label: "0" },
    { key: "-", label: "-" },
    { key: "=", label: "=" },
    { key: "Backspace", label: "⌫", wide: "wider" },
  ],
  [
    { key: "Tab", label: "Tab", wide: "wide" },
    { key: "q", label: "Q" },
    { key: "w", label: "W" },
    { key: "e", label: "E" },
    { key: "r", label: "R" },
    { key: "t", label: "T" },
    { key: "y", label: "Y" },
    { key: "u", label: "U" },
    { key: "i", label: "I" },
    { key: "o", label: "O" },
    { key: "p", label: "P" },
    { key: "[", label: "[" },
    { key: "]", label: "]" },
    { key: "\\", label: "\\" },
  ],
  [
    { key: "CapsLock", label: "Caps", wide: "wider" },
    { key: "a", label: "A" },
    { key: "s", label: "S" },
    { key: "d", label: "D" },
    { key: "f", label: "F" },
    { key: "g", label: "G" },
    { key: "h", label: "H" },
    { key: "j", label: "J" },
    { key: "k", label: "K" },
    { key: "l", label: "L" },
    { key: ";", label: ";" },
    { key: "'", label: "'" },
    { key: "Enter", label: "↵", wide: "wider" },
  ],
  [
    { key: "Shift", label: "⇧ Shift", wide: "wider" },
    { key: "z", label: "Z" },
    { key: "x", label: "X" },
    { key: "c", label: "C" },
    { key: "v", label: "V" },
    { key: "b", label: "B" },
    { key: "n", label: "N" },
    { key: "m", label: "M" },
    { key: ",", label: "," },
    { key: ".", label: "." },
    { key: "/", label: "/" },
    { key: "ShiftRight", label: "⇧ Shift", wide: "wider" },
  ],
  [
    { key: "Control", label: "Ctrl", wide: "wide" },
    { key: "Alt", label: "Alt", wide: "wide" },
    { key: " ", label: "Space", wide: "space" },
    { key: "AltRight", label: "Alt", wide: "wide" },
    { key: "ControlRight", label: "Ctrl", wide: "wide" },
  ],
];

// ─── Auto-detect language from input character ───
function detectLanguage(char) {
  for (const [lang, map] of Object.entries(LAYOUTS)) {
    // Handle nested layouts (e.g. thai has normal/shift)
    if (map.normal || map.shift) {
      if (
        (map.normal && char in map.normal) ||
        (map.shift && char in map.shift)
      ) {
        return lang;
      }
    } else {
      if (char in map) return lang;
    }
  }
  return null;
}

// ─── Translate a single character ───
function translateChar(char, lang) {
  if (lang === "auto") {
    const det = detectLanguage(char);
    if (det) lang = det;
    else return char; // No matching layout, return as-is
  }

  const layout = LAYOUTS[lang];
  if (!layout) return char;

  // Handle nested layouts (e.g. thai has normal/shift)
  if (layout.normal || layout.shift) {
    if (layout.normal && char in layout.normal) return layout.normal[char];
    if (layout.shift && char in layout.shift) return layout.shift[char];
    return char;
  }

  // Flat layout
  if (char in layout) return layout[char];
  return char;
}

// ─── Translate full text ───
function translateText(text, lang) {
  let result = "";
  let detectedLang = null;
  for (const char of text) {
    if (lang === "auto") {
      const det = detectLanguage(char);
      if (det && !detectedLang) detectedLang = det;
    }
    result += translateChar(char, lang);
  }
  return { result, detectedLang };
}

// ─── Build on-screen keyboard ───
const keyboardEl = document.getElementById("keyboard");
const keyElements = {};

function buildKeyboard(lang) {
  keyboardEl.innerHTML = "";
  const reverseMap = lang !== "auto" ? REVERSE_LAYOUTS[lang] || {} : {};

  for (const row of KEYBOARD_ROWS) {
    const rowEl = document.createElement("div");
    rowEl.className = "flex gap-1 md:gap-1.5 justify-center";

    for (const keyDef of row) {
      const keyEl = document.createElement("button");
      let classes = "key";
      if (keyDef.wide === "wide") classes += " key-wide";
      else if (keyDef.wide === "wider") classes += " key-wider";
      else if (keyDef.wide === "space") classes += " key-space";
      keyEl.className = classes;

      const mainLabel = document.createElement("span");
      mainLabel.textContent = keyDef.label;
      keyEl.appendChild(mainLabel);

      // Show foreign character as sub-label
      const qwertyKey = keyDef.key.toLowerCase();
      if (reverseMap[qwertyKey]) {
        const subLabel = document.createElement("span");
        subLabel.className = "sub-label";
        subLabel.textContent = reverseMap[qwertyKey];
        keyEl.appendChild(subLabel);
      }

      keyEl.dataset.key = keyDef.key;
      keyEl.addEventListener("mousedown", (e) => {
        e.preventDefault();
        handleVirtualKeyPress(keyDef.key);
      });

      rowEl.appendChild(keyEl);
      keyElements[keyDef.key.toLowerCase()] = keyEl;
    }

    keyboardEl.appendChild(rowEl);
  }
}

// ─── Handle virtual keyboard press ───
function handleVirtualKeyPress(key) {
  const inputEl = document.getElementById("input-text");
  if (key === "Backspace") {
    inputEl.value = inputEl.value.slice(0, -1);
  } else if (key === "Enter") {
    inputEl.value += "\n";
  } else if (key === "Tab") {
    inputEl.value += "\t";
  } else if (key === " ") {
    inputEl.value += " ";
  } else if (
    ![
      "Shift",
      "ShiftRight",
      "Control",
      "ControlRight",
      "Alt",
      "AltRight",
      "CapsLock",
    ].includes(key)
  ) {
    inputEl.value += key;
  }
  updateOutput();
}

// ─── Highlight key on press ───
function highlightKey(key) {
  const k = key.toLowerCase();
  const el = keyElements[k];
  if (el) {
    el.classList.add("active");
    setTimeout(() => el.classList.remove("active"), 150);
  }
}

// ─── Update output ───
function updateOutput() {
  const inputEl = document.getElementById("input-text");
  const outputEl = document.getElementById("output-text");
  const langSelect = document.getElementById("lang-select");
  const statChars = document.getElementById("stat-chars");
  const detectedLangDisplay = document.getElementById("detected-lang-display");
  const detectedLangEl = document.getElementById("detected-lang");

  const text = inputEl.value;
  const lang = langSelect.value;

  const { result, detectedLang } = translateText(text, lang);
  outputEl.textContent = result;

  // Update stats
  statChars.textContent = result.length;

  // Show detected language
  if (lang === "auto" && detectedLang) {
    detectedLangDisplay.classList.remove("hidden");
    const langNames = {
      russian: "🇷🇺 Russian",
      french: "🇫🇷 French",
      german: "🇩🇪 German",
      arabic: "🇸🇦 Arabic",
      thai: "🇹🇭 Thai",
      spanish: "🇪🇸 Spanish",
      korean: "🇰🇷 Korean",
      japanese: "🇯🇵 Japanese",
    };
    detectedLangEl.textContent = langNames[detectedLang] || detectedLang;
  } else {
    detectedLangDisplay.classList.add("hidden");
  }
}

// ─── Toast notification ───
function showToast(message) {
  let toast = document.querySelector(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast hidden";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.remove("hidden");
  setTimeout(() => toast.classList.add("hidden"), 2000);
}

// ─── Init ───
function init() {
  const inputEl = document.getElementById("input-text");
  const langSelect = document.getElementById("lang-select");
  const btnClear = document.getElementById("btn-clear");
  const btnCopy = document.getElementById("btn-copy");

  buildKeyboard(langSelect.value);

  // Real-time translation on input
  inputEl.addEventListener("input", updateOutput);

  // Language change
  langSelect.addEventListener("change", () => {
    buildKeyboard(langSelect.value);
    updateOutput();
  });

  // Physical keyboard highlight
  document.addEventListener("keydown", (e) => {
    highlightKey(e.key);
  });

  // Clear
  btnClear.addEventListener("click", () => {
    inputEl.value = "";
    updateOutput();
    inputEl.focus();
  });

  // Copy
  btnCopy.addEventListener("click", () => {
    const outputEl = document.getElementById("output-text");
    const text = outputEl.textContent;
    if (!text) return;
    navigator.clipboard.writeText(text).then(() => {
      showToast("✓ Copied to clipboard!");
      const copyIcon = document.getElementById("copy-icon");
      copyIcon.textContent = "✅";
      setTimeout(() => (copyIcon.textContent = "📋"), 2000);
    });
  });

  inputEl.focus();
}

init();
