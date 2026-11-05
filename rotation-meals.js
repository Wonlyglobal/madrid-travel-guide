// Five dinner venues over eight Madrid nights; no same-day or adjacent-night repetition.
const rotateMeal=(kind,time,id,origin,next,why,order,caution)=>({kind,time,id,origin,next,why,order,caution});
DAILY_MEALS['06'][0]=rotateMeal('午餐','12:30—13:15 · 3人','lateral','hotel','hotel','酒店寄存后在Arturo Soria片区吃轻午餐，再回酒店入住；午晚餐分店安排。','土豆饼、火腿煎蛋或牛里脊吐司，少量共享。','吸烟许可未确认；先休整再走访，不为午餐跨市中心。');
DAILY_MEALS['06'][1]=rotateMeal('晚餐','19:30左右 · 3人','fogon','uno','hotel','城东UNO拜访后到Quintana吃阿斯图里亚斯菜，再回酒店；不再北上Palomar后折返。','Cachopo套餐或炭烤牛排套餐；若有当日炖豆可共享。','14欧是官网10月30日午间样例，不是旅行当天晚餐报价；晚餐现价先问。');
DAILY_MEALS['07'][1]=rotateMeal('晚餐','18:30—19:30 · 3人','cantalejo','cobo','hotel','南部市场结束后直接经La Latina用餐再回酒店；道路参考总约33公里，比直返酒店约多3公里（非实时）。','章鱼、炸鱿鱼和清烤蛏子共享；查看完整菜单再确认份量。','属于返程支线；需出发前核对实际绕行与厨房营业。若疲劳，直接回酒店，用附近备选。');
DAILY_MEALS['08'][1]=rotateMeal('晚餐','19:30左右 · 3人','juan','hotel','hotel','布展结束先回酒店放样品，再去酒店以西Hispanoamérica换口味；不进老城。','辣味土豆、焗三文鱼配蔬菜、蒸贻贝，按当天供餐选择。','单价与现行完整菜单未公开核实，须先电话索取；历史黑板11欧不作为现价。');
DAILY_MEALS['09'][0]=rotateMeal('午餐','13:00左右 · 先到者','lateral','hotel','hotel','在酒店所在东北片区用轻午餐后返回等会合，晚上再吃已安排的Pozas聚餐。','土豆饼、火腿煎蛋与分享小食；后到者按航班补餐。','吸烟未确认；节日营业和六人能否同桌先问。不根据未知航班假定午餐人数。');
for(const d of ['11','13'])DAILY_MEALS[d][0]=rotateMeal('午餐','13:00 / 14:00 · 分组轮休','minotauro','ifema','ifema','选择Silvano片区正餐，和Calbenta隔日轮换；留人在展位值守。','Óscar可乐饼、土豆饼或至少2人起的海鲜饭。','比南门对面Calbenta多一段交通；每组预留90—120分钟，仅接待排班允许且再入场已确认时采用。吸烟仅第三方目录线索，未确认前按不能吸烟准备。');
DAILY_MEALS['11'][1]=rotateMeal('晚餐','19:30—20:00 · 6人','fogon','hotel','hotel','补访组与守展组先回酒店会合，再去Quintana；与前一天Palomar晚餐换开。','Cachopo夹心炸牛排、炖菜或炭烤牛排套餐，按六人实际份量点。','晚餐价和当日供餐须电话确认；周一关闭，因此不安排9日。');
DAILY_MEALS['12'][1]=rotateMeal('晚餐','19:30—20:00 · 6人','juan','ifema','hotel','从IFEMA离馆后往酒店以西的Hispanoamérica用餐，再回酒店；与11日的Quintana餐厅换片区。','焗三文鱼、辣味土豆、蒸贻贝；六人先确认是否能接待。','不是展馆到酒店的直达零绕路；先问现行完整菜单、菜价、指定吸烟桌位，确认后再出发。');
DAILY_MEALS['10'][1].why='离馆后去酒店北侧El Palomar，再回酒店；本店只保留10日与13日晚餐。';
DAILY_MEALS['13'][1].why='撤展后回酒店北侧El Palomar吃熟悉的简餐；上次安排在10日，中间两晚已换店。';
for(const p of DAILY_PLANS){const ms=DAILY_MEALS[p.d];for(let i=0;i<2;i++){if(!ms[i].id)continue;let n=p.items.findIndex(x=>x[1].startsWith(ms[i].kind+' ·'));const row=[ms[i].time,ms[i].kind+' · '+places.find(x=>x.id===ms[i].id).name,'点午晚餐卡查看实拍、菜价/预算、吸烟依据和导航。'+ms[i].caution];if(n>=0)p.items[n]=row;else if(i===0){const pos=p.items.findIndex(x=>x[1].includes('岗位'));p.items.splice(pos>=0?pos:2,0,row)}}if(p.d==='07'){p.items=p.items.map(x=>x[1].includes('回访有效线索')?[x[0],'下午继续摸底，随后直接去晚餐','市场结束后经Cantalejo用餐回酒店，不先回酒店再折返。']:x)}if(['06','07','11','12'].includes(p.d))p.note='午晚餐已按轮换更新；餐厅不是全部都在直达线路上，请看餐卡的起点、绕行说明和当日导航。所有拜访、餐位仍未代预约。'}
// Align the daily dinner scenes with the new restaurants; meal cards retain exact segment navigation.
const r6=JOURNEY_SCENES.find(s=>s.id==='daily-06-market');r6.title='11月6日 · Codiven → UNO → Fogón → 酒店';r6.photo='fogon';r6.legs=[...market6.legs.slice(0,2),mealLeg('uno','fogon','城东走访后换阿斯图里亚斯菜'),mealLeg('fogon','hotel','晚餐后回酒店')];
const r7=JOURNEY_SCENES.find(s=>s.id==='cobo');r7.title='11月7日 · Cobo市场 → Cantalejo → 酒店';r7.photo='cantalejo';r7.legs=[r7.legs[0],mealLeg('cobo','cantalejo','南部市场返程经La Latina晚餐'),mealLeg('cantalejo','hotel','用餐后直接回酒店')];
const r8={...JOURNEY_SCENES.find(s=>s.id==='setup'),id:'daily-08',title:'11月8日 · 布展 → 酒店 → Juan Sin Prisa',photo:'juan'};r8.legs=[...r8.legs,mealLeg('hotel','juan','放好样品后换家餐厅'),mealLeg('juan','hotel','晚餐后回酒店')];JOURNEY_SCENES.push(r8);DAILY_PLANS.find(p=>p.d==='08').scenes=['daily-08'];
for(const d of ['11','12']){const s=JOURNEY_SCENES.find(s=>s.id==='daily-'+d);const m=DAILY_MEALS[d][1];s.title='11月'+d+'日 · IFEMA → '+(m.origin==='hotel'?'酒店会合 → ':'')+places.find(p=>p.id===m.id).name+' → 酒店';s.photo=m.id;s.recommend='driving';s.when=m.why;s.buffer=m.caution;s.legs=[JOURNEY_SCENES.find(s=>s.id==='setup').legs[0],...(m.origin==='hotel'?[mealLeg('ifema','hotel','守展组先回酒店会合')]:[]),mealLeg(m.origin,m.id,'按当天安排去轮换餐厅'),mealLeg(m.id,'hotel','晚餐后回酒店')]}
if(journeyMap)$('map-scene').innerHTML=JOURNEY_SCENES.map(s=>`<option value="${s.id}">${esc(s.title)}</option>`).join('');
const originalDailyMealsMarkup=dailyMealsMarkup;
dailyMealsMarkup=function(day){return `<div class="rotation-summary"><b>晚餐轮换：8晚5家，相邻两晚不重复</b><p>Fogón → Cantalejo → Juan Sin Prisa → Pozas → El Palomar → Fogón → Juan Sin Prisa → El Palomar。工作日午餐在Calbenta与Minotauro间隔日轮换；后者吸烟许可待确认。</p></div>`+originalDailyMealsMarkup(day)};
renderJourney();renderDaily();
