const container = document.querySelector('#container');
let gridSize = 16;

for (let i = 0; i < gridSize * gridSize; i++) {
  const grid = document.createElement('div');
  grid.setAttribute('id', 'grid');
  grid.style.width = `${32 / gridSize}rem`;
  grid.style.height = `${32 / gridSize}rem`;
  container.appendChild(grid);
}

let button = document.querySelector('#new-grid');

button.addEventListener('click', ()=>{
  let gridSize = parseInt(prompt(
    "Please enter the number of squares per side for the new grid: "
  ));
  
  container.innerHTML = ''

  for (let i = 0; i < gridSize * gridSize; i++) {
    const grid = document.createElement('div');
    grid.setAttribute('id', 'grid');
    grid.style.width = `${32 / gridSize}rem`;
    grid.style.height = `${32 / gridSize}rem`;
    container.appendChild(grid);
  }
});

const trail = document.getElementById('container');

trail.addEventListener(
  'mouseover',
  (event) => {
    event.target.style.backgroundColor = 'orange';
    
    setTimeout(() => {
      event.target.style.backgroundColor = '';
    }, 200);

  },
  false,
);