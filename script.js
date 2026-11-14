const $=s=>document.querySelector(s);let cat="All",cur=null;
const O=PRODUCTS.find(p=>p.id==="orbi");
const root=document.documentElement;
function setColor(c){root.style.setProperty("--ring",c.b);root.style.setProperty("--lid",c.l);$("#cname").textContent=c.n;
document.querySelectorAll(".sw").forEach(x=>x.setAttribute("aria-pressed",x.dataset.n===c.n));}
$("#swatches").innerHTML=COLORS.map(c=>`<button class="sw" data-n="${c.n}" aria-label="${c.n}" aria-pressed="false" style="background:linear-gradient(135deg,${c.b} 50%,${c.l} 50%)"></button>`).join("");
document.querySelectorAll(".sw").forEach((x,i)=>x.onclick=()=>setColor(COLORS[i]));setColor(COLORS[2]);
const scr=$("#scr"),face=$("#face"),msgs=["Hi","Hello","Recxa Tech"];let k=0,t=0;
setInterval(()=>{t++;if(t%2){face.style.opacity=0;scr.textContent=msgs[k++%msgs.length];scr.style.opacity=1}else{scr.style.opacity=0;face.style.opacity=1}},2200);
$("#gallery").innerHTML=PHOTOS.gallery.map((s,i)=>`<img src="${s}" alt="Orbi Ring photo ${i+1}" loading="lazy">`).join("");
$("#oprice").textContent=O.price;
$("#ofeat").innerHTML=O.features.map(f=>`<li><i>✓</i><span>${f}</span></li>`).join("");
$("#ospecs").innerHTML=O.specs.map(s=>`<span>${s}</span>`).join("");
$("#colorList").innerHTML=COLORS.map(c=>`<span class="cc"><i style="background:linear-gradient(135deg,${c.b} 50%,${c.l} 50%)"></i>${c.n}</span>`).join("");
$("#menu").onclick=()=>$("#links").classList.toggle("open");
document.querySelectorAll("#links a").forEach(a=>a.onclick=()=>$("#links").classList.remove("open"));
function render(){const cats=["All",...new Set(PRODUCTS.map(p=>p.cat))];
$("#filters").innerHTML=cats.map(c=>`<button class="chip${c===cat?" on":""}" data-c="${c}">${c}</button>`).join("");
document.querySelectorAll(".chip").forEach(b=>b.onclick=()=>{cat=b.dataset.c;render()});
$("#grid").innerHTML=PRODUCTS.filter(p=>cat=="All"||p.cat==cat).map(p=>`<article class="card">${p.image?`<img class="pimg" src="${p.image}" alt="${p.name}" loading="lazy">`:`<div class="ico">${p.icon}</div>`}<small>${p.status}</small><h3>${p.name}</h3><p>${p.desc}</p><div class="tags">${p.specs.map(s=>`<span>${s}</span>`).join("")}</div><div class="foot"><b>${p.price||"Coming soon"}</b><button class="btn ${p.available?"pri":"ghost"} sm" data-o="${p.id}">${p.available?"Order now":"Join waitlist"}</button></div></article>`).join("");
document.querySelectorAll("[data-o]").forEach(b=>b.onclick=()=>openM(b.dataset.o));}
render();
$("#founder").innerHTML=`<div class="av">${FOUNDER.photo?`<img src="${FOUNDER.photo}" alt="${FOUNDER.name}">`:FOUNDER.name.split(" ").map(w=>w[0]).join("")}</div><div><h3>${FOUNDER.name}</h3><em>${FOUNDER.title}</em><p>${FOUNDER.bio}</p></div>`;
$("#fb").href=COMPANY.facebook;$("#ig").href=COMPANY.instagram;
$("#tel").href="tel:"+COMPANY.phone;$("#tel").textContent="📞 Call "+COMPANY.phone;
$("#mail").href="tel:"+COMPANY.phone;$("#mail").textContent="📞 "+COMPANY.phone;$("#loc").textContent=COMPANY.location;
function openM(id){cur=PRODUCTS.find(p=>p.id===id);
$("#mtitle").textContent=cur.available?"Order "+cur.name:"Join the waitlist";
$("#mprod").textContent=cur.name+(cur.price?" · "+cur.price:"");
$("#m").classList.add("open");document.body.style.overflow="hidden";$("#x").focus()}
function closeM(){$("#m").classList.remove("open");document.body.style.overflow=""}
$("#x").onclick=closeM;$("#m").onclick=e=>{if(e.target.id=="m")closeM()};
document.onkeydown=e=>{if(e.key=="Escape")closeM()};
document.querySelectorAll("[data-orbi]").forEach(b=>b.onclick=e=>{e.preventDefault();openM("orbi")});
$("#yr").textContent=new Date().getFullYear();
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll(".rv").forEach(e=>io.observe(e));
