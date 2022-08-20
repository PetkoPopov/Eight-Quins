
var arr=[]
let step =0 ;
for(i=0;i<8;i++){
    for(p=0;p<8;p++){
        let ph =8+p
        
        if(check([i,ph]))continue
        for(y=0;y<8;y++){
            let yh = 16 +y
            if(check([i,ph,yh])){continue}
            
            for(a=0;a<8;a++){
                let ah =24+a
                if(check([i,ph,yh,ah])){continue}
                     for(b=0;b<8;b++){
                        let bh = 32+b
                        if(check([i,ph,yh,ah,bh])){continue}
                        for(c=0;c<8;c++){
                            let ch = c+40
                            if(check([i,ph,yh,ah,bh,ch])){continue}
                             for(d=0;d<8;d++){
                                let dh = 48 +d
                                if(check([i,ph,yh,ah,bh,ch,dh])){continue}
                                
                                for(f=0;f<8;f++){
                                step++
                                    let fh = 56+f
                                    if(check([i,ph,yh,ah,bh,ch,dh,fh])){continue}
                                    // console.log(i,ph,yh,ah,bh,ch,dh,fh)
                                    // console.log(step)
                                    var arr_solve =[i,ph,yh,ah,bh,ch,dh,fh]
                                      arr.push(arr_solve)
                                }
                             }
                        }
                     }       
            }
        }
    }
}

var result
function check(arrCheck){
    let e = arrCheck.pop()
   let find =  arrCheck.filter((q)=>{
       return  e%8 == q%8
    })    
if(find.length !=0 ){return true}
let w = e

    while(w >=1 ){

        // console.log(w)
        let found = arrCheck.find(q=>{
            return q == w 
        })
if(found){return true}

if(w%8 ==7 ){break}
      w-=7
    }
w=e
while( w >= 0 ){
    // console.log(w)
    let found2 = arrCheck.find(q=>{
        return q == w 
    })
if(found2||found2==0){return true}
 
w-=9
if(w%8 ==7){break}   
}


return false
   
}
// console.log(check([0,9]))
function showResult(arr_d){
    console.log(arr_d)
    
let res=''
for(n=0 ; n<64;n++){




if(arr_d.includes(n)){
    res+='|'+'  '

}else{
    res+='|'+'00'
}
if(n%8 == 7 )
{

    console.log(res)
    res=''
}
}

}
arr.forEach(e=>{
    showTable(e)
console.log('---------------')
})
function showTable(glob_arr){

    var tr = document.createElement("tr")
    var table = document.createElement('table')
    
    for(i=0 ; i <64;i++){
    let  td =document.createElement("td")
    if(glob_arr.includes(i)){
     td.style.backgroundColor = 'red'
     td.innerHTML = '&#9819'+'<small>'+i+'</small>' 
    }else{
        td.style.backgroundColor="green"
    }
    
     
    tr.appendChild(td)
    
    
    if(i%8 == 7){
    table.appendChild(tr)
    
    tr=document.createElement('tr')
    }
    
    }//end for
    let div = document.getElementsByTagName('div')[0]
    div.appendChild(table)

    }//end function