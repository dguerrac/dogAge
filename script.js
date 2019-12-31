const myDogAge = () => {
  let t = document.getElementById('age');
  let myAge = parseInt(t.value);
  console.log(typeof myAge);

  let earlyYears = 2;
  // earlyYears
  earlyYears *= 10.5;
  let laterYears = myAge - 2;
  console.log(laterYears);
  // substract on myAge
  laterYears *= 6;
  // multiplying laterYears
  //console.log(earlyYears);
  
  const myAgeInDogYears = earlyYears + laterYears;
  //this is my Age in dog years
  console.log(myAgeInDogYears);
  let myName = "Diego";
  //myName = "Diego".toLowerCase();
  //console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} in the dog years.`);
  resultado.innerHTML = `Si fueras un perro, tendrías ${myAgeInDogYears} años de edad.`
  if (myAgeInDogYears > 200) {
    alert('Estas un poco viejo')
  }
}

//let myAge;
// This is my age

let resultado = document.getElementById("resultado");
let b = document.getElementById("ok");
b.addEventListener("click", myDogAge);
