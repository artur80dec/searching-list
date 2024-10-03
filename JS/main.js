const searchInput = document.querySelector('.search');
const li = document.querySelectorAll('li');

const searchEngine = (e) => {
  const text = e.target.value.toLowerCase()
  // console.log(text);
  li.forEach(el => {
    const task = el.textContent.toLowerCase();

    if (task.indexOf(text) !== -1) {
      el.style.display = 'block';
    }
    else {
      el.style.display = 'none';
    }
  })

  
}

searchInput.addEventListener('keyup', searchEngine);
