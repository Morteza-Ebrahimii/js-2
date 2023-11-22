//? follow these steps:
// todo1 : Write a code that logs “wait 5 sec”
// todo2 : and then after 5 seconds logs “ready?”
// todo3 :  and finally logs “🚀”  every one second
// todo4 : ( write a condition that cleans up the setInterval after 10 seconds to avoid crashing)

//!   Answer:
let i = 0;
let wait = setTimeout((num) => { console.log("wait 5 sec") }, 0)
let ready = setTimeout((num) => {
    console.log("ready?")
    
    let set = setInterval(() => {
        console.log("🚀")
        i++
        // console.log(i);
        
        if (i === 10) {
            console.clear();
            clearInterval(set);
        }
    }, 1000)
}, 5000)

