const TOKEN_TYPES = [
    { type: 'NUMBER', regex: /^[0-9]+(\.[0-9]+)?/ },
    { type: 'IDENTIFIER', regex: /^[a-zA-Z_][a-zA-Z0-9_]*/ },
    { type: 'OPERATOR', regex: /^[+\-*/]/ },
    { type: 'PAREN', regex: /^[()]/ },
    // Add more token types as needed
  ];

function tokenize(input) {
    var pointer=0;
    var tokens=[];  

    function get_next_token() {
        if (pointer >= input.length) {
            return null;
        }

        for (const { type, regex } of TOKEN_TYPES) {
            match=input.slice(pointer).match(regex);
            if (match) {
                tokens.push({ type, value: match[0] });
                pointer += match[0].length;
                matched = true;
                return { type, value: match[0] };
              }
        }

        console.log(match);
        console.log(tokens);
    }

    while (pointer < input.length) {
        get_next_token();
    }

    return tokens;

}



const fs = require('fs');
const { get } = require('http');
const path = require('path');

// Define the path to the file
const filePath = path.join(__dirname, 'my_lang.js');

// Function to read and extract the code from the file
function extractCodeFromFile(filePath) {
    try {
        // Read the contents of the file
        const fileContent = fs.readFileSync(filePath, 'utf8');
        
        // Log the extracted content to the console
        //console.log("Extracted code from my_lang.js:");
        //console.log(fileContent);

        // Return the content if you need it for further processing
        return fileContent;
    } catch (err) {
        console.error(`Error reading file from disk: ${err}`);
    }
}

// Call the function to extract the code
const code1 = extractCodeFromFile(filePath);
//console.log(code);//
const code='1+2';
tokenizer=tokenize(code);
console.log(tokenizer);