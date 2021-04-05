//1
// let str_input = "program";
// let sum = "";
// for(let i=str_input.length-1;i>=0;i--){
//      sum = sum + str_input[i];
// }
// console.log(sum);

//2
// let str = "This is Test";
// console.log(str);
// let words = str.split(" ");
// console.log(words);
// let result = "";
// for(let i=0;i <= words.length-1;i++){
//   let word = words[i];
//   let letters = word.split(""); 
//   letters[0] = letters[0].toUpperCase();
//   let newWord = letters.join();
//   console.log(newWord);
//   result = result + newWord + " ";
// }
// console.log(result);
//3
// let Arr=[1,2,3,3,4,5,4,4,4,5,5];
// for(let i=0;i<=Arr.length-1;i++){
//     let j=i+1;
//     while(j<Arr.length){
//         if(Arr[i]==Arr[j]){
//             for(k=j;k<Arr.length-1;k++)
//             Arr[k] =Arr[k+1];
//             Arr.length = Arr.length -1;
//         }
//         else 
//         j=j+1;
//     }
//     console.log(Arr[i]);
// }
//4
let nhanvien =[{
    name: "thinh",
    age: 26,
    price: 1000,
    cv: "ss"
},{
    name: "thinh",
    age: 26,
    price: 1000,
    cv: "ss"
},{
    name: "thinh",
    age: 26,
    price: 1000,
    cv: "ss"
}]

let user = prompt("Enter C/R/U/D");
while(true){
    if(user == "C"){
      let a = prompt("Enter name");
      let b = prompt("Enter age");
      let c = prompt("Enter price");
      let d = prompt("Enter cv");
      nhanvien[a] = prompt("Enter value name");
      nhanvien[b] = prompt("Enter value age");
      nhanvien[c] = prompt("Enter value price");
      nhanvien[d] = prompt("Enter value cv");
      console.log(nhanvien);
    }else if(user == "R"){
        for(key in nhanvien){
            console.log(key,nhanvien[key]);
        }
    }else if(user == "U"){
        let pos = prompt("Enter position");
        let value = prompt("Enter value");
       for(let i=0;i<nhanvien.length -1;i++){
           if(i==pos){
              let upd= nhanvien[pos]=value;
           }
           console.log(upd);
       }
    }
    else if(user == "D"){
        let u = prompt("Enter position");
           let del =nhanvien.splice(u,1);
           console.log(del);
    }
}
//5
// let ngay,thang,nam;
//  ngay = prompt("Enter day");
//  thang = prompt("Enter month");
//  nam = prompt("Enter year");
//  switch(thang){
//      case 1:case 3:case 5:case 7:case 8:case 10: case 12:
//          if(ngay > 0 && ngay<=31){
//          console.log(ngay+"/"+thang+"/"+nam +"hop le" );
//          break;
//          }else{
//             console.log(ngay+"/"+thang+"/"+nam +" khong hop le" );
//          }
//     case 4: case 6: case 9: case 11:
//         if(ngay > 0 && ngay<=30){
//             console.log(ngay+"/"+thang+"/"+nam +" hop le" );
//             break;
//             }else{
//                console.log(ngay+"/"+thang+"/"+nam +" khong hop le" );
//                break;
//             }
//      case 2:  
//      if(ngay > 0 && ngay<=28){
//         console.log(ngay+"/"+thang+"/"+nam +" hop le" );
//         break;
//         }else{
//            console.log(ngay+"/"+thang+"/"+nam +" khong hop le" );
//            break;
//         }  
//         default: console.log(ngay+"/"+thang+"/"+nam +" khong hop le" );
//         break;   
//  }