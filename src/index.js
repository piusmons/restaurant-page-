
import renderMenu from "./modules/menu";
import mainTxtContent from "./modules/main";
import renderContact from "./modules/contact";

function createHeaderDiv() {
  const headerDiv = document.createElement("div");
  headerDiv.classList.add('header');
  document.body.appendChild(headerDiv)

};


function createBtns() {

  const mainBtn = document.createElement('button');
  var txt = document.createTextNode("home");
  mainBtn.classList.add('tablink');
  mainBtn.setAttribute('id','main');
  mainBtn.appendChild(txt);
  var q = document.getElementsByClassName("header");
  q[0].appendChild(mainBtn);
  mainBtn.addEventListener("click", () => btnControlMain());
  mainBtn.addEventListener("click", () => mainTxtContent());




  const menuBtn = document.createElement('button');
  var menuTxt = document.createTextNode("menu");
  menuBtn.setAttribute('id','menu');
  menuBtn.classList.add('tablink')
  menuBtn.appendChild(menuTxt);
  q[0].appendChild(menuBtn);
  menuBtn.addEventListener("click", renderMenu);
  menuBtn.addEventListener("click", () => renderMenu());
  menuBtn.addEventListener("click", () => btnControlMenu())


  const contactBtn = document.createElement('button');
  var contactTxt = document.createTextNode("contact");
  contactBtn.setAttribute('id','contact');
  contactBtn.classList.add('tablink')
  contactBtn.appendChild(contactTxt);
  q[0].appendChild(contactBtn);
  contactBtn.addEventListener("click", () => renderContact());
  contactBtn.addEventListener("click", () => btnControlContact());

  function btnControlMain() {
      var btns = document.getElementsByClassName('tablink');
      btns[0].disabled = true;
      btns[1].disabled = false;
      btns[2].disabled = false;

  }

  function btnControlMenu() {
    var btns = document.getElementsByClassName('tablink');
    btns[0].disabled = false;
    btns[1].disabled = true;
    btns[2].disabled = false;

  }

  function btnControlContact() {
    var btns = document.getElementsByClassName('tablink');
    btns[0].disabled = false;
    btns[1].disabled = false;
    btns[2].disabled = true;
  }




};


function makeMain() {
  const mainSection = document.createElement('section');
  mainSection.classList.add('main');
  document.body.appendChild(mainSection);

}

function makeContent(){

  const mainContent = document.createElement('div');
  mainContent.classList.add('content');
  mainContent.setAttribute('id','contentId');
  var a = document.getElementsByClassName('main')
  a[0].appendChild(mainContent);


}





createHeaderDiv();
createBtns();
makeMain();
makeContent();
document.getElementById('main').click();
