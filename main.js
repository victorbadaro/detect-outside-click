const box1 = document.getElementById('box1');

document.addEventListener('click', function (event) {
  let clickedElement = event.target;

  do {
    if (clickedElement === box1) {
      console.log('inside');
      return;
    }

    clickedElement = clickedElement.parentNode;
  } while (clickedElement)

  console.log('outside');
});