const body=document.body;
const modeButtons=[...document.querySelectorAll('.mode-button')];
const storyButtons=[...document.querySelectorAll('.story-button')];
const heroStory=document.querySelector('.hero-story');
const heroImageLink=heroStory?.querySelector('.hero-image-wrap');
const heroImage=heroStory?.querySelector('.hero-image-wrap img');
const heroCategory=heroStory?.querySelector('.hero-copy .eyebrow');
const heroHeadline=heroStory?.querySelector('#lead-heading');
const heroSubheading=heroStory?.querySelector('.hero-subheading');
const heroMeta=heroStory?.querySelector('.story-meta');
const mainStories={
  rahul:{category:'India',title:"‘Stop lying down in front of Trump, have a spine’: Rahul Gandhi attacks PM Modi over ‘UPI tax’",subheading:"‘Modi ji, rollback the UPI tax. Now,’ said Rahul Gandhi in a post on X.",image:'article-images/rahul-upi.jpg',alt:'Rahul Gandhi speaking about UPI charges',href:'https://www.deccanherald.com/india/stop-lying-down-in-front-of-trump-have-a-spine-rahul-gandhi-attacks-pm-modi-over-upi-tax-4148033',date:'16 Sep 2026'},
  onion:{category:'India',title:'Onion wholesale prices drop 9% in nine days; retail rates expected to ease soon',subheading:'Nidhi Khare said that analysis of mandi prices over the last nine days showed a clear 9 per cent decline, which is expected to have a positive impact on retail rates.',image:'article-images/onion-prices.jpg',alt:'Onions at a wholesale market',href:'https://www.deccanherald.com/india/onion-wholesale-prices-drop-9-in-nine-days-retail-rates-expected-to-ease-soon-4148047',date:'16 Sep 2026'},
  navy:{category:'India',title:"Pakistani ship’s ‘unsafe’ manoeuvre led to collision with Indian Navy unit; diplomat summoned",subheading:'The incident, which took place in international waters, did not cause any major damage, MEA said.',image:'article-images/navy-collision.jpg',alt:'Indian and Pakistani naval ships at sea',href:'https://www.deccanherald.com/india/pakistani-ships-unsafe-manoeuvre-led-to-collision-with-indian-navy-unit-diplomat-summoned-4147886',date:'16 Sep 2026'},
  rtc:{category:'Karnataka',title:'Karnataka govt revamps RTCs, promises greater land ownership certainty',subheading:'According to the government order, the revised RTCs will contain geo-referenced maps and Open Location Codes.',image:'article-images/rtc-reform.jpg',alt:'Land records and a map representing Karnataka RTC reforms',href:'https://www.deccanherald.com/india/karnataka/karnataka-govt-revamps-rtcs-promises-greater-land-ownership-certainty-4147225',date:'15 Sep 2026'},
  pets:{category:'Bengaluru',title:'Bengaluru reworks on pet dogs policy, canines above 3 months may have to be registered under new laws',subheading:'The draft policy, which is yet to be notified, also proposes limits on the number of dogs a household can keep based on the built-up area of its dwelling.',image:'article-images/pet-dogs-policy.jpg',alt:'Pet dog representing Bengaluru’s proposed registration policy',href:'https://www.deccanherald.com/india/karnataka/bengaluru/pet-dogs-may-have-to-be-registered-under-new-bengaluru-policy-4147502',date:'16 Sep 2026'}
};
function setMainStory(key){
  const story=mainStories[key];
  if(!story||!heroStory)return;
  heroImageLink.href=story.href;
  heroImage.src=story.image;
  heroImage.alt=story.alt;
  heroCategory.textContent=story.category;
  heroHeadline.textContent=story.title;
  heroSubheading.textContent=story.subheading;
  heroMeta.textContent=story.date;
  storyButtons.forEach(button=>{
    const active=button.dataset.story===key;
    button.classList.toggle('active',active);
    button.setAttribute('aria-pressed',String(active));
  });
}
storyButtons.forEach(button=>button.addEventListener('click',()=>setMainStory(button.dataset.story)));
const buttons=modeButtons;
buttons.forEach(button=>button.addEventListener('click',()=>{
  body.dataset.mode=button.dataset.mode;
  buttons.forEach(item=>{
    const active=item===button;
    item.classList.toggle('active',active);
    item.setAttribute('aria-pressed',String(active));
  });
}));
const menuPanel=document.getElementById('dhMenuPanel'),menuButton=document.getElementById('menuButton'),searchButton=document.getElementById('searchButton'),closeMenu=document.getElementById('closeMenu'),searchInput=menuPanel?.querySelector('input');
let menuOpener=null;
function closeSiteMenu(){
  if(!menuPanel||menuPanel.hidden)return;
  menuPanel.hidden=true;
  [menuButton,searchButton].forEach(button=>button?.setAttribute('aria-expanded','false'));
  menuOpener?.focus();
  menuOpener=null;
}
function openSiteMenu(opener,focusTarget){
  if(!menuPanel)return;
  menuOpener=opener;
  menuPanel.hidden=false;
  [menuButton,searchButton].forEach(button=>button?.setAttribute('aria-expanded','true'));
  (focusTarget||closeMenu)?.focus();
}
menuButton?.addEventListener('click',()=>menuPanel?.hidden?openSiteMenu(menuButton,closeMenu):closeSiteMenu());
searchButton?.addEventListener('click',()=>openSiteMenu(searchButton,searchInput));
closeMenu?.addEventListener('click',closeSiteMenu);
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&menuPanel&&!menuPanel.hidden)closeSiteMenu()});
const siteButtons=[...document.querySelectorAll('.site-button')];
siteButtons.forEach(button=>button.addEventListener('click',()=>{
  body.dataset.site=button.dataset.site;
  siteButtons.forEach(item=>{
    const active=item===button;
    item.classList.toggle('active',active);
    item.setAttribute('aria-pressed',String(active));
  });
}));
const pvModeButtons=[...document.querySelectorAll('.pv-mode-button')];
pvModeButtons.forEach(button=>button.addEventListener('click',()=>{
  body.dataset.pvMode=button.dataset.pvMode;
  pvModeButtons.forEach(item=>{
    const active=item===button;
    item.classList.toggle('active',active);
    item.setAttribute('aria-pressed',String(active));
  });
}));
