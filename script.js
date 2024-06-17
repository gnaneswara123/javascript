//let h2=document.querySelector("h2")
//h2.innerText=h2.innerText+" hii hey "
/*let divs=document.querySelectorAll(".box")
let ind=1
for(div of divs){

    div.innerText=`new value ${ind}`
    ind++
}*/
/*let div=document.querySelector("div")
console.log(div)
let id=div.getAttribute("id")
console.log(id)
let name=div.getAttribute("name")
console.log("name")*/
/*let div=document.querySelector("div")
console.log(div)
div.setAttribute("name","newjs")
console.log(div.getAttribute("name"))*/

//let name=div.getAttribute("name")
//console.log(name)
//let div=document.querySelector("div")
//div.style.backgroundColor="green"
//div.innerText="Hello"
//div.style.visibility="hidden"
//let btn=document.createElement("button")
//btn.innerText="ClickMe"
//let div=document.querySelector("div")
//div.append(btn)
//div.prepend(btn)
//div.before(btn)
//let para=document.querySelector("p")
//para.after(btn)
//let heading=document.createElement("h1")
//heading.innerHTML="<I> Hi iam new </I>"
//document.querySelector("body").prepend(heading)
//let para=document.querySelector("p")
//para.remove()
/*let newbtn=document.createElement("button")
newbtn.innerText="click me"
newbtn.style.backgroundColor="red"
newbtn.style.color="white"
document.querySelector("body").prepend(newbtn)*/
//let para=document.querySelector("p")
//para.setAttribute("class","newclass") // set attribute overrides the content class styling and gives the new class styling we did not need to override it so we need to use classList which appends bothp
//para.classList.add("newclass")
//para.classList.remove("newclass")
/*let btn=document.querySelector("#btn")
btn.onclick=()=>{
    console.log("button is clicked")
    let a=25;
    a++
    console.log(a)
}*/
/*let div=document.querySelector("div")
div.onmouseover=()=>{
    console.log("you are inside div")
}*/
/*
let btn=document.querySelector("#btn")
btn.onclick=(e)=>{
    console.log(e.type)
    console.log(e.target)
    console.log(e.clientX,e.clientY)
    console.log("button is clicked")
    let a=25;
    a++
    console.log(a)
}*/

/*const handler3=()=>{
    console.log("button is clicked-handler3")
}

let btn=document.querySelector("#btn")
btn.addEventListener("click",()=>{
    console.log("button is clicked-handler1")
})
btn.addEventListener("click",()=>{
    console.log("button is clicked-handler2")
})
btn.addEventListener("click",handler3)
btn.addEventListener("click",()=>{
    console.log("button is clicked-handler4")
})
btn.removeEventListener("click",handler3)*/

/*let btn=document.querySelector("#btn")
let currentmode="light"
btn.addEventListener("click",()=>{
    if(currentmode=="light")
        {
            currentmode="dark"
            document.querySelector("body").style.backgroundColor="black"
        }
    else{
        currentmode="light"
        document.querySelector("body").style.backgroundColor="white"
    }   
    console.log(currentmode)

})*/
/*let btn=document.querySelector("#btn")
let body=document.querySelector("body")
let currentmode="light"
btn.addEventListener("click",()=>
{
    if(currentmode=="light")
        {
            currentmode="dark"
            body.setAttribute("class","dark")

          
        }
    else{
        currentmode="light"
        body.setAttribute("class","light")
        
    }
    console.log(currentmode)
    
})*/
/*let btn=document.querySelector("#btn")
let body=document.querySelector("body")
let currentmode="light"
btn.addEventListener("click",()=>
{
    if(currentmode=="light")
        {
            currentmode="dark"
            body.classList.remove("light")
            body.classList.add("dark")

          
        }
    else{
        currentmode="light"
        body.classList.remove("dark")
        body.classList.add("light/")
        
    }
    console.log(currentmode)
    
})*/
//for-of loop --> used for arrays and strings
//let str="Mahi maar raha hai"
/*for(let i of str)
    {
        console.log(i)
    }

// for-in loop --->used for objects
let student={
    name:"mahi",
    age:40,
    rollno:7,
    marks:77,
    isPass:true
};
for(let i in student)
    {
        console.log (student[i])
    }*/
/*let str="okay hii" //Strings
console.log(str)

//Template literals -->a way to have embedded expressions in strings

let specialstr=`this is a template string`
console.log(specialstr)

let object={
    item:"pen",
    price:10
};
console.log("the cost of ",object.item,"is",object.price,"rupees")
//using template literals
// string interpolation-->to create string by doing substitution of placeholders `string text ${expression} string text`
console.log(`the cost of ${object.item} is ${object.price} rupees`)
//Arrow functions
let mul=(a,b)=>{
console.log(a*b) // or return a*b
}
//forEach loop
let arr=["mahi","virat","raina"] //forEach is a method it is a higher order function or methods i.e one function or method takes another function as a parameter.
arr.forEach((val)=>{
    console.log(val.toUpperCase())
})

let nums=[1,2,3,4]
let square=(val)=>{
    console.log(val*val)
}
nums.forEach(square) // passing function as an argument

let arra=[4,5,1,7]
const output=arra.reduce((prev,curr)=>{
    return prev>curr?prev:curr
})
console.log(output)

// objects
const student={
    name:"mahi",
    marks:77,
    printmarks:function(){
        console.log("marks are",this.marks)
    }
}

//class
class car{
    start()
    {
        console.log("start")
    }
    stop()
    {
        console.log("stop")
    }
}
let toyato=new car() // created object i.e toyato

console.log("one")
console.log("two")
setTimeout(()=>{
    console.log("hello")
},4000)
console.log("three")
console.log("four")

function sum(a,b){
    console.log(a+b);
}

function calculator(a,b,dosum){
    dosum(a,b);
}

calculator(3,4,sum)*/

//callback hell->nested callbacks is a problem in js which is solved using promises  
/*function getdata(id,getnextdata)
{
    setTimeout(()=>{
    console.log("data",id);
    if(getnextdata){
        getnextdata();

    }
    
},2000)
}
getdata(1,()=>{
    getdata(2,()=>{
        getdata(3)
    })})*/

/*let promise=new Promise((resolve,reject)=>{
    console.log("iam a promise")
    //resolve("successfully delivered")
    reject("some error occurred-")
})*/

/*function getdata(data,getnextdata){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",data)
            resolve("success")
            if(getnextdata)
                {
                    getnextdata();
                }
        },5000)

    })
  
}
const getpromise=(()=>{
    return new Promise((resolve,reject)=>{
        console.log("iam a promise")
        //resolve("successfully delivered")
        reject("some error occurred-")
    })
})
let promise=getpromise()
promise.then((res)=>{
    console.log("promise fullfilled",res)
})
promise.catch((err)=>{
    console.log("rejected",err)
})*/

/*function asyncfunc1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data1")
            resolve("success")
        },4000)
    })
}
function asyncfunc2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data2")
            resolve("success")
        },4000)
    })
}*/
//console.log("fetching data1...")
/*let p1=asyncfunc1()
p1.then((res)=>{
    console.log("fetching data2...")
    let p2=asyncfunc2()  
    p2.then(()=>{            //promise chain

    })

})*/

// simplified code
/*asyncfunc1().then((res)=>{
    console.log("fetching data2...")
    asyncfunc2().then(()=>{          //promise chain ->we have written another then also in the same then
    })
})*/

// as above above we did by using call back functions which created call back hell problem we can resolve it by using promise chain

/*function getdata(data){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",data)
            resolve("success")
        },2000)

    })
}*/
/*let p1=getdata(1)
p1.then(()=>{
    getdata(2)
    p1.then(()=>{
        
    })
})*/

// Actual promise chain in more simpler way
/*getdata(1).then((res)=>{
    return getdata(2)
})
.then((res)=>{
return getdata(3)
}).then((res)=>{
console.log(res)
})*/

/*function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("weather data")
            resolve(200)
        },2000)
    })
}
async function getweatherdata(){
    await api()
    await api()
}*/

/*function getdata(data){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",data)
            resolve("success")
        },2000)

    })
}*/

/*async function getalldata(){ // here we are calling which is a unnecessary statement where we can use IIFE:Immediately invoked function expression.IIFE is a function that is called immediately as soon as it is defined.
    await getdata(1)
    await getdata(2)
    await getdata(3)
    await getdata(4)


}*/

/*(async function (){ // here we are calling which is a unnecessary statement where we can use IIFE:Immediately invoked function expression.IIFE is a function that is called immediately as soon as it is defined.
    await getdata(1)
    await getdata(2)
    await getdata(3)
    await getdata(4)


})()*/

const URL="https://cat-fact.herokuapp.com/facts"
const fact=document.querySelector("#fact")
const btn=document.querySelector("#btn")
/*const getFacts=async()=>{
    console.log("getting data...")
    let response=await fetch(URL)
    console.log(response)
    let data=await response.json()
    //console.log(data[0].text)
    fact.innerText=data[0].text
}*/


// using promise chaining

function getFacts(){
    fetch(URL).then((response)=>{
        return response.json()

    }).then((data)=>{
        console.log(data)
        fact.innerText=data[0].text


    })
}
btn.addEventListener("click",getFacts)