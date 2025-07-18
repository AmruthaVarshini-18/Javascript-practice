//String is a sequence of characters used to represent text.
//creating string
let str = "Hello World!";
console.log("String str=", str);
console.log(typeof str);

//String length
console.log("str length=", str.length);
length = str.length;
console.log("string length=", length);

//string Indices - Accessing Characters in a string through indices
console.log(str[0]);
str[1] = "h";
console.log(str);

//Template literals in JS- a way to have embedded expressions in strings
let obj = { item: "pen", price: 20 };
console.log("The cost of", obj.item, "is", obj.price, "rupees"); //Normal known approach

let output = `The Cost of ${obj.item} is ${obj.price} rupees`; //Template literals which involves string interpolation and place holders
console.log(output);
//escape Characters
//\n-next line
console.log("Mera \n Love \n JAVA SCRIPT");
//\t-tab space
str1 = "Amrutha";
str2 = "Varshini";
console.log(str1, "\t", str2);
