
var global_arr=[]

function showTable(arr){

    var tr = document.createElement("tr")
    var table = document.getElementById('my_table')
    
    for(i=0 ; i <64;i++){
     td =document.createElement("td")
     
     td.style.backgroundColor=arr[i].color
     td.innerHTML = arr[i].val
     
    tr.appendChild(td)
    
    
    if(i%8 == 7){
    table.appendChild(tr)
    
    tr=document.createElement('tr')
    }
    
    }//end for
    
    }//end function
    
function make_global_arr(){
for(i=0 ;i<64;i++){
    if(i<10){
        i= i+' '
    }
    let quin = {
     val: ' ' ,
     numBox:Number(i),
     color:'yellow'
    }
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
        if( upLeft%8 == 0 && upLeft>0){
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

}

let n=53
///////////////////////////////
make_global_arr()   ///// //// 
//////////////////////////////


global_obj ={
    step:0,
    global_arr:[],
    quin_position:[],
    filters:[]

}
var filter
var new_filter
function stepForward(){ 
if(global_obj.filters.length == 0){
    filter  = global_arr.filter((e)=>{
    return e.color == 'yellow'
   })
   global_obj.filters.push(filter)

}
filter = global_obj.filters[global_obj.step]
let index = filter[0].numBox
    caller(Number(filter[0].numBox))// change global_arr
    
     let arr = []
     
     global_arr.forEach(e=>{
        arr.push({
            val:e.val,
            numBox:e.numBox,
            color:e.color,
            
        })
     })
      new_filter  = global_arr.filter(e=>{
        return e.color == 'yellow'
       })
    global_obj.step++
    // global_obj.step++
    global_obj.global_arr.push(arr)
    global_obj.quin_position.push(index)
    global_obj.filters.push(new_filter)
     

showTable(global_arr)

}

function setGlobalArr(){
 global_arr.splice(0,global_arr.length)
 console.log(global_arr)
 global_obj.global_arr.pop()
 global_obj.global_arr.forEach(e=>{
    global_arr.push(e)
 })
 global_obj.step--
 global_obj.quin_position.pop()
}


function caller(n){
    getDiagonals(n)
    getHorisont(n)
    getVertical(n)
}
