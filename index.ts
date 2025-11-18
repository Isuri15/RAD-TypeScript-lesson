// Basic Types

// String
let username: string = "Isuri"

// Number
let age: number = 25

// Boolean
let isAdmin: boolean = true

let anyhting: any = ""
anyhting = 8765

// Any
let phone: any = "1234567890"
phone = 1234567890

//typle
let user:[String,number] = ["hi...!",678]

//array
let numbers: number[] = [1,3,5,7,2]
let names: string[] = ["a", "b","c"]

//enum
enum Color{
    RED,
    GREEN,
    BLUE
}
let book_color: Color = Color.RED

interface User{
    name:string
    age:number
    email?: string
}

let userdetails: User = {
    name:"isuri",
    age:24
}

let userdetails_1: User = {
    name:"isuri",
    age:24,
    email:"isurigamage13@gmail.com"
}

type Student = { 
    name:string
    age:number
    email?: string
}

//------------------

//union
let value: number | string = 100
value = "100"
// value = true //no

//Functions
 function add(x:number, y:number): number{
    return x + y
 }

 const test = (a: string, b?: number):boolean =>{
    return true
 }

 test("")
 test("",56)
 