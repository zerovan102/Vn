/**
 * Memulai efek mengetik pada elemen di halaman.
 * Fungsi ini akan mencari elemen #typed-text dan .typed-cursor.
 */
export default function setupTypingEffect() {
  const typedTextSpan = document.querySelector("#typed-text");
  const typedCursor = document.querySelector(".typed-cursor");
  
  if (!typedTextSpan || !typedCursor) {
    console.warn("Elemen untuk efek mengetik (#typed-text or .typed-cursor) tidak ditemukan.");
    return;
  }

  const texts = ["Web Developer", "Data Scientist", "DevOps Engineer", "Back-end Developer", "Data Analyst", "Engineer Machine Learning"];
  const typingDelay = 100;
  const erasingDelay = 50;
  const newTextDelay = 2000; // Jeda sebelum teks baru
  let textIndex = 0;
  let charIndex = 0;

  function type() {
    if (!typedCursor.classList.contains('typing')) {
        typedCursor.classList.add('typing');
    }
    if (charIndex < texts[textIndex].length) {
      typedTextSpan.textContent += texts[textIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    } else {
      typedCursor.classList.remove('typing');
      setTimeout(erase, newTextDelay);
    }
  }

  function erase() {
    if (!typedCursor.classList.contains('typing')) {
        typedCursor.classList.add('typing');
    }
    if (charIndex > 0) {
      typedTextSpan.textContent = texts[textIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, erasingDelay);
    } else {
      typedCursor.classList.remove('typing');
      textIndex++;
      if (textIndex >= texts.length) textIndex = 0;
      setTimeout(type, typingDelay + 1100);
    }
  }

  // Mulai efeknya
  if (texts.length) {
    setTimeout(type, newTextDelay - 1000);
  }
}