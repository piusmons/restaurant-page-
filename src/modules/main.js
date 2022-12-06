




function mainTxtContent() {
  var e = document.getElementById('contentId').innerHTML = '';
  var a = document.getElementById('contentId').classList.remove('menuContent');
  var d = document.getElementById('contentId').classList.remove('contactContent');
  document.getElementById('contentId').classList.add('content');
  var c = document.getElementsByClassName('content');
  const titleTxt = document.createElement('h3');
  titleTxt.classList.add('title-main-content');
  titleTxt.textContent = 'Premium Blood For Demons'
  c[0].appendChild(titleTxt);

  var contentTxt1 = document.createElement("p");
  contentTxt1.setAttribute('id', 'p-content');
  contentTxt1.textContent = 'We offer the best blood packs extracted fresh by our hunters'
  c[0].appendChild(contentTxt1);

  var contentTxt2 = document.createElement("p");
  contentTxt2.setAttribute('id', 'p-content');
  contentTxt2.textContent = 'Experience exquisite sanguine taste as our blood packs are curated to come from very specific human genomes that offer the most premium blood.'
  c[0].appendChild(contentTxt2);

}







export default mainTxtContent
