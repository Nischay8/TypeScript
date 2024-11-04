// let a:string="23";
// let check:boolean;
// let nambo:number=343;
let surname:string| number;  //Union Type
surname="asfas";
surname=123;
// const func=(m:number,n:number)=>{
// console.log(m,n);
// }
type UserName=string| number;
type UserName2=(n:string,m:String)=>String;

let a:UserName;



const func:UserName2=(z,x)=>{
    console.log(z,x);
    return z+x;
}

const Nischay:String=func("Nischay","Sinha");

// console.log(Nischay)


const arr:number[]=[23,24,25,26,27,28,29];

const arr2:string[]=["n","s"];