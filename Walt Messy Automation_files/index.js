// const list= document.querySelectorAll(".card");
// const navli=document.querySelectorAll("#List");
// window.addEventListener('scroll',()=>{
//     let current=" ";
//     list.forEach(item =>{
//         const sectionTop=item.offsetTop;
//         console.log(sectionTop);
//     })
// })

fetch("content.json")
.then(function(response){
    return response.json();
})

.then(function(content){
    let holder=document.querySelector("#content");
    let out= " ";
    content["output1"].forEach((content)=>{
        out += "<tr>";
            for (let key in content){
                out += `<td>${content[key]}</td>`;
            }
        out+="<tr>";
    });
    holder.innerHTML=out;

    let holder3=document.querySelector("#dealer");
    let out3 = " ";
    content["output3"].forEach((content)=>{
        out3 += "<tr>";
            for (let key in content){
                out3 += `<td>${content[key]}</td>`;
            }
        out3+="<tr>";
    });
    holder3.innerHTML=out3;

    let holder4=document.querySelector("#profileTable1Content");
    let out4 = " ";
    content["output2"].forEach((product)=>{
         
            for (let key in product){
                out4 += "<tr>";
                out4 += `<th> ${key} :</th>
                <td> ${product[key]}</td>`;
                out4+="</tr>";
            }
        
    });
    holder4.innerHTML=out4;

    let profileTable2=document.querySelector("#profileTable2Content");
    let table2output = " ";
    content["profiletable2content"].forEach((data)=>{
         
            for (let key in data){
                table2output += "<tr>";
                table2output += `<th> ${key} :</th>
                <td> ${data[key]}</td>`;
                table2output+="</tr>";
            }
        
    });
    profileTable2.innerHTML=table2output;

    let impleTable1=document.querySelector("#impleTable1");
    let impletable1 = " ";
    content["impleTable1"].forEach((impleTable1data)=>{
         
            for (let key in impleTable1data){
                impletable1 += "<tr>";
                impletable1 += `<th> ${key} :</th>
                <td> ${impleTable1data[key]}</td>`;
                impletable1+="</tr>";
            }
        
    });
    
    impleTable1.innerHTML=impletable1;

    let impleTable2=document.querySelector("#impleTable2");
    let impletable2 = " ";
    content["impleTable2"].forEach((impleTable2data)=>{
         
            for (let key in impleTable2data){
                impletable2 += "<tr>";
                impletable2 += `<th> ${key} :</th>
                <td> ${impleTable2data[key]}</td>`;
                impletable2+="</tr>";
            }
        
    });
    
    impleTable2.innerHTML=impletable2;

    document.getElementById("managerName").innerHTML=content["managerDetail"].name;
    document.getElementById("overall").innerHTML=content["managerDetail"].overall;
    document.getElementById("score").innerHTML=content["managerDetail"].score;
    document.getElementById("csat").innerHTML=content["managerDetail"].csat;
    document.getElementById("recent").innerHTML=content["managerDetail"].RecentVisit;
    document.getElementById("next").innerHTML=content["managerDetail"].nextVisit;
    

})
