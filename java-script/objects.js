
// let myarray = [

//     {

//         id: 1,
//         name: "rohit",
//         age: 20,
//         email: "laik5246@gmail.com",
//         city: "jaipur",
//         fname: "aman"
//     },
//     {
//         id: 2,
//         age: 52,
//         email: "laxman5879@gmail.com",
//         city: "udaipur",
//         name: "laxman",
//     },
//     {
//         id: 3,
//         age: 22,
//         email: "ebrahim5879@gmail.com",
//         city: "rajasthan",
//         name: "ebrahim",
//     },
//     {
//         id: 4,
//         age: 32,
//         email: "anil5879@gmail.com",
//         city: "lucknow",
//         name: "anil",
//     },
//     {
//         id: 5,
//         age: 20,
//         email: "lax5879@gmail.com",
//         city: "jaipur",
//         name: "aman",
//     },

//     ]

// console.log(myarray [4]);
// console.log(myarray[0].name);
// for (let i of myarray) {
//     console.log(i.id,i.age,i.name,i.city,i.email);
// }


// let b ={
// id: 5,
//     age: 20,
//         email: "lax5879@gmail.com",
//             city: "jaipur",
//     name: "aman",

//     fname:"rohit",
// }

// for (let i in b) {
//     console.log(b[i]);
// }




// myarray.filter((item,index) => {
// console.log(item,index)
// })
// myarray.forEach((item) => {
//     console.log(item.id,item.age,item.city,item.name,item.email);
// })


// console.log(b.name, b.email, b.age, b.id, b.city);
// console.log(b["id"])
// console.log(b["name"])
// console.log(b.name, b.fname)

// class second*************



// let myarray = [

//     {

//         id: 1,
//         name: "rohit",
//         age: 20,
//         email: "laik5246@gmail.com",
//         city: "jaipur",
//         fname: "aman",
//         marks:{
//             p: 85,
//             m: 75,
//             c:92,

//         }
//     },
//     {
//         id: 2,
//         age: 52,
//         email: "laxman5879@gmail.com",
//         city: "udaipur",
//         name: "laxman",
//         marks:{
//         p: 55,
//         m: 45,
//         c: 32,
//         }
//     },
//     {
//         id: 3,
//         age: 22,
//         email: "ebrahim5879@gmail.com",
//         city: "rajasthan",
//         name: "ebrahim",
//         marks: {
//             p: 55,
//             m: 65,
//             c: 52,
//         }
//     },
//     {
//         id: 4,
//         age: 32,
//         email: "anil5879@gmail.com",
//         city: "lucknow",
//         name: "anil",
//         marks: {
//             p: 75,
//             m: 65,
//             c: 32,
//         }
//     },
//     {
//         id: 5,
//         age: 20,
//         email: "lax5879@gmail.com",
//         city: "jaipur",
//         name: "aman",
//         marks: {
//             p:85,
//             m: 95,
//             c: 82,
//         }
//     },
// ]
// myarray.filter((item) =>{

//     return((item.marks.p + item.marks.c + item.marks.m)/3)>75

//     })
// let data = myarray.filter((item) => {
// return ((item.marks.p + item.marks.c + item.marks.m) / 3) > 75

// })
// console.log(data);


// let younguser = myarray.filter((user) => {

//     return((user.age>25))
// })
// console.log(younguser);


// let users = [aman, ebrahim, laxman, anil, aman];
// let names = myarray.map((user => user.name))
// console.log(names);



//  assignmet *******************
// =============================
//  *****************************


const complexData = [
    {
        id: 1,
        name: "John Doe",
        age: 30,
        address: {
            street: "123 Main St",
            city: "Anytown",
            country: "USA",
        },
        orders: [
            { orderId: "A123", amount: 50.75, status: "completed" },
            { orderId: "B456", amount: 30.25, status: "pending" },
        ],
    },
    {
        id: 2,
        name: "Jane Smith",
        age: 25,
        address: {
            street: "456 Oak St",
            city: "Othercity",
            country: "USA",
        },
        orders: [
            { orderId: "C789", amount: 100.5, status: "completed" },
            { orderId: "D012", amount: 75.2, status: "completed" },
        ],
    },
]

//  answer 1

// let younguser = complexData.filter((user) => {
//     return ((user.age > 25))
// })
// console.log(younguser);


// answer 2

// let username = complexData.map((user) => {
//     return { name: user.name }  ;
// });
// console.log(username);

// let amount = complexData.map((item) => {
//     return item.orders.filter((item) => {
//         return item.amount>50

//     })
// })


// console.log(amount);

//   answer 4
// let map = complexData.map((item) => {
//     return { id: item.id };
// })
// console.log(map);

// answer 5

// let pendinguser = complexData.filter((user) => {
//     return user.orders.some((order) => order.status === 'pending');
// })
// console.log(pendinguser);


// answer no 6


// let total = complexData.map((item) => {
//     return { name: item.user, totalorderAmount:item.amount};
// })
// console.log(total);


// answer no 7

// const filteredOrders = complexData.filter(order => {
// return    order.amount >= 30 && order.amount <= 70;
// })


// console.log(filteredOrders);

// Map the array to get an array of objects containing user names and their completed order IDs.

// let total = complexData.map((item) => {
//     return {user: item.name, user:item.id};
// })
// console.log(total);


// Filter users who live in the 'USA' and have at least one order with an amount greater than 50.

// answer no 9

// let filteruser = complexData.filter(user => user.country === 'USA' && user.orders.some(order => order.amount > 50));
// console.log(filteruser);


// const b = complexData.filter((item) => {
//     return item.age <= 25;
// })

// console.log(b);
// const b = complexData.map((item) => {
//     return item.name
// })

// console.log(b)

// const b = complexData.map((item) => {
//     return item.orders.filter((item) => {
//         return item.amount>50
//     })
// })
// console.log(b);


// const b = complexData.map((item) => {
//     return item.orders.filter((item) => {
//         return item.orderId
//     })
// })
// console.log(b);


// const b = complexData.map((item) => {
//     return item.orders.filter((item) => {

//         return item.status === "pending";
//     })

// })
// console.log(b);


// const b = complexData.map((item) => {
//     return item.orders.filter((item) => {
//         return item.amount >= 30 && item.amount <= 70;
//     })
// })
// console.log(b);



// const b = complexData.map((item) => {
//     return item.orders.filter((item) => {
//         return item.country
//     })

// })
// console.log(b);



// let a = complexData.filter((item) => {
//     return item.address.country=="USA" && item.orders.some((i)=>i.amount>50)
// })
// console.log(a);



// function outer () {
//     let name = "mohit";

//     function inner () {

//         console.log(name);
//     }
//     return inner;
// }
// let answer = outer();
// answer();


let a = [10, 20, 30, 40];
let max = 0;
for (let i = 1; i < a.length; i++){
    if (max <= a[i]) {
        max = a[i];
    }
}
console.log(max);