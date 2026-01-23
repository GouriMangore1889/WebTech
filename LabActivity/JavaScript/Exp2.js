//activity1
//Array functions and obj declaration with ex 
       //Array
        //1.
        const arr=[4,5,6,7]
        console.log(arr);
        //2.
        // Array declaration using constructor
        const arr1 = new Array(0, 1, 2);
        console.log(`Element at index 1 is ${arr1[1]}`);
       //function
        // Function (block of reusable code)
            function greet(userName) {
                return `Hello, ${userName}`;
            }
            console.log(greet("Gouri"));
      //obj
        const info = {
                name: "Gouri",
                rollNo: 5,
                age: 20
            };

            console.log(info);
            console.log(info.name);
            console.log(info.age);

 //activity2
   //find largest no in string
     let str="2945"
     console.log(`Given string str :${str}`)     
     let lar=str[0]
     for(let i=0;i<str.length;i++)
     {
        if(str[i]>lar)
            lar=str[i]
     }
     console.log(`largest no in string is ${lar}`);
     
 //activity3
    //print reverse no in string
     let str2="45678"
     let str3=""
     for(let i=str2.length-1;i>=0;i--){
         str3 +=str2[i]
     }
     console.log(str3);  
     
    //find vowel in string
    let str4 = "Gouri";
    let vowels = "aeiou";
    console.log(`my string:${str4}`);
    
    for(let ch of str4.toLowerCase()){
        if(vowels.includes(ch)){
            console.log(`vowel:${ch}`);
        }
    }

 //activity4
    //check palindrome number
    let num="354"
    let reversed=num.split('').reverse().join('')  
             //split('')=converts string to array
             //.reverse()=method of array not of string
             //join('')=converts array to agin into string
    if(num===reversed)
        console.log(`the stringNo:${num} is Palindrome`);
    else
        console.log(`the stringNo:${num} is not Palindrome`);

    //or
    let str5 ="8998" ;
    let left = 0, right = str.length - 1;
    let isPalindrome=true
    while (left < right) {
        if (str[left] !== str[right])
            isPalindrome=false     
        left++;
        right--;
    }
    if(isPalindrome)
      console.log(`the stringNo:${str5} is Palindrome`);
    else
      console.log(`the stringNo:${str5} is not Palindrome`); 
     
 //activity5
    //fibbonaaci number
    let a=0,b=1
      for( i=0 ;i<10;i++)
      {
        console.log(a);
        [a,b]=[b,a+b]
      }

 
 //activity6
    //find largest ele in array
     let arr2=[7,8,5,3,2,9,1]
     let large=arr2[0]
     for(let i=0;i<arr2.length;i++)
     {
         if(large<arr2[i])
            large=arr2[i]
     }
     console.log(`the largest element in arr:${arr2} is ${large}`);
     
 //activity7
    //remove duplicate ele in array
        let arr3 = [2,5,7,4,3,2,9];
        let unique = [];
        console.log(`before removal of duplicates arr: ${arr3}`);
        for (let i = 0; i < arr3.length; i++) {
            if (!unique.includes(arr3[i])) {
                unique.push(arr3[i]);
            }
        }
        console.log(`after removal of duplicates arr: ${unique}`);

       
       
 //activity8
    //find missing number in array
         let arr4=[1,3,4]
         let total=0
         for (let i = 1; i <=arr4.length+1; i++){
            total=total+i
         }
         let sum=0
          for (let i = 0; i <arr4.length; i++){
            sum=sum+arr4[i]
         }
         console.log(`missing element in arr:${arr4} is ${total-sum}`);
         
 //activity9
   //function to find even or odd
    function isEvenOdd(n){
       if( n%2==0)
        return "even"
       else
         return "odd"
    }
    let n=0
    console.log(`${n} is ${isEvenOdd(n)}`);
    
    
    //function to find sum of array ele
     function sumOfArray(arr){
        let sum=0
        for(e of arr){
           sum=sum+e
        }
        return sum;
     }
     let arr5=[2,4,2]
     console.log(`sum of arr:${arr5} is ${sumOfArray(arr5)}`);
     
