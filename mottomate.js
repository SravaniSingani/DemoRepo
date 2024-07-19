window.onload = function(){
  
    var randomDigit;
    var quoteSelect;
    var quotedBy;

$(".quotecard").click(function(){


    $(this).toggleClass("cardflip");
    
    randomDigit = Math.floor((Math.random()*5) +1);

    switch(randomDigit){
        case 1: quoteSelect = "Make each day your masterpiece.";
                quotedBy = "John Wooden";
                break;
        case 2: quoteSelect = "Don't count the days. Make the days count.";
                quotedBy = "Muhammad Ali";
                break;
        case 3: quoteSelect = "Great attitude is like a perfect cup of coffee, don't start your day without it.";
                quotedBy = "Lisa Lieberman-Wang";
                break;
        case 4: quoteSelect =  "Words are sharper than knife";
                break;
        case 5: quoteSelect = "A book is one's best friend.";
                break;
        default: quoteSelect = "idk";
                 break; 

    }
    displayQuote();

});



$(".songcard").click(function(){

    $(this).toggleClass("cardflip");
});

$(".funnyaffirm").click(function(){

    $(this).toggleClass("cardflip");
});


function displayQuote(){

var quote = document.getElementById("quote");
quote.innerHTML = quoteSelect;

}

}