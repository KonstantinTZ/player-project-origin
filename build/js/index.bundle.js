!function(){const e=document.querySelectorAll(".polygon"),t=document.querySelector(".menu"),c=document.querySelector(".drawer"),s=document.querySelector(".close"),o=document.querySelectorAll(".column__audio"),l=document.getElementById("dialog1");e.forEach((e=>{e.addEventListener("mouseover",(e=>{const t=e.target.closest(".column").querySelector(".column__top"),c=getComputedStyle(t).backgroundColor;"rgba(233, 117, 44, 0.3)"===c&&t.classList.add("column__st2-active"),"rgba(125, 97, 155, 0.3)"===c&&t.classList.add("column__st3-active")})),e.addEventListener("mouseout",(e=>{e.target.closest(".column").querySelector(".column__top").classList.remove("column__st3-active","column__st2-active","column__st2-2-active","column__st3-2-active","column__st2-3-active","column__st3-3-active")}))})),t.addEventListener("click",(e=>{c.classList.contains("drawer__close")?(c.classList.remove("drawer__close"),c.classList.add("drawer__open")):(c.classList.add("drawer__close"),c.classList.remove("drawer__open"))})),s.addEventListener("click",(e=>{c.classList.contains("drawer__close")?(c.classList.remove("drawer__close"),c.classList.add("drawer__open")):(c.classList.add("drawer__close"),c.classList.remove("drawer__open"))}));let r=document.querySelector(".container");function a(){let e,t=document.body.clientWidth,c=document.body.clientHeight;t>1e3?(e=t/c>16/9?c/1080:t/1920,r.style.transform=`scale(${e})`):(e=t/2558,r.style.transform=`scale(${e})`)}window.addEventListener("resize",a),a(),o.forEach((e=>{e.addEventListener("click",(()=>{l.style.visibility="visible",a()}))})),l.querySelector(".dialog__close").addEventListener("click",(()=>{l.style.visibility="hidden"}))}();