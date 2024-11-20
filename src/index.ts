// // let a:string="23";
// // let check:boolean;
// // let nambo:number=343;
// let surname:string| number;  //Union Type
// surname="asfas";
// surname=123;
// // const func=(m:number,n:number)=>{
// // console.log(m,n);
// // }
// type UserName=string| number;
// type UserName2=(n:string,m:String)=>String;

// let a:UserName;



// const func:UserName2=(z,x)=>{
//     console.log(z,x);
//     return z+x;
// }

// const Nischay:String=func("Nischay","Sinha");

// // console.log(Nischay)


// const arr:number[]=[23,24,25,26,27,28,29];

// const arr2:string[]=["n","s"];

// // objects
// type obj1={
//     height:number;
//     weight:number;
//     gender?:boolean;
// };



// const obj:obj1={
//     height:3434,
//     weight:34,
//     gender:true
// };


// const obj3:obj1={
//     height:3434,
//     weight:34,
    
// };


// interface Obj4{
//     height:number,
//     weight:number
// }


// interface NewObj extends Obj4{
//     scolar:boolean
// }


// // const gigi:NewObj={

// // }

// -------------------Function----------------
// type FuncType=(n:number,m:number,l?:number)=>number;

// const func:FuncType=(a,b,l)=>{
//     if(typeof l ==='undefined')return a*b;
//     return a*b*l;
// }

// console.log(func(25,23));

// const func:FuncType=(a,b,l)=>{
//     if(typeof l ==='undefined')return a*b;
//     return a*b*l;
// }

// type FuncType=(n:number,m:number,l?:number)=>number;

// // const func:FuncType=(a,b,l)=>{
// //     if(typeof l ==='undefined')return a*b;
// //     return a*b*l;
// // }

// type FuncType2=(...m:number[])=>number[];


// const func:FuncType2=(...m)=>{
//     return m;
// }


// function lol (n:number):number{
//     return 45;

// }
// console.log(lol(5));


// const getData=(product:{name:String,stock:number,price:number});


// class Player{
//     height;
//     weight;
//     constructor(height:number,weight:number){
//         this.height=height;
//         this.weight=weight;
//         // console.log(this.height,this.weight);
//     }    
// }

// const abhi=new Player(25,34);
// console.log(abhi);


// Type Assertion



interface Person{
    name:string,
    email:string
}

const myObj:Person={
    name:"Abhi",
    email:"nischay@gmail.com"
}

console.log(myObj.name);