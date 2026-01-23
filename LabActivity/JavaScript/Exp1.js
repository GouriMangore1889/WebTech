//Activity 1
 document.write(" activity 1<br>")
        console.log(" activity 1 ")
   //display student details
     console.log("Name: Samiksha Mane");
     console.log("email: manesamiksha@gmail.com");
     console.log("PRN: 075 ");

     document.write("Name: Samiksha Mane<br>")
     document.write("email: manesamiksha@gmail.com<br>")
     document.write("PRN: 075<br>");
     
//activity 2
   //check even odd
   document.write(" activity 2<br>")
        console.log(" activity 2 ")
     let n=7
     if(n%2==0)
      {  document.write(n+" is even <br>")
        console.log(n+" is even ")
      }
     else
        {document.write(n+" is odd <br>")
         console.log(n+" is odd");
         
        }
 
//activity 3
   // check pass or fail
   document.write(" activity 3<br>")
        console.log(" activity 3")
     let mark=34
     let Grade
     if(mark>=90)
        Grade="A+"
     else if(mark>=80 && mark<90)
        Grade="A"
     else if(mark>=70 && mark<80)
        Grade="B+"
     else if(mark>=60 && mark<70)
        Grade="B"
     else if(mark>=50 && mark<60)
        Grade="C"
     else if(mark>=35 && mark<50)
        Grade="D"
     else if(mark<=35)
        Grade="Fail"

   document.write("Grade for "+mark +":"+Grade);
   console.log("Grade for "+mark +":"+Grade)
   

//activity 4
   // display no
   document.write("<br> activity 4")
        console.log(" activity 4")
    document.write("<br>1 to 10")
    console.log("1 to 10")
    
    
   for(let i=0;i<10;i++){
      document.write("<br>"+(i+1));
      console.log(i+1);
      
   }
   