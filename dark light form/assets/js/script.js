const mode = document.getElementById('mode_icon');

mode.addEventListener('click', () => {
    console.log("Clicou aqui")
    

    const form = document.getElementById('login_form');
    const github= document.getElementById('github');

    if(mode.classList.contains('fa-moon')) {
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');
        github.style.filter='invert(1)';
        form.classList.add('dark');
        return ;
    } else {
        github.style.filter='none'
    } 

    mode.classList.remove('fa-sun');
    mode.classList.add('fa-moon');

    form.classList.remove('dark');
    
})
