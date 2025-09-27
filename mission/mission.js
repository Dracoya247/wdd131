const themeSelector = document.querySelector('#read-mode');
function changeTheme() {
// check to see what the current value of our select is.
// The current value is conveniently found in themeSelector.value!
const currentTheme = themeSelector.value;

// if the value is dark then:
// add the dark class to the body
// change the source of the logo img to point to the white logo.
// otherwise
// remove the dark class
// make sure the logo src is the blue logo.
if (currentTheme === 'dark') {
    document.body.classList.add('dark');
    document.querySelector('.logo').setAttribute('src', 'byui_logo_dark.png');
} else {
    document.body.classList.remove('dark');
    document.querySelector('.logo').setAttribute('src', 'byui_logo.png');
}
}
// add an event listener to the themeSelector element here.
// Use the changeTheme function as the event handler function.
themeSelector.addEventListener('change', changeTheme);