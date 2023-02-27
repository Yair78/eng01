
const scroolDivForHistory=document.querySelector('.scroolDivForHistory')

const dataStorage=[
  {day:'Sunday' ,date:'11.6.2021' , number:'63'},
  {day:'Saturday',date:'10.6.2021' , number:'97'},
  {day:'Friday' ,date:'9.6.2021' , number:'31'},
  {day:'Thursday',date:'8.6.2021' , number:'42'},
  {day:'Wednesday',date:'7.6.2021', number:'63'},
  {day: 'Thusday',date:'6.6.2021', number:'83'},
  {day:'Monday' ,date:'5.6.2021', number:'37'},
  ]   

const viewHistory=(num)=>{ for(let i=0;i<dataStorage.length;i++){
  
  if(i<3&&num!==1){ let days
    switch(i.toString()){
    case'0':days = 'Today'; 
    break;
    case'1':days='Yesterday' ;
    break;
    case'2':days=dataStorage[i].day ;
    break;
    case '3': return ;
    break;
  }
    scroolDivForHistory.innerHTML += `
     <div class="hist">
        <div class='date'>${dataStorage[i].date}</div>
       <div class='dayAndNum'>
        <span class="day">${days}</span>
        <span class="number">${dataStorage[i].number}</span> 
       </div>
     </div> `
  }
  if(num===1){
    scroolDivForHistory.innerHTML += `
      <div class="hist">
        <div class='date'>${dataStorage[i].date}</div>
       <div class='dayAndNum'>
        <span class="day">${dataStorage[i].day}</span>
        <span class="number">${dataStorage[i].number}</span> 
       </div>
     </div> `}
  }
}
viewHistory(2)
const toDoList= document.querySelector('.toDoList')
const section=document.querySelector('.section')
const parentOfHeaderList=document.querySelector('.parentOfHeaderList')
const footer=document.querySelector('.footer')
const multiplySign=document.querySelector('.multiplySign')
const history=document.querySelector('.history')

const historyCallBack=()=>{
  footer.style.display='none'
  section.style.display='none'
  history.style.display='none'
  multiplySign.style.display='block'
  scroolDivForHistory.style.height='100vh'
  viewHistory(1)
  removeListener()
}
history.addEventListener('click',historyCallBack)

const showMultiplySign=()=>{
  footer.style.display = 'flex'
  section.style.display = 'flex'
  toDoList.style.display='flex'
  history.style.display = 'block'
  multiplySign.style.display = 'none'
  showList.style.display = 'none'
  scroolDivForHistory.style.height = ''
  scroolDivForHistory.textContent = ''
}
multiplySign.addEventListener('click',()=>{
  showMultiplySign()
  viewHistory(2)
  history.addEventListener('click',historyCallBack)
  toDoList.addEventListener('click',toDoCallBack)
})

const removeListener=()=>{
  history.removeEventListener('click',historyCallBack)
  toDoList.removeEventListener('click',toDoCallBack)
}
const pancil=document.querySelector('.pancil')
const inputTag=document.querySelector('.inputTag')
const scrollList=document.querySelector('.scrollList')
const showList=document.querySelector('.showList')
const toDoCallBack= () => {
  showList.style.display = 'flex'
  toDoList.style.display='none'
  multiplySign.style.display='block'
  removeListener()
}
toDoList.addEventListener('click',toDoCallBack)
pancil.addEventListener('click',()=>{
  inputTag.style.display='block'
})

const noteStorage=[]
let counter=0
inputTag.addEventListener('change',(value)=>{
const textValue=value.target.value
inputTag.value=''
const divTag=document.createElement('div')
divTag.classList.add('notes')
const pTag=document.createElement('p')
pTag.classList.add('textValue')
pTag.append(`${textValue}`)
const imgTag=document.createElement('img')
imgTag.setAttribute('class','delete icon')
imgTag.setAttribute('src','/image/Picsart_23-02-07_15-46-40-503.png')

divTag.append(pTag,imgTag)
scrollList.append(divTag)
let gotDataFromLocal=JSON.parse(localStorage.getItem('jsData'))
console.log(gotDataFromLocal)
for(let i=0;i<gotDataFromLocal;i++){
  console.log('ရသည်ဟဲဟဲတကရ်ရတာဟ')
}

noteStorage.push(textValue)
localStorage.setItem('jsData',JSON.stringify(noteStorage))

const notes = document.querySelector('.notes')
imgTag.addEventListener('click', (element) => {
  divTag.remove()
})
})