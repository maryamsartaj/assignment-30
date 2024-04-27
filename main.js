var userNames = ["Mahad", "Ali", "Zeeshan", "Admin", "Usman"];
userNames.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello ".concat(oneUser, ",Would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ",thank you for loging in again."));
    }
});
