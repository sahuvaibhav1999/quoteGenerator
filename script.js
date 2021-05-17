const text = document.querySelector('.quote');
const author = document.querySelector('.author');
const nxtBtn = document.querySelector('.next');
const tweetBtn = document.querySelector('.twitter-share-button');
const getQuote = async () => {
    const res = await fetch('https://type.fit/api/quotes');
    const quotes = await res.json();
    const num = Math.floor(Math.random()*quotes.length);
    const item = quotes[num];
    const quote = item.text;
    const authorName = item.author;
    text.innerText = quote;
    author.innerText = authorName;
    console.log(quotes[num]);
    tweetBtn.href = `https://twitter.com/intent/tweet?text=${quote} - ${authorName}`
}
nxtBtn.addEventListener('click', getQuote)

getQuote()