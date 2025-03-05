let name = "Степан";
console.log("Ім'я:", name);

let a = 14;
let b = 4;
let c = a - b;
let d = 7;
let result = c + d;
console.log("result:", result);

let variant = 7; 
console.log("Entered variant:", variant);

if (variant >= 7) 
{
    console.log("true");
} 
else 
{
    console.log("false");
}

if (a % 2 === 0) 
{
    a += 7;
} 
else 
{
    a -= 3;
}
console.log("new value a:", a);

console.log("Squares of numbers:");
let limit = variant + 10;
for (let i = 1; i <= limit; i++)
{
    console.log(i + "^2 = " + (i * i));
}

console.log("Prime numbers:");
for (let i = 2; i <= limit; i++) 
{
    let isPrime = true;
    for (let j = 2; j < i; j++) 
    {
        if (i % j === 0) 
        {
            isPrime = false;
            break;
        }
    }
    if (isPrime) 
    {
        console.log(i);
    }
}
