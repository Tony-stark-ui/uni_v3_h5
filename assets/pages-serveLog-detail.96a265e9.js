import{_ as a}from"./uni-rate.56b844b8.js";import{a3 as e,x as t,o as s,g as o,e as r,A as i,f as n,j as l,k as d}from"./index.338b6ccd.js";import{d as u}from"./model.61870441.js";import{T as m}from"./index.7e55b06c.js";import{T as p}from"./Table.fcc6a351.js";import"./uni-icons.a9b6e36d.js";import"./plugin-vue_export-helper.21dcd24c.js";import"regenerator-runtime";const c={__name:"detail",setup(c){e((a=>{f.value=JSON.parse(decodeURIComponent(a.data))}));const f=t({});return(e,t)=>{const c=l(d("uni-rate"),a);return s(),o("div",{class:"container padding_all_10"},[r(i(m),{"title-text":"服务记录"}),r(i(p),{"info-table-head":i(u),info:f.value},null,8,["info-table-head","info"]),2===f.value.isEval?(s(),o("div",{key:0,class:"rate"},[r(i(m),{"title-text":"服务评价"}),r(c,{readonly:!0,value:f.value.star},null,8,["value"])])):n("v-if",!0)])}}};export{c as default};