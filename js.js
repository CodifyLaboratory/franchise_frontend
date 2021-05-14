function local(){
    var lang=document.getElementById('local')
    var menu=document.getElementsByClassName('menu')
    switch (lang.value){
        case 'en':
            menu[0].value='about us'
    }
}