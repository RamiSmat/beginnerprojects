function change_the_color(){
    let R= Math.floor(Math.random()*255);
    let G= Math.floor(Math.random()*255);
    let B= Math.floor(Math.random()*255);
    
    function hex(v){
       if (v>255) return "FF";
       else if (v<0) return "00";
       else return v.toString(16).padStart(2,"0").toUpperCase();
    
    }
    R.toString();
    G.toString();
    B.toString();
    let rgb= "rgb("+R+","+G+","+B+")";
    console.log(hex(R));
    document.getElementById("hex_text").innerHTML="#"+hex(R)+hex(G)+hex(B);
    document.getElementById("color_text").innerHTML=rgb;
    document.getElementsByTagName("body")[0].style.background=rgb;
}