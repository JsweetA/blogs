import{b as e,i as t,m as n,G as r,l as i}from"./layout-556435fe.js";import{i as a,u as d,s as o,a as s,b as c,p as l,c as h,d as g,e as f,f as u,g as w,h as p}from"./edges-f15a7e05-0fdd1386.js";import{l as v,q as y,c as m,h as x}from"./mermaid.core-a0c0eb91.js";import{c as b}from"./createText-80c3befb-b7e9e981.js";var N=4;function X(n){var r,i={options:{directed:n.isDirected(),multigraph:n.isMultigraph(),compound:n.isCompound()},nodes:E(n),edges:C(n)};return t(n.graph())||(i.value=(r=n.graph(),e(r,N))),i}function E(e){return n(e.nodes(),(function(n){var r=e.node(n),i=e.parent(n),a={v:n};return t(r)||(a.value=r),t(i)||(a.parent=i),a}))}function C(e){return n(e.edges(),(function(n){var r=e.edge(n),i={v:n.v,w:n.w};return t(n.name)||(i.name=n.name),t(r)||(i.value=r),i}))}let S={},D={},B={};const O=(e,t)=>(v.trace("In isDecendant",t," ",e," = ",D[t].includes(e)),!!D[t].includes(e)),T=(e,t,n,r)=>{v.warn("Copying children of ",e,"root",r,"data",t.node(e),r);const i=t.children(e)||[];e!==r&&i.push(e),v.warn("Copying (nodes) clusterId",e,"nodes",i),i.forEach((i=>{if(t.children(i).length>0)T(i,t,n,r);else{const a=t.node(i);v.info("cp ",i," to ",r," with parent ",e),n.setNode(i,a),r!==t.parent(i)&&(v.warn("Setting parent",i,t.parent(i)),n.setParent(i,t.parent(i))),e!==r&&i!==e?(v.debug("Setting parent",i,e),n.setParent(i,e)):(v.info("In copy ",e,"root",r,"data",t.node(e),r),v.debug("Not Setting parent for node=",i,"cluster!==rootId",e!==r,"node!==clusterId",i!==e));const d=t.edges(i);v.debug("Copying Edges",d),d.forEach((i=>{v.info("Edge",i);const a=t.edge(i.v,i.w,i.name);v.info("Edge data",a,r);try{((e,t)=>(v.info("Decendants of ",t," is ",D[t]),v.info("Edge is ",e),e.v!==t&&e.w!==t&&(D[t]?D[t].includes(e.v)||O(e.v,t)||O(e.w,t)||D[t].includes(e.w):(v.debug("Tilt, ",t,",not in decendants"),!1))))(i,r)?(v.info("Copying as ",i.v,i.w,a,i.name),n.setEdge(i.v,i.w,a,i.name),v.info("newGraph edges ",n.edges(),n.edge(n.edges()[0]))):v.info("Skipping copy of edge ",i.v,"--\x3e",i.w," rootId: ",r," clusterId:",e)}catch(d){v.error(d)}}))}v.debug("Removing node",i),t.removeNode(i)}))},J=(e,t)=>{const n=t.children(e);let r=[...n];for(const i of n)B[i]=e,r=[...r,...J(i,t)];return r},I=(e,t)=>{v.trace("Searching",e);const n=t.children(e);if(v.trace("Searching children of id ",e,n),n.length<1)return v.trace("This is a valid node",e),e;for(const r of n){const n=I(r,t);if(n)return v.trace("Found replacement for",e," => ",n),n}},R=e=>S[e]&&S[e].externalConnections&&S[e]?S[e].id:e,G=(e,t)=>{if(v.warn("extractor - ",t,X(e),e.children("D")),t>10)return void v.error("Bailing out");let n=e.nodes(),i=!1;for(const r of n){const t=e.children(r);i=i||t.length>0}if(i){v.debug("Nodes = ",n,t);for(const i of n)if(v.debug("Extracting node",i,S,S[i]&&!S[i].externalConnections,!e.parent(i),e.node(i),e.children("D")," Depth ",t),S[i])if(!S[i].externalConnections&&e.children(i)&&e.children(i).length>0){v.warn("Cluster without external connections, without a parent and with children",i,t);let n="TB"===e.graph().rankdir?"LR":"TB";S[i]&&S[i].clusterData&&S[i].clusterData.dir&&(n=S[i].clusterData.dir,v.warn("Fixing dir",S[i].clusterData.dir,n));const a=new r({multigraph:!0,compound:!0}).setGraph({rankdir:n,nodesep:50,ranksep:50,marginx:8,marginy:8}).setDefaultEdgeLabel((function(){return{}}));v.warn("Old graph before copy",X(e)),T(i,e,a,i),e.setNode(i,{clusterNode:!0,id:i,clusterData:S[i].clusterData,labelText:S[i].labelText,graph:a}),v.warn("New graph after copy node: (",i,")",X(a)),v.debug("Old graph after copy",X(e))}else v.warn("Cluster ** ",i," **not meeting the criteria !externalConnections:",!S[i].externalConnections," no parent: ",!e.parent(i)," children ",e.children(i)&&e.children(i).length>0,e.children("D"),t),v.debug(S);else v.debug("Not a cluster",i,t);n=e.nodes(),v.warn("New list of nodes",n);for(const r of n){const n=e.node(r);v.warn(" Now next level",r,n),n.clusterNode&&G(n.graph,t+1)}}else v.debug("Done, no node has children",e.nodes())},L=(e,t)=>{if(0===t.length)return[];let n=Object.assign(t);return t.forEach((t=>{const r=e.children(t),i=L(e,r);n=[...n,...i]})),n},F={rect:(e,t)=>{v.info("Creating subgraph rect for ",t.id,t);const n=e.insert("g").attr("class","cluster"+(t.class?" "+t.class:"")).attr("id",t.id),r=n.insert("rect",":first-child"),i=y(m().flowchart.htmlLabels),a=n.insert("g").attr("class","cluster-label"),d="markdown"===t.labelType?b(a,t.labelText,{style:t.labelStyle,useHtmlLabels:i}):a.node().appendChild(w(t.labelText,t.labelStyle,void 0,!0));let o=d.getBBox();if(y(m().flowchart.htmlLabels)){const e=d.children[0],t=x(d);o=e.getBoundingClientRect(),t.attr("width",o.width),t.attr("height",o.height)}const s=0*t.padding,c=s/2,l=t.width<=o.width+s?o.width+s:t.width;t.width<=o.width+s?t.diff=(o.width-t.width)/2-t.padding/2:t.diff=-t.padding/2,v.trace("Data ",t,JSON.stringify(t)),r.attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("x",t.x-l/2).attr("y",t.y-t.height/2-c).attr("width",l).attr("height",t.height+s),i?a.attr("transform","translate("+(t.x-o.width/2)+", "+(t.y-t.height/2)+")"):a.attr("transform","translate("+t.x+", "+(t.y-t.height/2)+")");const h=r.node().getBBox();return t.width=h.width,t.height=h.height,t.intersect=function(e){return p(t,e)},n},roundedWithTitle:(e,t)=>{const n=e.insert("g").attr("class",t.classes).attr("id",t.id),r=n.insert("rect",":first-child"),i=n.insert("g").attr("class","cluster-label"),a=n.append("rect"),d=i.node().appendChild(w(t.labelText,t.labelStyle,void 0,!0));let o=d.getBBox();if(y(m().flowchart.htmlLabels)){const e=d.children[0],t=x(d);o=e.getBoundingClientRect(),t.attr("width",o.width),t.attr("height",o.height)}o=d.getBBox();const s=0*t.padding,c=s/2,l=t.width<=o.width+t.padding?o.width+t.padding:t.width;t.width<=o.width+t.padding?t.diff=(o.width+0*t.padding-t.width)/2:t.diff=-t.padding/2,r.attr("class","outer").attr("x",t.x-l/2-c).attr("y",t.y-t.height/2-c).attr("width",l+s).attr("height",t.height+s),a.attr("class","inner").attr("x",t.x-l/2-c).attr("y",t.y-t.height/2-c+o.height-1).attr("width",l+s).attr("height",t.height+s-o.height-3),i.attr("transform","translate("+(t.x-o.width/2)+", "+(t.y-t.height/2-t.padding/3+(y(m().flowchart.htmlLabels)?5:3))+")");const h=r.node().getBBox();return t.height=h.height,t.intersect=function(e){return p(t,e)},n},noteGroup:(e,t)=>{const n=e.insert("g").attr("class","note-cluster").attr("id",t.id),r=n.insert("rect",":first-child"),i=0*t.padding,a=i/2;r.attr("rx",t.rx).attr("ry",t.ry).attr("x",t.x-t.width/2-a).attr("y",t.y-t.height/2-a).attr("width",t.width+i).attr("height",t.height+i).attr("fill","none");const d=r.node().getBBox();return t.width=d.width,t.height=d.height,t.intersect=function(e){return p(t,e)},n},divider:(e,t)=>{const n=e.insert("g").attr("class",t.classes).attr("id",t.id),r=n.insert("rect",":first-child"),i=0*t.padding,a=i/2;r.attr("class","divider").attr("x",t.x-t.width/2-a).attr("y",t.y-t.height/2).attr("width",t.width+i).attr("height",t.height+i);const d=r.node().getBBox();return t.width=d.width,t.height=d.height,t.diff=-t.padding/2,t.intersect=function(e){return p(t,e)},n}};let k={};const P=async(e,t,n,r,a)=>{v.info("Graph in recursive render: XXX",X(t),a);const f=t.graph().rankdir;v.trace("Dir in recursive render - dir:",f);const u=e.insert("g").attr("class","root");t.nodes()?v.info("Recursive render XXX",t.nodes()):v.info("No nodes found for",t),t.edges().length>0&&v.trace("Recursive edges",t.edge(t.edges()[0]));const w=u.insert("g").attr("class","clusters"),p=u.insert("g").attr("class","edgePaths"),y=u.insert("g").attr("class","edgeLabels"),m=u.insert("g").attr("class","nodes");await Promise.all(t.nodes().map((async function(e){const i=t.node(e);if(void 0!==a){const n=JSON.parse(JSON.stringify(a.clusterData));v.info("Setting data for cluster XXX (",e,") ",n,a),t.setNode(a.id,n),t.parent(e)||(v.trace("Setting parent",e,a.id),t.setParent(e,a.id,n))}if(v.info("(Insert) Node XXX"+e+": "+JSON.stringify(t.node(e))),i&&i.clusterNode){v.info("Cluster identified",e,i.width,t.node(e));const a=await P(m,i.graph,n,r,t.node(e)),s=a.elem;d(i,s),i.diff=a.diff||0,v.info("Node bounds (abc123)",e,i,i.width,i.x,i.y),o(s,i),v.warn("Recursive render complete ",s,i)}else t.children(e).length>0?(v.info("Cluster - the non recursive path XXX",e,i.id,i,t),v.info(I(i.id,t)),S[i.id]={id:I(i.id,t),node:i}):(v.info("Node - the non recursive path",e,i.id,i),await s(m,t.node(e),f))}))),t.edges().forEach((function(e){const n=t.edge(e.v,e.w,e.name);v.info("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(e)),v.info("Edge "+e.v+" -> "+e.w+": ",e," ",JSON.stringify(t.edge(e))),v.info("Fix",S,"ids:",e.v,e.w,"Translateing: ",S[e.v],S[e.w]),c(y,n)})),t.edges().forEach((function(e){v.info("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(e))})),v.info("#############################################"),v.info("###                Layout                 ###"),v.info("#############################################"),v.info(t),i(t),v.info("Graph after layout:",X(t));let x=0;return(e=>L(e,e.children()))(t).forEach((function(e){const n=t.node(e);v.info("Position "+e+": "+JSON.stringify(t.node(e))),v.info("Position "+e+": ("+n.x,","+n.y,") width: ",n.width," height: ",n.height),n&&n.clusterNode?l(n):t.children(e).length>0?(((e,t)=>{v.trace("Inserting cluster");const n=t.shape||"rect";k[t.id]=F[n](e,t)})(w,n),S[n.id].node=n):l(n)})),t.edges().forEach((function(e){const i=t.edge(e);v.info("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(i),i);const a=h(p,e,i,S,n,t,r);g(i,a)})),t.nodes().forEach((function(e){const n=t.node(e);v.info(e,n.type,n.diff),"group"===n.type&&(x=n.diff)})),{elem:u,diff:x}},j=async(e,t,n,r,i)=>{a(e,n,r,i),f(),u(),k={},D={},B={},S={},v.warn("Graph at first:",JSON.stringify(X(t))),((e,t)=>{!e||t>10?v.debug("Opting out, no graph "):(v.debug("Opting in, graph "),e.nodes().forEach((function(t){e.children(t).length>0&&(v.warn("Cluster identified",t," Replacement id in edges: ",I(t,e)),D[t]=J(t,e),S[t]={id:I(t,e),clusterData:e.node(t)})})),e.nodes().forEach((function(t){const n=e.children(t),r=e.edges();n.length>0?(v.debug("Cluster identified",t,D),r.forEach((e=>{e.v!==t&&e.w!==t&&O(e.v,t)^O(e.w,t)&&(v.warn("Edge: ",e," leaves cluster ",t),v.warn("Decendants of XXX ",t,": ",D[t]),S[t].externalConnections=!0)}))):v.debug("Not a cluster ",t,D)})),e.edges().forEach((function(t){const n=e.edge(t);v.warn("Edge "+t.v+" -> "+t.w+": "+JSON.stringify(t)),v.warn("Edge "+t.v+" -> "+t.w+": "+JSON.stringify(e.edge(t)));let r=t.v,i=t.w;if(v.warn("Fix XXX",S,"ids:",t.v,t.w,"Translating: ",S[t.v]," --- ",S[t.w]),S[t.v]&&S[t.w]&&S[t.v]===S[t.w]){v.warn("Fixing and trixing link to self - removing XXX",t.v,t.w,t.name),v.warn("Fixing and trixing - removing XXX",t.v,t.w,t.name),r=R(t.v),i=R(t.w),e.removeEdge(t.v,t.w,t.name);const a=t.w+"---"+t.v;e.setNode(a,{domId:a,id:a,labelStyle:"",labelText:n.label,padding:0,shape:"labelRect",style:""});const d=structuredClone(n),o=structuredClone(n);d.label="",d.arrowTypeEnd="none",o.label="",d.fromCluster=t.v,o.toCluster=t.v,e.setEdge(r,a,d,t.name+"-cyclic-special"),e.setEdge(a,i,o,t.name+"-cyclic-special")}else(S[t.v]||S[t.w])&&(v.warn("Fixing and trixing - removing XXX",t.v,t.w,t.name),r=R(t.v),i=R(t.w),e.removeEdge(t.v,t.w,t.name),r!==t.v&&(n.fromCluster=t.v),i!==t.w&&(n.toCluster=t.w),v.warn("Fix Replacing with XXX",r,i,t.name),e.setEdge(r,i,n,t.name))})),v.warn("Adjusted Graph",X(e)),G(e,0),v.trace(S))})(t),v.warn("Graph after:",JSON.stringify(X(t))),await P(e,t,r,i)};export{j as r};
