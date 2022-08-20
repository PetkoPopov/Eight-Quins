let ro_cuper = 0.0175 
let ro_al = 0.026
let ro_reotan = 1
let s 
for(i=0;i<100;i++){
    
    i_hlp=i/100
    s = ((i_hlp*i_hlp)*Math.PI)/4
    let l=(0.1*s)/ro_reotan
    console.log(l.toFixed(5)*100+' L[sm]----S[mm] '+s.toFixed(5))
    
}//S [all - mm] 0.1