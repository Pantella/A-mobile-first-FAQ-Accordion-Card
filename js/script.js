let lista_domande=document.querySelector("#faqAccordion_lst");
let lista_risposte=document.getElementsByClassName("faqAccordion_answ");

window.addEventListener('click',(e)=>{
    console.log("Funzione innescata");
    let item=e.target;
    let parent=item.parentNode;
    let parent_attr=parent.dataset.action;

    nascondiAnsw (lista_risposte);

    esponiAnsw (parent,parent_attr);
});

function nascondiAnsw (risposte) {
    //console.log("nascondiAnsw innescata");
    for (let i=0;i<risposte.length;++i) {
        //risposte[i].style.display="none";
        if (risposte[i].parentNode.dataset.state=="exposed") {
            risposte[i].parentNode.dataset.state="";
            risposte[i].classList.toggle("show");
            risposte[i].previousElementSibling.lastElementChild.classList.remove("icon_rotate");
        }
    }
}

function esponiAnsw (padre,padre_attr) {
    if(padre_attr=="accordion_question") {
        let risposta=padre.nextElementSibling;
        //console.log(risposta);
        risposta.classList.toggle("show");

        let list_item=padre.parentNode;
        list_item.setAttribute("data-state","exposed");

        let icona=padre.lastElementChild;
        console.log(icona);
        icona.classList.add("icon_rotate");
    }
    
}