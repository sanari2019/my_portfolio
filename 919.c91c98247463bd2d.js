"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[919],{919:(M,l,o)=>{o.r(l),o.d(l,{ProjectRoutes:()=>C});var t=o(9212),m=o(7398),p=o(9397),g=o(9862),h=o(553);let a=(()=>{class e{constructor(){this.http=(0,t.f3M)(g.eN),this.jsonUrl=`${h.N.url}/assets/json/projects.json`,this.state=(0,t.tdS)({projects:[]}),this.projects=(0,t.Flj)(()=>this.state().projects),this.featuredProjects=(0,t.Flj)(()=>this.state().projects?.filter(r=>r.featured).map((r,s)=>({...r,toRight:(s+1)%2==0}))),this.otherProjects=(0,t.Flj)(()=>this.state().projects?.filter(r=>!r.featured)),this.getAll()}getAll(){this.http.get(this.jsonUrl).pipe((0,m.U)(r=>r.data?.map(i=>{const{thumbnail:R}=i.attributes.picture.data.attributes.formats,{website:O,playstore:Q,appstore:w,github:z}=i.attributes.links,f=i.attributes.images;return{id:i.id,title:i.attributes.title,description:i.attributes.description,thumbnail:R.url,links:{website:O,playstore:Q,appstore:w,github:z},featured:i.attributes.featured,tools:i.attributes.tools.data?.map(I=>I.attributes.name),image:f.data&&f.data[0].attributes.formats.large.url}})),(0,p.b)(r=>{this.state.update(s=>({...s,projects:r}))})).subscribe()}static#t=this.\u0275fac=function(s){return new(s||e)};static#e=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var u=o(6673),c=o(5663),d=o(6319);const x=()=>[o.e(874).then(o.bind(o,4874)).then(e=>e.ProjectLink),Promise.resolve().then(o.bind(o,6814)).then(e=>e.NgClass),o.e(86).then(o.bind(o,9086)).then(e=>e.Devicon),o.e(622).then(o.bind(o,3622)).then(e=>e.ImageSkeletonDirective),Promise.all([o.e(722),o.e(728)]).then(o.bind(o,9733)).then(e=>e.ZoomImageDirective)];function j(e,n){if(1&e&&t._UZ(0,"devicon",11),2&e){const s=n.$index;t.Q6J("name",n.$implicit)("key",s)}}const v=(e,n,r)=>({"md:order-2":e,"md:order-none":n,"md:text-end":r}),y=(e,n)=>({"md:-ml-10":e,"md:-mr-10":n}),Z=e=>({"md:text-end":e});function P(e,n){if(1&e&&(t.TgZ(0,"div",1)(1,"div",2)(2,"div")(3,"p",3),t._uU(4,"Featured Project"),t.qZA(),t.TgZ(5,"h2",4),t._uU(6),t.qZA()(),t.TgZ(7,"div",5)(8,"p"),t._uU(9),t.qZA()(),t.TgZ(10,"div",6),t.SjG(11,j,1,2,"devicon",11,t.ikw),t.qZA()(),t.TgZ(13,"div",7)(14,"div",8),t._UZ(15,"project-link",9),t.qZA(),t._UZ(16,"img",10),t.qZA()()),2&e){const r=n.$implicit;t.xp6(),t.Q6J("ngClass",t.kEZ(8,v,r.toRight,!r.toRight,r.toRight)),t.xp6(5),t.hij(" ",r.title,""),t.xp6(3),t.Oqu(r.description),t.xp6(2),t.wJu(r.tools),t.xp6(2),t.Q6J("ngClass",t.WLB(12,y,!r.toRight,r.toRight)),t.xp6(),t.Q6J("ngClass",t.VKq(15,Z,!r.toRight)),t.xp6(),t.Q6J("links",r.links),t.xp6(),t.Q6J("src",r.image,t.LSH)("alt",r.title)}}function b(e,n){if(1&e&&(t.TgZ(0,"div",0),t.SjG(1,P,17,17,"div",12,t.ikw),t.qZA()),2&e){const r=t.oxw();t.xp6(),t.wJu(r.projectService.featuredProjects())}}function T(e,n){1&e&&t._UZ(0,"loader")}let F=(()=>{class e{constructor(){this.projectService=(0,t.f3M)(a)}static#t=this.\u0275fac=function(s){return new(s||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["feature-project"]],standalone:!0,features:[t.jDz],decls:4,vars:0,consts:[[1,"grid","grid-cols-1","my-10"],[1,"flex","flex-col","md:flex-row","rounded","py-10"],[1,"z-[1]","w-full","flex","flex-col","justify-between","order-1","md:order-none","gap-4","p-5","border-b","border-x","md:border-0","dark:border-gray-700",3,"ngClass"],[1,"dark:text-primary-400","text-primary-600","text-sm","font-bold","mb-2"],[1,"text-xl","dark:text-white","font-bold","dark:hover:text-primary-400","hover:text-primary-600"],[1,"md:p-3","dark:text-white","md:border","border-gray-300","dark:border-gray-700","text-black","text-sm","md:dark:bg-gray-900","md:bg-white","rounded-lg"],[1,"flex","flex-row","gap-2"],[1,"w-full",3,"ngClass"],[1,"py-1",3,"ngClass"],[3,"links"],["skeleton","","draggable","false",1,"md:rounded","z-0","max-w-full","w-full","h-48",3,"src","alt"],["cssClass","w-5",3,"name","key"],["class","flex flex-col md:flex-row rounded py-10"]],template:function(s,i){1&s&&(t.YNc(0,b,3,0)(1,T,1,0),t.EqZ(2,0,x,null,1),t.II9())},dependencies:[d.a],encapsulation:2,changeDetection:0})}return e})();const D=()=>[o.e(874).then(o.bind(o,4874)).then(e=>e.ProjectLink),o.e(86).then(o.bind(o,9086)).then(e=>e.Devicon),o.e(622).then(o.bind(o,3622)).then(e=>e.ImageSkeletonDirective)],U=(e,n)=>n.id;function A(e,n){if(1&e&&t._UZ(0,"devicon",9),2&e){const s=n.$index;t.Q6J("name",n.$implicit)("key",s)}}function S(e,n){if(1&e&&(t.TgZ(0,"div",1)(1,"header",2)(2,"div",3)(3,"div"),t._UZ(4,"img",4),t.qZA(),t._UZ(5,"project-link",5),t.qZA(),t.TgZ(6,"p",6),t._uU(7),t.qZA(),t.TgZ(8,"p",7),t._uU(9),t.qZA()(),t.TgZ(10,"footer",8),t.SjG(11,A,1,2,"devicon",9,t.ikw),t.qZA()()),2&e){const r=n.$implicit;t.xp6(4),t.Q6J("src",r.thumbnail,t.LSH)("alt",r.title),t.xp6(),t.Q6J("links",r.links),t.xp6(2),t.hij(" ",r.title,""),t.xp6(2),t.Oqu(r.description),t.xp6(2),t.wJu(r.tools)}}function k(e,n){if(1&e&&(t.TgZ(0,"div",0),t.SjG(1,S,13,5,"div",10,U),t.qZA()),2&e){const r=t.oxw();t.xp6(),t.wJu(r.projectService.otherProjects())}}function J(e,n){1&e&&t._UZ(0,"loader")}let $=(()=>{class e{constructor(){this.projectService=(0,t.f3M)(a)}static#t=this.\u0275fac=function(s){return new(s||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["other-project"]],standalone:!0,features:[t.jDz],decls:4,vars:0,consts:[[1,"grid","grid-cols-1","md:grid-cols-2","lg:grid-cols-3","gap-5","max-w-screen-lg","mx-auto","my-10","text-left"],[1,"dark:bg-gray-900","rounded-lg","border","border-gray-200","dark:border-gray-700","py-8","px-7","flex","justify-between","flex-col","items-start"],[1,"w-full"],[1,"mb-9","flex","justify-between","items-center","flex-row"],["skeleton","","draggable","false",1,"w-16","h-16","rounded",3,"src","alt"],[3,"links"],[1,"mb-2","text-lg","font-semibold","tracking-tight","text-gray-900","dark:text-gray-300","group-hover:text-primary-500"],[1,"mb-2","text-sm","text-gray-900","dark:text-gray-200"],[1,"mt-4","flex","flex-row","gap-2"],["cssClass","w-5",3,"name","key"],["class","dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 py-8 px-7 flex justify-between flex-col items-start"]],template:function(s,i){1&s&&(t.YNc(0,k,3,0)(1,J,1,0),t.EqZ(2,0,D,null,1),t.BYR(0,-1))},dependencies:[d.a],encapsulation:2,changeDetection:0})}return e})();const C=[{path:"",component:(()=>{class e{constructor(){this.projectService=(0,t.f3M)(a),this.metaService=(0,t.f3M)(u.R),this.metaService.setMetaTags(`Projects - ${c.Z.name}`,`Projects made by ${c.Z.name}. Get to know all the sources.`,["tech","software","development","project","portfolio","app","programming","open-source","web","android","ios"])}static#t=this.\u0275fac=function(s){return new(s||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["project-page"]],standalone:!0,features:[t.jDz],decls:4,vars:0,consts:[[1,"text-brand-primary","mt-2","text-center","text-3xl","font-semibold","tracking-tight","lg:text-4xl","lg:leading-snug","dark:text-white"]],template:function(s,i){1&s&&(t.TgZ(0,"h1",0),t._uU(1," Projects "),t.qZA(),t._UZ(2,"feature-project")(3,"other-project"))},dependencies:[F,$],encapsulation:2})}return e})()}]}}]);