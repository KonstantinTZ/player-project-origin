!function(){const e=document.querySelectorAll(".polygon"),t=document.querySelector(".menu"),c=document.querySelector(".drawer"),s=document.querySelector(".close");e.forEach((e=>{e.querySelectorAll("button").forEach((e=>{e.addEventListener("mouseover",(e=>{const t=e.target.closest(".column").querySelector(".column__top"),c=getComputedStyle(t).backgroundColor;"rgba(233, 117, 44, 0.7)"===c&&(t.classList.remove("column__st3-active","column__st2-active"),t.classList.add("column__st2-2-active")),"rgba(125, 97, 155, 0.7)"===c&&(t.classList.remove("column__st3-active","column__st2-active"),t.classList.add("column__st3-2-active"))})),e.addEventListener("click",(e=>{const t=e.target.closest(".column").querySelector(".column__top");getComputedStyle(t).backgroundColor.includes("233, 117, 44")?(t.classList.remove("column__st3-active","column__st2-active","column__st2-2-active","column__st3-2-active"),t.classList.add("column__st2-3-active")):(t.classList.remove("column__st3-active","column__st2-active","column__st2-2-active","column__st3-2-active"),t.classList.add("column__st3-3-active"))}))})),e.addEventListener("mouseover",(e=>{const t=e.target.closest(".column").querySelector(".column__top"),c=getComputedStyle(t).backgroundColor;"rgba(233, 117, 44, 0.7)"===c&&t.classList.add("column__st2-active"),"rgba(125, 97, 155, 0.7)"===c&&t.classList.add("column__st3-active")})),e.addEventListener("mouseout",(e=>{e.target.closest(".column").querySelector(".column__top").classList.remove("column__st3-active","column__st2-active","column__st2-2-active","column__st3-2-active","column__st2-3-active","column__st3-3-active")}))})),t.addEventListener("click",(e=>{c.classList.contains("drawer__close")?(c.classList.remove("drawer__close"),c.classList.add("drawer__open")):(c.classList.add("drawer__close"),c.classList.remove("drawer__open"))})),s.addEventListener("click",(e=>{c.classList.contains("drawer__close")?(c.classList.remove("drawer__close"),c.classList.add("drawer__open")):(c.classList.add("drawer__close"),c.classList.remove("drawer__open"))}))}();