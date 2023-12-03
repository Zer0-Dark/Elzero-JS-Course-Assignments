

let currentElement = document.getElementsByClassName("classes-to-add")[0];
let removebox = document.getElementsByClassName("classes-to-remove")[0];
let mainDiv = document.getElementsByTagName("div")[3];
let emptySpan = document.createElement("h3");
emptySpan.innerHTML = "No Classes To Show";
mainDiv.appendChild(emptySpan);
function add(){
    emptySpan.remove();
    let input1 = document.getElementsByClassName("classes-to-add")[0]
    let text = input1.value.trim().toLowerCase();
    console.log(input1);
    console.log(`this is text: ${text}`);
    text = text.trim().split(" ");
    console.log(text.length);
        for(let i = 0; i<text.length;i++){
            console.log(text[i]);
            if(text[i].trim() === ""){
                input1.value = "";
            }else{
            let valueSpan = document.createElement("span");
            valueSpan.innerHTML = text[i];
            mainDiv.append(valueSpan);
            input1.value = "";
        }}
    // mainDiv.append(valueDiv);
    // input1.value = "";

}

//remove fun 
function remove(){
    console.log("working !");
    let input2 = document.getElementsByClassName("classes-to-remove")[0];
    let text2 = input2.value.trim().toLowerCase();
    text2 = text2.split(" ");
    console.log(text2);
    let spans = document.getElementsByTagName("span");
    console.log(spans[0].innerHTML);
    console.log(input2);
    for(let i = spans.length - 1;i >= 0; i--){
        console.log(i);
        if(spans[i].innerHTML === text2[i]){
            console.log("removed" + i);
            spans[i].remove();
        }else{
            console.log("didn't remove");
        }

    }
    input2.value = "";
    if(mainDiv.childNodes.length === 0){
        mainDiv.appendChild(emptySpan);
    }
}
currentElement.addEventListener("blur",add);
removebox.addEventListener("blur",remove);

