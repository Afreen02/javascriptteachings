// document.write("Hiiiii" + "<br>");
// console.log("Hi javascript");
// alert("HEYYY");

// Variables - name, name12, first_name, nameFirst, name-first
// no special characters in variable
// 12name, &name  => X
// a = "Wasib";
// document.write(a +"<br>");
// document.write("<strong>" + a + "</strong> " +"<br>");

// Data-type => number, string, boolean, float, array, object
// string = ""
// number = 123
// boolean = true/false
// float = 1.23
// array = []
// object = {"key":"value", "key":123}

// Operators - symbols
// 1.Arithmetic op=> +,-,*,/,%,**,++,--
// a = 10;
// b = 3;
// document.write(a+b+"<br>");
// document.write(a%b);
// document.write(a**b +"<br>");
// document.write(a-- +"<br>");

// 2.Assignment op => +=, -=,*=,=,/=,%=,**=
// a = 4;
// b = 6;
// document.write(a+=b);
// a+=b => a = a+b

//3. Comparison Operator => ==, ===, !=, >, <, >=, <=
// document.write(a == b);
// document.write(!a);
// != => not equal

// 4. Logical operator => &&, ||, !
// && => both value true
// || => one true one false
// ! => not equal 

//5. Ternary operator => condition?"true":"false"

// Variables => let, var, const

// var a = "Wasib";
// var => variable, a => variable name, "Wasib"=> variable value
// a = "Qureshi";
// document.write(a + "<br>");

// redeclaration & reassignment 
// var b = "xyz";
// var b = "mno";  
// redeclaration
// document.write(b+"<br>");

// let m = "abc";
// m = "def";
// document.write(m);     reassignment

// let n = "abc";
// let n = "def";      //no redeclaration
// document.write(n);

// const x = "mango";
// document.write(x);
// const => no redeclaration and no reassignment

// if else - 
// if(condition){
//     statement => output
// }
// else{
//     statement
// }

// let age = 18;
// if(age>=18){
//     console.log("Eligible");
// }
// else{
//     console.log("Not eligible");
// }

// Nested if else -
// if(condition){
//     output
// }
// else if(condition){
//     output
// }
// else if(condition){
//     output
// }
// else{
//     output
// }

// let age = 25;
// let hasId = false;
// if(age>=18 || hasId){
//     console.log("eligible")
// }
// else{
//     console.log("deny");
// }

// let islogin = true;
// if(!islogin){
//     console.log("Please login");
// }
// else{
//     console.log("welcome");
// }

// let marks = 85;
// let attendance = 80;
// if(marks >= 90 && attendance>=75){
//     console.log("EXCELL");
// }
// else if(marks >= 70 && attendance >=60){
//     console.log("Good");
// }
// else if(marks >= 50 || attendance >=70){
//     console.log("Average");
// }
// else{
//     console.log("Fail");
// }

// marks => basis => grades (A,B,C,D)


// ternary operator =>
// let age = 1;
// let result = (age>=18) ? "You can vote": "not";
// console.log(result);


// nested ternary operATOR=>
// let marks = 5;
// let grade = (marks>=90)?"A":(marks>=70)?"B":(marks>=50)?"C":"fail";
// console.log(grade);



// function -  reusable

// function func_name(){
//     document.write("output");
// }
// func_name()

// function names(){
//     document.write("wasib");
// }
// names();

// function with parameter - 
// function names(parameter1, parameter2){
//     return parameter
// }
// names(argument1, argument2)

// function names(para){
//     return para;
// }
// document.write(names("wasib"));

// function names(num,num2){
//     return num+num2;
// }
// document.write(names(3,5));

// while loop - 
// 1.initialization
// 2.condition
// 3.increment/decrement

// let i = 1;
// while(condition){
//     print 
//     i++/i--;
// }


// odd-
// let i = 1;
// while(i <= 10){
//     console.log(i);
//     i += 2;   
//     //i = i+2
// }

// reverse -
// let i = 10;
// while(i >= 1){
//     console.log(i);
//     i--;   

// }

// let i = 1;
// while(i <= 10){
//     document.write("wasib" +"<br>");
//     i++;
// }

// print even no from 1-20 & print odd no , reverse countdown


// while loop with break -
// let i = 1;
// while(i<=10){
//     if(i==5){
//         break;
//     }
//     console.log(i);
//     i++;
// }

// while loop with continue - current iteration skip and move to next
// let i = 0;
// while(i<=10){
//     i++;
//     if(i===5){
//         continue;
//     }
//     console.log(i);
// }


// for loop - 
// for(let i = 1;i<=10;i++){
//     console.log(i)
// };

// for(let i = 1;i<=10;i++){
//     console.log("Wasib");
// };

// nested loop - 
// for(let i = 1;i<=10;i++){   //outer loop OR row
//     for(let j = 1;j<=10;j++){  //inner loop or Column
//         document.write("*");
//     }
//     document.write("<br>");
// }

// for(let i = 1;i<=10;i++){   
//     for(let j=i;j<=10;j++){  
//         document.write("*");
//     }
//     document.write("<br>");
// }


// pyramid - 
// for(let i=1;i<=5;i++){  //row
//     let pattern = "";
//     // spaces-
//     for(let j=1;j<=(5-i);j++){  //column + space
//         pattern += " ";
//     }
//     // stars -
//     for(let k=1;k<=(2*i-1);k++){  //star pattern OR number pattern
//         pattern += "*";
//     }
//     console.log(pattern);
// }

//homework# 
// for(let i=1;i<=20;i++){
//       if (i % 2 == 0){
//         console.log(i);
//     }    
// }

//home work sum of two numbers 
// let num1 = parseInt(prompt("Enter a number"));
// let num2 = parseInt(prompt("Enter a number"));
// let sum = num1 + num2
// document.write("sum of " + num1 + " and " + num2 + " is " + sum);

//odd or even number find home work 
// let i=5;
// if(i % 2 == 0 ){
//     console.log("even");
// }
// else{
//     console.log("odd");
// }


//how to find square of a number #home work 
// let number = 5;
// let square = number * number;
// console.log("square of " + number + " is " + square);



