const passwordOutput = document.getElementById('passwordOutput');
const copyBtn = document.getElementById('copyBtn');
const generateBtn = document.getElementById('generateBtn');
const lengthInput = document.getElementById('length');
const uppercaseInput = document.getElementById('uppercase');
const lowercaseInput = document.getElementById('lowercase');
const numbersInput = document.getElementById('numbers');
const symbolsInput = document.getElementById('symbols');

const UPPERCASE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWERCASE_CHARS = 'abcdefghijklmnopqrstuvwxyz';
const NUMBER_CHARS = '0123456789';
const SYMBOL_CHARS = '!@#$%^&*()_+-=[]{}|;:,.<>?';

function generatePassword() {
  const length = parseInt(lengthInput.value);
  let allowedChars = '';
  let generatedPassword = '';

  if (uppercaseInput.checked) allowedChars += UPPERCASE_CHARS;
  if (lowercaseInput.checked) allowedChars += LOWERCASE_CHARS;
  if (numbersInput.checked) allowedChars += NUMBER_CHARS;
  if (symbolsInput.checked) allowedChars += SYMBOL_CHARS;

  if (allowedChars === '') {
    alert('Please select at least one character type.');
    return;
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    generatedPassword += allowedChars[randomIndex];
  }

  passwordOutput.value = generatedPassword;
}

function copyToClipboard() {
  if (!passwordOutput.value) return;

  navigator.clipboard.writeText(passwordOutput.value).then(() => {
    const originalText = copyBtn.innerText;
    copyBtn.innerText = 'Copied!';
    setTimeout(() => {
      copyBtn.innerText = originalText;
    }, 1500);
  });
}

generateBtn.addEventListener('click', generatePassword);
copyBtn.addEventListener('click', copyToClipboard);

// Generate an initial password when page loads
generatePassword();