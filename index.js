const dropDown = document.querySelector('.dropdown-menu');
const nav = document.querySelector('.disktop-nav');
const closeBtn = document.querySelector('.close-btn');
const speakersSection = document.querySelector('.speakers');

dropDown.addEventListener('click', () => {
  nav.style.display = 'unset';
});

closeBtn.addEventListener('click', () => {
  nav.style.display = 'none';
});

const speakers = [
  {
    imgSrc: './imges/yahya-img.jpg',
    name: 'yahya elganayni',
    info: 'create the sites layout and integrate graphics, applications ',
  },
  {
    imgSrc: './imges/bill-gates-img.jpg',
    name: 'Bill Gates',
    info: 'William Henry Gates III is an American business magnate, software developer, investor, author, and philanthropist. He is a co-founder of Microsoft Corporation, along with his late childhood friend Paul Allen',
  },
  {
    imgSrc: './imges/elon-musk-img.jfif',
    name: 'Elon Musk',
    info: 'Elon Reeve Musk FRS is an entrepreneur and business magnate. He is the founder, CEO, and Chief Engineer at SpaceX; early stage investor, CEO, and Product Architect of Tesla, Inc.; founder of The Boring Company; and co-founder of Neuralink and OpenAI. A centibillionaire, Musk is one of the richest people in the world',
  },
  {
    imgSrc: './imges/jordan-peterson-img.jpg',
    name: 'Jordan Peterson',
    info: 'Jordan Bernt Peterson is a Canadian professor of psychology, clinical psychologist, YouTube personality, and author. He began to receive widespread attention in the late 2010s for his views on cultural and political issues, often described as conservative. ',
  },
  {
    imgSrc: './imges/jeff-bezos-img.jfif',
    name: 'Jeff Bezos',
    info: 'Jeffrey Preston Bezos is an American business magnate, media proprietor, and investor. Bezos is the founder and CEO of the multi-national technology company Amazon',
  },
  {
    imgSrc: './imges/denzel-washington-img.jpg',
    name: 'denzel washington',
    info: 'Denzel Hayes Washington Jr. is an American actor, director, and producer. Known for his performances on the screen and stage, he has been described as an actor who reconfigured "the concept of classic movie stardom", associating with characters defined by their grace, dignity, humanity, and inner strength.',
  },
];

const speakersElment = (imgSrc, name, info) => {
  const img = document.createElement('img');
  img.setAttribute('src', imgSrc);
  const h1 = document.createElement('h1');
  h1.innerHTML = name;
  const p = document.createElement('p');
  p.innerHTML = info;
  const div = document.createElement('div');
  const div2 = document.createElement('div');

  div.appendChild(img);
  div2.appendChild(h1);
  div2.appendChild(p);
  div.appendChild(div2);

  speakersSection.appendChild(div);
};

speakers.forEach((e, i) => {
  speakersElment(speakers[i].imgSrc, speakers[i].name, speakers[i].info);
});
