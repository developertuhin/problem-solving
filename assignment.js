// (1)- KilometerToMeter Conversion
function kilometerToMeter(kilometer) {
  
    if (kilometer < 0 ) {
        return false;
    }
    
    else {
        return kilometer * 1000;
    }
}
console.log(kilometerToMeter(10));




// (2)--BudgetCalculator Code bellow----

function budgetCalculaator(watch, mobile, laptop) {
    watchPrice = 50;
    mobilePrice = 100;
    laptopPrice = 500;
   
    if (watch < 0 || mobile < 0 || laptop < 0) {
        return false;
    }
    
    else {
        return (watch * watchPrice) + (mobile * mobilePrice) + (laptop * laptopPrice);
    }
}
console.log(budgetCalculaator(1, 1, 1)); 





// (3)- hotelCost code bellow -- 

function hotelCost(days) {
    firstTenDaysRent = 100;
    afterTenDaysRent = 80;
    afterTwentyDaysRent = 50;

    if (days < 0) {
        return false;
    }
    else {
       
        if (days >= 0 && days <= 10) {
            return firstTenDaysRent * days;
        }
      
        else if (days > 10 && days <= 20) {
           
            return firstTenDaysRent * 10 + Math.abs(afterTenDaysRent * (days - 10));
        }
     
        else {
           
            return firstTenDaysRent * 10 + afterTenDaysRent * 10 + Math.abs(afterTwentyDaysRent * (days - 20));
        }
    }
}
console.log(hotelCost(45)); 




// (4)----megaFriend code bellow ----

function megaFriend(names) {
    var size = 0;
    var max;
    for (var i = 0; i < names.length; i++) {

        if (names[i].length > size) {
            size = names[i].length;
            max = names[i];
        }
    } return max;
}
var names = ['tushar khan', 'Mohammad Orin', 'arafat rahman', 'donald sumon'];
console.log(megaFriend(names));
