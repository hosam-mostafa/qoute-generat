
var  qoute = [
    {
        'quote' : " “Be yourself; everyone else is already taken.” ",
        'author' : " ― Oscar Wilde ",
    },
    {
        'quote' : " “I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.” ",
        'author' : " ― Marilyn Monroe' "
    },
    {
        'quote' : " “Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” ",
        'author' : "― Albert Einstein' "
    },
    {
        'quote' : `“You've gotta dance like there's nobody watching,
        Love like you'll never be hurt,
       Sing like there's nobody listening,
       And live like it's heaven on earth.”`,
        'author' : "― William W. Purkey "
    }
    
]

function getQoutes(){
    var num = Math.floor(Math.random()* qoute.length)

    document.getElementById("quote").innerHTML = qoute[num].quote;
    document.getElementById("author").innerHTML = qoute[num].author;
//  console.log(num)
}




















// var quotesText = [`' “Be yourself; everyone else is already taken.”
// ― Oscar Wilde' ` ,
// `' “I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”
// ― Marilyn Monroe' ` ,
// `'“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”
// ― Albert Einstein' ` ,
// `'“So many books, so little time.”
// ― Frank Zappa'`,
// `'“A room without books is like a body without a soul.”
// ― Marcus Tullius Cicero'`,
// `'“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”
// ― Bernard M. Baruch'`,
// `'“You've gotta dance like there's nobody watching,
// Love like you'll never be hurt,
// Sing like there's nobody listening,
// And live like it's heaven on earth.”
// ― William W. Purkey'`,
// `'“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”
// ― Dr. Seuss'`,
// `'“You only live once, but if you do it right, once is enough.”
// ― Mae West'`,
// `'“Be the change that you wish to see in the world.”
// ― Mahatma Gandhi'`,
// `'“In three words I can sum up everything I've learned about life: it goes on.”
// ― Robert Frost'`,
// `'“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”
// ― J.K. Rowling, Harry Potter and the Goblet of Fire'`,
// `'“Don’t walk in front of me… I may not follow
// Don’t walk behind me… I may not lead
// Walk beside me… just be my friend”
// ― Albert Camus'`,
// `'“If you tell the truth, you don't have to remember anything.”
// ― Mark Twain'`,
// `'“Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .”
// ― C.S. Lewis, The Four Loves'`,
// `'“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”
// ― Maya Angelou'`,
// ]


// function addQuote() {
//     var count = Math.floor(Math.random() * quotesText.length);
//     var newText = quotesText[count];
      

//     document.getElementById('quote').innerHTML = newText

//     console.log(newText)
// }