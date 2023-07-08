// to display heading
function headings(THdata){
    let thead=document.createElement("thead");
    let row;
    row=document.createElement("tr");
    for (let key of THdata){
        let th = document.createElement("th");
        let text=document.createTextNode(key);
        //console.log(text);
        th.appendChild(text);
        row.appendChild(th);
    }  
    thead.appendChild(row);
    return thead;
  
}
// to display content
function contents(data){
    let row;
    let cell;
 
   let tbody=document.createElement("tbody");
    for (let element of data) {
        row=document.createElement("tr");
        for (let key in element) {
          cell = row.insertCell();
          let text = document.createTextNode(element[key]);
          cell.appendChild(text);
          row.appendChild(cell);
        }   
        tbody.appendChild(row);
      }
      
      return tbody;
}
// to create table for basic deatil and implementation
function createTable_basicImpli(table_location)
{
    let table=document.createElement("table");
   
    table.setAttribute("class",table_location);
   
    table.style.width="50%";
    return table;

}
function createTable_dealerTekion(dealer_tekion)
{
    let table=document.createElement("table");
   
    table.setAttribute("class",dealer_tekion);
   
    return table;

}
// after creating table append it to a particular div element
function created(table,basic_table1)
{
   
 basic_table1.appendChild(table);
}

// fetching function common to all
function fetching(file,id1,id2){
    fetch(file)
    .then(function(response){
    return response.json();
    })
    .then(function(data){
        
        funcParameter(data,id1,id2);
    
    });
}
function fetchDealTek(file,id){
    fetch(file
    .then(function(response){
    return response.json();
    })
    .then(function(data){
        console.log(data);
    tekionDelaer(data,id);
    
    })
)}

function funcParameter(jsonFile,Table1id1,Table2id2){
    
    
    let head1 = Object.values(jsonFile.table1_heading);
    let data1 = Object.values(jsonFile.table1_content);
    let finalTable1=basicImpli(head1,data1);
    created(finalTable1,Table1id1);
    
    let head2 = Object.values(jsonFile.table2_heading);
    let data2 = Object.values(jsonFile.table2_content);
    let finaltable2=basicImpli(head2,data2);
    created(finaltable2,Table2id2);
   

}



function basicImpli(head,data)
{
    let cls="profileTable1";
    let thead= createTable_basicImpli(cls);
    let row;
    // console.log(thead.className);
    for (let key in head){
        let th = document.createElement("th");
        let td = document.createElement("td");
         row=thead.insertRow();
        let heading=document.createTextNode(`${head[key]}:`);
        th.appendChild(heading);
       
        let content=document.createTextNode(`${data[key]}`);
        td.appendChild(content);
        row.appendChild(th);
        row.appendChild(td);
    }
    thead.appendChild(row);  
 
    return thead;
}

function userfunc(){
fetch("user.json")
.then(function(response){
    return response.json();
})

.then(function(user){
   
    let data="";
    let text,span,content,htmlEle;
    for(let key in user)
    {
        
        if(key == "recent"|| key == "next"){
            span=document.createElement("span");
            data=document.getElementById(`${key}`);
            let date=`${user[key]}`;
            let d=moment.unix(date).format('MM/DD/YYYY');
            text=document.createTextNode(d);
            span.appendChild(text);
            data.appendChild(span);
        }
        else if(key == "mood"){
            let value = user[key];
            span=document.createElement("span");
            data=document.getElementById("overall");
            htmlEle=document.getElementById("circle");
            if(value == "positive")
            {   
                content = "Happy";
                htmlEle.style.color="#7dd064";
            }
            else if(value == "negative")
            {
                content = "Sad";
                htmlEle.style.color="#FF0000";
            }
            else {
                content = "Moderate";
                htmlEle.style.color="#FFD700";
            }
            text=document.createTextNode(content);
            span.appendChild(text);
            data.appendChild(span);
        }
        else{
        span=document.createElement("span");
        data=document.getElementById(`${key}`);
        text=document.createTextNode(`${user[key]}`);
        span.appendChild(text);
        data.appendChild(span);
    }
}
    
})
}
function tekionDelaer(data,id1){

    let head = Object.values(data.head);
    let cont = Object.values(data.content);
    let th = headings(head);
    let conti = contents(cont);
    let cls="dealer_tekion";
    let thead=createTable_dealerTekion(cls);
    thead.appendChild(th);
    thead.appendChild(conti);
    id1.appendChild(thead);
   
}

let basic=document.getElementById("basicDetail");
let impli=document.getElementById("ImplemenationDetail");
let tekion=document.getElementById("TekionTeam");
let dealer=document.getElementById("DealerTable");
const options = {
    threshold: 0.8
  }
 
const callback = (entries) => {
    entries.forEach((entry) => {
        let current = "";
        let link="";
                if(entry.isIntersecting){
                    current = entry.target.id + "_link";
                    link=document.getElementById(current);
                    // console.log(current);
                    link.l;
                }
                else{
                    current = entry.target.id + "_link";
                    link=document.getElementById(current);
                    // console.log(current);
                    link.classList.remove("list-item");
                }
            })
}
  

const obs = new IntersectionObserver(callback,options);
obs.observe(basic);
obs.observe(impli);
obs.observe(tekion);
obs.observe(dealer);



export {fetchDealTek,userfunc,fetching};
