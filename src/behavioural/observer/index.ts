interface Observable {
  subscribe(...observer: Observer[]): void;
  unsubscribe(observer: Observer): void;
  notify(): void;
}

interface Observer {
  update(...args: unknown[]): void;
}

class InputObservable implements Observable {
  private observers: Observer[] = [];

  constructor(public element: HTMLInputElement) {}

  subscribe(...observer: Observer[]): void {
    observer.forEach((observer) => {
      if (!this.observers.includes(observer)) {
        this.observers.push(observer);
      }
    });
  }
  unsubscribe(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer);

    if (observerIndex !== -1) {
      this.observers.splice(observerIndex, 1);
    }
  }
  notify(): void {
    this.observers.forEach((observer) => {
      observer.update(this);
    });
  }
}

class ParagraphObserver implements Observer {
  constructor(public element: HTMLParagraphElement) {}

  update(observable: Observable): void {
    if (observable instanceof InputObservable) {
      this.element.innerText = observable.element.value;
    }
  }
}

function makeInput(): HTMLInputElement {
  const input = document.createElement('input');
  document.body.appendChild(input);
  return input;
}

function makeParagraph(): HTMLParagraphElement {
  const p = document.createElement('p');
  p.innerText = 'texto inicial (Hardcoded)';
  document.body.appendChild(p);
  return p;
}

const input = new InputObservable(makeInput());

const p1 = new ParagraphObserver(makeParagraph());
const p2 = new ParagraphObserver(makeParagraph());
const p3 = new ParagraphObserver(makeParagraph());

input.subscribe(p1, p2, p3);

input.element.addEventListener('keyup', function () {
  input.notify();
});

// input.unsubscribe(p2);
