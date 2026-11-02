(function(){
  var D={ru:{
    nav_ch:'Каналы',nav_about:'О холдинге',nav_arc:'Архив',nav_news:'Новости',nav_con:'Контакты',
    home_h:'Project Restored',home_p:'Фанатский проект по восстановлению музыкальных каналов и истории холдинга BRIDGE MEDIA.',
    btv_t:'BRIDGE TV',btv_p:'Зарубежная популярная музыка всех времён и направлений. Сейчас в эфире.',btv_b:'Перейти на сайт',
    rtv_t:'RUSONG TV',rtv_p:'Лучшая российская и советская музыка всех жанров. Скоро в эфире.',rtv_b:'Перейти на сайт',
    arc_t:'Архив холдинга',arc_p:'DANGE TV, TOPSONG TV, BRIDGEBERG, BRIDGE PRODUCTION и BRIDGE DIGITAL.',arc_b:'Открыть архив',
    live:'В эфире',soon:'Скоро',arch:'Архив',
    ab_h:'О холдинге',ab_sub:'BRIDGE MEDIA — российская группа музыкальных телеканалов (2005–2015). BRIDGE MEDIA: Project Restored — фанатское возрождение её каналов и истории.',
    s1:'музыкальных телеканалов',s2:'лет истории (2005–2015)',s3:'млн зрителей в месяц в России*',
    ab_hist:'История',ab_src:'* По данным сохранённой копии сайта bridgemedia.ru (Internet Archive, 2015): совокупная ежемесячная аудитория каналов превышала 40 млн зрителей (31% населения РФ, по данным TNS Россия).',
    ab_note:'Это неофициальный фанатский проект команды BM-PR. Он не связан с BRIDGE MEDIA и не выдаёт себя за неё. История восстановлена по публичной архивной копии сайта холдинга.',
    ar_h:'Архив холдинга',ar_sub:'Проекты BRIDGE MEDIA, которых у нас нет «в эфире». Оставлены для истории.',
    ar_note:'Это страницы-воспоминания по архивной копии bridgemedia.ru. Старые домены не подключены.',
    n_h:'Новости команды BM-PR',n_sub:'Анонсы проектов BRIDGE TV и RUSONG TV: Project Restored.',n_empty:'Новостей пока нет.',
    c_h:'Контакты',c_sub:'Где нас найти.',
    f:'Представлено командой BM-PR. Не имеет отношения к BRIDGE MEDIA.'
  },en:{
    nav_ch:'Channels',nav_about:'About',nav_arc:'Archive',nav_news:'News',nav_con:'Contacts',
    home_h:'Project Restored',home_p:'A fan project restoring the music channels and the history of the BRIDGE MEDIA group.',
    btv_t:'BRIDGE TV',btv_p:'Popular international music of all times and genres. On air now.',btv_b:'Open the site',
    rtv_t:'RUSONG TV',rtv_p:'The best Russian and Soviet music of every genre. Coming soon.',rtv_b:'Open the site',
    arc_t:'Group archive',arc_p:'DANGE TV, TOPSONG TV, BRIDGEBERG, BRIDGE PRODUCTION and BRIDGE DIGITAL.',arc_b:'Open the archive',
    live:'On air',soon:'Coming soon',arch:'Archive',
    ab_h:'About the group',ab_sub:'BRIDGE MEDIA was a Russian group of music TV channels (2005–2015). BRIDGE MEDIA: Project Restored is a fan revival of its channels and history.',
    s1:'music TV channels',s2:'years of history (2005–2015)',s3:'million monthly viewers in Russia*',
    ab_hist:'History',ab_src:'* According to the saved copy of bridgemedia.ru (Internet Archive, 2015): the combined monthly audience of the channels exceeded 40 million viewers (31% of Russia’s population, per TNS Russia).',
    ab_note:'This is an unofficial fan project by the BM-PR team. It is not affiliated with BRIDGE MEDIA and does not pretend to be. The history is restored from a public archive copy of the group’s website.',
    ar_h:'Group archive',ar_sub:'BRIDGE MEDIA projects that are not “on air” here. Kept for the record.',
    ar_note:'These are memory pages based on the archived copy of bridgemedia.ru. The old domains are not connected.',
    n_h:'BM-PR team news',n_sub:'Announcements for BRIDGE TV and RUSONG TV: Project Restored.',n_empty:'No news yet.',
    c_h:'Contacts',c_sub:'Where to find us.',
    f:'Presented by BM-PR. Not affiliated with BRIDGE MEDIA.'
  }};
  var HIST=[
   ['2005',{ru:['В июне — запуск телеканала зарубежной музыки BRIDGE TV.'],en:['June — BRIDGE TV, the international music channel, launches.']}],
   ['2006',{ru:['Февраль — собственный чарт BRIDGE PARADE TOP20, позже ставший BRIDGE TV TOP10.','Декабрь — круглосуточный sms-чат на BRIDGE TV (за годы работы — 5,5 млн сообщений; закрыт в октябре 2013).'],en:['February — own chart BRIDGE PARADE TOP20, later BRIDGE TV TOP10.','December — a 24/7 sms chat on BRIDGE TV (5.5 million messages over its lifetime; closed in October 2013).']}],
   ['2007',{ru:['Декабрь — программа BABY TIME: музыкальные мультфильмы и клипы для детей.'],en:['December — BABY TIME: music cartoons and clips for kids.']}],
   ['2008',{ru:['Февраль — BRIDGE IN TIME: популярные клипы прошлых десятилетий.','Апрель — BRIDGE TO NIGHTLIFE: лучшие танцевальные клипы и передачи о клубных событиях.'],en:['February — BRIDGE IN TIME: popular clips from past decades.','April — BRIDGE TO NIGHTLIFE: the best dance clips and shows about club events.']}],
   ['2009',{ru:['Апрель — видеопроизводственная компания BRIDGE PRODUCTION.','Декабрь — BRIDGE DIGITAL, разработчик программного обеспечения и сайтов.'],en:['April — BRIDGE PRODUCTION, the video production company.','December — BRIDGE DIGITAL, software and website developer.']}],
   ['2010',{ru:['Июнь — RETRO DANCE: лучшие танцевальные хиты 90-х.','Июль — запуск телеканала отечественной музыки RUSONG TV с sms-чатом и форматами BRIDGE TV на российской музыке.'],en:['June — RETRO DANCE: the best dance hits of the 90s.','July — RUSONG TV, the channel for Russian music, launches with an sms chat and BRIDGE TV formats adapted to Russian music.']}],
   ['2011',{ru:['Январь — эксклюзивным продавцом рекламы на BRIDGE TV становится «Видео Интернешнл».','BRIDGE DIGITAL выпускает веб-технологию «Platformio».'],en:['January — Video International becomes the exclusive ad seller for BRIDGE TV.','BRIDGE DIGITAL releases the web technology “Platformio”.']}],
   ['2012',{ru:['Март — на RUSONG TV программа MOVIE TIME: лучшие песни из советских фильмов.','Июнь — на BRIDGE TV программа ROCK PARTY TIME.','Ноябрь — выпуски NEWS TIME на RUSONG TV (на BRIDGE TV — с сентября 2013).'],en:['March — MOVIE TIME on RUSONG TV: the best songs from Soviet films.','June — ROCK PARTY TIME on BRIDGE TV.','November — NEWS TIME on RUSONG TV (on BRIDGE TV from September 2013).']}],
   ['2013',{ru:['Март — танцевальный канал DANGE TV.','Сентябрь — программа STAR TIME: выпуски ко дню рождения артистов.','Ноябрь — канал свежей музыки TOPSONG TV.'],en:['March — the dance channel DANGE TV.','September — STAR TIME: special episodes on artists’ birthdays.','November — TOPSONG TV, the channel for fresh music.']}],
   ['2014',{ru:['Апрель — чарт DANGE TV TOP10 (выходит и на BRIDGE TV).','Май — чарт отечественной музыки RUSONG TV TOP10.'],en:['April — the DANGE TV TOP10 chart (also aired on BRIDGE TV).','May — RUSONG TV TOP10, the chart of Russian music.']}]
  ];
  var ARC=[
   ['dangetv','DANGE TV',{ru:'Танцевальный телеканал. Запущен в марте 2013, с апреля 2014 — чарт DANGE TV TOP10. «Качественная танцевальная музыка от лучших диджеев планеты».',en:'The dance channel. Launched in March 2013; DANGE TV TOP10 chart since April 2014. “Quality dance music from the best DJs on the planet”.'}],
   ['topsongtv','TOPSONG TV',{ru:'Телеканал свежей музыки. Запущен в ноябре 2013. «Свежая и оригинальная музыка со всего мира».',en:'The channel for fresh music. Launched in November 2013. “Fresh and original music from around the world”.'}],
   ['bridgeberg','BRIDGEBERG',{ru:'Проект холдинга с пометкой «скоро» на архивной странице. Подробностей не сохранилось.',en:'A group project marked “coming soon” on the archived page. No further details survive.'}],
   ['production','BRIDGE PRODUCTION',{ru:'Видеопроизводство: создание развлекательных программ и производство клипов. Основана в апреле 2009.',en:'Video production: entertainment shows and music videos. Founded in April 2009.'}],
   ['digital','BRIDGE DIGITAL',{ru:'Разработка программного обеспечения и сайтов, автоматизация. Основана в декабре 2009; в 2011 выпустила веб-технологию «Platformio».',en:'Software and website development, automation. Founded in December 2009; released the “Platformio” web technology in 2011.'}]
  ];
  var CONTACTS=[
   ['BRIDGE TV: Project Restored','btvrestored.ru','https://btvrestored.ru/'],
   ['RUSONG TV: Project Restored','rtvrestored.ru','https://rtvrestored.ru/'],
   ['VK Видео — BRIDGE TV','@btv_restored','https://vkvideo.ru/@btv_restored'],
   ['Telegram — RUSONG TV','@rtv_restored','https://t.me/rtv_restored'],
   ['Telegram-бот заказа клипов / Clip order bot','@bmprorder_bot','https://t.me/bmprorder_bot']
  ];
  function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
  function lang(){var l='ru';try{l=localStorage.getItem('bmlang')||(navigator.language||'ru').slice(0,2)}catch(e){}return l==='en'?'en':'ru'}
  function render(L){
    var d=D[L];
    document.documentElement.lang=L;
    document.querySelectorAll('[data-i]').forEach(function(e){var v=d[e.getAttribute('data-i')];if(v)e.textContent=v});
    document.querySelectorAll('.lang button').forEach(function(b){b.classList.toggle('on',b.dataset.l===L)});
    var t=document.getElementById('tl');
    if(t)t.innerHTML=HIST.map(function(h){return '<li><div class="y">'+h[0]+'</div><ul>'+h[1][L].map(function(x){return '<li style="padding:0;margin:0 0 4px;list-style:disc">'+esc(x)+'</li>'}).join('')+'</ul></li>'}).join('');
    var a=document.getElementById('arc');
    if(a)a.innerHTML=ARC.map(function(x){return '<article class="card"><img src="img/'+x[0]+'.jpg" alt="'+esc(x[1])+'" loading="lazy" width="880" height="301"><div class="b"><span class="tag">'+d.arch+'</span><h3>'+esc(x[1])+'</h3><p>'+esc(x[2][L])+'</p></div></article>'}).join('');
    var c=document.getElementById('contacts');
    if(c)c.innerHTML=CONTACTS.map(function(x){return '<a class="link" href="'+x[2]+'" target="_blank" rel="noopener"><b>'+esc(x[0])+'</b><span>'+esc(x[1])+'</span></a>'}).join('');
    var n=document.getElementById('news');
    if(n){fetch('news.json',{cache:'no-cache'}).then(function(r){return r.json()}).then(function(j){
      var it=(j.items||[]).filter(function(x){return x&&x.title});
      n.innerHTML=it.length?it.map(function(x){var tt=(x['title_'+L]||x.title),bb=(x['text_'+L]||x.text||'');
        var dt=x.date?new Date(x.date).toLocaleDateString(L==='en'?'en-GB':'ru-RU',{day:'numeric',month:'long',year:'numeric'}):'';
        return '<li>'+(dt?'<time>'+dt+'</time>':'')+'<h3>'+esc(tt)+'</h3><p>'+esc(bb)+'</p></li>'}).join(''):'<li>'+d.n_empty+'</li>'}).catch(function(){n.innerHTML='<li>'+d.n_empty+'</li>'})}
  }
  window.setLang=function(L){try{localStorage.setItem('bmlang',L)}catch(e){}render(L)};
  document.addEventListener('DOMContentLoaded',function(){
    document.querySelectorAll('.lang button').forEach(function(b){b.onclick=function(){setLang(b.dataset.l)}});
    var bg=document.querySelector('.burger'),nv=document.querySelector('.top nav');
    if(bg)bg.onclick=function(){var o=nv.classList.toggle('open');bg.setAttribute('aria-expanded',o)};
    render(lang());
  });
})();
