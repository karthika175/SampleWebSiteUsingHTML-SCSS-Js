import {fetchDealTek,userfunc,fetching} from "./function.js";


userfunc();
let impleTable1=document.querySelector("#impli");
// let impleTable2=document.querySelector("#impli");
// let basic_table2=document.querySelector("#basic");
let basic_table1=document.querySelector("#basic");
let tekion=document.querySelector("#tekion");
let dealer=document.querySelector("#deal");

fetchDealTek("tekion.json",tekion);
fetchDealTek("dealer.json",dealer);
fetching("basic.json",basic_table1,basic_table1);
fetching("implement.json",impleTable1,impleTable1);
