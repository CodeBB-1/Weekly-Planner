console.log("test");


let items = [
    { // index 0
        itemName: "Banana",
        image: "img/banana.jpg",
        description: "Need 4 bananas",
        importance: 0
    },
    { //index 1
        itemName: "Apple",
        image: "img/apple.jpg",
        description: "Buy 7 Apples",
        importance: 5
    },
    { // index 2
        itemName: "Food",
        image: "img/dog.jpg",
        description: "Buy food for your Dog",
        importance: 3
    },
    { //index 4
        itemName: "Learning",
        image: "img/learning.jpg",
        description: "Buy learning equipment",
        importance: 2
    },
    { // index 5
        itemName: "Run",
        image: "img/run.jpg",
        description: "Get new running shoes",
        importance: 1
    },
    { // index 6
        itemName: "Kids",
        image: "img/child.jpg",
        description: "Buy toys for your children",
        importance: 0
    },
    { // index 7
        itemName: "Cooking",
        image: "img/cooking.jpg",
        description: "Buy healthy food",
        importance: 0
    },
    { //  index 8

        itemName: "Gym",
        image: "img/gym.jpg",
        description: "Buy new supplements ",
        importance: 0
    },
    { //index 9
        itemName: "Work",
        image: "img/work.jpg",
        description: "Get a new mouse for your work",
        importance: 0
    }

];

let result = document.getElementById("result");

function sortItems(){ // Sort the items array by importance in descending order (high to low) 
    items.sort((a, b) => b.importance - a.importance);
    result.innerHTML = " "; // clear the div before adding the addContent function
    addContent(); // call the addContent function after sorting
    

}
let sortButton = document.getElementById("sortButton"); //  Get the button element for sorting

sortButton.addEventListener("click", sortItems); // sort by clicking the button

function addContent() { // created  a function to add content to the page, used bootstrap herefore


    for (let item of items) {
        // console.log(item);
        let importanceLevel = item.importance; //  Get the importance level of the current item

        let colorClass = '';
        let textColor = '';

        if (importanceLevel <= 1) {    // created if statements to change color based on importance level -> that means to have the background Colors by default without clicking
            colorClass = 'bg-success';
            textColor = '';
        } else if (importanceLevel <= 3) {
            colorClass = 'bg-warning';
            textColor = 'black';
        } else {
            colorClass = 'bg-danger';
            textColor = 'white';
        }
        result.innerHTML += `
        <div class= "my-3 " >     
            <div class="card ms-5" style="width: 18rem;">
                <div class= "paddings">     
                    <a href= "" class= "btn btn-info">Task</a>
                    <div class= "icons">
                        <i class="fa-solid fa-bookmark"></i>
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                    </div>
                </div>
                <img src="${item.image}" class="card-img-top" alt="${item.itemName}">
                <div class="card-body">
                    <h5 class="card-title">${item.itemName}</h5>
                    <p class="card-text">${item.description}</p>
                    <hr>
                    <button class="important"><i class="fa-solid fa-triangle-exclamation"></i></button><span>  Priority level:    </span><a href="#" style="font-size: 10px; background-color: ${colorClass}; color: ${textColor}" class= "btn ${colorClass} changeColor"><span class="level">${item.importance}</span></a>
                    <p><i class="fa-solid fa-calendar-days"></i>  Deadline: 30.09.2024</p>
                    <hr>
                    <p class= "delete">
                        <a href="#" class="btn btn-danger"><i class="fa-solid fa-trash"></i>  Delete</a>
                        <a href="#" class="btn btn-success"><i class="fa-sharp fa-regular fa-circle-check"></i>  Done</a>
                    </p>
                </div>
            </div>  
        </div>    
            ` 
    }
    changePriority() // call the function here again to work after sorting
    
}
addContent();


function changePriority() { // created a function to change the background color by clicking the important icon (addEventListener)
    let likeBtn = document.querySelectorAll(".important");
    likeBtn.forEach((btn, index) => {
        btn.addEventListener("click", function() { 
         if(items[index].importance < 5){
             
             items[index].importance++;
             console.log(items[index]);
             document.querySelectorAll(".level")[index].innerHTML =  items[index].importance;
             
            if(items[index].importance <= 1) {
             document.querySelectorAll(".changeColor")[index].classList.add("bg-success");
            } else if (items[index].importance <= 3) {
             document.querySelectorAll(".changeColor")[index].classList.replace("bg-success" , "bg-warning");
             document.querySelectorAll(".changeColor")[index].style.color = "black";
            } else {
             document.querySelectorAll(".changeColor")[index].classList.replace("bg-warning" , "bg-danger");
              document.querySelectorAll(".changeColor")[index].style.color = "white";
            }
            
         }
        });
         
     });

}
changePriority()



