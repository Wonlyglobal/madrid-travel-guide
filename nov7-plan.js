// November 7 confirmed itinerary, reviewed 2026-11-07.
(()=>{
const hotel='Hotel Suites Feria de Madrid Calle del Moscatelar 31 Madrid';
const stops={ifema:'IFEMA MADRID Avenida del Partenon 5 Madrid',bau:'BAUHAUS Alcorcon Calle Ejercito del Aire',obra:'OBRAMAT Alcorcon Calle Armada Espanola',leroy:'Leroy Merlin Alcorcon Parque Oeste'};
const nav=(a,b)=>'https://www.google.com/maps/dir/?'+new URLSearchParams({api:'1',origin:a,destination:b,travelmode:'driving'});
const rows=[
['08:30–09:00','酒店 → IFEMA','Av. del Partenón 5, Madrid','与搭建方确认接应；预留20–30分钟车程。',nav(hotel,stops.ifema)],
['09:00–10:00','查看展会现场','IFEMA 自家展位','搭建进度、卸货入口、电源及8号布展安排。',nav(hotel,stops.ifema)],
['10:00–11:00','打车 → BAUHAUS Alcorcón','Calle Ejército del Aire, s/n, Alcorcón','跨城预留45–60分钟，以当天导航为准。',nav(stops.ifema,stops.bau)],
['11:00–13:30','BAUHAUS 大型建材卖场','Calle Ejército del Aire, s/n, Alcorcón','安全门、锁芯、智能锁；拍品牌、型号、配置和价签。',nav(stops.ifema,stops.bau)],
['13:30–14:15','商圈内午餐','Alcorcón 就近安排','整理照片，选出下午比价产品。',null],
['14:15–15:45','OBRAMAT Alcorcón','Calle de la Armada Española, s/n · P.I. El Lucero','工程门、锁具、批量价、库存与采购对接入口。',nav(stops.bau,stops.obra)],
['15:45–16:00','打车 → Leroy Merlin','Parque Oeste, Alcorcón','短途转场，预留10–20分钟。',nav(stops.obra,stops.leroy)],
['16:00–17:30','Leroy Merlin Alcorcón','Autovía del Suroeste, km 14 · Parque Oeste','同款比价、智能锁套餐、配件和安装费。',nav(stops.obra,stops.leroy)],
['17:30–18:40','返回酒店','C. del Moscatelar 31, Madrid','整理竞品价格、产品特点与客户联系方式。',nav(stops.leroy,hotel)]
];
const p=DAILY_PLANS.find(x=>x.d==='07');Object.assign(p,{title:'IFEMA → Alcorcón 大型建材商圈',people:'3人 · 周六',scenes:[],focus:'主站BAUHAUS，顺路比较OBRAMAT与Leroy Merlin；三人打车／包车。',items:rows.map(r=>r.slice(0,2).concat(r[3])),food:undefined,note:'马德里当地时间。车程为预留，点击导航看实际道路；各站未预约。'});
DAILY_MEALS['07']=[];
const overview=days.find(x=>x[0]==='07');overview[2]=p.title;overview[3]='08:30酒店出发，上午看展馆；随后集中走Alcorcón三家大型建材卖场。';overview[4]='调研重点';overview[5]='品牌、型号、同规格价格、安装费、供货与采购入口。';overview[6]=undefined;
const card=document.querySelectorAll('#day-list .day')[2];if(card){card.querySelector('h3').textContent=overview[2];const ps=card.querySelectorAll('p');if(ps[0])ps[0].textContent=overview[3];if(ps[1])ps[1].textContent=overview[5];card.querySelector('[data-day]')?.remove();}
const original=renderDaily;renderDaily=function(){original();if(activeDaily!=='07')return;const timeline=document.querySelector('#daily-panel .daily-timeline');timeline.outerHTML=`<div class="nov7-table-scroll"><table class="nov7-table"><thead><tr><th>时间</th><th>日程</th><th>地址</th><th>调研重点</th><th>导航</th></tr></thead><tbody>${rows.map(r=>`<tr><td>${esc(r[0])}</td><td><strong>${esc(r[1])}</strong></td><td>${esc(r[2])}</td><td>${esc(r[3])}</td><td>${r[4]?`<a href="${esc(r[4])}" target="_blank" rel="noopener">上一站出发 ↗</a>`:'就近用餐'}</td></tr>`).join('')}</tbody></table></div><div class="nov7-contact"><strong>周六营业与联系</strong><p>BAUHAUS 08:00–22:00 · <a href="tel:+34917692318">917 692 318</a>　｜　OBRAMAT 07:30–22:00 · <a href="tel:+34913578960">913 578 960</a>　｜　Leroy Merlin 09:00–22:00 · <a href="tel:+34916429222">916 429 222</a></p><p>7号为搭建期：施工区按IFEMA要求配安全帽、反光背心、安全鞋；先与搭建方确认接应。</p><details><summary>营业与进场信息</summary><a href="https://www.bauhaus.es/fc/alcorcon/351" target="_blank" rel="noopener">BAUHAUS</a> · <a href="https://www.obramat.es/almacenes/obramat-alcorcon.html" target="_blank" rel="noopener">OBRAMAT</a> · <a href="https://www.leroymerlin.es/tiendas/alcorcon.html" target="_blank" rel="noopener">Leroy Merlin</a> · <a href="https://www.ifema.es/smart-doors/doc/guia-del-expositor-normas-especificas-participacion/guia-expositor-normas-especificas-es-dr26_v2.pdf" target="_blank" rel="noopener">IFEMA进场规定</a></details></div>`;};
const requested=new URLSearchParams(location.search).get('day');activeDaily=requested&&DAILY_PLANS.some(x=>x.d===requested)?requested:'07';renderDaily();
})();
