let lista_domande=document.querySelector("#faqAccordion_lst"),lista_risposte=document.getElementsByClassName("faqAccordion_answ");function nascondiAnsw(e){for(let t=0;t<e.length;++t)"exposed"==e[t].parentNode.dataset.state&&(e[t].parentNode.dataset.state="",e[t].classList.toggle("show"),e[t].previousElementSibling.lastElementChild.classList.remove("icon_rotate"))}function esponiAnsw(e,t){if("accordion_question"==t){e.nextElementSibling.classList.toggle("show"),e.parentNode.setAttribute("data-state","exposed");let t=e.lastElementChild;console.log(t),t.classList.add("icon_rotate")}}window.addEventListener("click",(e=>{console.log("Funzione innescata");let t=e.target.parentNode,s=t.dataset.action;nascondiAnsw(lista_risposte),esponiAnsw(t,s)}));