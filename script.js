
function ajouter(element){
    var name= prompt('Ajouter Le nom :');
    var car = prompt('Ajouter Info :');

    var th = element.parentElement;
    var tr = th.parentElement;
    var thead = tr.parentElement;
    var table = thead.parentElement;
    var tbody = table.getElementsByTagName('tbody')[0];

    var tr = document.createElement("tr");
    tr.innerHTML = '<td class="player_name">'+ name +'</td><td class="player_pal"><ul><p>'+ car +'</p></ul></td><td><input type="button" value="Modifier" onclick="modifier(this)"> </td><td><input type="button" value="Supprimer" onclick="supprimer(this)"> </td>';;
    
    
        tbody.appendChild(tr);
        console.log('the debut not checked');
    
}

function modifier(element){
    var parent2 = element.parentElement;
    var parent = parent2.parentElement;
    var paragraph = parent.getElementsByTagName('p')[0];
    
    var newtext = prompt('Votre Modification :');
    paragraph.innerHTML = newtext;
}
function supprimer(element){
    var parent2 = element.parentElement;
    var parent = parent2.parentElement;
    parent.remove();
}


// drop down menu


var dropDownMenu = document.getElementsByClassName('drop-down-menu')[0];
var menuItem = document.getElementById('groupes-button');
menuItem.addEventListener('click',function(){
    const test = dropDownMenu.getAttribute('area');
    console.log(test);
    if (test=='false'){

        
    dropDownMenu.style.display = 'block';
    dropDownMenu.setAttribute('area','true')

    } else {
        dropDownMenu.style.display = 'none';
        dropDownMenu.setAttribute('area','false');
    }
})

window.addEventListener('click',function(e){
    if (!dropDownMenu.contains(e.target) & !menuItem.contains(e.target)){
       
        dropDownMenu.style.display = 'none';
        dropDownMenu.setAttribute('area','false');
    }
})

// Afficher les joueurs dans le volet 3 et le tableau dans le volet 4
function afficher_joueur(element){
    var id = element.getAttribute('id');
    var Maplayers = document.getElementsByClassName('ma_player');
    var esplayers = document.getElementsByClassName('es_player');
    var esTable = document.getElementsByClassName('es-table')[0];
    var maTable = document.getElementsByClassName('ma-table')[0];
    var cl=document.getElementsByClassName("classement")[0] ;
    var match=document.getElementsByClassName("matchs")[0];  
    var img=document.getElementsByClassName("imo")[0];

    if (id =="maroc-drapeaux"){
        for (let i =0; i< Maplayers.length;i++){

            Maplayers[i].style.display= "block";

        }
        
        for (let i =0; i< esplayers.length;i++){

            esplayers[i].style.display= "none";
        }
        
        maTable.style.display = "block";
        esTable.style.display = "none";
        img.style.display="none";
        cl.style.display="none";
        match.style.display="none";
        

    }else if(id == "espagne-drapeaux"){
        
        for (let i =0; i< Maplayers.length;i++){

            Maplayers[i].style.display= "none";
        }
        
        for (let i =0; i< esplayers.length;i++){

            esplayers[i].style.display= "block";
        }

        
       maTable.style.display = "none";
        esTable.style.display = "block";
        img.style.display="none";
        cl.style.display="none";
        match.style.display="none";
    }
}
//afficher les matchs dans le vole 

/**********************on click sur le groupe il va affiche le groupe*************/
function afficher_grp(gr){
  var id=gr.getAttribute("id");
  var grpA=document.getElementsByClassName("grp-a");
  var grpB=document.getElementsByClassName("grp-b");
  var grpC=document.getElementsByClassName("grp-c");
  var img=document.getElementsByClassName("imo");
  var act= document.getElementsByClassName("actu1");
  if(id=='grp1'){
 for ( let i =0; i< grpA.length;i++ ){
     grpA[i].style.display='block';  //afficher group 1
      
 }
 for ( let i =0; i< grpA.length;i++ ){  
  grpB[i].style.display='none';  //supprimer group2
  grpC[i].style.display='none';  //supprimer group3

  }

 }
   if(id=='grp2'){
    for ( let i =0; i< grpB.length;i++ ){ 
        grpB[i].style.display='block';   //afficher group 2
         }
    
    for ( let i =0; i< grpB.length;i++ ){
    grpA[i].style.display='none'; //supprimer group1
     grpC[i].style.display='none'; //supprimer group3
   
    }

}
if(id=='grp3'){
    for ( let i =0; i< grpC.length;i++ ){ 
        grpC[i].style.display='block';   //afficher group 3
         }
    
    for ( let i =0; i< grpC.length;i++ ){
    grpA[i].style.display='none'; //supprimer group1
     grpB[i].style.display='none'; //supprimer group2
   
    }

}


 }
//////////**********afficher classement********** */

function classement(cla){
var id=cla.getAttribute("id");
var cl=document.getElementsByClassName("classement")[0] ;
var match=document.getElementsByClassName("matchs")[0];
var img=document.getElementsByClassName("imo")[0];
var Maplayers = document.getElementsByClassName('ma_player');
var esplayers = document.getElementsByClassName('es_player');
var esTable = document.getElementsByClassName('es-table')[0];
var maTable = document.getElementsByClassName('ma-table')[0];
var fich=document.getElementsByClassName("fiche")[0];
var fiche1=document.getElementById("fich1");
var fiche2=document.getElementById("fich2");
var fiche3=document.getElementById("fich3");
var fiche4=document.getElementById("fich4");
var fiche5=document.getElementById("fich5");
var fiche6=document.getElementById("fich6");
var fiche7=document.getElementById("fich7");
var fiche8=document.getElementById("fich8");
var fiche9=document.getElementById("fich9");
var fiche10=document.getElementById("fich10");
var fiche11=document.getElementById("fich11");
var fiche12=document.getElementById("fich12");
var fiche13=document.getElementById("fich13");
   fiche1.style.display='none';
   fiche2.style.display='none';
   fiche3.style.display='none';
   fiche4.style.display='none';
   fiche5.style.display='none';
   fiche6.style.display='none';
   fiche7.style.display='none';
   fiche8.style.display='none';
   fiche9.style.display='none';
   fiche10.style.display='none';
   fiche11.style.display='none';
   fiche12.style.display='none';
   fiche13.style.display='none';
if(id='cls'){
for( let i=0  ; i< Maplayers.length  ;i++ ){
Maplayers[i].style.display="none";

}
for( let i=0  ; i< esplayers.length  ;i++ ){
    esplayers[i].style.display="none";
    }

 cl.style.display='block';
 img.style.display='none';
 maTable.style.display="none";
 esTable.style.display="none";
 match.style.display="none";



}
if(id='mat'){
    for(i=0 ; i< match.length ;i++){
    match[i].style.display="none";
    }
    fich.style.display="none";
    }
 
    
}

/****** matchs**** */
function matchs(ma){
 var id=ma.getAttribute("id");
var match=document.getElementsByClassName("matchs")[0];
var cl=document.getElementsByClassName("classement")[0] ;
var img=document.getElementsByClassName("imo") [0];
var Maplayers = document.getElementsByClassName('ma_player');
var esplayers = document.getElementsByClassName('es_player');
var esTable = document.getElementsByClassName('es-table')[0];
var maTable = document.getElementsByClassName('ma-table')[0];
var fich=document.getElementsByClassName("fiche")[0];
var fiche1=document.getElementById("fich1");
var fiche2=document.getElementById("fich2");
var fiche3=document.getElementById("fich3");
var fiche4=document.getElementById("fich4");
var fiche5=document.getElementById("fich5");
var fiche6=document.getElementById("fich6");
var fiche7=document.getElementById("fich7");
var fiche8=document.getElementById("fich8");
var fiche9=document.getElementById("fich9");
var fiche10=document.getElementById("fich10");
var fiche11=document.getElementById("fich11");
var fiche12=document.getElementById("fich12");
var fiche13=document.getElementById("fich13");
   fiche1.style.display='none';
   fiche2.style.display='none';
   fiche3.style.display='none';
   fiche4.style.display='none';
   fiche5.style.display='none';
   fiche6.style.display='none';
   fiche7.style.display='none';
   fiche8.style.display='none';
   fiche9.style.display='none';
   fiche10.style.display='none';
   fiche11.style.display='none';
   fiche12.style.display='none';
   fiche13.style.display='none';
if(id='mat'){

for( let i=0  ; i< Maplayers.length  ;i++ ){
Maplayers[i].style.display="none";

}


for( let i=0  ; i< esplayers.length  ;i++ ){
    esplayers[i].style.display="none";
    }

match.style.display="block";
 cl.style.display='none';
 img.style.display='none';
 maTable.style.display="none";
 esTable.style.display="none";
 


}


}





//fiche techniùque

function fich(element){
    var id = element.getAttribute("id");
    var F1 = document.getElementById("fich1");
    var F2 = document.getElementById("fich2");
    var F3 = document.getElementById("fich3");
    var F4 = document.getElementById("fich4");
    var F5 = document.getElementById("fich5");
    var F6 = document.getElementById("fich6");
    var F7 = document.getElementById("fich7");
    var F8 = document.getElementById("fich8");
    var F9 = document.getElementById("fich9");
    var F10 = document.getElementById("fich10");
    var F11 = document.getElementById("fich11");
    var F12 = document.getElementById("fich12");
    var F13 = document.getElementById("fich13");
    
    if(id=='yassin'){
        F1.style.display='block';
        F2.style.display='none';
        F3.style.display='none';
        F4.style.display='none';
        F5.style.display='none';
        F6.style.display='none';
        F7.style.display='none';
        F8.style.display='none';
        F9.style.display='none';
        F10.style.display='none';
        F11.style.display='none';
        F12.style.display='none';
        F13.style.display='none';
       
    }
    else if(id=='monir'){
        F2.style.display='block';
        F1.style.display='none';
        F3.style.display='none';
        F4.style.display='none';
        F5.style.display='none';
        F6.style.display='none';
        F7.style.display='none';
        F8.style.display='none';
        F9.style.display='none';
        F10.style.display='none';
        F11.style.display='none';
        F12.style.display='none';
        F13.style.display='none';
    }
    else if(id=='reda'){
        F3.style.display='block';
        F2.style.display='none';
        F1.style.display='none';
        F4.style.display='none';
        F5.style.display='none';
        F6.style.display='none';
        F7.style.display='none';
        F8.style.display='none';
        F9.style.display='none';
        F10.style.display='none';
        F11.style.display='none';
        F12.style.display='none';
        F13.style.display='none';
    }
    else if(id=='achraf'){
        F4.style.display='block';
        F2.style.display='none';
        F3.style.display='none';
        F1.style.display='none';
        F5.style.display='none';
        F6.style.display='none';
        F7.style.display='none';
        F8.style.display='none';
        F9.style.display='none';
        F10.style.display='none';
        F11.style.display='none';
        F12.style.display='none';
        F13.style.display='none';
    }
    else if(id=='nayf'){
        F5.style.display='block';
        F2.style.display='none';
        F3.style.display='none';
        F4.style.display='none';
        F1.style.display='none';
        F6.style.display='none';
        F7.style.display='none';
        F8.style.display='none';
        F9.style.display='none';
        F10.style.display='none';
        F11.style.display='none';
        F12.style.display='none';
        F13.style.display='none';
    }
    else if(id=='sofyan'){
        F6.style.display='block';
        F2.style.display='none';
        F3.style.display='none';
        F4.style.display='none';
        F5.style.display='none';
        F1.style.display='none';
        F7.style.display='none';
        F8.style.display='none';
        F9.style.display='none';
        F10.style.display='none';
        F11.style.display='none';
        F12.style.display='none';
        F13.style.display='none';
    }
    else if(id=='hakim'){
        F7.style.display='block';
        F2.style.display='none';
        F3.style.display='none';
        F4.style.display='none';
        F5.style.display='none';
        F6.style.display='none';
        F1.style.display='none';
        F8.style.display='none';
        F9.style.display='none';
        F10.style.display='none';
        F11.style.display='none';
        F12.style.display='none';
        F13.style.display='none';
    }
    else if(id=='abderrazak'){
        F8.style.display='block';
        F2.style.display='none';
        F3.style.display='none';
        F4.style.display='none';
        F5.style.display='none';
        F6.style.display='none';
        F7.style.display='none';
        F1.style.display='none';
        F9.style.display='none';
        F10.style.display='none';
        F11.style.display='none';
        F12.style.display='none';
        F13.style.display='none';
    }
    else if(id=='youssef'){
        F9.style.display='block';
        F2.style.display='none';
        F3.style.display='none';
        F4.style.display='none';
        F5.style.display='none';
        F6.style.display='none';
        F7.style.display='none';
        F1.style.display='none';
        F8.style.display='none';
        F10.style.display='none';
        F11.style.display='none';
        F12.style.display='none';
        F13.style.display='none';
    }
    else if(id=='sanchez'){
        F10.style.display='block';
        F9.style.display='none';
        F2.style.display='none';
        F3.style.display='none';
        F4.style.display='none';
        F5.style.display='none';
        F6.style.display='none';
        F7.style.display='none';
        F1.style.display='none';
        F8.style.display='none';
        F13.style.display='none';
        F11.style.display='none';
        F12.style.display='none';
    }
    else if(id=='azpilicueta'){
        F11.style.display='block';
        F9.style.display='none';
        F2.style.display='none';
        F3.style.display='none';
        F4.style.display='none';
        F5.style.display='none';
        F6.style.display='none';
        F7.style.display='none';
        F1.style.display='none';
        F8.style.display='none';
        F13.style.display='none';
        F10.style.display='none';
        F12.style.display='none';
    }
    else if(id=='busquets'){
        F12.style.display='block';
        F9.style.display='none';
        F2.style.display='none';
        F3.style.display='none';
        F4.style.display='none';
        F5.style.display='none';
        F6.style.display='none';
        F7.style.display='none';
        F1.style.display='none';
        F8.style.display='none';
        F13.style.display='none';
        F11.style.display='none';
        F10.style.display='none';
    }
    else if(id=='morata'){
        F13.style.display='block';
        F9.style.display='none';
        F2.style.display='none';
        F3.style.display='none';
        F4.style.display='none';
        F5.style.display='none';
        F6.style.display='none';
        F7.style.display='none';
        F1.style.display='none';
        F8.style.display='none';
        F10.style.display='none';
        F11.style.display='none';
        F12.style.display='none';
    }
    
}

