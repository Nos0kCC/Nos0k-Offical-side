document.addEventListener('DOMContentLoaded', function(){
    const ghbutton = document.getElementById('ghb');
    const tgbutton = document.getElementById('tgb');
    const STGbutton = document.getElementById('stgb');
    const SDbutton = document.getElementById('sdb');
    const SWObutton = document.getElementById('ffb');
    const SWopen = document.getElementById('pw');
    
    ghbutton.addEventListener('click', function() {
        window.open('https://github.com/Nos0kCC', '_blank')
    })
    
    tgbutton.addEventListener('click', function() {
        window.open('https://t.me/BioNos0k', '_blank')
    })
    
    STGbutton.addEventListener('click', function() {
        window.open('https://t.me/sun_community_chat', '_blank')
    })
    
    SDbutton.addEventListener('click', function() {
        window.open('https://discord.gg/BW75DWjZ', '_blank')
    })
    
    SWObutton>addEventListener('click', function() {
        SWopen.classList.toggle('show');
    
    if (SWopen.classList.contains('show')) {
        SWObutton.textContent = 'скрыть';
    } else {
        SWObutton.textContent = 'фанфики с WaterBucket и Error';
    }
    })
});