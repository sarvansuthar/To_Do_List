let todo=[];
function addtodo(){
    todo.push({
        title:document.querySelector("#inputdiv3").value
    })
    render();
} 
function tododelete(cnt){
    todo.splice(cnt,1);
    render();
}
function edittaskstart(cnt){
    const task=document.getElementById(String(cnt)).parentElement.childNodes;
    const p=task[0];
    const edit=task[1];
    edit.innerHTML="📃";
    edit.setAttribute("onclick","edittaskend("+cnt+")");
    p.innerHTML="<input>";
    const input=p.childNodes[0];
    input.value=todo[cnt]["title"];

}
function edittaskend(cnt){
    const task=document.getElementById(String(cnt)).parentElement.childNodes;
    const p=task[0];
    const input=p.childNodes[0];
    const edit=task[1];
    edit.innerHTML="✏️";
    edit.setAttribute("onclick","edittaskstart("+cnt+")");
    todo[cnt]["title"]=input.value;
    render();


}

function createToDoComponent(todo,cnt){
    const newdiv=document.createElement("div");
        const p=document.createElement("p");
        p.innerHTML=todo["title"];
        const btn=document.createElement("button");
        const edit=document.createElement("button");
        edit.setAttribute("onclick","edittaskstart("+cnt+")");
        btn.setAttribute("id",cnt);
        edit.innerHTML="✏️";
        btn.setAttribute("onclick","tododelete("+cnt+")");
        btn.innerHTML="❌";
        newdiv.appendChild(p);
        newdiv.appendChild(edit);
        newdiv.appendChild(btn);
    
    return newdiv;

}
function render(){
    document.querySelector("#todolist").innerHTML="";
    for(let i=0;i<todo.length;i++){
        const newdiv=createToDoComponent(todo[i],i);
        document.getElementById("todolist").appendChild(newdiv);
        const line=document.createElement("hr");
        document.getElementById("todolist").appendChild(line);
    }
    document.querySelector("#inputdiv3").value="";
}