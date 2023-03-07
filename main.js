const forOne = document.querySelector('.forOne')
const forTwo = document.querySelector('.forTwo')
const forThree = document.querySelector('.forThree')
const forFour = document.querySelector('.forFour')
const forFive = document.querySelector('.forFive')
const  forSix= document.querySelector('.forSix')
const forSeven = document.querySelector('.forSeven')
const forEight = document.querySelector('.forEight')
const forNine = document.querySelector('.forNine')
const showWiner = document.querySelector('.showWiner')
const scoreX = document.querySelector('.scoreX')
const scoreO = document.querySelector('.scoreO')
const forX= document.querySelectorAll('.forX')
let remLast = 'O'
let strMemory =''
let checkX = ''
let checkO = ''
let scoreForX = 0
let scoreForO = 0
const checkWinner = ()=>{
  if(checkX.includes('1')&&((checkX.includes('2')&&checkX.includes('3'))||(checkX.includes('5')&&checkX.includes('9'))||(checkX.includes('4')&&checkX.includes('7')))){
    strMemory='abcdefghi'
    setTimeout(()=>{showWiner.textContent='X is winner'; showWiner.style.display='flex'},150)
    scoreForX += 1
    scoreX.textContent=`X'score=`+scoreForX
  }
  if (checkX.includes('3') && ((checkX.includes('6') && checkX.includes('9')) || (checkX.includes('5') && checkX.includes('7')))) {strMemory='abcdefghi';
    setTimeout(() => { showWiner.textContent='X is winner'; showWiner.style.display='flex' }, 150)
    scoreForX += 1;scoreX.textContent=scoreForX;scoreX.textContent=`X'score=`+scoreForX
  }
  
  if(checkX.includes('2')&&checkX.includes('5')&&checkX.includes('8')){strMemory='abcdefghi';
    setTimeout(()=>{showWiner.textContent='X is winner'; showWiner.style.display='flex'},150)
    scoreForX += 1;scoreX.textContent=scoreForX;scoreX.textContent=`X'score=`+scoreForX
  }
  if(checkX.includes('7')&&checkX.includes('8')&&checkX.includes('9')){strMemory='abcdefghi';
    setTimeout(()=>{showWiner.textContent='X is winner'; showWiner.style.display='flex'},150)
    scoreForX += 1;scoreX.textContent=scoreForX;scoreX.textContent=`X'score=`+scoreForX
  }
  if(checkX.includes('4')&&checkX.includes('5')&&checkX.includes('6')){strMemory='abcdefghi';
    setTimeout(()=>{showWiner.textContent='X is winner'; showWiner.style.display='flex'},150)
    scoreForX += 1;scoreX.textContent=scoreForX;scoreX.textContent=`X'score=`+scoreForX
  }
  //For O
  if(checkO.includes('1')&&((checkO.includes('2')&&checkO.includes('3'))||(checkO.includes('5')&&checkO.includes('9'))||checkO.includes('4')&&checkO.includes('7'))
  ){strMemory='abcdefghi';
    setTimeout(()=>{showWiner.textContent='O is winner'; showWiner.style.display='flex'},150)
    scoreForO += 1
    scoreO.textContent=`O'score=`+scoreForO
  }
  if(checkO.includes('3')&&((checkO.includes('6')&&checkO.includes('9'))||(checkO.includes('5')&&checkO.includes('7')))
  ){ strMemory='abcdefghi';
    setTimeout(()=>{showWiner.textContent='O is winner'; showWiner.style.display='flex'},150)
    scoreForO += 1;scoreO.textContent=`O'score=`+scoreForO
  }
  if (checkO.includes('2') && checkO.includes('5') && checkO.includes('8')) {
    strMemory='abcdefghi'; setTimeout(() => { 
      showWiner.textContent='O is winner'; showWiner.style.display='flex' }, 150)
      scoreForO += 1;scoreO.textContent=`O'score=`+scoreForO
  }
  if (checkO.includes('7') && checkO.includes('8') && checkO.includes('9')) {
    strMemory='abcdefghi'
    setTimeout(() => { showWiner.textContent='O is winner'; showWiner.style.display='flex' }, 150)
    scoreForO += 1;scoreO.textContent=`O'score=`+scoreForO
  }
  if (checkO.includes('4') && checkO.includes('5') && checkO.includes('6')) {
    strMemory='abcdefghi'
    setTimeout(() => { showWiner.textContent='O is winner'; showWiner.style.display='flex' }, 150)
    scoreForO += 1;scoreO.textContent=`O'score=`+scoreForO
  }
}
forOne.addEventListener('click',()=>{
  if(strMemory.includes('a')){return}
   if(remLast!=='X'){ forOne.textContent='X'; remLast='X'; checkX+='1'}else{ forOne.textContent='O'; remLast='O'; checkO+='1'}
  strMemory +='a';checkWinner()
}
   )

forTwo.addEventListener('click',()=>{
   if(strMemory.includes('b')){return}
   if(remLast!=='X'){ forTwo.textContent='X'; remLast='X';checkX+='2'}else{ forTwo.textContent='O'; remLast='O';checkO+='2'}
  strMemory +='b';checkWinner()
})

forThree.addEventListener('click',()=>{
   if(strMemory.includes('c')){return}
   if(remLast!=='X'){ forThree.textContent='X'; remLast='X';checkX+='3'}else{ forThree.textContent='O'; remLast='O'; checkO+='3'}
  strMemory +='c';checkWinner()
})
   
forFour.addEventListener('click',()=>{
   if(strMemory.includes('d')){return}
   if(remLast!=='X'){ forFour.textContent='X'; remLast='X';checkX+='4'}else{ forFour.textContent='O'; remLast='O';checkO+='4'}
  strMemory +='d';checkWinner()})
   
forFive.addEventListener('click',()=>{
   if(strMemory.includes('e')){return}
   if(remLast!=='X'){ forFive.textContent='X'; remLast='X';checkX+='5'}else{ forFive.textContent='O'; remLast='O';checkO+='5'}
  strMemory +='e';checkWinner()})
   
forSix.addEventListener('click',()=>{
   if(strMemory.includes('f')){return}
   if(remLast!=='X'){ forSix.textContent='X'; remLast='X';checkX+='6'}else{ forSix.textContent='O'; remLast='O';checkO+='6'}
  strMemory +='f';checkWinner()})
   
forSeven.addEventListener('click',()=>{
   if(strMemory.includes('g')){return}
   if(remLast!=='X'){ forSeven.textContent='X'; remLast='X';checkX+='7'}else{ forSeven.textContent='O'; remLast='O';checkO+='7'}
  strMemory +='g';checkWinner()})
  
forEight.addEventListener('click',()=>{
   if(strMemory.includes('h')){return}
   if(remLast!=='X'){ forEight.textContent='X'; remLast='X';checkX+='8'}else{ forEight.textContent='O'; remLast='O';checkO+='8'}
  strMemory +='h';checkWinner()})
  
forNine.addEventListener('click',()=>{
   if(strMemory.includes('i')){return}
   if(remLast!=='X'){ forNine.textContent='X'; remLast='X';checkX+=9}else{ forNine.textContent='O'; remLast='O';checkO+='9'}
  strMemory +='i';checkWinner()
})

const restarted=()=>{
  strMemory='';checkX='';checkO='';scoreForX=0;scoreForO=0;scoreO.textContent=`O'score=0`;scoreX.textContent=`X'score=0`
  forX.forEach((element)=>{
    element.textContent=''
    showWiner.textContent=''; showWiner.style.display='none'
  })
}
const nextCall=()=>{
  strMemory='';checkX='';checkO=''
  forX.forEach((element)=>{
    element.textContent=''
    showWiner.textContent=''; showWiner.style.display='none'
  })
}
