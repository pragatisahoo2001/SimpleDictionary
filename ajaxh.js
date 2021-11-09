'use strict'
 const btn = document.querySelector('.meaning');
 const sentence= document.querySelector('.sentence');
 const phonetics=document.querySelector('.phonetics')
 const countriesContainer=document.querySelector('.countries');
 var contr='hello';
 document.querySelector('.search').addEventListener('click',function()
 { var word=document.querySelector('#word').value;
     console.log(word);
     document.querySelector('.inputword').innerHTML=word;
 const request=new XMLHttpRequest();
 request.open('GET',`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
 request .send();
 request.addEventListener('load',function(){
     const [data]=JSON.parse(this.responseText);
     console.log(data);
     btn.textContent=` ${data.meanings[0].definitions[0].definition}`;
     sentence.textContent=` ${data.meanings[0].definitions[0].example}`;
     phonetics.textContent=`${data.phonetic}`;
    })
    

 })
// const getDictionary=function(word){
//     fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`).then((response)=>
//      response.json()).then((data)=>
//         {console.log(data); 
//     })
// }; 
// getDictionary('hello');