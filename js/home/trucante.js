// Truncate paragraph text to a certain number of words
var paragraph = document.querySelector('.truncate-paragraph');
var words = paragraph.textContent.split(' ');
var truncatedText = words.slice(0, 10).join(' ') + '...';
paragraph.textContent = truncatedText;
