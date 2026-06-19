if (location.hash === '#guia-sites') history.replaceState(null, '', '#inicio');

const DATA_TEXT = `
flora|Herbáceo|Alismatales|Araceae|Philodendron ornatum|Filodendro|Sumak Kawsay In Situ
flora|Arbustivo|Apiales|Araliaceae|Sciodaphyllum sp.|Pata de gallo|Sumak Kawsay In Situ
flora|Arbustivo|Gentianales|Rubiaceae|Faramea corymbosa|Café silvestre|Sumak Kawsay In Situ
flora|Arbustivo|Gentianales|Rubiaceae|Palicourea guianensis|Cafecillo|Sumak Kawsay In Situ
flora|Arbustivo|Gentianales|Rubiaceae|Psychotria brachiata|Palo de cachimbo|Sumak Kawsay In Situ
flora|Arbustivo|Gentianales|Rubiaceae|Psychotria carthagenensis|Sameruca|Sumak Kawsay In Situ
flora|Arbustivo|Gentianales|Rubiaceae|Psychotria viridis|Chacruna|Sumak Kawsay In Situ
flora|Arbustivo|Lamiales|Gesneriaceae|Besleria notabilis|Campanita anaranjada|Sumak Kawsay In Situ
flora|Herbáceo|Lamiales|Gesneriaceae|Columnea calotricha|Columnea|Sumak Kawsay In Situ
flora|Arbustivo|Myrtales|Melastomataceae|Miconia sp.|No identificado|Sumak Kawsay In Situ
flora|Herbáceo|Myrtales|Melastomataceae|Salpinga secunda|Mullaca azul|Sumak Kawsay In Situ
flora|Arbusto perenne|Morfotipo|No identificada|Morfotipo 1 (no identificado)|Morfotipo 1|Sumak Kawsay In Situ
flora|Arbustivo|Piperales|Piperaceae|Piper sp.|Piper|Sumak Kawsay In Situ
flora|Arbustivo|Santalales|Olacaceae|Heisteria acuminata|Chupeta|Sumak Kawsay In Situ
flora|Herbáceo|Polypodiales|Athyriaceae|Diplazium caudatum|Helecho de monte|Sumak Kawsay In Situ
flora|Herbáceo|Polypodiales|Hypodematiaceae|Didymochlaena truncatula|Helecho caoba|Sumak Kawsay In Situ
fauna|Amphibia|Anura|Hylidae|Boana almendarizae|Rana arborícola amarilla|Sumak Kawsay In Situ
fauna|Amphibia|Anura|Hylidae|Boana appendiculata|Rana arborícola de apéndice|Sumak Kawsay In Situ
fauna|Amphibia|Anura|Hylidae|Boana cinerascens|Rana arborícola cenicienta|Sumak Kawsay In Situ
fauna|Amphibia|Anura|Hylidae|Boana lanciformis|Rana arborícola lanceolada|Sumak Kawsay In Situ
fauna|Amphibia|Anura|Hylidae|Dendropsophus bifurcus|Rana payaso pequeña|Sumak Kawsay In Situ
fauna|Amphibia|Anura|Hylidae|Osteocephalus sp.|Rana arborícola amazónica|Sumak Kawsay In Situ
fauna|Amphibia|Anura|Leptodactylidae|Engystomops petersi|Rana enana de Peters|Sumak Kawsay In Situ
fauna|Amphibia|Anura|Leptodactylidae|Leptodactylus pentadactylus|Rana terrestre gigante|Sumak Kawsay In Situ
fauna|Amphibia|Anura|Leptodactylidae|Leptodactylus wagneri|Rana terrestre de Wagner|Sumak Kawsay In Situ
fauna|Amphibia|Anura|Strabomantidae|Pristimantis rubicundus|Cutin rubicundo|Sumak Kawsay In Situ
fauna|Amphibia|Anura|Strabomantidae|Pristimantis quaquaversus|Cutín del río Coca|Sumak Kawsay In Situ
fauna|Amphibia|Anura|Strabomantidae|Pristimantis sp.|Rana de lluvia|Sumak Kawsay In Situ
fauna|Amphibia|Gymnophiona|Caeciliidae|Caecilia abitaguae|Cecilia de Abitagua|Sumak Kawsay In Situ
fauna|Reptilia|Squamata|Colubridae|Imantodes cenchoa|Culebra ojos de gato|Sumak Kawsay In Situ
fauna|Reptilia|Squamata|Dactyloidae|Anolis punctatus|Anolis verde amazónico|Sumak Kawsay In Situ
fauna|Reptilia|Squamata|Gymnophthalmidae|Gelanesaurus flavogularis|Lagartija payasa de garganta amarilla|Sumak Kawsay In Situ
fauna|Reptilia|Squamata|Hoplocercidae|Enyalioides praestabilis|Iguanas enanas|Sumak Kawsay In Situ
fauna|Reptilia|Squamata|Viperidae|Bothrocophias microphthalmus|Hoja podrida / Equis tigre|Sumak Kawsay In Situ
fauna|Mammalia|Primates|Callitrichidae|Leontocebus lagonotus|Tamarín ensillado de dorso rojo|Sumak Kawsay In Situ
fauna|Amphibia|Anura|Bufonidae|Atelopus balios|Jambato del río pescado|Bioparque Yanacocha
fauna|Amphibia|Anura|Dendrobatidae|Oophaga sylvatica|Rana diablito|Bioparque Yanacocha
fauna|Reptilia|Crocodilia|Alligatoridae|Caiman crocodilus|Caiman de anteojos|Bioparque Yanacocha
fauna|Reptilia|Crocodilia|Alligatoridae|Melanosuchus niger|Caiman negro|Bioparque Yanacocha
fauna|Reptilia|Squamata|Boidae|Boa constrictor|Boa matacaballo|Bioparque Yanacocha
fauna|Reptilia|Squamata|Pythonidae|Python regius|Pitón bola|Bioparque Yanacocha
fauna|Reptilia|Squamata|Viperidae|Bothrops asper|Equis del occidente.|Bioparque Yanacocha
fauna|Reptilia|Squamata|Viperidae|Bothrops atrox|Equis del Oriente|Bioparque Yanacocha
fauna|Reptilia|Testudines|Podocnemididae|Podocnemis expansa|Tortuga charapa|Bioparque Yanacocha
fauna|Reptilia|Testudines|Testudinidae|Chelonoidis denticulatus|Tortuga Motelo|Bioparque Yanacocha
fauna|Mammalia|Artiodactyla|Cervidae|Mazama zamora|Venado colorado|Bioparque Yanacocha
fauna|Mammalia|Carnivora|Canidae|Speothos venaticus|Zorro vinagre|Bioparque Yanacocha
fauna|Mammalia|Carnivora|Felidae|Herpailurus yagouaroundi|Yaguarundí|Bioparque Yanacocha
fauna|Mammalia|Carnivora|Felidae|Leopardus pardalis|Ocelote|Bioparque Yanacocha
fauna|Mammalia|Carnivora|Felidae|Puma concolor|Puma.|Bioparque Yanacocha
fauna|Mammalia|Carnivora|Mustelidae|Eira barbara|Cabeza de mate|Bioparque Yanacocha
fauna|Mammalia|Carnivora|Mustelidae|Lontra longicaudis|Nutria neotropical|Bioparque Yanacocha
fauna|Mammalia|Carnivora|Procyonidae|Nasua nasua|Coati sudamericano|Bioparque Yanacocha
fauna|Mammalia|Primates|Atelidae|Ateles belzebuth|Mono araña|Bioparque Yanacocha
fauna|Mammalia|Primates|Atelidae|Lagothrix lagotricha|Mono chorongo|Bioparque Yanacocha
fauna|Mammalia|Primates|Callitrichidae|Cebuella pygmaea|Tití pigmeo|Bioparque Yanacocha
fauna|Mammalia|Primates|Cebidae|Saimiri sciureus|Mono barizo|Bioparque Yanacocha
fauna|Mammalia|Primates|Pitheciidae|Pithecia napensis|Mono Saki de Napo|Bioparque Yanacocha
fauna|Mammalia|Primates|Pitheciidae|Plecturocebus discolor|Cotoncillo rojo|Bioparque Yanacocha
fauna|Mammalia|Rodentia|Caviidae|Hydrochoerus hydrochaeris|Capibara|Bioparque Yanacocha
fauna|Mammalia|Rodentia|Sciuridae|Simosciurus stramineus|Ardilla de Guayaquil|Bioparque Yanacocha
fauna|Aves|Accipitriformes|Accipitridae|Geranoaetus melanoleucus|Águila pechinegra|Bioparque Yanacocha
fauna|Aves|Falconiformes|Falconidae|Falco peregrinus|Halcón peregrino|Bioparque Yanacocha
fauna|Aves|Piciformes|Ramphastidae|Pteroglossus castanotis|Arasari castaño.|Bioparque Yanacocha
fauna|Aves|Psittaciformes|Psittacidae|Amazona amazonica|Loro amazónico|Bioparque Yanacocha
fauna|Aves|Psittaciformes|Psittacidae|Ara ararauna|Guacamayo pechiamarillo|Bioparque Yanacocha
fauna|Aves|Psittaciformes|Psittacidae|Ara chloroptera|Guacamayo rojo con verde|Bioparque Yanacocha
fauna|Aves|Psittaciformes|Psittacidae|Ara macao|Guacamayo escarlata|Bioparque Yanacocha
fauna|Aves|Strigiformes|Strigidae|Asio stygius|Búho Orejudo|Bioparque Yanacocha
fauna|Aves|Strigiformes|Strigidae|Pulsatrix perspicillata|Búho de anteojos|Bioparque Yanacocha
fauna|Aves|Strigiformes|Tytonidae|Tyto alba|Lechuza de campanario|Bioparque Yanacocha
fauna|Actinopterygii|Gymnotiformes|Electrophoridae|Electrophorus electricus|Anguila eléctrica|Bioparque Yanacocha
`;

const DATA = DATA_TEXT.trim().split('\n').map((line, i) => {
  const [kingdom, group, order, family, scientific, common, site] = line.split('|');
  return { id: i + 1, kingdom, group, order, family, scientific, common, site };
});
const orderInfo={Gentianales:'Orden de angiospermas diverso; en el inventario concentra varios arbustos del sotobosque, especialmente Rubiaceae.',Lamiales:'Orden de plantas con flores donde se registraron especies ornamentales y de sotobosque húmedo.',Polypodiales:'Orden de helechos; plantas vasculares sin flores ni semillas que se reproducen mediante esporas.',Anura:'Orden de anfibios sin cola en etapa adulta; incluye ranas y sapos, muchos asociados a cuerpos de agua y actividad nocturna.',Squamata:'Orden de reptiles con escamas corporales; agrupa serpientes y lagartijas con hábitos muy variados.',Primates:'Orden de mamíferos arborícolas o semiarborícolas, con comportamiento social y alta importancia en dispersión de semillas.',Carnivora:'Orden de mamíferos depredadores u omnívoros, importantes para el equilibrio ecológico.',Psittaciformes:'Orden de loros y guacamayos; aves carismáticas usadas en educación ambiental y conservación.',Strigiformes:'Orden de rapaces nocturnas, como búhos y lechuzas, adaptadas a cazar con poca luz.'};
const familyInfo={Rubiaceae:'Familia frecuente en bosques tropicales; suele presentar hojas opuestas, flores pequeñas y frutos tipo baya o drupa.',Gesneriaceae:'Familia de plantas de ambientes húmedos, con flores vistosas y valor ornamental.',Melastomataceae:'Familia reconocible por hojas simples con nervaduras marcadas; importante en sotobosques tropicales.',Hylidae:'Familia de ranas arborícolas; muchas poseen discos adhesivos para trepar sobre hojas y ramas.',Dendrobatidae:'Familia de ranas pequeñas y coloridas; muchas presentan compuestos defensivos y alto valor educativo.',Viperidae:'Familia de serpientes venenosas, depredadoras importantes dentro de la cadena trófica.',Felidae:'Familia de felinos silvestres; depredadores clave en los ecosistemas.',Psittacidae:'Familia de loros y guacamayos, importantes para educación ambiental y conservación.',Callitrichidae:'Familia de primates pequeños, sociales y arborícolas.',Alligatoridae:'Familia de caimanes, reptiles semiacuáticos asociados a humedales y ríos.'};
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)], norm=v=>(v||'').toString().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,''), uniq=a=>[...new Set(a.filter(Boolean))].sort((x,y)=>x.localeCompare(y)), groupBy=(a,k)=>a.reduce((o,x)=>((o[x[k]]??=[]).push(x),o),{}), icon=x=>x.kingdom==='flora'?'🌿':x.group==='Amphibia'?'🐸':x.group==='Reptilia'?'🐍':x.group==='Mammalia'?'🐒':x.group==='Aves'?'🦜':'🐟';
function routeTo(route){if(!$('#'+route)||route==='guia-sites')route='inicio';$$('.view').forEach(v=>v.classList.remove('active-view'));$('#'+route).classList.add('active-view');$$('.nav a').forEach(a=>a.classList.toggle('active',a.dataset.route===route));$('#mainNav').classList.remove('open');scrollTo({top:0,behavior:'smooth'});} 
document.addEventListener('click',e=>{const route=e.target.closest('[data-route]');if(route){e.preventDefault();routeTo(route.dataset.route);history.replaceState(null,'','#'+(route.dataset.route==='guia-sites'?'inicio':route.dataset.route));}const tab=e.target.closest('[data-gallery]');if(tab){galleryMode=tab.dataset.gallery;galleryFilter='all';$$('.tab').forEach(t=>t.classList.toggle('active',t===tab));renderGallery();}const chip=e.target.closest('[data-chip]');if(chip){galleryFilter=chip.dataset.chip;renderGallery();}});
$('#menuToggle').onclick=()=>$('#mainNav').classList.toggle('open');$('#toTop').onclick=()=>scrollTo({top:0,behavior:'smooth'});addEventListener('scroll',()=>$('#toTop').classList.toggle('visible',scrollY>500));
function initHome(){const flora=DATA.filter(x=>x.kingdom==='flora'),fauna=DATA.filter(x=>x.kingdom==='fauna');$('#metricGrid').innerHTML=[['Flora',flora.length],['Fauna',fauna.length],['Órdenes',uniq(DATA.map(x=>x.order)).length],['Familias',uniq(DATA.map(x=>x.family)).length]].map(([l,v])=>`<div class="metric"><strong>${v}</strong><span>${l}</span></div>`).join('');$('#methodTimeline').innerHTML=['Cuadrantes anidados para flora','Recorridos nocturnos y observación directa','Cámaras trampa y trampas Sherman','Visita técnica a Bioparque Yanacocha'].map((m,i)=>`<div class="timeline-item"><b>Etapa ${i+1}</b><p>${m}</p></div>`).join('');}
function fillSelect(id,values){const el=$(id),first=el.firstElementChild.outerHTML;el.innerHTML=first+values.map(v=>`<option value="${v}">${v}</option>`).join('');}
function speciesCard(x){return `<article class="species-card"><h4>${icon(x)} ${x.common}</h4><em>${x.scientific}</em><div class="species-meta"><span>${x.group}</span><span>${x.site}</span></div><p>Registro perteneciente a la familia <strong>${x.family}</strong>, dentro del orden <strong>${x.order}</strong>. Esta ficha se usa para organizar la información taxonómica y facilitar la interpretación ambiental.</p></article>`;}
function renderTaxonomy(kind){const q=norm($('#'+kind+'Search').value),f=$('#'+kind+'Filter').value,list=DATA.filter(x=>x.kingdom===kind).filter(x=>(f==='all'||x.group===f)&&norm([x.common,x.scientific,x.order,x.family,x.site,x.group].join(' ')).includes(q)),orders=groupBy(list,'order'),target=$('#'+kind+'Taxonomy'),names=Object.keys(orders).sort();if(!names.length){target.innerHTML='<div class="empty">No se encontraron resultados.</div>';return;}target.innerHTML=names.map(order=>{const items=orders[order],fams=groupBy(items,'family'),od=orderInfo[order]||`Orden taxonómico registrado en el componente de ${kind}. Agrupa las familias y especies levantadas durante la gira académica.`;return `<article class="taxonomy-card"><header><div><h2>${order}</h2><p>${od}</p></div><span class="pill">${items.length} ficha(s)</span></header><div class="family-grid">${Object.keys(fams).sort().map(fam=>`<details class="family-block" open><summary><h3>${fam}</h3><span class="pill">${fams[fam].length}</span></summary><p class="desc">${familyInfo[fam]||`Familia ${fam}: grupo taxonómico registrado durante el inventario. Aquí se ubican las fichas correspondientes para mantener la clasificación ordenada.`}</p><div class="species-list">${fams[fam].map(speciesCard).join('')}</div></details>`).join('')}</div></article>`;}).join('');}
let galleryMode='flora',galleryFilter='all';
function renderGalleryFilters(){const groups=uniq(DATA.filter(x=>x.kingdom===galleryMode).map(x=>x.group));$('#galleryFilters').innerHTML=['all',...groups].map(g=>`<button class="chip ${galleryFilter===g?'active':''}" data-chip="${g}">${g==='all'?'Todo':g}</button>`).join('');}
function renderGallery(){renderGalleryFilters();const list=DATA.filter(x=>x.kingdom===galleryMode).filter(x=>galleryFilter==='all'||x.group===galleryFilter);$('#galleryGrid').innerHTML=list.map(x=>`<figure class="gallery-card"><div class="gallery-img">${icon(x)}</div><figcaption><h3>${x.common}</h3><em>${x.scientific}</em><small>${x.group} • ${x.family}</small></figcaption></figure>`).join('');}
function init(){initHome();fillSelect('#floraFilter',uniq(DATA.filter(x=>x.kingdom==='flora').map(x=>x.group)));fillSelect('#faunaFilter',uniq(DATA.filter(x=>x.kingdom==='fauna').map(x=>x.group)));['flora','fauna'].forEach(k=>{$('#'+k+'Search').oninput=()=>renderTaxonomy(k);$('#'+k+'Filter').onchange=()=>renderTaxonomy(k);renderTaxonomy(k);});renderGallery();routeTo(location.hash.replace('#','')||'inicio');}
init();
