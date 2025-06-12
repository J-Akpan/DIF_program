const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let input = prompt()
let result = ''
input = input.toUpperCase();
for (let i=0; i<input.length; i++){

    const letter = input[i]
    if(letter <='A' || letter <='Z'){
        const position = alphabet.indexOf(letter)
        const hasher = alphabet[25 - position]
        result += hasher

        console.log (result)

       
    }
    
}
