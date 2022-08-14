var global_arr=[]

for(i=0 ;i<64;i++){
    if(i<10){
        i= i+' '
    }
    let quin = {
     val: 0 ,
     numBox:i
    }
    global_arr.push(quin)

}

function getHorisont(key){
let row = Math.floor(key/8)
for(e= row*8;e<(row*8+8);e++){
    global_arr[e].val=1
}
}

function getVertical(key){
   let col = key%8// init wich column 
  global_arr.forEach(e=>{
    if(e.numBox %8 == col){
        e.val=1
    }
  })
}

function getDiagonals(key){
    let upRight = key
    let upLeft = key
    let downRight = key
    let downLeft = key
    while(upRight >= 0 ){
        global_arr[upRight].val=1
        upRight = upRight-7
        if(upRight%8 == 0 )break
    }
    while(upLeft >= 0  ){
       
        global_arr[upLeft].val=1
        upLeft-=9
        if( upLeft%8 == 0 && upLeft>0){
            global_arr[upLeft].val=1
            break
        }
    }
while(downRight<=63){
    
    global_arr[downRight].val= 1
    downRight+=9
    if(downRight %8 == 0){
        break
    }
}
while(downLeft<63){
    global_arr[downLeft].val = 1
    if(downLeft%8 == 0 )break
    downLeft+=7
}

}

let n=53
getDiagonals(n)
getHorisont(n)
getVertical(n)
let c= 0 
let res =''
global_arr.forEach(e=>{
    c++
res+=e.val+' | '
    if(c%8 == 0 ){
        console.log(res)
    res = ''
    }
    
})
global_arr.forEach(e=>{
    c++
res+=e.numBox+' | '
    if(c%8 == 0 ){
        console.log(res)
    res = ''
    }
    
})