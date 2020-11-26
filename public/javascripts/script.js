document.addEventListener('DOMContentLoaded', () => {
  console.log('IronGenerator JS imported successfully!');
}, false);


const  myFunction = () =>  {

  console.log('We got here')
  let thisMessage = form.get("message");
console.log(Email)
  Email.send({
    Host : "webmail.email.hosting",
    Username : "william@esatclear.ie",
    Password : "92za9!eW",
    To : 'me@williamcampbell.info',
    From : "me@williamcampbell.ie",
    Subject : "This is the subject",
    Body:  thisMessage,
    // Body : document.querySelector("message") 
}).then(
  message => console.log(message) //alert(message)
  ,
);
}


