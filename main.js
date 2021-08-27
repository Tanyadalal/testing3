function toggle() {
    const sidebar = document.querySelector(".sidebar");
    const main = document.querySelector(".main");
  
    sidebar.classList.toggle("active");
    main.classList.toggle("active");
  }
  
  function onLoad() {
    const hamburger = document.querySelector(".hamburger");
  
    hamburger.innerHTML = hamburgerSVG();
    

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    };
    const observer = new IntersectionObserver(handleIntersect, options);
  
    const space = document.querySelector(".space");
    const space1 = document.querySelector(".space1");
    const space2 = document.querySelector(".space2");
    const space3 = document.querySelector(".space3");
    const space4 = document.querySelector(".space4");
    const space5 = document.querySelector(".space5");
    const space6 = document.querySelector(".space6");
    observer.observe(space);
    observer.observe(space1);
    observer.observe(space2);
    observer.observe(space3);
    observer.observe(space4);
    observer.observe(space5);
    observer.observe(space6);
  }

  function handleIntersect(entries) {
    entries.forEach((entry) => {
      console.log(entry.intersectionRatio);
       if (entry.intersectionRatio >= 0.1) {
        entry.target.classList.add("active");
       }
    });
  }

  
  window.addEventListener("load", onLoad);
  function hamburgerSVG() {
    return `<svg height='50px' width='50px'  fill="#231f20" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" version="1.1" x="0px" y="0px"><desc>Created with Sketch.</desc><g stroke="none" stroke-width="1" fill="#231f20" fill-rule="evenodd"><g fill="#231f20"><path d="M5,6 L19,6 C19.5522847,6 20,6.44771525 20,7 C20,7.55228475 19.5522847,8 19,8 L5,8 C4.44771525,8 4,7.55228475 4,7 C4,6.44771525 4.44771525,6 5,6 Z M5,11 L19,11 C19.5522847,11 20,11.4477153 20,12 C20,12.5522847 19.5522847,13 19,13 L5,13 C4.44771525,13 4,12.5522847 4,12 C4,11.4477153 4.44771525,11 5,11 Z M5,16 L19,16 C19.5522847,16 20,16.4477153 20,17 C20,17.5522847 19.5522847,18 19,18 L5,18 C4.44771525,18 4,17.5522847 4,17 C4,16.4477153 4.44771525,16 5,16 Z"></path></g></g></svg>`;
  }
  
  function switchTheme() {
  
    document.body.classList.toggle("dark-mode");
   
  }

// ——————————————————————————————————————————————————
// TextScramble
// ——————————————————————————————————————————————————

class TextScramble {
  constructor(el) {
    this.el = el
    this.chars = '!<>-_\\/[]{}—=+*^?#________'
    this.update = this.update.bind(this)
  }
  setText(newText) {
    const oldText = this.el.innerText
    const length = Math.max(oldText.length, newText.length)
    const promise = new Promise((resolve) => this.resolve = resolve)
    this.queue = []
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || ''
      const to = newText[i] || ''
      const start = Math.floor(Math.random() * 40)
      const end = start + Math.floor(Math.random() * 40)
      this.queue.push({ from, to, start, end })
    }
    cancelAnimationFrame(this.frameRequest)
    this.frame = 0
    this.update()
    return promise
  }
  update() {
    let output = ''
    let complete = 0
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i]
      if (this.frame >= end) {
        complete++
        output += to
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar()
          this.queue[i].char = char
        }
        output += `<span class="dud">${char}</span>`
      } else {
        output += from
      }
    }
    this.el.innerHTML = output
    if (complete === this.queue.length) {
      this.resolve()
    } else {
      this.frameRequest = requestAnimationFrame(this.update)
      this.frame++
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)]
  }
}

// ——————————————————————————————————————————————————
// Example
// ——————————————————————————————————————————————————

const phrases = [
  'Ohh! Well',
  'You must be looking',
  'for the bio, I presume',
  'Well, The golden words ',
  'that describes me well are',
  'A little bit of nerdy',
  'And a whole lot of bibliophile'
]

const el = document.querySelector('.text')
const fx = new TextScramble(el)

let counter = 0
const next = () => {
  fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 800)
  })
  counter = (counter + 1) % phrases.length
}

next()
function expandcard(e)
{
  var element = document.getElementsByClassName('codetext1')[0];
  var element1 = document.getElementsByClassName('inner_text1')[0];
  if(element)
  {
  element.classList.toggle('hide');
}
  e.classList.toggle('red');

  if(element1)
  {
  element1.classList.toggle('show');
}
}

function expandcard2(e2)
{
  var element = document.getElementsByClassName('codetext2')[0];
  var element1 = document.getElementsByClassName('inner_text2')[0];
  if(element)
  {
  element.classList.toggle('hide');
}
  e2.classList.toggle('red2');

  if(element1)
  {
  element1.classList.toggle('show1');
}
}



