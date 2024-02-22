
 fetch('./user.json')
 .then ((response) => {  
    return response.json(); 
})
.then ((data) => {
    console.log(data);
})
.catch((err) => {
    console.log(err);
})
.finally(() => {
    console.log('Finally question closed')
})


