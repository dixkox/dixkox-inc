(function(){
  var btn=document.getElementById('menu-btn'),nav=document.getElementById('main-nav');
  if(btn&&nav){
    btn.addEventListener('click',function(){var o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o);btn.textContent=o?'Close':'Menu';});
  }
  var c=document.getElementById('copy-btn');
  if(c){c.addEventListener('click',function(){
    var done=function(){c.textContent='Copied';setTimeout(function(){c.textContent='Copy';},1500);};
    function sel(){var r=document.createRange();r.selectNodeContents(document.getElementById('mail'));var s=getSelection();s.removeAllRanges();s.addRange(r);}
    try{navigator.clipboard.writeText('info@dixkox.com').then(done,sel);}catch(e){sel();}
  });}
})();

(function(){
  var btn=document.getElementById('lang-btn'),panel=document.getElementById('lang-panel'),q=document.getElementById('lang-search'),list=document.getElementById('lang-list'),label=document.getElementById('lang-label');
  if(!btn||!panel)return;
  function cur(){var m=document.cookie.match(/(?:^|;\s*)googtrans=\/[^\/]*\/([^;]+)/);return m?decodeURIComponent(m[1]):'en';}
  var c=cur(),b=list.querySelector('button[data-code="'+c+'"]');
  if(b){label.textContent=b.querySelector('span').textContent;b.setAttribute('aria-current','true');}
  function open(o){panel.hidden=!o;btn.setAttribute('aria-expanded',o);if(o){panel.style.right='';q.value='';filter('');
    var r=panel.getBoundingClientRect();if(getComputedStyle(panel).position!=='fixed'&&r.left<16){panel.style.right=(r.left-16)+'px';}
    setTimeout(function(){q.focus();},30);}}
  btn.addEventListener('click',function(e){e.stopPropagation();open(panel.hidden);});
  panel.addEventListener('click',function(e){e.stopPropagation();});
  document.addEventListener('click',function(){open(false);});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')open(false);});
  function filter(v){v=v.trim().toLowerCase();list.querySelectorAll('li').forEach(function(li){li.hidden=v&&li.firstChild.getAttribute('data-s').indexOf(v)<0;});}
  q.addEventListener('input',function(){filter(q.value);});
  function setCookie(val,exp){
    var parts=location.hostname.split('.'),doms=[''];
    if(parts.length>1)doms.push('; domain=.'+parts.slice(-2).join('.'));
    doms.forEach(function(d){document.cookie='googtrans='+val+'; path=/'+d+(exp?'; expires=Thu, 01 Jan 1970 00:00:00 GMT':'');});
  }
  list.addEventListener('click',function(e){
    var t=e.target.closest('button[data-code]');if(!t)return;
    var code=t.getAttribute('data-code');
    var live=/(^|\.)dixkox\.com$/.test(location.hostname)&&window.google&&google.translate&&google.translate.TranslateElement;
    if(!live){
      if(code==='en'){open(false);return;}
      var page=location.pathname.split('/').pop();if(!/\.html$/.test(page)||page==='index.html')page='';
      var url='https://dixkox-com.translate.goog/'+page+'?_x_tr_sl=en&_x_tr_tl='+encodeURIComponent(code)+'&_x_tr_hl='+encodeURIComponent(code);
      var w=window.open(url,'_blank','noopener');if(!w)location.href=url;open(false);return;
    }
    if(code==='en'){setCookie('',true);}else{setCookie('/en/'+code,false);}
    location.reload();
  });
})();

(function(){
  var f=document.getElementById('social-float'),t=document.getElementById('sf-toggle');
  if(!f||!t)return;
  t.addEventListener('click',function(e){e.stopPropagation();var o=f.classList.toggle('open');t.setAttribute('aria-expanded',o);});
  document.addEventListener('click',function(e){if(!f.contains(e.target)){f.classList.remove('open');t.setAttribute('aria-expanded','false');}});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'){f.classList.remove('open');t.setAttribute('aria-expanded','false');}});
})();

(function(){
  var items=document.querySelectorAll('nav.main>ul>li');
  document.querySelectorAll('nav.main button.top').forEach(function(btn){
    btn.setAttribute('aria-expanded','false');
    btn.addEventListener('click',function(e){
      e.stopPropagation();
      var li=btn.parentElement, open=!li.classList.contains('open');
      items.forEach(function(x){x.classList.remove('open');var b=x.querySelector('button.top');if(b)b.setAttribute('aria-expanded','false');});
      if(open){li.classList.add('open');btn.setAttribute('aria-expanded','true');}
    });
  });
  document.addEventListener('click',function(){items.forEach(function(x){x.classList.remove('open');});});
})();

(function(){
  var f=document.getElementById('contact-form'); if(!f) return;
  var st=document.getElementById('form-status');
  function show(msg,ok){st.hidden=false;st.className='form-status '+(ok?'ok':'err');st.textContent=msg;}
  f.addEventListener('submit',function(e){
    e.preventDefault();
    if(f.querySelector('.hp input').value) return;
    var ep=f.getAttribute('data-endpoint');
    if(!ep){show('Online sending is being set up. Please email your message to info@dixkox.com and we will reply soon.',false);return;}
    var btn=f.querySelector('button[type=submit]');btn.disabled=true;btn.textContent='Sending...';
    fetch(ep,{method:'POST',body:new FormData(f),headers:{'Accept':'application/json'}})
      .then(function(r){if(!r.ok)throw 0;f.reset();show('Thank you. Your message was sent and we will reply soon.',true);})
      .catch(function(){show('Your message could not be sent. Please email info@dixkox.com instead.',false);})
      .then(function(){btn.disabled=false;btn.textContent='Send message';});
  });
})();
