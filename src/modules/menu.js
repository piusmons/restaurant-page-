

function renderMenu(){
  var e = document.getElementById('contentId').innerHTML = '';
  document.getElementById('contentId').classList.remove('content');
  document.getElementById('contentId').classList.remove('contactContent')
  document.getElementById('contentId').classList.add('menuContent');
  var b = document.getElementsByClassName('menuContent')

  //1st card
  var cardDiv1 = document.createElement('div');
  cardDiv1.classList.add('menuCard');
  b[0].appendChild(cardDiv1);
  var c = document.getElementsByClassName('menuCard')
  const imgContainer1 = document.createElement('div');
  imgContainer1.classList.add('imgContainer');
  c[0].appendChild(imgContainer1);
  const img1 = document.createElement('img');
  const imgContainerDom = document.getElementsByClassName('imgcontainer');

  img1.src = 'droplet.svg';
  img1.classList.add('menuImg');
  imgContainer1.appendChild(img1);

  var title1 = document.createElement('h1');
  title1.textContent = '$5 - Bovine Blood';
  c[0].appendChild(title1);
  var txt1 = document.createElement('p');
  txt1.textContent = 'Blood from bovine quadrupeds. Best for demons on a budget';
  txt1.classList.add('menuTxt');
  c[0].appendChild(txt1);

  //2nd card
  var cardDiv2 = document.createElement('div');
  cardDiv2.classList.add('menuCard');
  b[0].appendChild(cardDiv2);
  const imgContainer2 = document.createElement('div');
  imgContainer2.classList.add('imgContainer');
  c[1].appendChild(imgContainer2);
  const img2 = document.createElement('img');
  const img3 = document.createElement('img');
  img2.src = 'droplet.svg';
  img3.src = 'droplet.svg';
  img2.classList.add('menuImg');
  img3.classList.add('menuImg');
  imgContainer2.appendChild(img2);
  imgContainer2.appendChild(img3);

  const title2 = document.createElement('h1');
  title2.textContent = '$15 - Youthful blood';
  c[1].appendChild(title2);
  var txt2 = document.createElement('p');
  txt2.textContent = 'blood from young humans; rich in flavor and quality that exude the dawn of life'
  txt2.classList.add('menuTxt');
  c[1].appendChild(txt2);

  //3rd card
  var cardDiv3 = document.createElement('div');
  cardDiv3.classList.add('menuCard');
  b[0].appendChild(cardDiv3);
  const imgContainer3 = document.createElement('div');

  imgContainer3.classList.add('imgContainer');
  c[2].appendChild(imgContainer3);
  const img4 = document.createElement('img');
  const img5 = document.createElement('img');
  const img6 = document.createElement('img');
  img4.src = 'droplet.svg';
  img5.src = 'droplet.svg';
  img6.src = 'droplet.svg';
  img4.classList.add('menuImg');
  img5.classList.add('menuImg');
  img6.classList.add('menuImg');
  imgContainer3.appendChild(img4);
  imgContainer3.appendChild(img5);
  imgContainer3.appendChild(img6);

  const title3 = document.createElement('h1');
  title3.textContent = '$666 - Hero blood';
  c[2].appendChild(title3);
  var txt3 = document.createElement('p');
  txt3.textContent = 'blood from recognized human heroes. Taste vigour and the best humanity can offer the demonic forces'
  txt3.classList.add('menuTxt');
  c[2].appendChild(txt3);




}










export default renderMenu;
