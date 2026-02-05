function vermais(){
    var pontos = document.getElementById("pontos");
    var mais = document.getElementById("mais");
    var btn = document.getElementById("btn");
    var box = document.getElementById("box");

    if(pontos.style.display === "none"){

        pontos.style.display = "inline";
        
        mais.style.display = "none";

        btn.innerHTML = "Leia Mais"

    }else{
        pontos.style.display = "none";
        
        mais.style.display = "inline";

        btn.innerHTML = "Leia Menos"
    }
}
function vermais2(){
    var pontos2 = document.getElementById("pontos2");
    var mais2 = document.getElementById("mais2");
    var btn2 = document.getElementById("btn2");
    var box = document.getElementById("box");

    if(pontos2.style.display === "none"){

        pontos2.style.display = "inline";
        
        mais2.style.display = "none";

        btn2.innerHTML = "Leia Mais"

    }else{
        pontos2.style.display = "none";
        
        mais2.style.display = "inline";

        btn2.innerHTML = "Leia Menos"
    }
}

