/*************************************
 * Challenge 1: engineer(array)
 *
 * - Accepts an array
 * - Logs every element of the array with "eng" next to it
 * eg: engineer(["zainab","omar","zahraa"]) => eng.zainab, eng.omar, eng.zahraa
 ************************************/
const engineer = (array) => {
  // input code here
  array.forEach(element => {console.log("eng", element);}
    
  );
};
engineer(["Zainab", "Fatima"]);
/*************************************
 * Challenge 2: toKWD(wallets)
 *
 * - Write a function named toKWD
 * - Accepts an array of wallets
 *   in USD
 * - Returns an array of wallets
 *   in KWD
 *
 * The conversion is:
 *   kwd = usd * 0.30
 ************************************/
function toKWD(wallets) {
  return wallets.map((wallet) => wallet * 0.3);
}
const kwdArray = toKWD([100, 300, 500]);

console.log(toKWD([100, 300, 500]));
  

/**************************************
 * Challenge 3: richestWallet(wallets,maxAmount)
 *
 * - Write a function named richestWallet
 * - Accepts an array of wallets
 * - Accepts a max amount
 * - Returns an array of wallets
 *   that exceed the maxAmount
 ***************************************/
const richestWallet = (wallets, maxAmount) => { 

 return wallets.filter  ((element) => element > maxAmount);



 
}
const wallets=[50, 1000, 1000000, 700, 800000, 300000];

console.log(richestWallet(wallets, 1000));
  

/******************************************
 * Challenge 4: makeLiteralGrades(grades)
 *
 * - Write a function named makeLiteralGrades
 * - Accepts an array of grades as numbers
 * - Converts evrey grade to its currosponding
 * literal grade in the following scale
 * 90-100 : A
 * 80-90  : B
 * 70-80  : C
 * 60-70  : D
 * < 60   : F
 * Example: makeLiteralGrades([90, 70, 40]) should return ["A", "C", "F"]
 *******************************************/
 
const mappedGrades = (grades) => {
 return grades.map((grade)=>{
    if(grade>=90){
      return "A"
    } else if (grade>=80){
      return "B"
    } else if(grade>=70){
      return "C"
    } else if (grade>=60){
      return"D"
    } else{
      return "F"
    }
  })
}
console.log(mappedGrades([99,89]));