const app1 = require('./apps/booksApp');
const app2 = require('./apps/ordersApp');
const app3 = require('./apps/usersApp');

app1.listen(3001, () => {
    console.log('booksApp works on port 3001')
})

// app2.listen(3002, () => {
//     console.log('booksApp works on port 3002')
// })

// app3.listen(3003, () => {
//     console.log('booksApp works on port 3003')
// })