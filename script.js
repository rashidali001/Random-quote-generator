//Declaring Variables

let quote = document.querySelector('.quote');
let author = document.querySelector('.author');
let button = document.querySelector('#new-quote');



let quotes = [
    {
      word: '"If you find yourself criticizing other people, you’re probably doing it out of resistance. When we see others beginning to live their authentic selves, it drives us crazy if we have not lived out our own."',
     person: 'The Art of War'
    },
    {
        word: '"Live as long as you may, the first twenty years are the longest half of your life. They appear so while they are passing; they seem to have been so when we look back on them; and they take up more room in our memory than all the years that succeed them."',
       person: 'Robert Southey'
    },
    {
        word: '"Having knowledge but lacking the power to express it clearly is no better than never having any ideas at all."',
       person: 'Pericles'
    },
    {
        word: '"Never speak of yourself to others; make them talk about themselves instead; therein lies the whole art of pleasing. Everybody knows it, and everyone forgets it."',
       person: 'Edmond de Goncourt, 1822 - 1896'
    },
    {
        word: '"Courage is not simply one of the virtues, but the form of every virtue at the testing point, which means at the point of highest reality"',
       person: 'C.S. Lewis'
    },
    {
        word: '"The measure of success is not how much time you spend doing what you love, it\'s how little time you spend doing what you hate"',
       person: 'Casey Neistat'
    },
    {
        word: '"So, if you cannot understand that there is something in man which responds to the challenge of this mountain and goes out to meet it, that the struggle is the struggle of life itself upward and forever upward, then you won’t see why we go. What we get from this adventure is just sheer joy. And joy is, after all, the end of life"',
       person: 'George Mallory'
    },
    {
        word: '"Every day of our lives, we are on the verge of making those slight changes that would make all the difference."',
       person: 'Mignon McLaughlin'
    },
    {
        word: '"Your life is designed to get the results you are getting right now. Whether you realize it or not, you are the architect."',
       person: 'Shane Parrish'
    },
    {
        word: '"My schedule is far less about what I want to get done and far more about who I want to become."',
       person: 'Bill Hybel'
    },
    {
        word: '"You will never change your life until you change something you do daily."',
       person: 'John Maxwell'
    },
    {
        word: '"To get what you want, deserve what you want. Trust, success, and admiration are earned."',
       person: 'Charlie Munger'
    },
    {
        word: '"Sometimes you have to lose all you have to find out who you truly are."',
       person: 'Roy T. Bennett, The Light in the Heart'
    },
    {
        word: '"The only person who can pull me down is myself, and I\'m not going to let myself pull me down anymore."',
       person: 'C. JoyBell C.'
    },
    {
        word: '"Fair means everyone gets what they need. And the only way to get what you need is to make it happen yourself."',
       person: 'Rick Riordan, The Red Pyramid'
    },
    {
        word: '"Sometimes, as we\'re stumbling along in the dark, we hit something good."',
       person: 'Susan Ee, Angelfall'
    },
    {
        word: '"If you don’t give up on something you truly believe in, you will find a way."',
       person: 'Roy T. Bennett'
    },
];


button.addEventListener('click', function(){
    
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].word;
    author.innerText = quotes[random].person;    
    
});