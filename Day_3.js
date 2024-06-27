let a = [1,2,3,4,5,6];

for(var j = 0; j<a.length;j++){
    
    if(isNaN(a[j])){
        console.log('True');
    }else{
     console.log(a[j].toString());
    }
}

// cross check
if(isNaN(a)){
        console.log('True');
}