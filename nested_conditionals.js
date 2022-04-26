const password = prompt("please enter password")

// password mist be 6+ charcaters
if (password.length >= 6) {
    // password cannot include space
    if (password.indexOf(' ') === -1) {
        console.log("Valid Password")
    } else {
        console.log("Password cannot contain spaces!")
    }
} else {
    console.log("PASSWORD TOO SHORT! Must be 6+ characters")
}
