let userNames = ["Mahad","Ali","Zeeshan","Admin","Usman"];

userNames.forEach(oneUser =>{
    if (oneUser ==="Admin"){
        console.log(`Hello ${oneUser},Would you like to see a status report?`)
    }else{
        console.log(`Hello ${oneUser},thank you for loging in again.`)
    }
})