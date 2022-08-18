function standarddevcalc(array){

    
    const lngtharray = array.length;
    const mean = array.reduce((x,y)=> x+y )/ lngtharray;
    const elementsall = array.reduce((x,y)=>x+(y-mean) ** 2,0) / (lngtharray -1);
    answer = Math.sqrt(elementsall);
    console.log(answer)
   

}
standarddevcalc([1, 2, 3, 4]);