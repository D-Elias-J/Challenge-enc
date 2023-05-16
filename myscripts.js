function borrarImagen(){
    document.getElementById("txtArea3").style.display ="none"
    document.getElementById("copiarbtn").style.display ="initial"
    document.getElementById("txtArea2").style.display ="initial"
}

function encriptar(){
    var text =document.getElementById("txtArea1").value ;
    
    document.getElementById("txtArea2").value = text;  
    
    var nuevotext = ""

    for (var i = 0; i < text.length; i++){
        
        if(text[i] == "a"){
            nuevotext += "ai";
        } else if(text[i] == "e"){
            nuevotext += "enter";
        }else if(text[i] == "i"){
            nuevotext += "imes";
        }else if(text[i] == "o"){
            nuevotext += "ober";
        }else if(text[i] == "u"){
            nuevotext += "ufat";
        }else {
            nuevotext += text[i];
        }           
    }

    document.getElementById("txtArea2").value = nuevotext;

    borrarImagen()

}





function desencriptar(){
    var text =document.getElementById("txtArea1").value ;
    
    document.getElementById("txtArea2").value = text;  
    
    var nuevotext = ""

    //nuevotext = text.replace(/ai/g,"a")

    var mapObj ={
        ai:"a",
        enter:"e",
        imes:"i",
        ober:"o",
        ufat:"u"
    };

    nuevotext = text.replace(/ai|enter|imes|ober|ufat/gi, function(matched){
        return mapObj[matched];
    });

    document.getElementById("txtArea2").value = nuevotext;

    borrarImagen()

}


function copiartext(){
    
    navigator.clipboard.writeText(document.getElementById("txtArea2").value);
    alert("copiaste el texto")
}

function lowercase() {
    var txt = document.getElementById("txtArea1");
    txt.value = txt.value.toLowerCase();

    txt.addEventListener('keypress', function(event){
    
        let keycode = event.which || event.keyCode;
        
        if(keycode < 32 || 
         (keycode > 32 && keycode < 48) ||
         (keycode > 57 && keycode < 65) || 
         (keycode > 90 && keycode < 97) ||
         keycode > 122
        ){

            event.preventDefault();  
            return false;
        }
    });  
}
