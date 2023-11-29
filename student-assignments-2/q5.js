// ? 5. Modify the array of object below with (for of ) like this:
// todo : If the  gamer_id is 1002 change the gamer_name as you like

let gamers_data = [
  {
    gamer_id: 1001,
    gamer_name: 'Jason',
  },
  {
    gamer_id: 1002,
    gamer_name: 'Ali',
  },
  {
    gamer_id: 1003,
    gamer_name: 'Mathew',
  },
];

// ! Answer
for (const element of gamers_data) {
    if (element.gamer_id === 1001 ) {
      element.gamer_name = "khashayar";
    }else if (element.gamer_id === 1002 ) {
      element.gamer_name = "hosein";
    }else if (element.gamer_id === 1003 ) {
      element.gamer_name = "aghil";
    }
  }
  bachehayMahal = gamers_data;
console.log(bachehayMahal);