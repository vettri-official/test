import{d as M,g as $}from"./chunk-X6ZVKNYK.js";import"./chunk-D5OH7NPF.js";import{a as P}from"./chunk-OYX2MOGO.js";import{Fa as k,Ga as g,Ha as S,Ia as u,Ja as c,Ka as m,La as p,Ma as t,Na as a,Oa as d,Pa as E,Qa as w,Ra as y,Va as s,Wa as v,Y as f,Ya as I,Za as j,_a as x,da as _,ea as h,qa as b,ta as l,ua as C}from"./chunk-2DSED2EA.js";var F=e=>({background:e,"background-position":"center","background-size":"cover"}),T=()=>["/gallery"],G=e=>({id:e});function O(e,n){if(e&1&&d(0,"button",35),e&2){let i=n.$index;u(i==0?"active":""),k("data-bs-slide-to",i)}}function z(e,n){if(e&1&&(t(0,"div",36),d(1,"img",37),t(2,"div",38)(3,"h5"),s(4,"First slide label"),a(),t(5,"p"),s(6,"Some representative placeholder content for the first slide."),a()()()),e&2){let i=n.$implicit,r=n.$index;u(r==0?"active":""),l(),g("src",i.image,b)}}function B(e,n){if(e&1){let i=E();t(0,"button",39),w("click",function(){let o=_(i).$index,A=y();return h(A.tabIndex=o)}),s(1),a()}if(e&2){let i=n.$implicit,r=n.$index,o=y();u(o.tabIndex==r?"active":""),l(),v(i)}}function R(e,n){if(e&1&&(t(0,"option",22),s(1),a()),e&2){let i=n.$implicit;l(),v(i)}}function q(e,n){if(e&1&&(t(0,"div",24),d(1,"div",40),a()),e&2){let i=n.$implicit,r=n.$index;l(),S(x(4,F,"url("+i.image+")")),g("routerLink",j(6,T))("queryParams",x(7,G,r))}}var U=(()=>{class e{constructor(i){this.activatedRoute=i,this.chosenIndex=0,this.tabIndex=0,this.tabArr=["All","Power Steering","Winch","Winch Gear Box","Hydraulics","Grab System"],this.slideArr=[{image:"assets/images/gallery/img1.jpg"},{image:"assets/images/gallery/img2.jpg"},{image:"assets/images/gallery/img3.jpg"}],this.galleryArr=[{image:"assets/images/gallery/img1.jpg"},{image:"assets/images/gallery/img2.jpg"},{image:"assets/images/gallery/img3.jpg"},{image:"assets/images/gallery/img1.jpg"},{image:"assets/images/gallery/img2.jpg"},{image:"assets/images/gallery/img3.jpg"}]}ngOnInit(){P("#gallery"),this.activatedRoute.queryParams.subscribe(i=>{this.chosenIndex=i?.id||0})}static{this.\u0275fac=function(r){return new(r||e)(C(M))}}static{this.\u0275cmp=f({type:e,selectors:[["app-gallery"]],standalone:!0,features:[I],decls:48,vars:1,consts:[["id","hero"],[1,"w-75"],["id","gallery",1,"center","no-height","bg-gray"],[1,"w-lg-75","px-sm-0","px-3"],["id","carouselExampleCaptions","data-bs-ride","carousel",1,"carousel","slide","carousel-fade"],[1,"carousel-indicators"],["type","button","data-bs-target","#carouselExampleCaptions",3,"class"],[1,"carousel-inner"],["data-bs-interval","3000",1,"carousel-item",3,"class"],["type","button","data-bs-target","#carouselExampleCaptions","data-bs-slide","prev",1,"carousel-control-prev"],[1,"carousel-control-prev-icon"],[1,"visually-hidden"],["type","button","data-bs-target","#carouselExampleCaptions","data-bs-slide","next",1,"carousel-control-next"],[1,"carousel-control-next-icon"],[1,"no-height"],[1,"d-flex","justify-content-center"],[1,"w-lg-75","w-100","px-3","px-lg-0"],[1,"tab-items","d-none","d-sm-block"],[1,"btn-0",3,"class"],[1,"d-block","d-sm-none"],["for",""],[1,"form-select"],["value",""],[1,"row","my-4","g-4"],[1,"col-lg-4","col-6"],[1,"col-12","text-end"],[1,"btn","btn-link","primary-text","text-decoration-none"],["id","gallery-modal","data-bs-backdrop","static","data-bs-keyboard","false","tabindex","-1",1,"modal","fade"],[1,"modal-dialog","modal-dialog-centered","modal-lg"],[1,"modal-content"],[1,"modal-header","border-0"],["id","gallery-modal-label",1,"modal-title","fs-5","text-dark"],["type","button","data-bs-dismiss","modal",1,"btn-close","border-0"],[1,"modal-body"],["alt","gallery",1,"w-100",3,"src"],["type","button","data-bs-target","#carouselExampleCaptions"],["data-bs-interval","3000",1,"carousel-item"],["alt","...",1,"d-block","w-100",3,"src"],[1,"carousel-caption","d-none","d-md-block"],[1,"btn-0",3,"click"],["data-bs-toggle","modal","data-bs-target","#gallery-modal",1,"card",3,"routerLink","queryParams"]],template:function(r,o){r&1&&(t(0,"section",0)(1,"div",1)(2,"h1"),s(3,"Gallery"),a()()(),t(4,"section",2)(5,"div",3)(6,"div",4)(7,"div",5),m(8,O,1,3,"button",6,c),a(),t(10,"div",7),m(11,z,7,3,"div",8,c),a(),t(13,"button",9),d(14,"span",10),t(15,"span",11),s(16,"Previous"),a()(),t(17,"button",12),d(18,"span",13),t(19,"span",11),s(20,"Next"),a()()()()(),t(21,"section",14)(22,"div",15)(23,"div",16)(24,"div",17),m(25,B,2,4,"button",18,c),a(),t(27,"div",19)(28,"label",20),s(29,"Category:"),a(),t(30,"select",21),m(31,R,2,1,"option",22,c),a()(),t(33,"div",23),m(34,q,2,9,"div",24,c),t(36,"div",25)(37,"button",26),s(38,"See more..."),a()()()()()(),t(39,"div",27)(40,"div",28)(41,"div",29)(42,"div",30)(43,"h1",31),s(44,"Hydraulics"),a(),d(45,"button",32),a(),t(46,"div",33),d(47,"img",34),a()()()()),r&2&&(l(8),p(o.slideArr),l(3),p(o.slideArr),l(14),p(o.tabArr),l(6),p(o.tabArr),l(3),p(o.galleryArr),l(13),g("src",o.galleryArr[o.chosenIndex].image,b))},dependencies:[$],styles:['#hero[_ngcontent-%COMP%]{background:linear-gradient(to right,rgba(0,0,0,.7450980392),transparent),url("./media/hero-7Y3ASOJ6.jpg");background-size:cover;background-position:center;display:flex;justify-content:center;align-items:center;flex-direction:column}h1[_ngcontent-%COMP%]{font-weight:700;font-size:3rem;color:#fff;line-height:normal}img[_ngcontent-%COMP%]{transition:10s}button.active[_ngcontent-%COMP%]{background-color:var(--primary-color);color:#fff}.card[_ngcontent-%COMP%]{aspect-ratio:1/1;box-shadow:2px 4px 12px #00000014;transition:all .3s cubic-bezier(0,0,.5,1);border-color:transparent;cursor:pointer}.card[_ngcontent-%COMP%]:hover{transform:scale(1.02)}#gallery[_ngcontent-%COMP%]{padding-bottom:var(--nav-height)}.tab-items[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly;row-gap:.5rem;flex-wrap:wrap}']})}}return e})();export{U as GalleryComponent};
