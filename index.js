const quantitynum =document.getElementById('quant')
const plusbtn =document.querySelector('.plus')
const mines =document.querySelector('.mines')
let val=0;
const a =document.getElementById('input_1')
const b  =document.getElementById('input_2')

const addcartbutton = document.getElementById('clallallfunction')
let cartList =0
let arr=[];
const cartCout =document.querySelector('.count')
const cartnumber =document.getElementById('cartlistno')
const bttn =document.querySelector('.btn')
const bttnSlid = document.querySelector('.btnsild')
let i =0

bttn.addEventListener("click", ()=>{
  if(i==0){
   bttnSlid.style.transform =" translateX(27px)"
    i=1
    lightMode()
  }else{
    bttnSlid.style.transform =" translateX(0px)"
    i=0
    remove()
  }
})


const container =document.querySelector('.container')

function lightMode(){
  document.querySelector('.btn').classList.add('lightcontainer2')
  document.querySelector('.lightblack').classList.add("textcolor")
  document.querySelector('.lightblack').innerHTML="Dark"
  container.classList.add("lightcontainer")
  document.querySelector('.titlehead').classList.add("textcolor")
  document.querySelector('.titlehead2').classList.add("textcolor")
  document.querySelector('.titlehead3').classList.add("textcolor")
  document.querySelector('.secondcontainer').classList.add("lightcontainer2")
}

function remove(){
  document.querySelector('.btn').classList.remove('lightcontainer2')
  container.classList.remove("lightcontainer")
  document.querySelector('.lightblack').innerHTML="Light"
  document.querySelector('.lightblack').classList.remove("textcolor")
  document.querySelector('.titlehead').classList.remove("textcolor")
  document.querySelector('.titlehead2').classList.remove("textcolor")
  document.querySelector('.titlehead3').classList.remove("textcolor")
  document.querySelector('.secondcontainer').classList.remove("lightcontainer2")

}

plusbtn.addEventListener("click",()=>quantitynum.innerHTML=++val )
mines.addEventListener("click",()=>{
    if(val!==0){
        quantitynum.innerHTML=--val
    }
})


addcartbutton.addEventListener('click',()=>{
    
      if(a.value!="" && b.value!="" &&  quantitynum.innerText !='0' ){
            let c =parseInt( quantitynum.innerText)
        
          //console.log(a.value,b.v,c)
            const obj={
            prodect:a.value,
            quatitey:c,
            Price:parseInt(b.value)
      }
          
          arr.push(obj)
         
          console.log(arr);
          quantitynum.innerText='0'
          a.value=""
          b.value=""
          val=0;

          cartCout.classList.add('cart_two')
          cartnumber.innerText=++cartList
          makeLi()
          totalSum(arr)
      }
    
})

//***************************preparing-list************************/
const listitem =document.querySelector('.listitems')
const listHeading =(arry) =>{
  return Object.keys(arry[0])
}

const listitemss =(arry)=>{

   const a = arry.map((titil)=> Object.values(titil))
   return a;

}

function makeLi(){

  listitem.innerHTML = '';
    let LHeading =listHeading(arr)
    LHeading.map((titil)=>{
      const liset =document.createElement('li')
      liset.innerHTML=titil.charAt(0).toUpperCase()+titil.slice(1);
      listitem.appendChild(liset)
      j=1
  
    })
  let Litems =listitemss(arr);
  Litems.map((el) =>{
      el.forEach(items =>{
        let liset =document.createElement('li')

        typeof items === 'string' ?
        liset.innerHTML =items.charAt(0).toUpperCase()+items.slice(1) : liset.innerHTML =items
        
        listitem.appendChild(liset)
      })
  })


} 
function totalSum(ar){
  const result =ar.map((titil)=> Object.values(titil).slice(-2).reduce((acu,num)=> acu*num))
  //console.log(result)
   const total= result.reduce((acu , num)=> acu+num )
   console.log(total);
   document.querySelector(".pricecount_text").innerHTML=total

}

