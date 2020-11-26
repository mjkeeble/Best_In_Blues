document.addEventListener('DOMContentLoaded', () => {
  console.log('IronGenerator JS imported successfully!');
}, false);


const  myFunction = () =>  {

  
console.log('We got here')
console.log(Email)
  Email.send({
    Host : "smtp.gmail.com",
    Username : "me@williamcampbell.ie",
    Password : "doctoranglorisktom",
    To : 'me@williamcampbell.info',
    From : "me@williamcampbell.ie",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => console.log(message) //alert(message)
  ,
);
}

