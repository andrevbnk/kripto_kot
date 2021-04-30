const indexPair = (from,to,arr)=>{
    for(let i in arr){
      if(from==arr[i].from && to==arr[i].to){
        return i
      }
    }
    return false;
  };

const perDiffrent = (a,b)=> ((a - b) /((a + b) / 2) * 100).toFixed(3);


const diagMapper = (data) =>{
  return data.map((elem,i)=>{
    return {date: new Date(2021, 0, i),value:elem.close}
    
    })
}

export {perDiffrent,indexPair,diagMapper}

  
  