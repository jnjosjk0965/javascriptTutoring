const $fruits = Array.from(document.getElementsByClassName("red"));
console.log($fruits);
for(let i = 0; i < $fruits.length; i++){
    $fruits[i].className = "blue";
}
// i == 0
// apple -> blue
// fruit [banana, orange]

// i == 1
// orange -> blue
const $apple = $fruits[0];
$apple.classList.add("none")