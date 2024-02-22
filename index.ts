//interface: ähnlich wie eine classe in Java
interface Todo {
    description: string;
    status: string;
    author?: string                                 // ? marks as optional field
}

const todo: Todo = {
    description: "learn TypeScript",
    status: "open",
}

let text = "Hello world"
console.log(text);



const addNumber = (a: number, b: number) => {

    return a + b;
}

console.log(1,2)