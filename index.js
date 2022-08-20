
var global_arr=[]
var step = 0 
class Quin{
    constructor(val,numBox,color){
        this.val= val;
        this.numBox=numBox;
        this.color=color
    }
}
function make_global_arr(){
for(i=0 ;i<64;i++){
    if(i<10){
        i= i+' '
    }
    let quin = new Quin(' ',Number(i),'yellow')
    global_arr.push(quin)
}
}

 function getHorisont(key){
    global_arr[key].val='&#9819'
let row = Math.floor(key/8)
for(e= row*8;e<(row*8+8);e++){
    global_arr[e].color='red'
}
}

function getVertical(key){
    global_arr[key].val="&#9819"
   let col = key%8// init wich column 
  global_arr.forEach(e=>{
    if(e.numBox %8 == col){
        e.color='red'
    }
  })
}

 function getDiagonals(key){
    let upRight = key
    let upLeft = key
    let downRight = key
    let downLeft = key
    global_arr[key].val="&#9819"
    while(upRight >= 0 ){
        global_arr[upRight].color='red'
        upRight = upRight-7
        if(upRight%8 == 0 )break
    }
    while(upLeft >= 0 && upLeft%8 != 0   ){
       
        global_arr[upLeft].color='red'
        upLeft-=9
        if( upLeft%8 == 0 && upLeft>=0){
            global_arr[upLeft].color='red'
            break
        }
    }
while(downRight<=63){
    
    global_arr[downRight].color='red'
    downRight+=9
    if(downRight %8 == 0){
        break
    }
}
while(downLeft<63){
    global_arr[downLeft].color='red'
    if(downLeft%8 == 0 )break
    downLeft+=7
}

}//end function

make_global_arr()

var  global_obj ={
    global_arrs:[],
    quin_position:[],
    filters:[]

}
function addGlobalArr(){
let hlp=[]
 global_arr.forEach(e=>{
    let r = new Quin(e.val,e.numBox,e.color)
    hlp.push(r)
 })
 global_obj.global_arrs.push(hlp)
}
function showTable(){

    var tr = document.createElement("tr")
    var table = document.getElementById('my_table')
    
    for(i=0 ; i <64;i++){
    let  td =document.createElement("td")
     td.style.backgroundColor=global_arr[i].color
     
    
     td.innerHTML = global_arr[i].val   
    tr.appendChild(td)
    
    
    if(i%8 == 7){
    table.appendChild(tr)
    
    tr=document.createElement('tr')
    }
    
    }//end for
    
    }//end function
    
function stepForward(s){ 
let filter=[]
step++
 if(s==true){
    filter = global_obj.filters[/*LAST INDEX */ global_obj.filters.length-1]
}else {
    global_arr.forEach(e=>{
    if(e.color == 'yellow'){
filter.push(e.numBox)
    }
})
}
global_obj.filters.push(filter)

caller(filter[0])
addGlobalArr()

showTable()
}  

function stepBack(){
    step--
    global_obj.global_arrs.pop()
    global_arr=[]
    global_obj.global_arrs[step-1].forEach(e=>{
       let q = new Quin(e.val,e.numBox,e.color)
       global_arr.push(q)
    })

global_obj.filters[global_obj.filters.length-1].shift()
showTable()
setTimeout(()=>{

stepForward(true)
},2000
)
}

function caller(n){
    getDiagonals(n)
    getHorisont(n)
    getVertical(n)
}
