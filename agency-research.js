// Five public-source reviews. Roles and authorizations are not inferred from names.
const AGENCY_REVIEW_DATE='2026-11-05';
const AGENCY_REVIEWS=[
{id:'ortiz-multi',profile:'ortiz',domain:'ferreteriaortiz.es',name:'Ortiz · La Laguna专业中心',priority:'预约名单 · 优先2',
 identity:'Ferretería Ortiz官网专业中心与FAC品牌目录的Recomba 17、电话一致；与Narváez零售店分开。',
 person:'José Ignacio Ortiz',personStatus:'有具名线索 · 现任采购权待确认',personNote:'Nueva Ferretería于2025-05-29采访其为director comercial（商业负责人）。eInforma采购职能仅显示JOSE IGNACIO O…，职能数据组标2018-01-15。可请公司转接José Ignacio或门锁采购；不能据此认定2026年门锁采购由其决定。',
 personSources:[['2025采访 · 商业职务','https://www.nuevaferreteria.com/texto-diario/mostrar/5307239/ferreteria-ortiz-celebra-60-aniversario-nueva-jornada-puertas-abiertas'],['采购目录 · 姓名遮挡/历史职能','https://www.einforma.com/informacion-empresa/ferreteria-ortiz-madrid']],
 hours:'周一至周五07:30—19:00；周六、周日关闭',hoursNote:'官网专业中心时段。临时休息、节假日与采购人员档期仍需另问；不套用Narváez店的周六营业。',hoursSource:'https://www.ferreteriaortiz.es/store/default.aspx',
 phone:'+34916896206',email:'multicentro@ferreteriaortiz.es',contactNote:'均为官网专业中心业务入口，不是个人采购直线。集团通用：+34 915 734 293 / ventas@ferreteriaortiz.es。',contactSource:'https://www.ferreteriaortiz.es/store/default.aspx',
 brands:'FAC · 品牌方列经销点；TESA、ABUS、CISA、MCM等 · 官网在售；Zitro · 自有五金业务',brandStatus:'经销依据与在售分开',brandNote:'FAC目录明确列La Laguna地址；官网锁芯列表可见其他品牌。各品牌的独家、区域授权及智能锁新品采购权均未确认。',
 brandSources:[['FAC品牌经销目录','https://fac-seguridad.es/directorio/comunidad-de-madrid/madrid/'],['官网锁芯在售列表','https://ferreteriaortiz.es/tiendaonline/43600-bombillos-y-llaves'],['官网Zitro业务','https://www.ferreteriaortiz.es/store/default.aspx']],
 date:'11月6日周五下午，单独预留半天，与Codiven/UNO路线择一',backup:'或11月11—12日另约，两人补访；未取得负责人答复不出发。',
 ask:'请转José Ignacio Ortiz或现任门锁采购/品类负责人，核实新供应商准入和样品测试。',
 coverage:'官网门店、在线锁芯目录、FAC品牌目录、2025行业采访、eInforma职能目录已查；未联系商家，未执行完整工商/财务审计。'},
{id:'uno',profile:'uno',domain:'unocerraduras.es',name:'UNO Cerraduras',priority:'预约名单 · 优先3',
 identity:'官网法律页明确运营方CAVERO FERRETERIA E INSTALACIONES, S.L.，NIF B87191060，地址与门店一致。',
 person:'Andrés Cavero González',personStatus:'公司关系有证据 · 采购职务待确认',personNote:'BORME 2015年公告记其为唯一股东及administrador único；2022-04-11行业采访与UNO经营项目相连。历史任职与经营关系可核，但未找到现任门锁采购职称或采购专用联系资料。',
 personSources:[['BORME 2015 · 第42页，历史任职','https://www.boe.es/borme/dias/2015/01/23/pdfs/BORME-A-2015-15-28.pdf#page=42'],['2022行业采访','https://ferreteria-y-bricolaje.cdecomunicacion.es/noticias/distribucion/51374/ferreteria-cavero-en-pie-tras-el-incendio-de-su-antiguo-establecimiento']],
 hours:'周一至周五09:00—14:00、16:00—19:00；周末关闭',hoursNote:'官网首页及公司介绍一致；预约接待仍需确认。',hoursSource:'https://unocerraduras.es/',
 phone:'+34659616812',email:'clientes@unocerraduras.es',whatsapp:'https://wa.me/34659616812',contactNote:'官网手机/WhatsApp与通用客服邮箱。首页另列914309697，法律页另列913282298，未电话核验这些座机；优先使用659616812。不要把客服邮箱标为采购个人邮箱。',contactSource:'https://unocerraduras.es/',
 brands:'KESO、ABUS、KABA、TESA、FAC、MOTTURA、ISEO等在售；EUROSEGUR为商家自述安装/分销',brandStatus:'已确认经营展示 · 授权范围待核',brandNote:'官网列出品牌和电子锁、门禁业务，并自述EUROSEGUR安装分销。未取得品牌方独家、区域或完整授权证明。',
 brandSources:[['官网公司介绍/品牌','https://unocerraduras.es/conocenos'],['官网在售品类','https://unocerraduras.es/'],['法律页 · 运营主体','https://unocerraduras.es/aviso-legal']],
 date:'11月6日周五16:30左右，按Codiven实际档期衔接',backup:'备选11月12日17:00左右；未预约不要按门店营业推定采购在场。',ask:'请转Andrés或现任负责采购/引进新品牌的人，确认是否接受供应商拜访。',
 coverage:'官网首页、公司介绍与法律页、2015 BORME及2022行业采访已查；完整现任人事/财务审计与现场访谈未执行。'},
{id:'luyce',profile:'luyce',domain:'puertasblindadasacorazadas.com',name:'LUYCE · 安全门展厅',priority:'预约名单 · 优先4',
 identity:'主站联系页列CERRAJERIA LUYCE SL。其站内关联cerrajerosmadrid.com法律页列NIF B86866118；接待店在Javier de Miguel 5，注册地址Bilbao 46不能作拜访终点。',
 person:'Diana Baeza Sabogal',personStatus:'登记任职已找到 · 采购/接待待确认',personNote:'2025-11-26 BORME公告刊登其于2025-11-17获任administrador único。公司登记管理职务不等于采购负责人，未找到采购专用邮箱或本人接待时段。先向展厅问现任采购/安装业务负责人。',
 personSources:[['BORME 2025 · 第10页','https://www.boe.es/borme/dias/2025/11/26/pdfs/BORME-A-2025-226-28.pdf#page=10'],['关联站法律页 · 公司主体','https://www.cerrajerosmadrid.com/aviso-legal']],
 hours:'展厅周一至周五10:00—14:00、17:00—20:00',hoursNote:'周末及节假日24小时仅为应急开锁，不当作展厅采购接待时段。',hoursSource:'https://www.puertasblindadasacorazadas.com/contacto',
 phone:'+34918271979',email:'cerrajerialuyce@hotmail.com',contactNote:'主站联系页公开号码/邮箱。另有同主体业务站915053749；均未电话确认接待。热线不是采购直线。',contactSource:'https://www.puertasblindadasacorazadas.com/contacto',
 brands:'KIUSO · 商家自述分销/安装；ISEO、KABA Expert、CISA AP4、MAUER、ABUS为其配锁选择说明',brandStatus:'商家分销自述 · 品牌方授权未核',brandNote:'已找到具体KIUSO经营表述；不能把可选锁芯全部写成授权代理，也不能把商家页面当KIUSO制造商授权书。',
 brandSources:[['主站 · KIUSO与配锁说明','https://www.puertasblindadasacorazadas.com/puertas-acorazadas-sevilla'],['同主体业务站 · 联系/分销自述','https://www.puertasacorazadaskiuso.madrid/contacto/']],
 date:'11月11日周三17:30左右，两人预约展厅',backup:'备选11月12日17:30；与UNO补访择一或分组。',ask:'确认谁决定安全门配锁与智能锁供应商，约展厅时段，不拨急修热线要求采购立即接待。',
 coverage:'主站联系/产品页、站内关联法律页、同主体业务站、2025 BORME已查；品牌方授权未核，完整财务审计和现场访谈未执行。'},
{id:'rias',profile:'rias',domain:'gruporias.es',name:'Grupo Rías · Leganés',priority:'预约名单 · 优先5 / 补充渠道',
 identity:'官网联系页与FAC品牌目录的Nubes 1 y 3、916428367对应。集团官网还出现Grupo Rias Sur主体，交易主体应以本次分店报价为准，不能混同。',
 person:'Roberto Jiménez',personStatus:'官网确认经理身份 · 门锁采购权待确认',personNote:'集团官网2026-06-10报道明确其为集团经理之一。eInforma的GRUPO RIAS MADRID采购表仅ROBERTO J…，职能数据组标2024-03-21；不能把遮挡姓名直接补全或认定负责门锁。可请分店转采购/品类负责人或Roberto。',
 personSources:[['官网2026经理采访','https://www.gruporias.es/actualidad/grupo-rias-madrid-amplia-su-showroom-con-roblan-para-acercar-la-iluminacion-al-instalador'],['eInforma · 采购职能线索','https://www.einforma.com/informacion-empresa/grupo-rioja-asdrubal']],
 hours:'周一至周四08:00—14:00、15:30—18:00；周五07:30—14:00',hoursNote:'官网分店联系页已核。周五下午不营业，取消原11月6日下午顺访；页面未明确周末，不能据此安排周末拜访。11月不套夏季时段。',hoursSource:'https://www.gruporias.es/index.php/contacto',
 phone:'+34916428367',email:'leganes@gruporias.com',contactNote:'官网Leganés分店公开入口；旧.com邮箱与新.es官网并存属官网列明，不自行改写邮箱域名。',contactSource:'https://www.gruporias.es/index.php/contacto',
 brands:'FAC · 品牌方列Leganés经销点；ROBLAN · 官网2026照明合作',brandStatus:'FAC目录可核 · 门锁现货仍需问',brandNote:'FAC目录对应分店，不能推定独家代理或智能锁经营；ROBLAN属于照明，不能算门锁代理。当前专业重点仍为电气、照明、自动化。',
 brandSources:[['FAC品牌目录 · Leganés','https://fac-seguridad.es/directorio/comunidad-de-madrid/madrid/'],['官网ROBLAN合作报道','https://www.gruporias.es/actualidad/grupo-rias-madrid-amplia-su-showroom-con-roblan-para-acercar-la-iluminacion-al-instalador']],
 date:'改为11月11或12日15:30—16:30，先确认门锁品类与采购人员',backup:'优先邀请来展位；不与11月6日Ortiz下午路线强行合并。',ask:'先问Leganés现在是否仍供FAC/门锁，再找该品类采购；没有相关经营就取消专程拜访。',
 coverage:'集团官网联系/产品/2026采访、FAC品牌目录、eInforma职能表已查；完整法定主体/财务审计和现场访谈未执行。'},
{id:'fixit',profile:'fixit',domain:'fixit.com.es',name:'Fixit / Cobo Calleja候选',priority:'补充摸底 · 尚未确认门锁渠道',
 identity:'官网联系页并列Cobo Calleja Import 2016 S.L.与Ys Family Mayorista 2021；电话相同但合同主体关系仍待核实。',
 person:'尚未找到公开具名采购负责人',personStatus:'待确认 · 不编造姓名',personNote:'官网首页、联系页与公开检索未找到可核的采购姓名、职称或个人业务入口。先电话筛门锁品类并问负责人的姓名/职务；不是确认代理。',
 personSources:[['官网联系页','https://fixit.com.es/contacto.php']],
 hours:'官网列周一至周日09:00—19:30，连续营业',hoursNote:'为官网公布时段；采购人员、周六11月7日接待与门锁经营仍要确认。',hoursSource:'https://fixit.com.es/contacto.php',
 phone:'+34916420235',email:'info@gfmayorista.com',contactNote:'联系页主体段列该邮箱，页脚却列info@fixit.com及另一主体名称，存在归属差异。先用官网电话核实，再发送资料；不认定为采购邮箱。',contactSource:'https://fixit.com.es/contacto.php',
 brands:'仅核实Fixit胶带/耗材展示；没有足够门锁品牌依据',brandStatus:'门锁经营与代理资格待确认',brandNote:'当前首页为胶带、包装、安装及维修耗材，不能因在五金园区就认定做锁具。',
 brandSources:[['当前官网主营','https://fixit.com.es/']],
 date:'11月7日园区路线仅保留为电话筛选通过后的可选站',backup:'若不经营门锁则跳过；不要为等待采购人员耽误返程。',ask:'先问是否批发门锁/锁芯、开票主体与采购接待，有明确答复才安排仓库访问。',
 coverage:'官网首页/联系页及公司名与采购词公开检索已查；存在主体与邮箱差异，未执行工商消歧/现场核验。'}
];
for(const r of AGENCY_REVIEWS){
 const profile=COMPANY_PROFILES[r.profile];
 Object.assign(profile,{checkedAt:AGENCY_REVIEW_DATE,identity:r.identity,facts:[r.hours,r.hoursNote],brands:r.brands+'。'+r.brandNote,contact:r.phone+'；'+r.email+'。'+r.contactNote+' '+r.personStatus+'：'+r.person+'。'+r.personNote,action:r.date+'。'+r.backup+' '+r.ask,risk:'research_required：现任门锁采购权、新供应商接受情况、独家/区域授权与预约均未确认；未发现经核实的近期门锁采购计划。',coverage:r.coverage+' Business未写入公司库。',reviewLink:'#agency-'+r.id,sources:[['官网营业/门店信息',r.hoursSource],...r.personSources,...r.brandSources]});
 const p=GUIDE_EXTRA.find(p=>p.id===r.id);if(p){p.note=r.hours+'。'+r.brands+'。'+r.personStatus+'；详见11月5日逐项核查。';p.phone=r.phone;p.source=r.contactSource}
 BUSINESS_QUERIES.historical[r.domain]={status:'not_found',count:0,checkedAt:AGENCY_REVIEW_DATE,generatedAt:'2026-09-07'};
 BUSINESS_QUERIES.reviewed[r.domain]={status:'not_found',count:0,checkedAt:AGENCY_REVIEW_DATE};
}
function agencySourcesMarkup(s){return `<div class="agency-evidence">${s.map(([title,url])=>`<a href="${url}" target="_blank" rel="noopener">${esc(title)} ↗</a>`).join('')}</div>`}
function agencyReviewMarkup(r){return `<article class="agency-review" id="agency-${r.id}"><div class="agency-heading"><div><span class="label">${esc(r.priority)}</span><h3>${esc(r.name)}</h3></div><span class="agency-date">公开核查 ${AGENCY_REVIEW_DATE}<br>尚未联系 / 未预约</span></div><div class="agency-grid"><section class="agency-item pending"><span class="agency-status">? ${esc(r.personStatus)}</span><h4>采购 / 可转接的人</h4><b>${esc(r.person)}</b><p>${esc(r.personNote)}</p>${agencySourcesMarkup(r.personSources)}</section><section class="agency-item"><span class="agency-status">✓ 已确认官网公布时段</span><h4>营业时间 · 马德里当地</h4><b>${esc(r.hours)}</b><p>${esc(r.hoursNote)}</p>${agencySourcesMarkup([['官网时段依据',r.hoursSource]])}</section><section class="agency-item ${r.id==='fixit'?'pending':''}"><span class="agency-status">${r.id==='fixit'?'? 主体 / 邮箱归属待核':'✓ 官网公开业务入口 · 非采购直线'}</span><h4>联系方式</h4><a class="agency-phone" href="tel:${r.phone}">${esc(r.phone)}</a><br><a href="mailto:${r.email}">${esc(r.email)}</a>${r.whatsapp?`<p><a href="${r.whatsapp}" target="_blank" rel="noopener">官方WhatsApp入口 ↗</a></p>`:''}<p>${esc(r.contactNote)}</p>${agencySourcesMarkup([['联系依据',r.contactSource]])}</section><section class="agency-item ${r.id==='fixit'?'pending':''}"><span class="agency-status">${r.id==='fixit'?'?':'◐'} ${esc(r.brandStatus)}</span><h4>品牌与代理证据</h4><b>${esc(r.brands)}</b><p>${esc(r.brandNote)}</p>${agencySourcesMarkup(r.brandSources)}</section></div><div class="agency-next"><b>建议拜访 · 待约</b><p>${esc(r.date)}。${esc(r.backup)}</p><p>${esc(r.ask)}</p><div class="kit-action-row"><button class="kit-button" data-agency-map="${r.id}">地图 / 公司背调</button><a class="kit-button" href="https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent((GUIDE_EXTRA.find(p=>p.id===r.id)||{}).address||r.name)}&travelmode=transit" target="_blank" rel="noopener">地铁 / 公交 ↗</a><a class="kit-button" href="https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent((GUIDE_EXTRA.find(p=>p.id===r.id)||{}).address||r.name)}&travelmode=driving" target="_blank" rel="noopener">打车路线 ↗</a></div></div><details class="agency-coverage"><summary>身份匹配、检索覆盖与未解决项</summary><p>${esc(r.identity)}</p><p>${esc(r.coverage)}</p><p>Business历史索引与已审核库于2026-11-05按${esc(r.domain)}查询均未命中；未写入数据库。没有已确认的采购项目、预算或订单。页面未标发布日期的内容按访问日核查，不当作近期事件。</p></details></article>`}
document.addEventListener('DOMContentLoaded',()=>{
 const section=`<section id="agency-reviews" class="agency-reviews"><div class="section-heading"><div><p class="eyebrow">CHANNEL CHECK / 2026-11-05</p><h2>其余渠道，逐项核实。</h2></div><p>4家预约对象 + 1家园区候选；采购姓名线索与已确认职务分开看。</p></div><p class="agency-legend"><b>✓ 官网 / 品牌方事实</b>　<span>? 橙色：现任采购权、历史线索或缺口待确认</span><br>◐ 品牌已经营 / 商家自述分销，不等于取得独家或区域授权。营业时间已公开，也不等于采购人员在场。</p><p class="agency-alert">行程修正：Rías周五14:00后不营业，取消11月6日下午顺访，改约11月11—12日或展位见面。</p><nav class="agency-jumps" aria-label="选择代理核查卡">${AGENCY_REVIEWS.map(r=>`<a href="#agency-${r.id}">${esc(r.name)}</a>`).join('')}</nav>${AGENCY_REVIEWS.map(agencyReviewMarkup).join('')}</section>`;
 document.getElementById('markets').insertAdjacentHTML('beforeend',section);
 document.querySelectorAll('[data-agency-map]').forEach(b=>b.onclick=()=>{nearby=null;setFilter('all');selectPlace(b.dataset.agencyMap);$('detail').scrollIntoView({behavior:'smooth',block:'start'})});
});
