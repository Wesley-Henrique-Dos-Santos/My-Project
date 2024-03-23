function activeMenu(){
    let bars = document.querySelector('.bars');
    let mobileUl = document.querySelector('.menuMobile ul');
    let menuMobile = document.querySelector('.menuMobile');
    
    if(bars.classList.toggle('activeMenu')){
        menuMobile.style.height = '100vh';
        mobileUl.style.display = 'block';
    }
    else{
        menuMobile.style.height = '0';
        mobileUl.style.display = 'none';
    }
}

var copyPix = document.getElementById('copyPix');
copyPix.addEventListener('click',()=>{
    var copiarPix = copyPix.value;
    copyPix.select();
    document.execCommand('copy');
    alert('Pix copiado');
})
