function checkLength (){
    let text = document.getElementById("input").value
    let length = text.length
    document.getElementById("result").innerText = "You tyed " + length + " characters"
}