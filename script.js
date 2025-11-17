function goUID(){
    let uid = prompt("Enter your UID:");
    if(uid){
        localStorage.setItem("playerUID", uid);
        alert("UID Saved: " + uid);
    }
}
function openPage(page){
    window.location.href = page;
}