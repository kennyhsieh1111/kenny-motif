/* le dressage plating motif: the geometry of a dressed plate, shared by both pages.
   index.html paints it to canvases that turn with the scroll; symphonies.html draws it as SVG. */
/* ---------- plated backdrop: a plate (rim + well), spoon swooshes, dot trails, herbs and crumbs; each group turns at its own speed ---------- */
const PLATE=['#ECE5D6','#E3D9C5','#C7BBA1'];
const SAUCE=['#B9603C','#C98A5E','#DBA35F','#E8C879','#889670','#A8553A','#9C4A5E'];
const DOTS=['#B9603C','#C98A3E','#E3B23C','#8C3A4F','#6A7A52','#D98A92'];
const HERB=['#4A5B3A','#6A7A52','#889670'];
function rng(seed){return()=>{seed|=0;seed=seed+0x6D2B79F5|0;let t=Math.imul(seed^seed>>>15,1|seed);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
const P=(r,a)=>`${(r*Math.cos(a)).toFixed(1)} ${(r*Math.sin(a)).toFixed(1)}`;
/* outer circle clockwise, inner counter-clockwise: the inner one becomes a hole */
function ring(r0,r1){const c=(r,s)=>`M${r} 0A${r} ${r} 0 1 ${s} ${-r} 0A${r} ${r} 0 1 ${s} ${r} 0Z`;return c(r1,1)+(r0>0?c(r0,0):'')}
/* a spoon swoosh along an arc: heavy where the spoon lands, thinning out as it drags */
function swoosh(rr,a0,span,w){const o=[],i=[];for(let j=0;j<=28;j++){const t=j/28,a=a0+span*t,h=w*Math.min(1,t*5)*Math.pow(1-t,.55)+.5;o.push(P(rr+h,a));i.push(P(rr-h,a))}
  return 'M'+o.join('L')+'L'+i.reverse().join('L')+'Z'}
function dot(r,a,s){const x=r*Math.cos(a),y=r*Math.sin(a),f=v=>v.toFixed(1);return `M${f(x+s)} ${f(y)}A${s} ${s} 0 1 1 ${f(x-s)} ${f(y)}A${s} ${s} 0 1 1 ${f(x+s)} ${f(y)}Z`}
function leaf(r,a,l,turn){const x=r*Math.cos(a),y=r*Math.sin(a),c=Math.cos(a+turn),s=Math.sin(a+turn),w=l*.45;
  const q=(u,v)=>`${(x+u*c-v*s).toFixed(1)} ${(y+u*s+v*c).toFixed(1)}`;return `M${q(-l,0)}Q${q(0,w)} ${q(l,0)}Q${q(0,-w)} ${q(-l,0)}Z`}
/* groups: [plate, sauce, garnish] — m swooshes, k dot trails, l herb leaves, c crumbs */
function plating(seed,R,opt={}){const r=rng(seed),D2=Math.PI/180,pick=a=>a[Math.floor(r()*a.length)];
  const plate=[{d:ring(R*.62,R),c:PLATE[1],o:.85},{d:ring(0,R*.62),c:PLATE[0],o:.6},{d:ring(R*.975,R),c:PLATE[2],o:.7},{d:ring(R*.61,R*.625),c:PLATE[2],o:.5}];
  const sauce=[];let a=r()*Math.PI*2,ms=0;
  for(let i=0;i<(opt.m||2);i++){const rr=R*(.3+r()*.22),w=R*(.045+r()*.04);sauce.push({d:swoosh(rr,a,(70+r()*90)*D2,w),c:pick(SAUCE),o:.75+r()*.2});ms=Math.max(ms,rr+w);a+=(120+r()*90)*D2}
  const garnish=[];let gs=0;a=r()*Math.PI*2;
  for(let i=0;i<(opt.k||3);i++){const rr=R*(.24+r()*.34),c=pick(DOTS);let s=R*(.03+r()*.02),b=a;
    for(let j=0,n=4+Math.floor(r()*3);j<n;j++){garnish.push({d:dot(rr,b,s),c,o:.85});gs=Math.max(gs,rr+s);b+=s*2.8/rr;s*=.74}
    a+=(90+r()*80)*D2}
  for(let i=0;i<(opt.l||3);i++){const rr=R*(.2+r()*.38),l=R*(.035+r()*.03);garnish.push({d:leaf(rr,r()*Math.PI*2,l,r()*Math.PI),c:pick(HERB),o:.8});gs=Math.max(gs,rr+l)}
  for(let i=0;i<(opt.c||10);i++){const rr=R*(.15+r()*.45),s=R*(.006+r()*.01);garnish.push({d:dot(rr,r()*Math.PI*2,s),c:pick(DOTS),o:.7});gs=Math.max(gs,rr+s)}
  const out=[plate,sauce,garnish];out.ext=[R*1.01,ms,gs];return out}
