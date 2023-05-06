// რიცხვები 5 დან 100მდე
for(let i=5; i<100; i++){
    console.log(i);
}

//რიცხვები რომლებიც მეტია 0ზე და ნაკლებია 10ზე
let array1= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];

for(let item1 of array1){
    // const element1 = array1[item1]
    if (item1 > 0 && item1 < 10){
    console.log(item1);  
    }
}

// თუ მასივში არის 5, დალოგე არის და გააჩერე ციკლი
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for(let item2 of array2){
    if (item2 ==5 ){
        console.log('არის');
        break;
    }
}
// რიცხვების ჯამი
let array3 = [1,2,3,4,5];
let sum = 0;
for(let item3 of array3){
    sum += item3;
 }
 console.log(sum);

 // საშუალო არითმეტიკული
 let array4 = [1, 2, 3, 7, 6, 9];
 let sum2 = 0;
 for(let item4 of array4){
    sum2+=item4
 } 
 let result = sum2 / array4.length
 console.log(result);

//ყველა რიცხვი 7 ის გარდა
let array5 = [1, 2, 3, 7, 6, 9];
for(let item5 of array5){
    if(item5 == 7) {
       continue;
     } 
     console.log(item5);
 }
// ამოიღეთ user ცვლადის სტუდენტის სტატუსი;

let user = {
    firstName: "giorgi",
    lastName: "smith",
    age: 25,
    studentStatus: "active"
  };

console.log(user.studentStatus)
// დავალება 8
let user1 = {
    name: 'giorgi',
    age:  20,
    studentStatus1: 'active'
}

if (user1.age < 18 && user1.studentStatus1 =="active"){
    console.log("hello");
} else if(user1.name == "levani"){
    console.log("hello levan");
} else if (user1.age < 25 && user1.studentStatus1 =="active"){
    console.log("Hello world");
} else{
    console.log(error);
}

// გამოიტანეთ მხოლოდ დადებითი რიცხვები
let array6 = [
    [2, -3, 5, 10],
    [25, -24, -11, 100],
    [-6, -7, 10],
  ];

for (let item6 of array6){
    // console.log(item6)
     for(let element6 of item6){
        if(element6 > 0){
        console.log(element6)
        }
     }
}

//1. ამოიღეთ მხოლოდ ლუწი რიცხვები
let array7 = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ]
for(let item7 of array7){
    if(item7 % 2 == 0){
        console.log(item7);
    }
}
//2. ამოიღეთ მხოლოდ კენტი რიცხვები
for(let item8 of array7){
    if(item8 % 2 == 1){
        console.log(item8);
    }
}
