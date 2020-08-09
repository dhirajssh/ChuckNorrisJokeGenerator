//API stands for application programming interface, it is contract provided by one piece of software to another, it involves a structured request and structured reply, over here we are working with an API that takes a request and responds with a joke
document.querySelector('.get-jokes').addEventListener('click',getJokes);

function getJokes(e){
  const number = document.getElementById('number').value;

  if(isNaN(number) || number===''){
    alert('Please enter a number');
  }

  const xhr = new XMLHttpRequest();

  xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`,true);

  xhr.onload = function(){
    if(xhr.status === 200){
      const jokes = JSON.parse(this.responseText);
      
      let output='';
      jokes.value.forEach(function(joke){
        output += `<li>${joke.joke}</li>`
      });

      document.querySelector('.jokes').innerHTML = output;
       

    }
  }

  xhr.send();

  e.preventDefault()
}