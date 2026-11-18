const a = 1
const b = 1
a === b // true

const oldTask = {
    id: 1,
    title: "Сделать домашку",
    done: false,
}

const changes = {
    done: true,
}

const newTask = {...oldTask, ...changes}
// {
//     id: 1,
//     title: "Сделать домашку",
//     done: true,
// }

// "asdasdasd"
// 2
// true
// undefined
// null

// []
// {}
