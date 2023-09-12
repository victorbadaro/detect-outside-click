const box1 = document.getElementById('box1');
const message = document.querySelector('p');

document.addEventListener('click', function (event) {
  let clickedElement = event.target;

  do {
    if (clickedElement === box1) {
      message.innerText = 'inside';
      return;
    }

    clickedElement = clickedElement.parentNode;
  } while (clickedElement)

  message.innerText = 'outside';
});