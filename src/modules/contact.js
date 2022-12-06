

function renderContact() {

  var e = document.getElementById('contentId').innerHTML = '';
  document.getElementById('contentId').classList.remove('content');
  document.getElementById('contentId').classList.remove('menuContent');
  document.getElementById('contentId').classList.add('contactContent');

  var b = document.getElementsByClassName('contactContent');
  var contactHeader = document.createElement('h3');
  contactHeader.textContent = 'ego sum esurientem pecuniam.voca me 666-6666-666';
  contactHeader.classList.add('contactHeaderTxt')
  b[0].appendChild(contactHeader);


}










export default renderContact;
