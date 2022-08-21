// Write a program to display one result card of 100 students
// with their name and percentage
// Out of 100 students, 50 has subjects - Grammer and Accounts
// and other 50 has subjects -  Grammer and Physics

// Hint : You need to calculate percentage of 100 students having different set of subjects.
//        You can assume their scores on their respective subjects.


// Write your code here

//Name,subject mark1 and mark2,percentage

let students = [
    {
        "studentName": "Amirtha",
        "grammer": 80,
        "accounts":85,
        "group":"A"
    }
    ,

    {
        "studentName": "Varshini",
        "grammer": 70,
        "accounts":82,
        "group":"A"
    }
    ,
    {
        "studentName": "Acchu",
        "grammer": 78,
        "accounts":98,
        "group":"A"
    }
    ,
    {
        "studentName": "Akshaya",
        "grammer": 60,
        "accounts":55,
        "group":"A"
    }
    ,
    {
        "studentName": "Kumar",
        "grammer": 90,
        "accounts":95,
        "group":"A"
    }
    ,
    {
        "studentName": "Swetha",
        "grammer": 55,
        "physics":65,
        "group":"B"
    }
    ,
    {
        "studentName": "Shangavi",
        "grammer": 58,
        "physics":74,
        "group":"B"
    }
    ,

    {
        "studentName": "Dhivya",
        "grammer": 92,
        "physics":76,
        "group":"B"
    }
    ,
    {
        "studentName": "Vignesh",
        "grammer": 63,
        "physics":43,
        "group":"B"
    }
    ,
    {
        "studentName": "Vikram",
        "grammer": 88,
        "physics":90,
        "group":"B"
    }

]


for (let index = 0; index < students.length; index++) {
    const element = students[index];

    console.log("Name: "+element.studentName);
    // console.log(`Name: ${element.studentName}`); //ES6 
    
    console.log("Grammer Mark: "+element.grammer);
    
    if (element.group == "A") 
    
    { console.log("Account Mark: "+ element.accounts);
      var percentage = (element.grammer + element.accounts) /2
      console.log("Percentage: "+ percentage+ "%");
    } 
    
    else {  
        console.log("Physics Mark: "+element.physics);
        var percentage = (element.grammer + element.physics) /2
        console.log("Percentage: "+percentage+ "%");
        
    }

}
