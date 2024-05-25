const scriptURL = 'https://script.google.com/macros/s/AKfycbxVBCJ8UFWMgKG93DvrvC7vJhTEqo7r_gcO7Ycb4QY7fJ8st2DvfU9TidkOGydOgp3zjg/exec'
const form = document.forms['orders']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})