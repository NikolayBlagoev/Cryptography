

const a = 'a'.charCodeAt(0)
const z = 'z'.charCodeAt(0)
const A = 'A'.charCodeAt(0)
const Z = 'Z'.charCodeAt(0)
const modulo = (z-a)+1;

function onClickEncr(){
   
    var out = document.getElementById("val2");
    var a = document.getElementById("val1").value;
    var keys = getKeys()
    if(keys.length!=2){
        out.value = "INVALID KEYS! A NEEDS TO BE MAPPED TO 1 CHARACTER AND INCREMENT NEEDS TO BE AN INTEGER"
        return;
    }
    console.log(keys)
    out.value = encrypt(a, keys[0],keys[1])
    

}

function onClickDecr(){
   
    var out = document.getElementById("val1");
    var a = document.getElementById("val2").value;
    var keys = getKeys()
    if(keys.length!=2){
        out.value = "INVALID KEYS! A NEEDS TO BE MAPPED TO 1 CHARACTER AND INCREMENT NEEDS TO BE AN INTEGER"
        return;
    }
    out.value = decrypt(a, keys[0],keys[1])
    


}
function getKeys(){
    keys = []
    var k1 = document.getElementById("key1").value;
    if(k1.length!=1) return keys
    k1 = k1.toLocaleLowerCase()
    if(k1.charAt(0)<'a'||k1.charAt(0)>'z') return keys
    keys.push(k1.charCodeAt(0)-a)
    var k2 = document.getElementById("key2").value;
    if(isNaN(k2)||k2<0) return keys;
    keys.push(parseInt(k2,10))
    return keys
}
function encrypt(in_string, diff, increment){
    out = ""
    added = 0
    for(var i = 0; i<in_string.length; i++){
        c=in_string.charCodeAt(i)
        console.log(in_string.charAt(i))
        if(c>=a && c<=z){
            console.log(((c-a+diff+added)%modulo)+a)
            out+=String.fromCharCode(((c-a+diff+added)%modulo)+a)
            added = (added+increment)%modulo
            console.log(added)
        }else if(c>=A && c<=Z){
            console.log(((c-A+diff+added)%modulo)+A)
            out+= String.fromCharCode(((c-A+diff+added)%modulo)+A)
            added = (added+increment)%modulo
        }else{
            out+=in_string.charAt(i);
        }
    }
    return out;
}

function decrypt(in_string, diff, increment){
    out = ""
    added = 0
    for(var i = 0; i<in_string.length; i++){
        c=in_string.charCodeAt(i)
        console.log(in_string.charAt(i))
        if(c>=a && c<=z){
            console.log(String.fromCharCode(((c-a-diff-added)%modulo)+a))
            out+=String.fromCharCode((((c-a-diff-added)%modulo)+modulo)%modulo+a)
            added = (added+increment)%modulo
        }else if(c>=A && c<=Z){
            console.log((((c-A-diff-added)))%modulo)
           
            out+= String.fromCharCode((((c-A-diff-added)%modulo)+modulo)%modulo+A)
            added = (added+increment)%modulo
        }else{
            out+=in_string.charAt(i);
        }
    }
    return out;
}
