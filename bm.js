(function(){
  var D={ru:{
    skip:'К основному содержимому',
    hd_t:'BRIDGE HD',hd_p:'Музыкальный канал в формате HD. Проект восстановления — скоро.',hd_b:'О канале',
    hd_h:'BRIDGE HD',hd_sub:'Музыкальный телеканал холдинга BRIDGE MEDIA в формате HD. Проект BRIDGE HD: Project Restored готовится к запуску.',
    hd_hist:'История канала',hd_src:'Источники',hd_status:'Скоро',
    hd_note:'Даты запуска и закрытия — по открытым источникам; точная дата запуска BRIDGE HD в них не указана. Рабочее название BRIDGEBERG указано по данным команды проекта: архивная страница bridgemedia.ru лишь сообщала о проекте «скоро». Проект неофициальный.',
    theme:'Стиль',th_studio:'Единый',th_paper:'Концепт',th_air:'Эфир',th_clean:'Светлый',
    nav_ch:'Каналы',nav_about:'О холдинге',nav_arc:'Архив',nav_news:'Новости',nav_con:'Контакты',
    home_h:'Project Restored',home_p:'Фанатский проект по восстановлению музыкальных каналов и истории холдинга BRIDGE MEDIA.',
    btv_t:'BRIDGE TV',btv_p:'Зарубежная популярная музыка всех времён и направлений. Сейчас в эфире.',btv_b:'Перейти на сайт',
    rtv_t:'RUSONG TV',rtv_p:'Лучшая российская и советская музыка всех жанров. Скоро в эфире.',rtv_b:'Перейти на сайт',
    arc_t:'Архив холдинга',arc_p:'DANGE TV, TOPSONG TV, BRIDGE PRODUCTION и BRIDGE DIGITAL.',arc_b:'Открыть архив',
    live:'В эфире',soon:'Скоро',arch:'Архив',
    ab_h:'О холдинге',ab_sub:'BRIDGE MEDIA — российская группа музыкальных телеканалов (2005–2017). BRIDGE MEDIA: Project Restored — фанатское возрождение её каналов и истории.',
    s1:'музыкальных телеканалов к началу 2017',s2:'лет истории (2005–2017)',s3:'млн зрителей в месяц в России*',
    ab_hist:'История',ab_src:'* По данным сохранённой копии сайта bridgemedia.ru (Internet Archive, 2015): совокупная ежемесячная аудитория каналов превышала 40 млн зрителей (31% населения РФ, по данным TNS Россия).',
    ab_note:'Это неофициальный фанатский проект команды BM-PR. Он не связан с BRIDGE MEDIA и не выдаёт себя за неё. История восстановлена по публичной архивной копии сайта холдинга.',
    ar_h:'Архив холдинга',ar_sub:'Проекты BRIDGE MEDIA, которых у нас нет «в эфире». Оставлены для истории.',
    ar_note:'Это страницы-воспоминания по архивной копии bridgemedia.ru. Старые домены не подключены.',
    n_h:'Новости команды BM-PR',n_sub:'Анонсы проектов BRIDGE TV и RUSONG TV: Project Restored.',n_empty:'Новостей пока нет.',
    c_h:'Контакты',c_sub:'Где нас найти.',
    f:'Представлено командой BM-PR. Не имеет отношения к BRIDGE MEDIA.'
  },en:{
    skip:'Skip to main content',
        hd_t:'BRIDGE HD',hd_p:'The HD music channel. The restoration project is coming soon.',hd_b:'About the channel',
    hd_h:'BRIDGE HD',hd_sub:'The HD music channel of the BRIDGE MEDIA group. BRIDGE HD: Project Restored is getting ready to launch.',
    hd_hist:'Channel history',hd_src:'Sources',hd_status:'Coming soon',
    hd_note:'Launch and closure dates come from public sources; none gives the exact launch date of BRIDGE HD. The working title BRIDGEBERG is per the project team: the archived bridgemedia.ru page only said “coming soon”. This is an unofficial project.',
    theme:'Style',th_studio:'Unified',th_paper:'Concept',th_air:'On air',th_clean:'Light',
    nav_ch:'Channels',nav_about:'About',nav_arc:'Archive',nav_news:'News',nav_con:'Contacts',
    home_h:'Project Restored',home_p:'A fan project restoring the music channels and the history of the BRIDGE MEDIA group.',
    btv_t:'BRIDGE TV',btv_p:'Popular international music of all times and genres. On air now.',btv_b:'Open the site',
    rtv_t:'RUSONG TV',rtv_p:'The best Russian and Soviet music of every genre. Coming soon.',rtv_b:'Open the site',
    arc_t:'Group archive',arc_p:'DANGE TV, TOPSONG TV, BRIDGE PRODUCTION and BRIDGE DIGITAL.',arc_b:'Open the archive',
    live:'On air',soon:'Coming soon',arch:'Archive',
    ab_h:'About the group',ab_sub:'BRIDGE MEDIA was a Russian group of music TV channels (2005–2017). BRIDGE MEDIA: Project Restored is a fan revival of its channels and history.',
    s1:'music TV channels by early 2017',s2:'years of history (2005–2017)',s3:'million monthly viewers in Russia*',
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
   ['2014',{ru:['Апрель — чарт DANGE TV TOP10 (выходит и на BRIDGE TV).','Май — чарт отечественной музыки RUSONG TV TOP10.'],en:['April — the DANGE TV TOP10 chart (also aired on BRIDGE TV).','May — RUSONG TV TOP10, the chart of Russian music.']}],
   ['2015',{ru:['Август — Максим Дмитриев (ПМИ) приобретает значительную, но не контрольную долю в четырёх музыкальных каналах холдинга; бизнес оценивали примерно в $4 млн.','Запуск музыкального канала BRIDGE HD в формате HD (по данным сайта BRIDGE TV).'],en:['August — Maxim Dmitriev (First Music Publishing) buys a substantial, non-controlling stake in the group’s four music channels; the business was valued at about $4 million.','BRIDGE HD, the HD music channel, launches (per the BRIDGE TV website).']}],
   ['2016',{ru:['TOPSONG TV становится BRIDGE TV Classic, DANGE TV — BRIDGE TV Dance (позже BRIDGE HITS).','По данным Mediascope, во втором полугодии 2016 самым популярным каналом группы был RUSONG TV (доля 0,03% по аудитории 4+).'],en:['TOPSONG TV becomes BRIDGE TV Classic and DANGE TV becomes BRIDGE TV Dance (later BRIDGE HITS).','Per Mediascope, RUSONG TV was the group’s most-watched channel in H2 2016 (0.03% share, audience 4+).']}],
   ['2017',{ru:['18 января — структура «Чайка Медиа Груп», связанная с Михаилом Гуцериевым, приобретает 75% BRIDGE MEDIA; Максим Дмитриев и Фёдор Стрижков сохраняют 25% и управление каналами.','В группе: BRIDGE TV, BRIDGE TV Classic, RUSONG TV, BRIDGE TV Dance и BRIDGE HD. Позднее в 2017 RUSONG TV переформатирован в BRIDGE Русский хит.'],en:['January 18 — Chaika Media Group, linked to Mikhail Gutseriev, buys 75% of BRIDGE MEDIA; Maxim Dmitriev and Fedor Strizhkov keep 25% and continue to run the channels.','The group now holds BRIDGE TV, BRIDGE TV Classic, RUSONG TV, BRIDGE TV Dance and BRIDGE HD. Later in 2017 RUSONG TV is reformatted as BRIDGE Русский хит.']}]
  ];
  var ARC=[
   ['dangetv','DANGE TV',{ru:'Танцевальный телеканал. Запущен в марте 2013, с апреля 2014 — чарт DANGE TV TOP10. «Качественная танцевальная музыка от лучших диджеев планеты».',en:'The dance channel. Launched in March 2013; DANGE TV TOP10 chart since April 2014. “Quality dance music from the best DJs on the planet”.'}],
   ['topsongtv','TOPSONG TV',{ru:'Телеканал свежей музыки. Запущен в ноябре 2013. «Свежая и оригинальная музыка со всего мира».',en:'The channel for fresh music. Launched in November 2013. “Fresh and original music from around the world”.'}],
   ['bridgeberg','BRIDGEBERG',{ru:'Рабочее название канала, который вышел как BRIDGE HD. На архивной странице холдинга проект значился как «скоро».',en:'The working title of the channel that launched as BRIDGE HD. The group’s archived page listed it as “coming soon”.'}],
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

  var HDTL=[
   ['',{ru:'BRIDGEBERG — рабочее название проекта: на архивной странице bridgemedia.ru он значился как «скоро».',en:'BRIDGEBERG — the working title: on the archived bridgemedia.ru page it was listed as “coming soon”.'}],
   ['2015',{ru:'Запуск BRIDGE HD — музыкального канала в формате HD.',en:'BRIDGE HD, an HD music channel, launches.'}],
   ['2017',{ru:'Январь — лицензия на BRIDGE HD входит в число лицензий группы при покупке 75% BRIDGE MEDIA структурой «Чайка Медиа Груп».',en:'January — the BRIDGE HD licence is among those held by the group when Chaika Media Group buys 75% of BRIDGE MEDIA.'}],
   ['2019',{ru:'3 сентября — на смену BRIDGE HD приходит BRIDGE TV Deluxe («Роскошная музыка мирового класса», HD).',en:'September 3 — BRIDGE TV Deluxe (“Luxury world-class music”, HD) replaces BRIDGE HD.'}]
  ];
  var HDSRC=[
   ['BRIDGE MEDIA — каналы','https://bridgetv.ru/about/channels/'],
   ['BRIDGE TV Deluxe заменит BRIDGE HD — bridgetv.ru','https://bridgetv.ru/news/view/bridge-tv-deluxe'],
   ['Bridge Media объявил о запуске канала Bridge TV Deluxe — Cableman','https://www.cableman.ru/content/bridge-media-obyavil-o-zapuske-kanala-bridge-tv-deluxe'],
   ['Михаил Гуцериев включился в телевизор — ComNews, 2017','https://www.comnews.ru/content/105502/2017-01-18/mihail-guceriev-vklyuchilsya-v-televizor'],
   ['Гуцериев приобрёл 75% Bridge Media — РБК, 2017','https://www.rbc.ru/rbcfreenews/587efeda9a79476533488a88'],
   ['Каналы Bridge Media не войдут в холдинг Киселёва — Ведомости, 2015','https://www.vedomosti.ru/technology/articles/2015/08/17/605005-telekanali-bridge-media-ne-voidut-v-holding-kiseleva'],
   ['Bridge Media — музыка на все времена — Телеспутник','https://telesputnik.ru/materials/content/article/medialogistika-dostavlyaet-bridge-media-muzyka-na-vse-vremena']
  ];
  var THEMES=['studio','paper','air','clean'];
  function theme(){var t='studio';try{t=localStorage.getItem('bmtheme')||t}catch(e){}return THEMES.indexOf(t)<0?'studio':t}
  window.setTheme=function(t){if(THEMES.indexOf(t)<0)return;document.documentElement.setAttribute('data-theme',t);try{localStorage.setItem('bmtheme',t)}catch(e){}document.querySelectorAll('.themes button').forEach(function(b){var a=b.dataset.t===t;b.classList.toggle('on',a);b.setAttribute('aria-pressed',String(a))})};
  function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
  function lang(){var l='ru';try{l=localStorage.getItem('bmlang')||(navigator.language||'ru').slice(0,2)}catch(e){}return l==='en'?'en':'ru'}
  function render(L){
    var d=D[L];
    document.documentElement.lang=L;
    document.querySelectorAll('[data-i]').forEach(function(e){var v=d[e.getAttribute('data-i')];if(v)e.textContent=v});
    document.querySelectorAll('.lang button').forEach(function(b){var active=b.dataset.l===L;b.classList.toggle('on',active);b.setAttribute('aria-pressed',String(active))});
    document.querySelectorAll('.top nav a').forEach(function(a){if(a.classList.contains('on'))a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')});
    var menuButton=document.querySelector('.burger');if(menuButton){var opened=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-label',L==='en'?(opened?'Close menu':'Open menu'):(opened?'Закрыть меню':'Открыть меню'))}
    var hl=document.getElementById('hd-tl');
    if(hl)hl.innerHTML=HDTL.map(function(h){return '<li><div class="y">'+(h[0]||'•')+'</div><ul><li style="padding:0;margin:0 0 4px;list-style:disc">'+esc(h[1][L])+'</li></ul></li>'}).join('');
    var hs=document.getElementById('hd-src');
    if(hs)hs.innerHTML=HDSRC.map(function(x){return '<li><a href="'+x[1]+'" target="_blank" rel="noopener noreferrer">'+esc(x[0])+'</a></li>'}).join('');
    var tw=document.querySelector('.themes');if(tw)tw.setAttribute('aria-label',d.theme);
    document.querySelectorAll('.themes button').forEach(function(b){b.textContent=d['th_'+b.dataset.t]});
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
    if(bg&&nv){
      function closeMenu(){nv.classList.remove('open');bg.setAttribute('aria-expanded','false');bg.setAttribute('aria-label',document.documentElement.lang==='en'?'Open menu':'Открыть меню')}
      bg.onclick=function(){var o=nv.classList.toggle('open');bg.setAttribute('aria-expanded',String(o));bg.setAttribute('aria-label',document.documentElement.lang==='en'?(o?'Close menu':'Open menu'):(o?'Закрыть меню':'Открыть меню'))};
      nv.querySelectorAll('a').forEach(function(a){a.addEventListener('click',closeMenu)});
      document.addEventListener('keydown',function(e){if(e.key==='Escape')closeMenu()});
    }
    var q=(location.search.match(/[?&]theme=(\w+)/)||[])[1];
    document.querySelectorAll('.themes button').forEach(function(b){b.onclick=function(){setTheme(b.dataset.t)}});
    setTheme(q&&THEMES.indexOf(q)>=0?q:theme());
    render(lang());
  });
})();
