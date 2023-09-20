const counterEl = document.querySelector('.counter');
const increaseButtonEl = document.querySelector('.counter__button--increase');
const decreaseButtonEl = document.querySelector('.counter__button--decrease');
const resetButtonEl = document.querySelector('.counter__reset-button');
const counterValueEl = document.querySelector('.counter__value');
const counterTitleEl = document.querySelector('.counter__title');

// Reset

resetButtonEl.addEventListener('click', () => {
  counterValueEl.textContent = 0;

  // reset background color
  counterEl.classList.remove('counter--limit');

  // reset counter title
  counterTitleEl.textContent = 'Fancy Counter';

  // enable increase and decrease buttons
  increaseButtonEl.disabled = false;
  decreaseButtonEl.disabled = false;

  // unfocus (blur) reset button
  resetButtonEl.blur();
});

// Decrease

decreaseButtonEl.addEventListener('click', () => {
  // get current value of counter
  const currentValue = counterValueEl.textContent;

  // convert currentValue to number type
  const currentValueAsNumber = +currentValue;

  // decrement by 1
  let newValue = currentValueAsNumber - 1;

  // check if new value is less than 0
  if (newValue < 0) {
    newValue = 0;
  }

  // update counter value with new value
  counterValueEl.textContent = newValue;

  // unfocus (blur) reset button
  decreaseButtonEl.blur();
});

// Increment

const incrementCounter = () => {
  // get current value of counter
  const currentValue = counterValueEl.textContent;

  // convert currentValue to number type
  const currentValueAsNumber = +currentValue;

  // increment by 1
  let newValue = currentValueAsNumber + 1;

  // check if new value is greater than 5
  if (newValue > 5) {
    // if it is, force it to be 5 instead
    newValue = 5;

    // give visual indicator that limit has been reached
    counterEl.classList.add('counter--limit');

    // update conter title to say limit has been reached
    // counterTitleEl.textContent = 'Limit! Buy Pro for > 5';
    counterTitleEl.innerHTML = 'Limit! Buy <b>Pro</b> for > 5';

    // disable both increase and decrease buttons
    increaseButtonEl.disabled = true;
    decreaseButtonEl.disabled = true;
  }

  // set counter with new value
  counterValueEl.textContent = newValue;

  // unfocus (blur) reset button
  increaseButtonEl.blur();
};

increaseButtonEl.addEventListener('click', incrementCounter);

document.addEventListener('keydown', incrementCounter);

// This is Wyndy addition - comment out to conform to Wesley's code.
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    incrementCounter();
  }
});

document.addEventListener('ArrowLeft', (e) => {
  if (e.key === 'ArrowLeft') {
    counterValueEl.textContent = newValue;
  }
});
