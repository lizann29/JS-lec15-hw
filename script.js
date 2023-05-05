// რიცხვები 5 დან 100მდე
for(let i=5; i<100; i++){
    console.log(i);
}

//რიცხვები რომლებიც მეტია 0ზე და ნაკლებია 10ზე
let array1= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];

for(let item1 of array1){
    const element1 = array1[item1]
    if (element1 > 0 && element1 < 10){
    console.log(element1);  
    }
}

// თუ მასივში არის 5, დალოგე არის და გააჩერე ციკლი
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for(let item2 of array2){
    const element2 = array2[item2]
    if (element2 ==5 ){
        console.log('არის');
        break;
    }
}
// რიცხვების ჯამი
let array3 = [1,2,3,4,5];
for(let item3 of array3){
    
}