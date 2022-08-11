const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
     let arr = expr.match(/.{1,10}/g); 
       
  let x = [];
    arr.forEach(function(arr) {
    x.push(arr.replaceAll('10', "."))
  })
    
    let y = [];
    x.forEach(function(x) {
    y.push(x.replaceAll('11', "-"))
  })
      
    let str = y.join(' ');
      
  return str.split('**********').map(x => x.split(' ').map(a => a.split('0').map(b => MORSE_TABLE[b]).join('')).join('')).join(' ')
}

module.exports = {
    decode
}
