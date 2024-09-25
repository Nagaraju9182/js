let books =["Maths","Chemistry","Physics"];

books.pop()

document.write(books + "<br>")

// -----------------------------------------------


let states =["Delhi","Mumbai","Hyderabad"];

  states.shift()

  document.write(states + "<br>")


//   ___________________________________________________________


 let scores =[25, 47, 50, 567,456,"ameer" ]
   scores.unshift("Gopal",12)

   document.write(scores + "<br>")  


//    __________________________________________________________________


    let score = [11,22,33]

    let players =["amit","gopal","vamshi","ameer"  ];

    let newPlayers = score.concat(players)
    document.write(newPlayers + "<br>");


    // ______________________________________________________________________


    let team = [10,20,30,"ameer","gopal","Rohit"];
         
    var myTeam = team.join("/")
    document.write(myTeam + "<br> ")