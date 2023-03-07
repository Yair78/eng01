const products=[
 ]
 const littleBox=document.querySelector('.littleBox')
 const backFromLittleBox=document.querySelector('.backFromLittleBox')
 const produceNameInput=document.querySelector('.produceNameInput')
 const producePriceInput=document.querySelector('.producePriceInput')
 const btnOfLittleBox=document.querySelector('.btnOfLittleBox')
 const firstBox=document.querySelector('.firstBox')
 const header=document.querySelector('.header')
 btnOfLittleBox.addEventListener('click',()=>{
  const  nameText=produceNameInput.value
  const priceText=producePriceInput.value
  if(nameText===''||priceText===''){
    alert(`ပြည့်ပြည့်စုံစုံ ထည့်flm`)
    return}else{alert('ထည့်ပြီးပြီ')}
    const myObject={name:`${nameText}`,
      price:`${priceText}`
    }
    produceNameInput.value = ''
    producePriceInput.value = ''
    const jsData=JSON.parse(localStorage.getItem('one'))
   try{ jsData.push(myObject)}catch{
     products.push(myObject)
     localStorage.setItem('one',JSON.stringify(products))
     loadSelling()
     return
   }
    
    localStorage.setItem('one',JSON.stringify(jsData))
    loadSelling()
 })
 
 
 
 const pancilIcon=document.querySelector('.pancilIcon')
 const zoomingIcon=document.querySelector('.zoomingIcon')
 const resizeZoom=document.querySelector('.resizeZoom')
 const scrollFirstBox=document.querySelector('.scrollFirstBox')
 const firstBoxBody=document.querySelector('.firstBoxBody')
 const searchIcon=document.querySelector('.searchIcon')
 const parentOfInput=document.querySelector('.parentOfInput')
let counter=0 
 searchIcon.addEventListener('click',()=>{
   counter++
   if(counter===2){parentOfInput.style.display='none';counter=0} else{parentOfInput.style.display='block' }
 })
 zoomingIcon.addEventListener('click',()=>{
   firstBox.style.height='100%'
   zoomingIcon.style.display='none'
   resizeZoom.style.display='inline-block'
   firstBox.style.width='100%'
   header.style.display='none'
   firstBoxBody.style.height='100%'
 })
 pancilIcon.addEventListener('click',()=>{
   littleBox.style.display='block'
 })
 
 backFromLittleBox.addEventListener('click', () => {
   littleBox.style.display = 'none'
 })
 
 resizeZoom.addEventListener('click',()=>{
   firstBox.style.height = ''
   zoomingIcon.style.display = ''
   resizeZoom.style.display = 'none'
   firstBox.style.width = ''
   header.style.display = ''
   firstBoxBody.style.height = '100%'
   parentOfInput.style.display='none'
   loadSelling()
 })
 const loadSelling=()=>{
   scrollFirstBox.textContent=''
  const jsData=JSON.parse(localStorage.getItem('one'))

try{
  for (let i = 0; i < jsData.length; i++) {
    const listTag = document.createElement('div')
    listTag.classList.add('shoppingList')
    listTag.innerHTML = `
           <span class="product">${i+1+'. '+jsData[i].name}</span>
           <span class="price">${jsData[i].price}MMK</span>`
    scrollFirstBox.append(listTag)
  }
}catch{
  scrollFirstBox.innerHTML=`<span class='nthSpan'>There is nothing to be seen</span>`
}

 }
 loadSelling()
 const myInput=document.querySelector('#myInput')
 let filterValue=[]
myInput.addEventListener('keyup', (inputValue) => {
  const textValue=inputValue.target.value.toLowerCase()

  if(textValue===' '){return}
  const jsData=JSON.parse(localStorage.getItem('one'))
 filterValue=jsData.filter((alphabet)=>{
    return alphabet.name.toLowerCase().includes(textValue)
  })
  try {
    scrollFirstBox.innerHTML=''
    for (let i = 0; i < filterValue.length; i++) {
      const listTag = document.createElement('div')
      listTag.classList.add('shoppingList')
      listTag.innerHTML = `
             <span class="product">${i+1+'. '+filterValue[i].name}</span>
             <span class="price">${filterValue[i].price}MMK</span>`
      scrollFirstBox.append(listTag)
    }
  } catch {
    return
  }
  
})

