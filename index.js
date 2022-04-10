window.onload = () => {
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
      description: '',
      info: 'create the sites layout and integrate graphics, applications ',
    },
    {
      imgSrc: './imges/bill-gates-img.jpg',
      name: 'Bill Gates',
      description: 'William Henry Gates III is an',
      info: 'William Henry Gates III is an American business magnate, software',
    },
    {
      imgSrc: './imges/elon_musk-img',
      name: 'Elon Musk',
      description: 'William Henry Gates III is an American',
      info: 'Elon Reeve Musk FRS is an entrepreneur and business magnate. He ',
    },
    {
      imgSrc: './imges/jordan-peterson-img.jpg',
      name: 'Jordan Peterson',
      description: 'William Henry Gates III is an American',

      info: 'Jordan Bernt Peterson is a Canadian professor of psychology, clinical ',
    },
    {
      imgSrc: './imges/jeff-bezos-img.jfif',
      name: 'Jeff Bezos',
      description: 'William Henry Gates III is an American',
      info: 'Jeffrey Preston Bezos is an American business magnate, media proprietor',
    },
    {
      imgSrc: './imges/denzel-washington-img.jpg',
      name: 'denzel washington',
      description: 'William Henry Gates III is an American',
      info: 'Denzel Hayes Washington Jr. is an American actor, director, and producer.',
    },
  ];

  const speakersElment = (imgSrc, name, descript, info) => {
    const img = document.createElement('img');
    img.setAttribute('src', imgSrc);
    const h1 = document.createElement('h1');
    h1.innerHTML = name;
    const h2 = document.createElement('h2');
    h2.innerHTML = descript;
    const p = document.createElement('p');
    p.innerHTML = info;
    const div = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');
    div3.classList.add('speaker-name');
    div.appendChild(img);
    div3.appendChild(h1);
    div3.appendChild(h2);
    div3.appendChild(p);
    div2.appendChild(div3);
    div.appendChild(div2);
    speakersSection.appendChild(div);
  };

  speakers.forEach((e, i) => {
    speakersElment(
      speakers[i].imgSrc,
      speakers[i].name,
      speakers[i].description,
      speakers[i].info,
    );
  });
};
