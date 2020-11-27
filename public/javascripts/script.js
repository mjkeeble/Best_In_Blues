document.addEventListener('DOMContentLoaded', () => {
  console.log('IronGenerator JS imported successfully!');
}, false);


const  myFunction = () =>  {

  console.log('*** We got here ***')
  let form = new FormData(document.getElementById("contactForm"));
  let thisMessage = form.get("message");
  let thisEmail = form.get("email");
  let thisName = form.get("name");
console.log(Email)
  Email.send({
    Host : "webmail.email.hosting",
    Username : "william@esatclear.ie",
    Password : "92za9!eW",
    To : 'me@williamcampbell.info',
    From : thisEmail,
    Subject : "This is the subject",
    Body:  thisMessage + " von " + thisName + ", " + thisEmail
    // Body : document.querySelector("message") 
}).then(
  message => console.log(message) //alert(message)
  ,
);
window.location.href = "/thanks";


}


