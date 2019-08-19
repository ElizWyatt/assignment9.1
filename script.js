//prompt user what would you like to do
var chores = ['dishes', 'laundry', 'sweep'];
var toDo = prompt("What would you like to do?( List, New, or Quit)");  

        while (toDo != "quit") {
        if (toDo === "list") {
        console.log(chores);
        } 
        else if (toDo === "new") {
                chore = prompt("What is your new task?"); 
                chores.push(chore);
        } 
        var toDo = prompt("What would you like to do?( List, New, or Quit)");  
    }
console.log("Quit the app");







   