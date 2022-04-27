 const btn=document.getElementById('btn')
 const buttonColonne=document.getElementById('colonne')
 const buttonNote=document.getElementById('note')
  const button=document.getElementById('button') 
 const centre=document.getElementById('centre')
 const modal=document.getElementById('modal')
 const x=document.getElementById('x')
 const ajouter=document.getElementById('ajouter')
 const form=document.getElementById("form");
 
console.log(form);
var i=0;
const couleur=["blue","#f5f5dc","cornflowerblue","darkgoldenrod","dimgray"]


buttonNote.addEventListener('click',()=>{
    modal.classList.add('showmodal');
    console.log('showmodal');
})
 
    btn.addEventListener('click',()=>{
     
     btn.style.display='none'
        button.style.display="block"
                  
        buttonColonne.addEventListener('click',()=>{
             if(i<5){
                  genereColonne();
                  i++;
                }
        buttonNote.removeAttribute('disabled')
           
        })                       
        buttonNote.addEventListener('click',()=>{
            modal.style.visibility="visible"
        })
  
        x.addEventListener('click',()=>{
             modal.classList.remove('showmodal') 

        })
        ajouter.addEventListener('click',()=>{

            creeTache()      
        })
    })

    function genereColonne(){
        
            const container=document.createElement('div')
            container.setAttribute('class','container');
            container.setAttribute('id',+(i+1));
             
            const  colonne=document.createElement('div')
            colonne.classList="colonne";
            colonne.innerHTML="Colonne"+(i+1);

            
            container.appendChild(colonne)

            const clean=document.createElement('button')
            clean.classList="clean"
            clean.innerHTML="X"
            

            clean.addEventListener('click',(e)=>{

                //console.log();

                elt=e.target.parentElement;

                Idelt=elt.getAttribute('id');

                LesColonnes=document.querySelectorAll('.container');

              
                console.log(LesColonnes);

                if(LesColonnes.length==1 && Idelt==1){
                    clean.parentNode.remove()
                    i--;
                    reflesh();



                }
                if(LesColonnes.length!=1 && Idelt!=1){
                    clean.parentNode.remove()
                    i--;
                    reflesh();
                    
                }

            })
            
            container.appendChild(clean)
             
            colonne.addEventListener('dblclick', ()=>{
                colonne.contentEditable=true;
            })

            var  note=document.createElement('div')
            note.classList="note"

            container.appendChild(note)
            
           centre.appendChild(container)
           container.style.backgroundColor=couleur[i];  
    }
    function creeTache(){
        var spanArea=document.createElement('span')  
        var spanDate=document.createElement('span')  
        var spanDebut=document.createElement('span')  
        var spanFin=document.createElement('span')  

        spanArea.innerHTML=form[0].value
        spanDate.innerHTML=form[1].value
        spanDebut.innerHTML=form[2].value
        spanFin.innerHTML=form[3].value

       

        var note=document.querySelector('.note')
        const ajout=document.createElement('div')
        ajout.className="ajout"
        
        const spanRetour=document.createElement('span') 
        spanRetour.setAttribute("id","spanRetour")
        spanRetour.innerHTML="<<"
        ajout.appendChild(spanRetour)


        const p=document.createElement("p")
        p.setAttribute("id","p")
        ajout.appendChild(p)

        p.appendChild(spanArea);
        p.appendChild(spanDate);
        p.appendChild(spanDebut);
        p.appendChild(spanFin);
        
        const spanAller=document.createElement('span') 
        spanAller.innerHTML=">>"
        spanAller.setAttribute("id","spanAller")
        
        ajout.appendChild(spanAller)
        note.appendChild(ajout)
        spanAller.addEventListener('click',()=>{
            
           spanAller.parentElement.parentElement.parentElement.nextElementSibling.lastChild.appendChild(ajout);

          
        })
        spanRetour.addEventListener('click',()=>{
             spanRetour.parentElement.parentElement.parentElement.previousElementSibling.lastChild.appendChild(ajout) 
            console.log(spanRetour.parentElement.parentElement.parentElement.previousElementSibling.lastChild.appendChild(ajout));
        }) 
    
       
         }
        function reflesh(){
             var container=document.querySelectorAll('.container');
             
              container.forEach((elt,j)=>{
             
            elt.firstChild.innerHTML="Colonne"+(j+1)
           /*  container.style.backgroundColor=couleur[j-1];  */

            }) 
        }
