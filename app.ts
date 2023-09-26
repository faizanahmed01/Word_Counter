#! usr/bin/env node

import inquirer from "inquirer";

const counter = (paragraph:string)=>paragraph.replace(/\s/g,"").length

async function startwordcount(counter:(text:string)=>number){
   
   do{
    let res = await inquirer.prompt({
        type:"input",
        message:"Write the Paragraph",
        name:"paragraph",
    })


    console.log(counter(res.paragraph));
}
    while(true)
}
startwordcount(counter)



