
const select=document.createElement("select")
select.className="select"
select.addEventListener("change",function(){
    const val=document.querySelector(".select").value
    if(val=="en")
     en.set()
    else if(val=="es")
     es.set()
    else if(val=="pt")
     pt.set()
    else if(val=="fr")
     fr.set()
    else if(val=="it")
     it.set()
    else if(val=="de")
     de.set()
})

const option=document.createElement("option")
option.value="pt"
option.innerText="pt"
const option1=document.createElement("option")
option1.value="es"
option1.innerText="es"
const option2=document.createElement("option")
option2.value="en"
option2.innerText="en"

const option3=document.createElement("option")
option3.value="fr"
option3.innerText="fr"

const option4=document.createElement("option")
option4.value="it"
option4.innerText="it"

const option5=document.createElement("option")
option5.value="de"
option5.innerText="de"

select.append(option2,option5,option3,option1,option,option4)

const body=document.querySelector(".app")
const header=document.createElement("div")
header.className="header"

const title=document.querySelector("title")
title.innerText=language.page.title

const header_img=document.createElement("img")
header_img.src="res/icon.png"
header_img.className="himg"

const header_title=document.createElement("p")
header_title.innerText=language.header.title
header_title.className="htitle"

const centered=document.createElement("div")
centered.className="hcentered"

centered.append(header_img,header_title)

header.append(select,centered)
body.append(header)

//----------------------------add body

const content_title=document.createElement("p")
content_title.className="content_title"
content_title.innerText=language.content.title

const table=document.createElement("table")
const th=document.createElement("th")
const th1=document.createElement("th")
const th2=document.createElement("th")

const td=document.createElement("td")
const tr=document.createElement("tr")

const xtb=document.createElement("img")
xtb.src="res/xtb.png"
xtb.className="contentImg"

const star=document.createElement("img")
star.className="star"
star.src="res/star.png"

const ul=document.createElement("ul")
const li=document.createElement("li")
const li2=document.createElement("li")
const li3=document.createElement("li")
li.innerText=language.platform.xtb.odds.ul[1]
li2.innerText=language.platform.xtb.odds.ul[2]
li3.innerText=language.platform.xtb.odds.ul[3]
ul.append(li,document.createElement("br"),li2,document.createElement("br"),li3)

const goxtb=document.createElement("button")
goxtb.innerText=language.content.button
goxtb.className="go"
 
th.append(xtb,document.createElement("br"),star)
th1.append(ul)
th2.append(goxtb)

tr.append(th,th1,th2)

const tr2=tr.cloneNode(true)
tr2.children[0].children[0].src="res/skilling.png"
tr2.children[1].children[0].children[0].innerText=language.platform.skilling.odds.ul[1]
tr2.children[1].children[0].children[2].innerText=language.platform.skilling.odds.ul[2]
tr2.children[1].children[0].children[4].innerText=language.platform.skilling.odds.ul[3]

const tr3=tr.cloneNode(true)
tr3.children[0].children[0].src="res/etoro.png"
tr3.children[1].children[0].children[0].innerText=language.platform.etoro.odds.ul[1]
tr3.children[1].children[0].children[2].innerText=language.platform.etoro.odds.ul[2]
tr3.children[1].children[0].children[4].innerText=language.platform.etoro.odds.ul[3]

const tr4=tr.cloneNode(true)
tr4.children[0].children[0].src=""
tr4.children[0].children[2].src=""
tr4.children[1].children[0].remove()
tr4.children[2].children[0].remove()

const tr1=tr.cloneNode(true)
tr1.children[0].children[0].remove()
const bkr=document.createElement("span") 
bkr.innerText=`${BKR4.charAt(0).toUpperCase()+BKR4.substring(1,8)}`
bkr.className="bkr4"
tr1.children[0].children[0].after(bkr)
tr1.children[1].children[0].children[0].innerText=language.platform.bkr4.odds.ul[1]
tr1.children[1].children[0].children[2].innerText=language.platform.bkr4.odds.ul[2]
tr1.children[1].children[0].children[4].innerText=language.platform.bkr4.odds.ul[3]

tr.children[2].children[0].addEventListener('click',go)
tr.children[2].children[0].id="xtb"
tr.children[2].children[0].innerText+=" xtb"
tr2.children[2].children[0].addEventListener('click',go)
tr2.children[2].children[0].id="skilling"
tr2.children[2].children[0].innerText+=" skilling"
tr3.children[2].children[0].addEventListener('click',go)
tr3.children[2].children[0].id="etoro"
tr3.children[2].children[0].innerText=language.content.button+" etoro"
tr1.children[2].children[0].addEventListener('click',go)
tr1.children[2].children[0].id="bkr4"
tr1.children[2].children[0].disabled="disabled"
tr1.children[2].children[0].className="go ga"
tr1.children[2].children[0].innerText+= `${BKR4.charAt(0).toUpperCase()+BKR4.substring(1,8)}`


table.append(tr,tr2,tr3,tr1,tr4)

const container=document.createElement("div")
const h1Linear=document.createElement("div")
h1Linear.className="h1Linear"

const h1=document.createElement("p")
h1.innerText=language.platform.xtb.title
h1.className="content_title "
h1Linear.append(h1)

const desc=document.createElement("p")
desc.innerHTML=language.platform.xtb.content
desc.className="desc"

const goTo=tr.children[2].children[0].cloneNode(true)
goTo.id="xtb"
goTo.className="goToButton go"
goTo.addEventListener('click',go)
container.append(h1Linear,desc,goTo)

const container2=container.cloneNode(true)
container2.children[0].innerText=language.platform.etoro.title
container2.children[0].className="content_title title"
container2.children[1].innerText=language.platform.etoro.content
container2.children[2].innerText=language.content.button+" etoro"
container2.children[2].id="etoro"
container2.children[2].addEventListener('click',go)


const container3=container.cloneNode(true)
container3.children[0].innerText=language.platform.skilling.title
container3.children[0].className="content_title title"
container3.children[1].innerText=language.platform.skilling.content
container3.children[2].innerText=language.content.button+" skilling"
container3.children[2].id="skilling"
container3.children[2].addEventListener('click',go)

const container1=container.cloneNode(true)
container1.children[0].innerText=language.platform.bkr4.title
container1.children[0].className="content_title title"
container1.children[1].innerText=language.platform.bkr4.content
container1.children[2].innerText=language.content.button+BKR4
container1.children[2].id="bkr4"
container1.children[2].className="go ga goToButton"
container1.children[2].disabled=true
container1.children[2].addEventListener('click',go)

const footer=document.createElement("div")
footer.className="footer"

const warning=document.createElement("p")
warning.className="warning"
warning.innerText=language.page.prefooter

const privacy=document.createElement("div")
privacy.className="privacy"

const address=document.createElement("span")
address.innerText=language.page.footer
address.className="address"

const policy=document.createElement("p")
policy.setAttribute("target","_blank")
policy.innerText=language.page.policy
policy.className="policy" 
policy.addEventListener('click',policy_)

const cookie=document.createElement("p")
cookie.setAttribute("target","_blank")
cookie.innerText=language.page.cookie
cookie.className="cookie"
cookie.addEventListener('click',cookie_policy)

privacy.append(document.createElement("br"),address,document.createElement("br"),document.createElement("br"),policy,document.createElement("br"),cookie,document.createElement("br"),document.createElement("br"))

footer.append(warning)

body.append(content_title,table,container,container2,container3,container1,footer,privacy)


const language__=window.navigator.language 
if(language__.includes("en") )
en.set()
else if(language__.includes("es"))
es.set()
else if(language__.includes("pt"))
pt.set()
else if(language__.includes("fr"))
fr.set()
else if(language__.includes("it"))
it.set()
else if(language__.includes("de"))
de.set()

const cont=function(res){
   
    if(res==true){
        document.querySelector(".policy_description").remove()
        
        const ask=document.createElement("p")
        ask.innerHTML=`
        Crea Tu Numero de de la Suerte!
        <br>
        <span>tu numero de la suerte debe estar compuesto por 6 digitos aleatorios
        que debes crear seleccionando las bolas correspondiente al numero.</span>
        `

        const inputC=document.createElement("center")
        const input=document.createElement("p")
        input.className="input"
         
        const numbers=[1,2,3,4,5,6,7,8,9,'X',0,'E']
        const ball_container=document.createElement("div")
        ball_container.className="ballContainer"

         

        numbers.map(x=>{
            console.log(x)
            const ball_model=document.createElement("p")
                    ball_model.className="ball"
                    if(x!="X"&&x!="E")
                    ball_model.innerText=x
                    if(x=="X"){
                        ball_model.style.background="yellow"
                        ball_model.style.height="15px"
                    }
                    else if(x=="E"){
                        ball_model.style.background="green"
                        ball_model.style.height="15px"

                    }

                    ball_model.addEventListener("click",function(){
                    if(this.style.background=="yellow"){
                        input.innerText=input.innerText.substring(0,input.innerText.length-1)
                    }
                    else if(this.style.background=="green"){
                        if(input.innerText.length!=6)
                            alert("Please set 6 Digit Ticket Number")
                        else
                            alert('continue')
                    }else{
                        if(input.innerText.length <=5)
                        input.innerText+=x
                        else
                        alert("only 6 digit")
                    }

                    })

             
            ball_container.append(ball_model)
        })
            
            inputC.append(input)
 
        document.querySelector(".page").append(ask,inputC,ball_container)

    }else{
        document.querySelector("body").style["background-color"]="" 
            document.querySelector(".warning").style.color=""
            body.style.color=""
            body.style["background-color"]="" 
            document.querySelector(".privacy").style["background-color"]="" 
            document.querySelector(".privacy").style.color=""
            document.querySelector('.page').remove()
            body.style.opacity=2
    }

}


