const item = document.querySelector(".result");
/*item.addEventListener('click' , function(e)
{
    const d = new Date();
    let time = d.toLocaleTimeString();

    item.innerHTML = time;
    
})*/
    setInterval(function(){
        const d = new Date();
        item.innerHTML = d.toLocaleTimeString();
    } , 1000)
