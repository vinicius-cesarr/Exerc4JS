function calc(){

    var num = document.getElementById('number')
    var tab = document.getElementById('seltab')
    if(num.value.length == 0){
        window.alert('[ERRO] veja os dados com cuidado')
    } else{
        var n1 = Number(num.value)
        tab.innerHTML = ' '
        for(var c = 1; c<=10; c++){
            var item = document.createElement('option')
            item.text = `${n1} x ${c} = ${n1*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
        
    }
}