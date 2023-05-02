const singUpButton = document.getElementById('signUp')
const singInButton = document.getElementById('signIn')
const container = document.getElementById('container')

singInButton.addEventListener('click', () => {
 container.classList.add("right-panel_active")
});

singInButton.addEventListener('click', () => {
    container.classList.remove("right-panel_active")
});