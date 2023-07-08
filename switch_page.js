 const arr=["dash","live","touch","acc","tickets","product","goal"];
    function change(divId,anchorId)
    {
        document.getElementById(divId).style.display="none";
        document.getElementById(anchorId).style.borderBottom="0.1rem solid #6994da"; 
        document.getElementById(anchorId).style.fontWeight=600;
        for(let a of arr){
          
          if(a!=anchorId){
            document.getElementById(a).style.borderBottom="none";
          document.getElementById(a).style.fontWeight=500;
          }
        }
    }
    function account(divId,anchorId)
    { 
        document.getElementById(divId).style.display="flex"; 
        document.getElementById(anchorId).style.borderBottom="0.1rem solid #6994da";
        document.getElementById(anchorId).style.fontWeight=600;
        for(let a of arr){
            if(a!=anchorId){
                document.getElementById(a).style.borderBottom="none"; 
                document.getElementById(a).style.fontWeight=500;
            }
        }
    }
          