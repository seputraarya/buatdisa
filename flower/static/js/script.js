var box = document.getElementById('trace')
var box2 = document.getElementById('trace2')
var boxy = document.getElementById('gameBox')

function drawCircle(){  
    var deets = box.getBoundingClientRect()
    var deets2 = box2.getBoundingClientRect()
    
    var x = deets.left
    var y = deets.top
    var color = "hsl("+Math.floor(Math.random()*360)+"deg, 100%, 50%)"
    
    var b = document.createElement('div')
    b.className = "dot"
    b.style.left = x+"px"
    b.style.top = y+"px"
    b.style.background = color
    
    document.getElementsByTagName('body')[0].appendChild(b)   
    
    var x2 = deets2.left
    var y2 = deets2.top
    var color2 = "hsl("+Math.floor(Math.random()*360)+"deg, 100%, 50%)"
        
    var c = document.createElement('div')
    c.className = "dot"
    c.style.left = x2+"px"
    c.style.top = y2+"px"
    c.style.background = color2
    
    document.getElementsByTagName('body')[0].appendChild(c)   
    
}

num = 10
document.getElementById('gameBox').style.animation = "grow "+num+"s linear forwards"

var populate = setInterval(drawCircle,1000/60)

setTimeout(function(){
    clearInterval(populate)
},1000*num)
