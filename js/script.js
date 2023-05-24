let resbuttom = document.getElementById("resbuttom");
resbuttom.addEventListener('click' , navbuttomres , true);
let showup = document.getElementsByClassName("delete_li");
let navhh = document.getElementById('navhh');
count = 1;
function navbuttomres(){
    count++;
    if(count%2 == 0){
        for (let i = 0; i < showup.length; i++) {
        showup[i].style.display = "flex";
        }
        navhh.style.height="fit-content";
    }
    else{
        for (let i = 0; i < showup.length; i++) {
        showup[i].style.display = "none";
        }
        navhh.style.height="13vh";
    }
    return count;
}