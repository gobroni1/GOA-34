const toggleButton = document.getElementById('toggle-mode');

// Default mode
let isDarkMode = false;

toggleButton.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
});
