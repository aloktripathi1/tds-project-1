var Jn=Object.create;var ne=Object.defineProperty;var Bn=Object.getOwnPropertyDescriptor;var Wn=Object.getOwnPropertyNames;var Hn=Object.getPrototypeOf,Yn=Object.prototype.hasOwnProperty;var b=(e,n)=>()=>(e&&(n=e(e=0)),n);var I=(e,n)=>()=>(n||e((n={exports:{}}).exports,n),n.exports),S=(e,n)=>{for(var t in n)ne(e,t,{get:n[t],enumerable:!0})},Kn=(e,n,t,r)=>{if(n&&typeof n=="object"||typeof n=="function")for(let p of Wn(n))!Yn.call(e,p)&&p!==t&&ne(e,p,{get:()=>n[p],enumerable:!(r=Bn(n,p))||r.enumerable});return e};var Vn=(e,n,t)=>(t=e!=null?Jn(Hn(e)):{},Kn(n||!e||!e.__esModule?ne(t,"default",{value:e,enumerable:!0}):t,e));import{unsafeHTML as Qn}from"https://cdn.jsdelivr.net/npm/lit-html@3/directives/unsafe-html.js";import{Marked as Zn}from"https://cdn.jsdelivr.net/npm/marked@13/+esm";var ve,ke,eo,R,oe=b(()=>{"use strict";ve="https://tds.s-anand.net",ke=e=>e&&!e.match(/^(https?|mailto):/),eo=new Zn({renderer:{image(e,n,t){return ke(e)&&(e=`${ve}/${e}`),`<img src="${e}" alt="${t}" ${n?`title="${n}"`:""} class="img-fluid" loading="lazy">`},link(e,n,t){return ke(e)&&(e=`${ve}/${e.endsWith(".md")?`#/${e.replace(/\.md$/,"")}`:e}`),`<a href="${e}" ${n?`title="${n}"`:""} target="_blank">${t}</a>`}}}),R=e=>Qn(eo.parse(e))});var Se=I((xe,te)=>{(function(e,n,t){function r(o){var i=this,c=s();i.next=function(){var a=2091639*i.s0+i.c*23283064365386963e-26;return i.s0=i.s1,i.s1=i.s2,i.s2=a-(i.c=a|0)},i.c=1,i.s0=c(" "),i.s1=c(" "),i.s2=c(" "),i.s0-=c(o),i.s0<0&&(i.s0+=1),i.s1-=c(o),i.s1<0&&(i.s1+=1),i.s2-=c(o),i.s2<0&&(i.s2+=1),c=null}function p(o,i){return i.c=o.c,i.s0=o.s0,i.s1=o.s1,i.s2=o.s2,i}function u(o,i){var c=new r(o),a=i&&i.state,l=c.next;return l.int32=function(){return c.next()*4294967296|0},l.double=function(){return l()+(l()*2097152|0)*11102230246251565e-32},l.quick=l,a&&(typeof a=="object"&&p(a,c),l.state=function(){return p(c,{})}),l}function s(){var o=4022871197,i=function(c){c=String(c);for(var a=0;a<c.length;a++){o+=c.charCodeAt(a);var l=.02519603282416938*o;o=l>>>0,l-=o,l*=o,o=l>>>0,l-=o,o+=l*4294967296}return(o>>>0)*23283064365386963e-26};return i}n&&n.exports?n.exports=u:t&&t.amd?t(function(){return u}):this.alea=u})(xe,typeof te=="object"&&te,typeof define=="function"&&define)});var Te=I((Ae,ae)=>{(function(e,n,t){function r(s){var o=this,i="";o.x=0,o.y=0,o.z=0,o.w=0,o.next=function(){var a=o.x^o.x<<11;return o.x=o.y,o.y=o.z,o.z=o.w,o.w^=o.w>>>19^a^a>>>8},s===(s|0)?o.x=s:i+=s;for(var c=0;c<i.length+64;c++)o.x^=i.charCodeAt(c)|0,o.next()}function p(s,o){return o.x=s.x,o.y=s.y,o.z=s.z,o.w=s.w,o}function u(s,o){var i=new r(s),c=o&&o.state,a=function(){return(i.next()>>>0)/4294967296};return a.double=function(){do var l=i.next()>>>11,d=(i.next()>>>0)/4294967296,f=(l+d)/(1<<21);while(f===0);return f},a.int32=i.next,a.quick=a,c&&(typeof c=="object"&&p(c,i),a.state=function(){return p(i,{})}),a}n&&n.exports?n.exports=u:t&&t.amd?t(function(){return u}):this.xor128=u})(Ae,typeof ae=="object"&&ae,typeof define=="function"&&define)});var Ie=I((Ee,re)=>{(function(e,n,t){function r(s){var o=this,i="";o.next=function(){var a=o.x^o.x>>>2;return o.x=o.y,o.y=o.z,o.z=o.w,o.w=o.v,(o.d=o.d+362437|0)+(o.v=o.v^o.v<<4^(a^a<<1))|0},o.x=0,o.y=0,o.z=0,o.w=0,o.v=0,s===(s|0)?o.x=s:i+=s;for(var c=0;c<i.length+64;c++)o.x^=i.charCodeAt(c)|0,c==i.length&&(o.d=o.x<<10^o.x>>>4),o.next()}function p(s,o){return o.x=s.x,o.y=s.y,o.z=s.z,o.w=s.w,o.v=s.v,o.d=s.d,o}function u(s,o){var i=new r(s),c=o&&o.state,a=function(){return(i.next()>>>0)/4294967296};return a.double=function(){do var l=i.next()>>>11,d=(i.next()>>>0)/4294967296,f=(l+d)/(1<<21);while(f===0);return f},a.int32=i.next,a.quick=a,c&&(typeof c=="object"&&p(c,i),a.state=function(){return p(i,{})}),a}n&&n.exports?n.exports=u:t&&t.amd?t(function(){return u}):this.xorwow=u})(Ee,typeof re=="object"&&re,typeof define=="function"&&define)});var ze=I((qe,ie)=>{(function(e,n,t){function r(s){var o=this;o.next=function(){var c=o.x,a=o.i,l,d,f;return l=c[a],l^=l>>>7,d=l^l<<24,l=c[a+1&7],d^=l^l>>>10,l=c[a+3&7],d^=l^l>>>3,l=c[a+4&7],d^=l^l<<7,l=c[a+7&7],l=l^l<<13,d^=l^l<<9,c[a]=d,o.i=a+1&7,d};function i(c,a){var l,d,f=[];if(a===(a|0))d=f[0]=a;else for(a=""+a,l=0;l<a.length;++l)f[l&7]=f[l&7]<<15^a.charCodeAt(l)+f[l+1&7]<<13;for(;f.length<8;)f.push(0);for(l=0;l<8&&f[l]===0;++l);for(l==8?d=f[7]=-1:d=f[l],c.x=f,c.i=0,l=256;l>0;--l)c.next()}i(o,s)}function p(s,o){return o.x=s.x.slice(),o.i=s.i,o}function u(s,o){s==null&&(s=+new Date);var i=new r(s),c=o&&o.state,a=function(){return(i.next()>>>0)/4294967296};return a.double=function(){do var l=i.next()>>>11,d=(i.next()>>>0)/4294967296,f=(l+d)/(1<<21);while(f===0);return f},a.int32=i.next,a.quick=a,c&&(c.x&&p(c,i),a.state=function(){return p(i,{})}),a}n&&n.exports?n.exports=u:t&&t.amd?t(function(){return u}):this.xorshift7=u})(qe,typeof ie=="object"&&ie,typeof define=="function"&&define)});var Pe=I((Re,se)=>{(function(e,n,t){function r(s){var o=this;o.next=function(){var c=o.w,a=o.X,l=o.i,d,f;return o.w=c=c+1640531527|0,f=a[l+34&127],d=a[l=l+1&127],f^=f<<13,d^=d<<17,f^=f>>>15,d^=d>>>12,f=a[l]=f^d,o.i=l,f+(c^c>>>16)|0};function i(c,a){var l,d,f,_,q,A=[],M=128;for(a===(a|0)?(d=a,a=null):(a=a+"\0",d=0,M=Math.max(M,a.length)),f=0,_=-32;_<M;++_)a&&(d^=a.charCodeAt((_+32)%a.length)),_===0&&(q=d),d^=d<<10,d^=d>>>15,d^=d<<4,d^=d>>>13,_>=0&&(q=q+1640531527|0,l=A[_&127]^=d+q,f=l==0?f+1:0);for(f>=128&&(A[(a&&a.length||0)&127]=-1),f=127,_=4*128;_>0;--_)d=A[f+34&127],l=A[f=f+1&127],d^=d<<13,l^=l<<17,d^=d>>>15,l^=l>>>12,A[f]=d^l;c.w=q,c.X=A,c.i=f}i(o,s)}function p(s,o){return o.i=s.i,o.w=s.w,o.X=s.X.slice(),o}function u(s,o){s==null&&(s=+new Date);var i=new r(s),c=o&&o.state,a=function(){return(i.next()>>>0)/4294967296};return a.double=function(){do var l=i.next()>>>11,d=(i.next()>>>0)/4294967296,f=(l+d)/(1<<21);while(f===0);return f},a.int32=i.next,a.quick=a,c&&(c.X&&p(c,i),a.state=function(){return p(i,{})}),a}n&&n.exports?n.exports=u:t&&t.amd?t(function(){return u}):this.xor4096=u})(Re,typeof se=="object"&&se,typeof define=="function"&&define)});var Ce=I((Ne,le)=>{(function(e,n,t){function r(s){var o=this,i="";o.next=function(){var a=o.b,l=o.c,d=o.d,f=o.a;return a=a<<25^a>>>7^l,l=l-d|0,d=d<<24^d>>>8^f,f=f-a|0,o.b=a=a<<20^a>>>12^l,o.c=l=l-d|0,o.d=d<<16^l>>>16^f,o.a=f-a|0},o.a=0,o.b=0,o.c=-1640531527,o.d=1367130551,s===Math.floor(s)?(o.a=s/4294967296|0,o.b=s|0):i+=s;for(var c=0;c<i.length+20;c++)o.b^=i.charCodeAt(c)|0,o.next()}function p(s,o){return o.a=s.a,o.b=s.b,o.c=s.c,o.d=s.d,o}function u(s,o){var i=new r(s),c=o&&o.state,a=function(){return(i.next()>>>0)/4294967296};return a.double=function(){do var l=i.next()>>>11,d=(i.next()>>>0)/4294967296,f=(l+d)/(1<<21);while(f===0);return f},a.int32=i.next,a.quick=a,c&&(typeof c=="object"&&p(c,i),a.state=function(){return p(i,{})}),a}n&&n.exports?n.exports=u:t&&t.amd?t(function(){return u}):this.tychei=u})(Ne,typeof le=="object"&&le,typeof define=="function"&&define)});var Fe=I(()=>{});var Le=I((Oe,B)=>{(function(e,n,t){var r=256,p=6,u=52,s="random",o=t.pow(r,p),i=t.pow(2,u),c=i*2,a=r-1,l;function d(h,m,y){var w=[];m=m==!0?{entropy:!0}:m||{};var g=A(q(m.entropy?[h,U(n)]:h??M(),3),w),v=new f(w),x=function(){for(var k=v.g(p),E=o,T=0;k<i;)k=(k+T)*r,E*=r,T=v.g(1);for(;k>=c;)k/=2,E/=2,T>>>=1;return(k+T)/E};return x.int32=function(){return v.g(4)|0},x.quick=function(){return v.g(4)/4294967296},x.double=x,A(U(v.S),n),(m.pass||y||function(k,E,T,z){return z&&(z.S&&_(z,v),k.state=function(){return _(v,{})}),T?(t[s]=k,E):k})(x,g,"global"in m?m.global:this==t,m.state)}function f(h){var m,y=h.length,w=this,g=0,v=w.i=w.j=0,x=w.S=[];for(y||(h=[y++]);g<r;)x[g]=g++;for(g=0;g<r;g++)x[g]=x[v=a&v+h[g%y]+(m=x[g])],x[v]=m;(w.g=function(k){for(var E,T=0,z=w.i,J=w.j,j=w.S;k--;)E=j[z=a&z+1],T=T*r+j[a&(j[z]=j[J=a&J+E])+(j[J]=E)];return w.i=z,w.j=J,T})(r)}function _(h,m){return m.i=h.i,m.j=h.j,m.S=h.S.slice(),m}function q(h,m){var y=[],w=typeof h,g;if(m&&w=="object")for(g in h)try{y.push(q(h[g],m-1))}catch{}return y.length?y:w=="string"?h:h+"\0"}function A(h,m){for(var y=h+"",w,g=0;g<y.length;)m[a&g]=a&(w^=m[a&g]*19)+y.charCodeAt(g++);return U(m)}function M(){try{var h;return l&&(h=l.randomBytes)?h=h(r):(h=new Uint8Array(r),(e.crypto||e.msCrypto).getRandomValues(h)),U(h)}catch{var m=e.navigator,y=m&&m.plugins;return[+new Date,e,y,e.screen,U(n)]}}function U(h){return String.fromCharCode.apply(0,h)}if(A(t.random(),n),typeof B=="object"&&B.exports){B.exports=d;try{l=Fe()}catch{}}else typeof define=="function"&&define.amd?define(function(){return d}):t["seed"+s]=d})(typeof self<"u"?self:Oe,[],Math)});var Me=I((kt,$e)=>{var no=Se(),oo=Te(),to=Ie(),ao=ze(),ro=Pe(),io=Ce(),N=Le();N.alea=no;N.xor128=oo;N.xorwow=to;N.xorshift7=ao;N.xor4096=ro;N.tychei=io;$e.exports=N});function de(e){let n=C(e);if(!n)throw new Error("Email is required to derive an agent ID.");let t=(0,pe.default)(`${ue}#agent-id#${n}`);return Math.floor(t()*100)}async function Ue(e,n=H){let t=C(e);if(!t)throw new Error("Email is required to derive an agent password.");let r=String(n||H);return(await lo(`${ue}#${r}#${t}`)).slice(0,16)}function je(e,n=W){let t=C(e);if(!t)throw new Error("Email is required to derive target agent IDs.");let r=de(t),p=Array.from({length:100},(s,o)=>o).filter(s=>s!==r),u=(0,pe.default)(`${ue}#targets#${t}`);for(let s=p.length-1;s>0;s--){let o=Math.floor(u()*(s+1));[p[s],p[o]]=[p[o],p[s]]}return p.slice(0,n).map(Y)}function co(e){let n=C(e);if(!n)throw new Error("Email is required.");let t=Y(de(n)),r=je(n);return{ownAgentId:t,targetAgentIds:r}}async function Ge(e,n=H){let t=C(e),{ownAgentId:r,targetAgentIds:p}=co(t),u=await Ue(t,n);return{ownAgentId:r,ownPassword:u,targetAgentIds:p}}function uo(e){let n=typeof e=="string"?e.trim():e;if(!n)throw new Error("Submit a JSON payload with the three secret agents.");if(typeof n=="string"&&n.length>so)throw new Error("Submission is too large.");let t=n;if(typeof n=="string")try{t=JSON.parse(n)}catch{throw new Error("Submission must be valid JSON.")}let r=Array.isArray(t)?t:Array.isArray(t?.agents)?t.agents:null;if(!Array.isArray(r))throw new Error("Submission JSON must be an array, or an object with an 'agents' array.");if(r.length!==W)throw new Error(`Submit exactly ${W} agents.`);return r.map(p=>({agentId:po(ce(p,["agent_id","agentId","agent","id"])),email:C(ce(p,["email","email_id","emailId"])),password:String(ce(p,["password","pass"])).trim().toLowerCase()}))}async function De({response:e,studentEmail:n,salt:t,env:r}){let p=C(n);if(!p)throw new Error("Unable to verify because your exam email is missing.");let u=uo(e),s=je(p),o=new Set(s),i=new Set(u.map(l=>l.agentId)),c=()=>{throw new Error("Incorrect submission. Check the agent IDs, email IDs, and passwords.")};i.size!==W&&c(),s.some(l=>!i.has(l))&&c();let a=fo(t,r);for(let l of u){(!l.email||!l.password||!o.has(l.agentId))&&c(),Y(de(l.email))!==l.agentId&&c();let f=await Ue(l.email,a);l.password!==f&&c()}return!0}var pe,ue,W,H,so,C,lo,Y,ce,po,fo,Je=b(()=>{"use strict";pe=Vn(Me(),1),ue="q-share-secret-server",W=3,H="tds-share-secret-default-salt",so=5e4,C=e=>e?.trim().toLowerCase(),lo=async e=>{let n=new TextEncoder().encode(e),t=await crypto.subtle.digest("SHA-256",n);return Array.from(new Uint8Array(t)).map(r=>r.toString(16).padStart(2,"0")).join("")},Y=e=>String(Number.parseInt(String(e),10)).padStart(3,"0");ce=(e,n)=>{for(let t of n)if(e?.[t]!=null)return e[t];return""},po=e=>{let n=String(e??"").match(/\d+/)?.[0];if(!n)throw new Error("Every submission row must include a numeric agent ID.");let t=Number.parseInt(n,10);if(!Number.isInteger(t)||t<0||t>99)throw new Error(`Invalid agent ID ${e}. Must be between 000 and 099.`);return Y(t)};fo=(e,n)=>e||n?.SHARE_SECRET_SALT||H});var Be={};S(Be,{default:()=>mo});import{html as ho}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";async function mo({user:e,weight:n=1}){let t="q-share-secret-server",r="Secret Agent Password Exchange",p=await Ge(e.email),{ownAgentId:u,ownPassword:s,targetAgentIds:o}=p,i=ho`
    <div class="mb-3">
      <p>
        You are <strong>Secret Agent ${u}</strong>. Your own password is:
        <code>${s}</code>
      </p>
      <p>
        Find the passwords of these agents:
        <code>${o[0]}</code>, <code>${o[1]}</code>, <code>${o[2]}</code>.
      </p>
      <p>
        Coordinate with classmates to exchange information. You may choose to reveal your own password or
        keep it private.
      </p>

      <h6>What to submit</h6>
      <p>Submit JSON with exactly 3 entries, each containing agent ID, email ID, and password.</p>
      <pre><code>[
  { "agent_id": "${o[0]}", "email": "friend1@domain.com", "password": "16hexchars..." },
  { "agent_id": "${o[1]}", "email": "friend2@domain.com", "password": "16hexchars..." },
  { "agent_id": "${o[2]}", "email": "friend3@domain.com", "password": "16hexchars..." }
]</code></pre>
      <p class="form-text">
        You can also submit <code>{"agents":[...]}</code>. Agent IDs may be numeric or zero-padded.
      </p>

      <label for="${t}" class="form-label"><strong>Submission JSON</strong></label>
      <textarea
        class="form-control font-monospace"
        id="${t}"
        name="${t}"
        rows="10"
        placeholder='[{"agent_id":"020","email":"...","password":"..."}]'
      ></textarea>
    </div>
  `;return{id:t,title:r,weight:n,question:i,answer:async a=>De({response:a,studentEmail:e.email})}}var We=b(()=>{"use strict";Je()});async function He(e){let t=new TextEncoder().encode(e),r=await crypto.subtle.digest("SHA-256",t);return Array.from(new Uint8Array(r)).map(s=>s.toString(16).padStart(2,"0")).join("")}var Ye=b(()=>{"use strict"});function bo(e){if(e==null||e==="")throw new Error("Submit a JSON object with number and hash.");let n=typeof e=="string"?wo(e):e,t=n?.number,r=n?.hash;if(t==null||r==null)throw new Error("Submission must include number and hash.");return{number:String(t).trim(),hash:String(r).trim().toLowerCase()}}async function go({number:e,hash:n}){if(!new RegExp("^\\d{"+F+"}$").test(e))throw new Error("Submit a "+F+"-digit number.");if(!/^[a-f0-9]{64}$/.test(n))throw new Error("Submit a valid SHA-256 hash.");let t=await He(e);if(n!==t)throw new Error("Submitted hash does not match the submitted number.");return!0}async function fe(e){let n=bo(e);return go(n)}function wo(e){let n=e.trim();if(!n)throw new Error("Submit a JSON object with number and hash.");try{return JSON.parse(n)}catch{throw new Error("Submission must be valid JSON.")}}async function Ke(){return async e=>fe(e)}var F,Ve=b(()=>{"use strict";Ye();F=300});var Xe={};S(Xe,{default:()=>yo});import{html as he}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";async function yo({user:e,weight:n=1}){let t="q-transcribe-numbers-server",r="Transcribe Spoken Digits",p="0,1,2,3,4,5,6,7,8,9",u=null,s="";try{let a=await fetch(`/audiosample?n=${F}&f=${encodeURIComponent(p)}`,{method:"POST",cache:"no-store"});if(!a.ok)throw new Error(await a.text());if(u=await a.json(),typeof u?.data!="string"||typeof u?.hash!="string")throw new Error("Invalid /audiosample response.")}catch(a){s=a instanceof Error?a.message:String(a)}let o=he`
    <div class="alert alert-danger" role="alert">
      <strong>Important:</strong> This question generates a new audio sample every time you reload this page.
      Automate solving it, or solve it last and do not refresh after you start transcribing.
    </div>

    <p>
      Listen to the generated audio and transcribe the full ${F}-digit number.
    </p>

    ${s?he`<div class="alert alert-danger" role="alert">Unable to load audio sample: ${s}</div>`:he`
          <div class="mb-3">
            <audio controls preload="none" src="data:audio/mpeg;base64,${u.data}"></audio>
            <div class="form-text">Replay as many times as needed.</div>
          </div>

          <div class="mb-3">
            <label for="${t}-hash" class="form-label"><strong>Hash to submit</strong></label>
            <input
              class="form-control font-monospace"
              id="${t}-hash"
              value="${u.hash}"
              readonly
              spellcheck="false"
            />
          </div>
        `}

    <h6>What to submit</h6>
    <p>Submit JSON in this exact shape:</p>
    <pre><code>{"number":"(${F} digit)","hash":"${u.hash}"}</code></pre>

    <div class="mb-3">
      <label for="${t}" class="form-label"><strong>Submission JSON</strong></label>
      <textarea
        class="form-control font-monospace"
        id="${t}"
        name="${t}"
        rows="6"
        placeholder='{"number":"0123...","hash":"..."}'
      ></textarea>
      <div class="form-text">Your number must be exactly ${F} digits.</div>
    </div>
  `,i=await Ke(e);return{id:t,title:r,weight:n,question:o,answer:async a=>{if(s)throw new Error("Audio sample could not be loaded. Refresh and try again.");return await fe(a),i(a)}}}var Qe=b(()=>{"use strict";Ve()});function Ze(e){let n=e?.trim();if(!n)throw new Error("Enter a public GitHub pull request URL.");let t=n.match(/^https:\/\/github\.com\/([^/]+)\/([^/]+)\/pulls?\/(\d+)(?:[/?#].*)?$/i);if(!t)throw new Error("PR URL must look like https://github.com/OWNER/REPO/pull/NUMBER");let[,r,p,u]=t;return{owner:r,repo:p,number:u}}var _o,Rt,en=b(()=>{"use strict";_o="2026-02-10T23:59:59.999Z",Rt=Date.parse(_o)});var nn={};S(nn,{default:()=>ko});import{html as vo}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";async function ko({user:e,weight:n=1}){let t="q-pr-merge-server",r="Get a Small Open-Source PR Merged",p=vo`
    <div class="mb-3">
      <p>
        Contribute to open source by getting <strong>one genuinely useful small PR</strong> merged in a public GitHub repository with
        <strong>1000+ stars</strong>.
      </p>
      <p>
        This is a <strong>mini-tutorial</strong>, not a case study: keep the PR tiny, useful, and respectful of maintainer time.
      </p>

      <h6>How to do this responsibly</h6>
      <ol>
        <li>Choose one active repository with clear contribution guidelines.</li>
        <li>Find a small issue: typo/docs fix, broken link, tiny test fix, minor bug, or very small code improvement.</li>
        <li>Open one focused PR with a clear title, concise description, and no unrelated changes.</li>
        <li>Be respectful in communication. If maintainers request changes, respond quickly and politely.</li>
        <li>Do not spam multiple repos with low-quality AI-generated PRs.</li>
      </ol>

      <h6>AI + open-source etiquette (important)</h6>
      <ul>
        <li>Many maintainers are currently overloaded by AI-generated low-effort PRs that ignore project context.</li>
        <li>These PRs cost reviewer time and can create cleanup work even when they are rejected.</li>
        <li>You should treat maintainer review bandwidth as scarce: send one careful, useful PR instead of many.</li>
        <li>If AI helps you draft text/code, you are still fully responsible for correctness and relevance.</li>
      </ul>

      <h6>Acceptable workaround</h6>
      <p>
        This question is intentionally hackable. If a team creates its own public repo, gets it to 1000+ stars, and merges PRs there,
        that is acceptable for this exam.
      </p>

      <h6>What to submit</h6>
      <ul>
        <li>Paste the merged PR URL as proof of completion.</li>
        <li>Keep the repository and PR public until grading is completed.</li>
      </ul>

      <div class="alert alert-secondary" role="alert">
        <strong>Automatic verification checks:</strong>
        <ol class="mb-0">
          <li>Repository has at least 1000 stars.</li>
          <li>PR author commit email matches your student email (<code>${e.email}</code>).</li>
          <li>PR merge timestamp is after <code>2026-02-10</code> (UTC).</li>
        </ol>
      </div>

      <label for="${t}" class="form-label"><strong>Merged pull request URL</strong></label>
      <input
        class="form-control"
        id="${t}"
        name="${t}"
        placeholder="https://github.com/OWNER/REPO/pull/123"
        autocomplete="off"
      />
      <p class="form-text text-muted mb-0">Only public GitHub pull request URLs are accepted.</p>
    </div>
  `;return{id:t,title:r,weight:n,question:p,answer:async s=>(Ze(s),!0)}}var on=b(()=>{"use strict";en()});var K,tn=b(()=>{K=[[`	foo	baz		bim
`,`<pre><code>foo	baz		bim
</code></pre>
`],[`  	foo	baz		bim
`,`<pre><code>foo	baz		bim
</code></pre>
`],[`    a	a
    \u1F50	a
`,`<pre><code>a	a
\u1F50	a
</code></pre>
`],[`  - foo

	bar
`,`<ul>
<li>
<p>foo</p>
<p>bar</p>
</li>
</ul>
`],[`- foo

		bar
`,`<ul>
<li>
<p>foo</p>
<pre><code>  bar
</code></pre>
</li>
</ul>
`],[`>		foo
`,`<blockquote>
<pre><code>  foo
</code></pre>
</blockquote>
`],[`-		foo
`,`<ul>
<li>
<pre><code>  foo
</code></pre>
</li>
</ul>
`],[`    foo
	bar
`,`<pre><code>foo
bar
</code></pre>
`],[` - foo
   - bar
	 - baz
`,`<ul>
<li>foo
<ul>
<li>bar
<ul>
<li>baz</li>
</ul>
</li>
</ul>
</li>
</ul>
`],[`#	Foo
`,`<h1>Foo</h1>
`],[`*	*	*	
`,`<hr />
`],[`\\!\\"\\#\\$\\%\\&\\'\\(\\)\\*\\+\\,\\-\\.\\/\\:\\;\\<\\=\\>\\?\\@\\[\\\\\\]\\^\\_\\\`\\{\\|\\}\\~
`,"<p>!&quot;#$%&amp;'()*+,-./:;&lt;=&gt;?@[\\]^_`{|}~</p>\n"],[`\\	\\A\\a\\ \\3\\\u03C6\\\xAB
`,`<p>\\	\\A\\a\\ \\3\\\u03C6\\\xAB</p>
`],[`\\*not emphasized*
\\<br/> not a tag
\\[not a link](/foo)
\\\`not code\`
1\\. not a list
\\* not a list
\\# not a heading
\\[foo]: /url "not a reference"
\\&ouml; not a character entity
`,`<p>*not emphasized*
&lt;br/&gt; not a tag
[not a link](/foo)
\`not code\`
1. not a list
* not a list
# not a heading
[foo]: /url &quot;not a reference&quot;
&amp;ouml; not a character entity</p>
`],[`\\\\*emphasis*
`,`<p>\\<em>emphasis</em></p>
`],[`foo\\
bar
`,`<p>foo<br />
bar</p>
`],["`` \\[\\` ``\n","<p><code>\\[\\`</code></p>\n"],[`    \\[\\]
`,`<pre><code>\\[\\]
</code></pre>
`],[`~~~
\\[\\]
~~~
`,`<pre><code>\\[\\]
</code></pre>
`],[`<https://example.com?find=\\*>
`,`<p><a href="https://example.com?find=%5C*">https://example.com?find=\\*</a></p>
`],[`<a href="/bar\\/)">
`,`<a href="/bar\\/)">
`],[`[foo](/bar\\* "ti\\*tle")
`,`<p><a href="/bar*" title="ti*tle">foo</a></p>
`],[`[foo]

[foo]: /bar\\* "ti\\*tle"
`,`<p><a href="/bar*" title="ti*tle">foo</a></p>
`],["``` foo\\+bar\nfoo\n```\n",`<pre><code class="language-foo+bar">foo
</code></pre>
`],[`&nbsp; &amp; &copy; &AElig; &Dcaron;
&frac34; &HilbertSpace; &DifferentialD;
&ClockwiseContourIntegral; &ngE;
`,`<p>\xA0 &amp; \xA9 \xC6 \u010E
\xBE \u210B \u2146
\u2232 \u2267\u0338</p>
`],[`&#35; &#1234; &#992; &#0;
`,`<p># \u04D2 \u03E0 \uFFFD</p>
`],[`&#X22; &#XD06; &#xcab;
`,`<p>&quot; \u0D06 \u0CAB</p>
`],[`&nbsp &x; &#; &#x;
&#87654321;
&#abcdef0;
&ThisIsNotDefined; &hi?;
`,`<p>&amp;nbsp &amp;x; &amp;#; &amp;#x;
&amp;#87654321;
&amp;#abcdef0;
&amp;ThisIsNotDefined; &amp;hi?;</p>
`],[`&copy
`,`<p>&amp;copy</p>
`],[`&MadeUpEntity;
`,`<p>&amp;MadeUpEntity;</p>
`],[`<a href="&ouml;&ouml;.html">
`,`<a href="&ouml;&ouml;.html">
`],[`[foo](/f&ouml;&ouml; "f&ouml;&ouml;")
`,`<p><a href="/f%C3%B6%C3%B6" title="f\xF6\xF6">foo</a></p>
`],[`[foo]

[foo]: /f&ouml;&ouml; "f&ouml;&ouml;"
`,`<p><a href="/f%C3%B6%C3%B6" title="f\xF6\xF6">foo</a></p>
`],["``` f&ouml;&ouml;\nfoo\n```\n",`<pre><code class="language-f\xF6\xF6">foo
</code></pre>
`],["`f&ouml;&ouml;`\n",`<p><code>f&amp;ouml;&amp;ouml;</code></p>
`],[`    f&ouml;f&ouml;
`,`<pre><code>f&amp;ouml;f&amp;ouml;
</code></pre>
`],[`&#42;foo&#42;
*foo*
`,`<p>*foo*
<em>foo</em></p>
`],[`&#42; foo

* foo
`,`<p>* foo</p>
<ul>
<li>foo</li>
</ul>
`],[`foo&#10;&#10;bar
`,`<p>foo

bar</p>
`],[`&#9;foo
`,`<p>	foo</p>
`],[`[a](url &quot;tit&quot;)
`,`<p>[a](url &quot;tit&quot;)</p>
`],["- `one\n- two`\n",`<ul>
<li>\`one</li>
<li>two\`</li>
</ul>
`],[`***
---
___
`,`<hr />
<hr />
<hr />
`],[`+++
`,`<p>+++</p>
`],[`===
`,`<p>===</p>
`],[`--
**
__
`,`<p>--
**
__</p>
`],[` ***
  ***
   ***
`,`<hr />
<hr />
<hr />
`],[`    ***
`,`<pre><code>***
</code></pre>
`],[`Foo
    ***
`,`<p>Foo
***</p>
`],[`_____________________________________
`,`<hr />
`],[` - - -
`,`<hr />
`],[` **  * ** * ** * **
`,`<hr />
`],[`-     -      -      -
`,`<hr />
`],[`- - - -    
`,`<hr />
`],[`_ _ _ _ a

a------

---a---
`,`<p>_ _ _ _ a</p>
<p>a------</p>
<p>---a---</p>
`],[` *-*
`,`<p><em>-</em></p>
`],[`- foo
***
- bar
`,`<ul>
<li>foo</li>
</ul>
<hr />
<ul>
<li>bar</li>
</ul>
`],[`Foo
***
bar
`,`<p>Foo</p>
<hr />
<p>bar</p>
`],[`Foo
---
bar
`,`<h2>Foo</h2>
<p>bar</p>
`],[`* Foo
* * *
* Bar
`,`<ul>
<li>Foo</li>
</ul>
<hr />
<ul>
<li>Bar</li>
</ul>
`],[`- Foo
- * * *
`,`<ul>
<li>Foo</li>
<li>
<hr />
</li>
</ul>
`],[`# foo
## foo
### foo
#### foo
##### foo
###### foo
`,`<h1>foo</h1>
<h2>foo</h2>
<h3>foo</h3>
<h4>foo</h4>
<h5>foo</h5>
<h6>foo</h6>
`],[`####### foo
`,`<p>####### foo</p>
`],[`#5 bolt

#hashtag
`,`<p>#5 bolt</p>
<p>#hashtag</p>
`],[`\\## foo
`,`<p>## foo</p>
`],[`# foo *bar* \\*baz\\*
`,`<h1>foo <em>bar</em> *baz*</h1>
`],[`#                  foo                     
`,`<h1>foo</h1>
`],[` ### foo
  ## foo
   # foo
`,`<h3>foo</h3>
<h2>foo</h2>
<h1>foo</h1>
`],[`    # foo
`,`<pre><code># foo
</code></pre>
`],[`foo
    # bar
`,`<p>foo
# bar</p>
`],[`## foo ##
  ###   bar    ###
`,`<h2>foo</h2>
<h3>bar</h3>
`],[`# foo ##################################
##### foo ##
`,`<h1>foo</h1>
<h5>foo</h5>
`],[`### foo ###     
`,`<h3>foo</h3>
`],[`### foo ### b
`,`<h3>foo ### b</h3>
`],[`# foo#
`,`<h1>foo#</h1>
`],[`### foo \\###
## foo #\\##
# foo \\#
`,`<h3>foo ###</h3>
<h2>foo ###</h2>
<h1>foo #</h1>
`],[`****
## foo
****
`,`<hr />
<h2>foo</h2>
<hr />
`],[`Foo bar
# baz
Bar foo
`,`<p>Foo bar</p>
<h1>baz</h1>
<p>Bar foo</p>
`],[`## 
#
### ###
`,`<h2></h2>
<h1></h1>
<h3></h3>
`],[`Foo *bar*
=========

Foo *bar*
---------
`,`<h1>Foo <em>bar</em></h1>
<h2>Foo <em>bar</em></h2>
`],[`Foo *bar
baz*
====
`,`<h1>Foo <em>bar
baz</em></h1>
`],[`  Foo *bar
baz*	
====
`,`<h1>Foo <em>bar
baz</em></h1>
`],[`Foo
-------------------------

Foo
=
`,`<h2>Foo</h2>
<h1>Foo</h1>
`],[`   Foo
---

  Foo
-----

  Foo
  ===
`,`<h2>Foo</h2>
<h2>Foo</h2>
<h1>Foo</h1>
`],[`    Foo
    ---

    Foo
---
`,`<pre><code>Foo
---

Foo
</code></pre>
<hr />
`],[`Foo
   ----      
`,`<h2>Foo</h2>
`],[`Foo
    ---
`,`<p>Foo
---</p>
`],[`Foo
= =

Foo
--- -
`,`<p>Foo
= =</p>
<p>Foo</p>
<hr />
`],[`Foo  
-----
`,`<h2>Foo</h2>
`],[`Foo\\
----
`,`<h2>Foo\\</h2>
`],[`\`Foo
----
\`

<a title="a lot
---
of dashes"/>
`,`<h2>\`Foo</h2>
<p>\`</p>
<h2>&lt;a title=&quot;a lot</h2>
<p>of dashes&quot;/&gt;</p>
`],[`> Foo
---
`,`<blockquote>
<p>Foo</p>
</blockquote>
<hr />
`],[`> foo
bar
===
`,`<blockquote>
<p>foo
bar
===</p>
</blockquote>
`],[`- Foo
---
`,`<ul>
<li>Foo</li>
</ul>
<hr />
`],[`Foo
Bar
---
`,`<h2>Foo
Bar</h2>
`],[`---
Foo
---
Bar
---
Baz
`,`<hr />
<h2>Foo</h2>
<h2>Bar</h2>
<p>Baz</p>
`],[`
====
`,`<p>====</p>
`],[`---
---
`,`<hr />
<hr />
`],[`- foo
-----
`,`<ul>
<li>foo</li>
</ul>
<hr />
`],[`    foo
---
`,`<pre><code>foo
</code></pre>
<hr />
`],[`> foo
-----
`,`<blockquote>
<p>foo</p>
</blockquote>
<hr />
`],[`\\> foo
------
`,`<h2>&gt; foo</h2>
`],[`Foo

bar
---
baz
`,`<p>Foo</p>
<h2>bar</h2>
<p>baz</p>
`],[`Foo
bar

---

baz
`,`<p>Foo
bar</p>
<hr />
<p>baz</p>
`],[`Foo
bar
* * *
baz
`,`<p>Foo
bar</p>
<hr />
<p>baz</p>
`],[`Foo
bar
\\---
baz
`,`<p>Foo
bar
---
baz</p>
`],[`    a simple
      indented code block
`,`<pre><code>a simple
  indented code block
</code></pre>
`],[`  - foo

    bar
`,`<ul>
<li>
<p>foo</p>
<p>bar</p>
</li>
</ul>
`],[`1.  foo

    - bar
`,`<ol>
<li>
<p>foo</p>
<ul>
<li>bar</li>
</ul>
</li>
</ol>
`],[`    <a/>
    *hi*

    - one
`,`<pre><code>&lt;a/&gt;
*hi*

- one
</code></pre>
`],[`    chunk1

    chunk2
  
 
 
    chunk3
`,`<pre><code>chunk1

chunk2



chunk3
</code></pre>
`],[`    chunk1
      
      chunk2
`,`<pre><code>chunk1
  
  chunk2
</code></pre>
`],[`Foo
    bar

`,`<p>Foo
bar</p>
`],[`    foo
bar
`,`<pre><code>foo
</code></pre>
<p>bar</p>
`],[`# Heading
    foo
Heading
------
    foo
----
`,`<h1>Heading</h1>
<pre><code>foo
</code></pre>
<h2>Heading</h2>
<pre><code>foo
</code></pre>
<hr />
`],[`        foo
    bar
`,`<pre><code>    foo
bar
</code></pre>
`],[`
    
    foo
    

`,`<pre><code>foo
</code></pre>
`],[`    foo  
`,`<pre><code>foo  
</code></pre>
`],["```\n<\n >\n```\n",`<pre><code>&lt;
 &gt;
</code></pre>
`],[`~~~
<
 >
~~~
`,`<pre><code>&lt;
 &gt;
</code></pre>
`],["``\nfoo\n``\n",`<p><code>foo</code></p>
`],["```\naaa\n~~~\n```\n",`<pre><code>aaa
~~~
</code></pre>
`],[`~~~
aaa
\`\`\`
~~~
`,"<pre><code>aaa\n```\n</code></pre>\n"],["````\naaa\n```\n``````\n","<pre><code>aaa\n```\n</code></pre>\n"],[`~~~~
aaa
~~~
~~~~
`,`<pre><code>aaa
~~~
</code></pre>
`],["```\n",`<pre><code></code></pre>
`],["`````\n\n```\naaa\n",`<pre><code>
\`\`\`
aaa
</code></pre>
`],[`> \`\`\`
> aaa

bbb
`,`<blockquote>
<pre><code>aaa
</code></pre>
</blockquote>
<p>bbb</p>
`],["```\n\n  \n```\n",`<pre><code>
  
</code></pre>
`],["```\n```\n",`<pre><code></code></pre>
`],[" ```\n aaa\naaa\n```\n",`<pre><code>aaa
aaa
</code></pre>
`],["  ```\naaa\n  aaa\naaa\n  ```\n",`<pre><code>aaa
aaa
aaa
</code></pre>
`],["   ```\n   aaa\n    aaa\n  aaa\n   ```\n",`<pre><code>aaa
 aaa
aaa
</code></pre>
`],["    ```\n    aaa\n    ```\n","<pre><code>```\naaa\n```\n</code></pre>\n"],["```\naaa\n  ```\n",`<pre><code>aaa
</code></pre>
`],["   ```\naaa\n  ```\n",`<pre><code>aaa
</code></pre>
`],["```\naaa\n    ```\n","<pre><code>aaa\n    ```\n</code></pre>\n"],["``` ```\naaa\n",`<p><code> </code>
aaa</p>
`],[`~~~~~~
aaa
~~~ ~~
`,`<pre><code>aaa
~~~ ~~
</code></pre>
`],["foo\n```\nbar\n```\nbaz\n",`<p>foo</p>
<pre><code>bar
</code></pre>
<p>baz</p>
`],[`foo
---
~~~
bar
~~~
# baz
`,`<h2>foo</h2>
<pre><code>bar
</code></pre>
<h1>baz</h1>
`],["```ruby\ndef foo(x)\n  return 3\nend\n```\n",`<pre><code class="language-ruby">def foo(x)
  return 3
end
</code></pre>
`],[`~~~~    ruby startline=3 $%@#$
def foo(x)
  return 3
end
~~~~~~~
`,`<pre><code class="language-ruby">def foo(x)
  return 3
end
</code></pre>
`],["````;\n````\n",`<pre><code class="language-;"></code></pre>
`],["``` aa ```\nfoo\n",`<p><code>aa</code>
foo</p>
`],["~~~ aa ``` ~~~\nfoo\n~~~\n",`<pre><code class="language-aa">foo
</code></pre>
`],["```\n``` aaa\n```\n","<pre><code>``` aaa\n</code></pre>\n"],[`<table><tr><td>
<pre>
**Hello**,

_world_.
</pre>
</td></tr></table>
`,`<table><tr><td>
<pre>
**Hello**,
<p><em>world</em>.
</pre></p>
</td></tr></table>
`],[`<table>
  <tr>
    <td>
           hi
    </td>
  </tr>
</table>

okay.
`,`<table>
  <tr>
    <td>
           hi
    </td>
  </tr>
</table>
<p>okay.</p>
`],[` <div>
  *hello*
         <foo><a>
`,` <div>
  *hello*
         <foo><a>
`],[`</div>
*foo*
`,`</div>
*foo*
`],[`<DIV CLASS="foo">

*Markdown*

</DIV>
`,`<DIV CLASS="foo">
<p><em>Markdown</em></p>
</DIV>
`],[`<div id="foo"
  class="bar">
</div>
`,`<div id="foo"
  class="bar">
</div>
`],[`<div id="foo" class="bar
  baz">
</div>
`,`<div id="foo" class="bar
  baz">
</div>
`],[`<div>
*foo*

*bar*
`,`<div>
*foo*
<p><em>bar</em></p>
`],[`<div id="foo"
*hi*
`,`<div id="foo"
*hi*
`],[`<div class
foo
`,`<div class
foo
`],[`<div *???-&&&-<---
*foo*
`,`<div *???-&&&-<---
*foo*
`],[`<div><a href="bar">*foo*</a></div>
`,`<div><a href="bar">*foo*</a></div>
`],[`<table><tr><td>
foo
</td></tr></table>
`,`<table><tr><td>
foo
</td></tr></table>
`],["<div></div>\n``` c\nint x = 33;\n```\n","<div></div>\n``` c\nint x = 33;\n```\n"],[`<div
> not quoted text
`,`<div
> not quoted text
`],[`<a href="foo">
*bar*
</a>
`,`<a href="foo">
*bar*
</a>
`],[`<Warning>
*bar*
</Warning>
`,`<Warning>
*bar*
</Warning>
`],[`<i class="foo">
*bar*
</i>
`,`<i class="foo">
*bar*
</i>
`],[`</ins>
*bar*
`,`</ins>
*bar*
`],[`<del>
*foo*
</del>
`,`<del>
*foo*
</del>
`],[`<del>

*foo*

</del>
`,`<del>
<p><em>foo</em></p>
</del>
`],[`<del>*foo*</del>
`,`<p><del><em>foo</em></del></p>
`],[`<del
class="foo">
*foo*
</del>
`,`<p><del
class="foo">
<em>foo</em>
</del></p>
`],[`<pre language="haskell"><code>
import Text.HTML.TagSoup

main :: IO ()
main = print $ parseTags tags
</code></pre>
okay
`,`<pre language="haskell"><code>
import Text.HTML.TagSoup

main :: IO ()
main = print $ parseTags tags
</code></pre>
<p>okay</p>
`],[`<script type="text/javascript">
// JavaScript example

document.getElementById("demo").innerHTML = "Hello JavaScript!";
<\/script>
okay
`,`<script type="text/javascript">
// JavaScript example

document.getElementById("demo").innerHTML = "Hello JavaScript!";
<\/script>
<p>okay</p>
`],[`<textarea>

*foo*

_bar_

</textarea>
`,`<textarea>

*foo*

_bar_

</textarea>
`],[`<style
  type="text/css">
h1 {color:red;}

p {color:blue;}
</style>
okay
`,`<style
  type="text/css">
h1 {color:red;}

p {color:blue;}
</style>
<p>okay</p>
`],[`<style
  type="text/css">

foo
`,`<style
  type="text/css">

foo
`],[`> <div>
> foo

bar
`,`<blockquote>
<div>
foo
</blockquote>
<p>bar</p>
`],[`- <div>
- foo
`,`<ul>
<li>
<div>
</li>
<li>foo</li>
</ul>
`],[`<style>p{color:red;}</style>
*foo*
`,`<style>p{color:red;}</style>
<p><em>foo</em></p>
`],[`<!-- foo -->*bar*
*baz*
`,`<!-- foo -->*bar*
<p><em>baz</em></p>
`],[`<script>
foo
<\/script>1. *bar*
`,`<script>
foo
<\/script>1. *bar*
`],[`<!-- Foo

bar
   baz -->
okay
`,`<!-- Foo

bar
   baz -->
<p>okay</p>
`],[`<?php

  echo '>';

?>
okay
`,`<?php

  echo '>';

?>
<p>okay</p>
`],[`<!DOCTYPE html>
`,`<!DOCTYPE html>
`],[`<![CDATA[
function matchwo(a,b)
{
  if (a < b && a < 0) then {
    return 1;

  } else {

    return 0;
  }
}
]]>
okay
`,`<![CDATA[
function matchwo(a,b)
{
  if (a < b && a < 0) then {
    return 1;

  } else {

    return 0;
  }
}
]]>
<p>okay</p>
`],[`  <!-- foo -->

    <!-- foo -->
`,`  <!-- foo -->
<pre><code>&lt;!-- foo --&gt;
</code></pre>
`],[`  <div>

    <div>
`,`  <div>
<pre><code>&lt;div&gt;
</code></pre>
`],[`Foo
<div>
bar
</div>
`,`<p>Foo</p>
<div>
bar
</div>
`],[`<div>
bar
</div>
*foo*
`,`<div>
bar
</div>
*foo*
`],[`Foo
<a href="bar">
baz
`,`<p>Foo
<a href="bar">
baz</p>
`],[`<div>

*Emphasized* text.

</div>
`,`<div>
<p><em>Emphasized</em> text.</p>
</div>
`],[`<div>
*Emphasized* text.
</div>
`,`<div>
*Emphasized* text.
</div>
`],[`<table>

<tr>

<td>
Hi
</td>

</tr>

</table>
`,`<table>
<tr>
<td>
Hi
</td>
</tr>
</table>
`],[`<table>

  <tr>

    <td>
      Hi
    </td>

  </tr>

</table>
`,`<table>
  <tr>
<pre><code>&lt;td&gt;
  Hi
&lt;/td&gt;
</code></pre>
  </tr>
</table>
`],[`[foo]: /url "title"

[foo]
`,`<p><a href="/url" title="title">foo</a></p>
`],[`   [foo]: 
      /url  
           'the title'  

[foo]
`,`<p><a href="/url" title="the title">foo</a></p>
`],[`[Foo*bar\\]]:my_(url) 'title (with parens)'

[Foo*bar\\]]
`,`<p><a href="my_(url)" title="title (with parens)">Foo*bar]</a></p>
`],[`[Foo bar]:
<my url>
'title'

[Foo bar]
`,`<p><a href="my%20url" title="title">Foo bar</a></p>
`],[`[foo]: /url '
title
line1
line2
'

[foo]
`,`<p><a href="/url" title="
title
line1
line2
">foo</a></p>
`],[`[foo]: /url 'title

with blank line'

[foo]
`,`<p>[foo]: /url 'title</p>
<p>with blank line'</p>
<p>[foo]</p>
`],[`[foo]:
/url

[foo]
`,`<p><a href="/url">foo</a></p>
`],[`[foo]:

[foo]
`,`<p>[foo]:</p>
<p>[foo]</p>
`],[`[foo]: <>

[foo]
`,`<p><a href="">foo</a></p>
`],[`[foo]: <bar>(baz)

[foo]
`,`<p>[foo]: <bar>(baz)</p>
<p>[foo]</p>
`],[`[foo]: /url\\bar\\*baz "foo\\"bar\\baz"

[foo]
`,`<p><a href="/url%5Cbar*baz" title="foo&quot;bar\\baz">foo</a></p>
`],[`[foo]

[foo]: url
`,`<p><a href="url">foo</a></p>
`],[`[foo]

[foo]: first
[foo]: second
`,`<p><a href="first">foo</a></p>
`],[`[FOO]: /url

[Foo]
`,`<p><a href="/url">Foo</a></p>
`],[`[\u0391\u0393\u03A9]: /\u03C6\u03BF\u03C5

[\u03B1\u03B3\u03C9]
`,`<p><a href="/%CF%86%CE%BF%CF%85">\u03B1\u03B3\u03C9</a></p>
`],[`[foo]: /url
`,""],[`[
foo
]: /url
bar
`,`<p>bar</p>
`],[`[foo]: /url "title" ok
`,`<p>[foo]: /url &quot;title&quot; ok</p>
`],[`[foo]: /url
"title" ok
`,`<p>&quot;title&quot; ok</p>
`],[`    [foo]: /url "title"

[foo]
`,`<pre><code>[foo]: /url &quot;title&quot;
</code></pre>
<p>[foo]</p>
`],["```\n[foo]: /url\n```\n\n[foo]\n",`<pre><code>[foo]: /url
</code></pre>
<p>[foo]</p>
`],[`Foo
[bar]: /baz

[bar]
`,`<p>Foo
[bar]: /baz</p>
<p>[bar]</p>
`],[`# [Foo]
[foo]: /url
> bar
`,`<h1><a href="/url">Foo</a></h1>
<blockquote>
<p>bar</p>
</blockquote>
`],[`[foo]: /url
bar
===
[foo]
`,`<h1>bar</h1>
<p><a href="/url">foo</a></p>
`],[`[foo]: /url
===
[foo]
`,`<p>===
<a href="/url">foo</a></p>
`],[`[foo]: /foo-url "foo"
[bar]: /bar-url
  "bar"
[baz]: /baz-url

[foo],
[bar],
[baz]
`,`<p><a href="/foo-url" title="foo">foo</a>,
<a href="/bar-url" title="bar">bar</a>,
<a href="/baz-url">baz</a></p>
`],[`[foo]

> [foo]: /url
`,`<p><a href="/url">foo</a></p>
<blockquote>
</blockquote>
`],[`aaa

bbb
`,`<p>aaa</p>
<p>bbb</p>
`],[`aaa
bbb

ccc
ddd
`,`<p>aaa
bbb</p>
<p>ccc
ddd</p>
`],[`aaa


bbb
`,`<p>aaa</p>
<p>bbb</p>
`],[`  aaa
 bbb
`,`<p>aaa
bbb</p>
`],[`aaa
             bbb
                                       ccc
`,`<p>aaa
bbb
ccc</p>
`],[`   aaa
bbb
`,`<p>aaa
bbb</p>
`],[`    aaa
bbb
`,`<pre><code>aaa
</code></pre>
<p>bbb</p>
`],[`aaa     
bbb     
`,`<p>aaa<br />
bbb</p>
`],[`  

aaa
  

# aaa

  
`,`<p>aaa</p>
<h1>aaa</h1>
`],[`> # Foo
> bar
> baz
`,`<blockquote>
<h1>Foo</h1>
<p>bar
baz</p>
</blockquote>
`],[`># Foo
>bar
> baz
`,`<blockquote>
<h1>Foo</h1>
<p>bar
baz</p>
</blockquote>
`],[`   > # Foo
   > bar
 > baz
`,`<blockquote>
<h1>Foo</h1>
<p>bar
baz</p>
</blockquote>
`],[`    > # Foo
    > bar
    > baz
`,`<pre><code>&gt; # Foo
&gt; bar
&gt; baz
</code></pre>
`],[`> # Foo
> bar
baz
`,`<blockquote>
<h1>Foo</h1>
<p>bar
baz</p>
</blockquote>
`],[`> bar
baz
> foo
`,`<blockquote>
<p>bar
baz
foo</p>
</blockquote>
`],[`> foo
---
`,`<blockquote>
<p>foo</p>
</blockquote>
<hr />
`],[`> - foo
- bar
`,`<blockquote>
<ul>
<li>foo</li>
</ul>
</blockquote>
<ul>
<li>bar</li>
</ul>
`],[`>     foo
    bar
`,`<blockquote>
<pre><code>foo
</code></pre>
</blockquote>
<pre><code>bar
</code></pre>
`],["> ```\nfoo\n```\n",`<blockquote>
<pre><code></code></pre>
</blockquote>
<p>foo</p>
<pre><code></code></pre>
`],[`> foo
    - bar
`,`<blockquote>
<p>foo
- bar</p>
</blockquote>
`],[`>
`,`<blockquote>
</blockquote>
`],[`>
>  
> 
`,`<blockquote>
</blockquote>
`],[`>
> foo
>  
`,`<blockquote>
<p>foo</p>
</blockquote>
`],[`> foo

> bar
`,`<blockquote>
<p>foo</p>
</blockquote>
<blockquote>
<p>bar</p>
</blockquote>
`],[`> foo
> bar
`,`<blockquote>
<p>foo
bar</p>
</blockquote>
`],[`> foo
>
> bar
`,`<blockquote>
<p>foo</p>
<p>bar</p>
</blockquote>
`],[`foo
> bar
`,`<p>foo</p>
<blockquote>
<p>bar</p>
</blockquote>
`],[`> aaa
***
> bbb
`,`<blockquote>
<p>aaa</p>
</blockquote>
<hr />
<blockquote>
<p>bbb</p>
</blockquote>
`],[`> bar
baz
`,`<blockquote>
<p>bar
baz</p>
</blockquote>
`],[`> bar

baz
`,`<blockquote>
<p>bar</p>
</blockquote>
<p>baz</p>
`],[`> bar
>
baz
`,`<blockquote>
<p>bar</p>
</blockquote>
<p>baz</p>
`],[`> > > foo
bar
`,`<blockquote>
<blockquote>
<blockquote>
<p>foo
bar</p>
</blockquote>
</blockquote>
</blockquote>
`],[`>>> foo
> bar
>>baz
`,`<blockquote>
<blockquote>
<blockquote>
<p>foo
bar
baz</p>
</blockquote>
</blockquote>
</blockquote>
`],[`>     code

>    not code
`,`<blockquote>
<pre><code>code
</code></pre>
</blockquote>
<blockquote>
<p>not code</p>
</blockquote>
`],[`A paragraph
with two lines.

    indented code

> A block quote.
`,`<p>A paragraph
with two lines.</p>
<pre><code>indented code
</code></pre>
<blockquote>
<p>A block quote.</p>
</blockquote>
`],[`1.  A paragraph
    with two lines.

        indented code

    > A block quote.
`,`<ol>
<li>
<p>A paragraph
with two lines.</p>
<pre><code>indented code
</code></pre>
<blockquote>
<p>A block quote.</p>
</blockquote>
</li>
</ol>
`],[`- one

 two
`,`<ul>
<li>one</li>
</ul>
<p>two</p>
`],[`- one

  two
`,`<ul>
<li>
<p>one</p>
<p>two</p>
</li>
</ul>
`],[` -    one

     two
`,`<ul>
<li>one</li>
</ul>
<pre><code> two
</code></pre>
`],[` -    one

      two
`,`<ul>
<li>
<p>one</p>
<p>two</p>
</li>
</ul>
`],[`   > > 1.  one
>>
>>     two
`,`<blockquote>
<blockquote>
<ol>
<li>
<p>one</p>
<p>two</p>
</li>
</ol>
</blockquote>
</blockquote>
`],[`>>- one
>>
  >  > two
`,`<blockquote>
<blockquote>
<ul>
<li>one</li>
</ul>
<p>two</p>
</blockquote>
</blockquote>
`],[`-one

2.two
`,`<p>-one</p>
<p>2.two</p>
`],[`- foo


  bar
`,`<ul>
<li>
<p>foo</p>
<p>bar</p>
</li>
</ul>
`],[`1.  foo

    \`\`\`
    bar
    \`\`\`

    baz

    > bam
`,`<ol>
<li>
<p>foo</p>
<pre><code>bar
</code></pre>
<p>baz</p>
<blockquote>
<p>bam</p>
</blockquote>
</li>
</ol>
`],[`- Foo

      bar


      baz
`,`<ul>
<li>
<p>Foo</p>
<pre><code>bar


baz
</code></pre>
</li>
</ul>
`],[`123456789. ok
`,`<ol start="123456789">
<li>ok</li>
</ol>
`],[`1234567890. not ok
`,`<p>1234567890. not ok</p>
`],[`0. ok
`,`<ol start="0">
<li>ok</li>
</ol>
`],[`003. ok
`,`<ol start="3">
<li>ok</li>
</ol>
`],[`-1. not ok
`,`<p>-1. not ok</p>
`],[`- foo

      bar
`,`<ul>
<li>
<p>foo</p>
<pre><code>bar
</code></pre>
</li>
</ul>
`],[`  10.  foo

           bar
`,`<ol start="10">
<li>
<p>foo</p>
<pre><code>bar
</code></pre>
</li>
</ol>
`],[`    indented code

paragraph

    more code
`,`<pre><code>indented code
</code></pre>
<p>paragraph</p>
<pre><code>more code
</code></pre>
`],[`1.     indented code

   paragraph

       more code
`,`<ol>
<li>
<pre><code>indented code
</code></pre>
<p>paragraph</p>
<pre><code>more code
</code></pre>
</li>
</ol>
`],[`1.      indented code

   paragraph

       more code
`,`<ol>
<li>
<pre><code> indented code
</code></pre>
<p>paragraph</p>
<pre><code>more code
</code></pre>
</li>
</ol>
`],[`   foo

bar
`,`<p>foo</p>
<p>bar</p>
`],[`-    foo

  bar
`,`<ul>
<li>foo</li>
</ul>
<p>bar</p>
`],[`-  foo

   bar
`,`<ul>
<li>
<p>foo</p>
<p>bar</p>
</li>
</ul>
`],[`-
  foo
-
  \`\`\`
  bar
  \`\`\`
-
      baz
`,`<ul>
<li>foo</li>
<li>
<pre><code>bar
</code></pre>
</li>
<li>
<pre><code>baz
</code></pre>
</li>
</ul>
`],[`-   
  foo
`,`<ul>
<li>foo</li>
</ul>
`],[`-

  foo
`,`<ul>
<li></li>
</ul>
<p>foo</p>
`],[`- foo
-
- bar
`,`<ul>
<li>foo</li>
<li></li>
<li>bar</li>
</ul>
`],[`- foo
-   
- bar
`,`<ul>
<li>foo</li>
<li></li>
<li>bar</li>
</ul>
`],[`1. foo
2.
3. bar
`,`<ol>
<li>foo</li>
<li></li>
<li>bar</li>
</ol>
`],[`*
`,`<ul>
<li></li>
</ul>
`],[`foo
*

foo
1.
`,`<p>foo
*</p>
<p>foo
1.</p>
`],[` 1.  A paragraph
     with two lines.

         indented code

     > A block quote.
`,`<ol>
<li>
<p>A paragraph
with two lines.</p>
<pre><code>indented code
</code></pre>
<blockquote>
<p>A block quote.</p>
</blockquote>
</li>
</ol>
`],[`  1.  A paragraph
      with two lines.

          indented code

      > A block quote.
`,`<ol>
<li>
<p>A paragraph
with two lines.</p>
<pre><code>indented code
</code></pre>
<blockquote>
<p>A block quote.</p>
</blockquote>
</li>
</ol>
`],[`   1.  A paragraph
       with two lines.

           indented code

       > A block quote.
`,`<ol>
<li>
<p>A paragraph
with two lines.</p>
<pre><code>indented code
</code></pre>
<blockquote>
<p>A block quote.</p>
</blockquote>
</li>
</ol>
`],[`    1.  A paragraph
        with two lines.

            indented code

        > A block quote.
`,`<pre><code>1.  A paragraph
    with two lines.

        indented code

    &gt; A block quote.
</code></pre>
`],[`  1.  A paragraph
with two lines.

          indented code

      > A block quote.
`,`<ol>
<li>
<p>A paragraph
with two lines.</p>
<pre><code>indented code
</code></pre>
<blockquote>
<p>A block quote.</p>
</blockquote>
</li>
</ol>
`],[`  1.  A paragraph
    with two lines.
`,`<ol>
<li>A paragraph
with two lines.</li>
</ol>
`],[`> 1. > Blockquote
continued here.
`,`<blockquote>
<ol>
<li>
<blockquote>
<p>Blockquote
continued here.</p>
</blockquote>
</li>
</ol>
</blockquote>
`],[`> 1. > Blockquote
> continued here.
`,`<blockquote>
<ol>
<li>
<blockquote>
<p>Blockquote
continued here.</p>
</blockquote>
</li>
</ol>
</blockquote>
`],[`- foo
  - bar
    - baz
      - boo
`,`<ul>
<li>foo
<ul>
<li>bar
<ul>
<li>baz
<ul>
<li>boo</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
`],[`- foo
 - bar
  - baz
   - boo
`,`<ul>
<li>foo</li>
<li>bar</li>
<li>baz</li>
<li>boo</li>
</ul>
`],[`10) foo
    - bar
`,`<ol start="10">
<li>foo
<ul>
<li>bar</li>
</ul>
</li>
</ol>
`],[`10) foo
   - bar
`,`<ol start="10">
<li>foo</li>
</ol>
<ul>
<li>bar</li>
</ul>
`],[`- - foo
`,`<ul>
<li>
<ul>
<li>foo</li>
</ul>
</li>
</ul>
`],[`1. - 2. foo
`,`<ol>
<li>
<ul>
<li>
<ol start="2">
<li>foo</li>
</ol>
</li>
</ul>
</li>
</ol>
`],[`- # Foo
- Bar
  ---
  baz
`,`<ul>
<li>
<h1>Foo</h1>
</li>
<li>
<h2>Bar</h2>
baz</li>
</ul>
`],[`- foo
- bar
+ baz
`,`<ul>
<li>foo</li>
<li>bar</li>
</ul>
<ul>
<li>baz</li>
</ul>
`],[`1. foo
2. bar
3) baz
`,`<ol>
<li>foo</li>
<li>bar</li>
</ol>
<ol start="3">
<li>baz</li>
</ol>
`],[`Foo
- bar
- baz
`,`<p>Foo</p>
<ul>
<li>bar</li>
<li>baz</li>
</ul>
`],[`The number of windows in my house is
14.  The number of doors is 6.
`,`<p>The number of windows in my house is
14.  The number of doors is 6.</p>
`],[`The number of windows in my house is
1.  The number of doors is 6.
`,`<p>The number of windows in my house is</p>
<ol>
<li>The number of doors is 6.</li>
</ol>
`],[`- foo

- bar


- baz
`,`<ul>
<li>
<p>foo</p>
</li>
<li>
<p>bar</p>
</li>
<li>
<p>baz</p>
</li>
</ul>
`],[`- foo
  - bar
    - baz


      bim
`,`<ul>
<li>foo
<ul>
<li>bar
<ul>
<li>
<p>baz</p>
<p>bim</p>
</li>
</ul>
</li>
</ul>
</li>
</ul>
`],[`- foo
- bar

<!-- -->

- baz
- bim
`,`<ul>
<li>foo</li>
<li>bar</li>
</ul>
<!-- -->
<ul>
<li>baz</li>
<li>bim</li>
</ul>
`],[`-   foo

    notcode

-   foo

<!-- -->

    code
`,`<ul>
<li>
<p>foo</p>
<p>notcode</p>
</li>
<li>
<p>foo</p>
</li>
</ul>
<!-- -->
<pre><code>code
</code></pre>
`],[`- a
 - b
  - c
   - d
  - e
 - f
- g
`,`<ul>
<li>a</li>
<li>b</li>
<li>c</li>
<li>d</li>
<li>e</li>
<li>f</li>
<li>g</li>
</ul>
`],[`1. a

  2. b

   3. c
`,`<ol>
<li>
<p>a</p>
</li>
<li>
<p>b</p>
</li>
<li>
<p>c</p>
</li>
</ol>
`],[`- a
 - b
  - c
   - d
    - e
`,`<ul>
<li>a</li>
<li>b</li>
<li>c</li>
<li>d
- e</li>
</ul>
`],[`1. a

  2. b

    3. c
`,`<ol>
<li>
<p>a</p>
</li>
<li>
<p>b</p>
</li>
</ol>
<pre><code>3. c
</code></pre>
`],[`- a
- b

- c
`,`<ul>
<li>
<p>a</p>
</li>
<li>
<p>b</p>
</li>
<li>
<p>c</p>
</li>
</ul>
`],[`* a
*

* c
`,`<ul>
<li>
<p>a</p>
</li>
<li></li>
<li>
<p>c</p>
</li>
</ul>
`],[`- a
- b

  c
- d
`,`<ul>
<li>
<p>a</p>
</li>
<li>
<p>b</p>
<p>c</p>
</li>
<li>
<p>d</p>
</li>
</ul>
`],[`- a
- b

  [ref]: /url
- d
`,`<ul>
<li>
<p>a</p>
</li>
<li>
<p>b</p>
</li>
<li>
<p>d</p>
</li>
</ul>
`],[`- a
- \`\`\`
  b


  \`\`\`
- c
`,`<ul>
<li>a</li>
<li>
<pre><code>b


</code></pre>
</li>
<li>c</li>
</ul>
`],[`- a
  - b

    c
- d
`,`<ul>
<li>a
<ul>
<li>
<p>b</p>
<p>c</p>
</li>
</ul>
</li>
<li>d</li>
</ul>
`],[`* a
  > b
  >
* c
`,`<ul>
<li>a
<blockquote>
<p>b</p>
</blockquote>
</li>
<li>c</li>
</ul>
`],["- a\n  > b\n  ```\n  c\n  ```\n- d\n",`<ul>
<li>a
<blockquote>
<p>b</p>
</blockquote>
<pre><code>c
</code></pre>
</li>
<li>d</li>
</ul>
`],[`- a
`,`<ul>
<li>a</li>
</ul>
`],[`- a
  - b
`,`<ul>
<li>a
<ul>
<li>b</li>
</ul>
</li>
</ul>
`],["1. ```\n   foo\n   ```\n\n   bar\n",`<ol>
<li>
<pre><code>foo
</code></pre>
<p>bar</p>
</li>
</ol>
`],[`* foo
  * bar

  baz
`,`<ul>
<li>
<p>foo</p>
<ul>
<li>bar</li>
</ul>
<p>baz</p>
</li>
</ul>
`],[`- a
  - b
  - c

- d
  - e
  - f
`,`<ul>
<li>
<p>a</p>
<ul>
<li>b</li>
<li>c</li>
</ul>
</li>
<li>
<p>d</p>
<ul>
<li>e</li>
<li>f</li>
</ul>
</li>
</ul>
`],["`hi`lo`\n","<p><code>hi</code>lo`</p>\n"],["`foo`\n",`<p><code>foo</code></p>
`],["`` foo ` bar ``\n","<p><code>foo ` bar</code></p>\n"],["` `` `\n","<p><code>``</code></p>\n"],["`  ``  `\n","<p><code> `` </code></p>\n"],["` a`\n",`<p><code> a</code></p>
`],["`\xA0b\xA0`\n",`<p><code>\xA0b\xA0</code></p>
`],["`\xA0`\n`  `\n",`<p><code>\xA0</code>
<code>  </code></p>
`],[`\`\`
foo
bar  
baz
\`\`
`,`<p><code>foo bar   baz</code></p>
`],["``\nfoo \n``\n",`<p><code>foo </code></p>
`],["`foo   bar \nbaz`\n",`<p><code>foo   bar  baz</code></p>
`],["`foo\\`bar`\n","<p><code>foo\\</code>bar`</p>\n"],["``foo`bar``\n","<p><code>foo`bar</code></p>\n"],["` foo `` bar `\n","<p><code>foo `` bar</code></p>\n"],["*foo`*`\n",`<p>*foo<code>*</code></p>
`],["[not a `link](/foo`)\n",`<p>[not a <code>link](/foo</code>)</p>
`],['`<a href="`">`\n',"<p><code>&lt;a href=&quot;</code>&quot;&gt;`</p>\n"],['<a href="`">`\n','<p><a href="`">`</p>\n'],["`<https://foo.bar.`baz>`\n","<p><code>&lt;https://foo.bar.</code>baz&gt;`</p>\n"],["<https://foo.bar.`baz>`\n",'<p><a href="https://foo.bar.%60baz">https://foo.bar.`baz</a>`</p>\n'],["```foo``\n","<p>```foo``</p>\n"],["`foo\n","<p>`foo</p>\n"],["`foo``bar``\n","<p>`foo<code>bar</code></p>\n"],[`*foo bar*
`,`<p><em>foo bar</em></p>
`],[`a * foo bar*
`,`<p>a * foo bar*</p>
`],[`a*"foo"*
`,`<p>a*&quot;foo&quot;*</p>
`],[`*\xA0a\xA0*
`,`<p>*\xA0a\xA0*</p>
`],[`*$*alpha.

*\xA3*bravo.

*\u20AC*charlie.

*\u{1E2FF}*delta.
`,`<p>*$*alpha.</p>
<p>*\xA3*bravo.</p>
<p>*\u20AC*charlie.</p>
<p>*\u{1E2FF}*delta.</p>
`],[`foo*bar*
`,`<p>foo<em>bar</em></p>
`],[`5*6*78
`,`<p>5<em>6</em>78</p>
`],[`_foo bar_
`,`<p><em>foo bar</em></p>
`],[`_ foo bar_
`,`<p>_ foo bar_</p>
`],[`a_"foo"_
`,`<p>a_&quot;foo&quot;_</p>
`],[`foo_bar_
`,`<p>foo_bar_</p>
`],[`5_6_78
`,`<p>5_6_78</p>
`],[`\u043F\u0440\u0438\u0441\u0442\u0430\u043D\u044F\u043C_\u0441\u0442\u0440\u0435\u043C\u044F\u0442\u0441\u044F_
`,`<p>\u043F\u0440\u0438\u0441\u0442\u0430\u043D\u044F\u043C_\u0441\u0442\u0440\u0435\u043C\u044F\u0442\u0441\u044F_</p>
`],[`aa_"bb"_cc
`,`<p>aa_&quot;bb&quot;_cc</p>
`],[`foo-_(bar)_
`,`<p>foo-<em>(bar)</em></p>
`],[`_foo*
`,`<p>_foo*</p>
`],[`*foo bar *
`,`<p>*foo bar *</p>
`],[`*foo bar
*
`,`<p>*foo bar
*</p>
`],[`*(*foo)
`,`<p>*(*foo)</p>
`],[`*(*foo*)*
`,`<p><em>(<em>foo</em>)</em></p>
`],[`*foo*bar
`,`<p><em>foo</em>bar</p>
`],[`_foo bar _
`,`<p>_foo bar _</p>
`],[`_(_foo)
`,`<p>_(_foo)</p>
`],[`_(_foo_)_
`,`<p><em>(<em>foo</em>)</em></p>
`],[`_foo_bar
`,`<p>_foo_bar</p>
`],[`_\u043F\u0440\u0438\u0441\u0442\u0430\u043D\u044F\u043C_\u0441\u0442\u0440\u0435\u043C\u044F\u0442\u0441\u044F
`,`<p>_\u043F\u0440\u0438\u0441\u0442\u0430\u043D\u044F\u043C_\u0441\u0442\u0440\u0435\u043C\u044F\u0442\u0441\u044F</p>
`],[`_foo_bar_baz_
`,`<p><em>foo_bar_baz</em></p>
`],[`_(bar)_.
`,`<p><em>(bar)</em>.</p>
`],[`**foo bar**
`,`<p><strong>foo bar</strong></p>
`],[`** foo bar**
`,`<p>** foo bar**</p>
`],[`a**"foo"**
`,`<p>a**&quot;foo&quot;**</p>
`],[`foo**bar**
`,`<p>foo<strong>bar</strong></p>
`],[`__foo bar__
`,`<p><strong>foo bar</strong></p>
`],[`__ foo bar__
`,`<p>__ foo bar__</p>
`],[`__
foo bar__
`,`<p>__
foo bar__</p>
`],[`a__"foo"__
`,`<p>a__&quot;foo&quot;__</p>
`],[`foo__bar__
`,`<p>foo__bar__</p>
`],[`5__6__78
`,`<p>5__6__78</p>
`],[`\u043F\u0440\u0438\u0441\u0442\u0430\u043D\u044F\u043C__\u0441\u0442\u0440\u0435\u043C\u044F\u0442\u0441\u044F__
`,`<p>\u043F\u0440\u0438\u0441\u0442\u0430\u043D\u044F\u043C__\u0441\u0442\u0440\u0435\u043C\u044F\u0442\u0441\u044F__</p>
`],[`__foo, __bar__, baz__
`,`<p><strong>foo, <strong>bar</strong>, baz</strong></p>
`],[`foo-__(bar)__
`,`<p>foo-<strong>(bar)</strong></p>
`],[`**foo bar **
`,`<p>**foo bar **</p>
`],[`**(**foo)
`,`<p>**(**foo)</p>
`],[`*(**foo**)*
`,`<p><em>(<strong>foo</strong>)</em></p>
`],[`**Gomphocarpus (*Gomphocarpus physocarpus*, syn.
*Asclepias physocarpa*)**
`,`<p><strong>Gomphocarpus (<em>Gomphocarpus physocarpus</em>, syn.
<em>Asclepias physocarpa</em>)</strong></p>
`],[`**foo "*bar*" foo**
`,`<p><strong>foo &quot;<em>bar</em>&quot; foo</strong></p>
`],[`**foo**bar
`,`<p><strong>foo</strong>bar</p>
`],[`__foo bar __
`,`<p>__foo bar __</p>
`],[`__(__foo)
`,`<p>__(__foo)</p>
`],[`_(__foo__)_
`,`<p><em>(<strong>foo</strong>)</em></p>
`],[`__foo__bar
`,`<p>__foo__bar</p>
`],[`__\u043F\u0440\u0438\u0441\u0442\u0430\u043D\u044F\u043C__\u0441\u0442\u0440\u0435\u043C\u044F\u0442\u0441\u044F
`,`<p>__\u043F\u0440\u0438\u0441\u0442\u0430\u043D\u044F\u043C__\u0441\u0442\u0440\u0435\u043C\u044F\u0442\u0441\u044F</p>
`],[`__foo__bar__baz__
`,`<p><strong>foo__bar__baz</strong></p>
`],[`__(bar)__.
`,`<p><strong>(bar)</strong>.</p>
`],[`*foo [bar](/url)*
`,`<p><em>foo <a href="/url">bar</a></em></p>
`],[`*foo
bar*
`,`<p><em>foo
bar</em></p>
`],[`_foo __bar__ baz_
`,`<p><em>foo <strong>bar</strong> baz</em></p>
`],[`_foo _bar_ baz_
`,`<p><em>foo <em>bar</em> baz</em></p>
`],[`__foo_ bar_
`,`<p><em><em>foo</em> bar</em></p>
`],[`*foo *bar**
`,`<p><em>foo <em>bar</em></em></p>
`],[`*foo **bar** baz*
`,`<p><em>foo <strong>bar</strong> baz</em></p>
`],[`*foo**bar**baz*
`,`<p><em>foo<strong>bar</strong>baz</em></p>
`],[`*foo**bar*
`,`<p><em>foo**bar</em></p>
`],[`***foo** bar*
`,`<p><em><strong>foo</strong> bar</em></p>
`],[`*foo **bar***
`,`<p><em>foo <strong>bar</strong></em></p>
`],[`*foo**bar***
`,`<p><em>foo<strong>bar</strong></em></p>
`],[`foo***bar***baz
`,`<p>foo<em><strong>bar</strong></em>baz</p>
`],[`foo******bar*********baz
`,`<p>foo<strong><strong><strong>bar</strong></strong></strong>***baz</p>
`],[`*foo **bar *baz* bim** bop*
`,`<p><em>foo <strong>bar <em>baz</em> bim</strong> bop</em></p>
`],[`*foo [*bar*](/url)*
`,`<p><em>foo <a href="/url"><em>bar</em></a></em></p>
`],[`** is not an empty emphasis
`,`<p>** is not an empty emphasis</p>
`],[`**** is not an empty strong emphasis
`,`<p>**** is not an empty strong emphasis</p>
`],[`**foo [bar](/url)**
`,`<p><strong>foo <a href="/url">bar</a></strong></p>
`],[`**foo
bar**
`,`<p><strong>foo
bar</strong></p>
`],[`__foo _bar_ baz__
`,`<p><strong>foo <em>bar</em> baz</strong></p>
`],[`__foo __bar__ baz__
`,`<p><strong>foo <strong>bar</strong> baz</strong></p>
`],[`____foo__ bar__
`,`<p><strong><strong>foo</strong> bar</strong></p>
`],[`**foo **bar****
`,`<p><strong>foo <strong>bar</strong></strong></p>
`],[`**foo *bar* baz**
`,`<p><strong>foo <em>bar</em> baz</strong></p>
`],[`**foo*bar*baz**
`,`<p><strong>foo<em>bar</em>baz</strong></p>
`],[`***foo* bar**
`,`<p><strong><em>foo</em> bar</strong></p>
`],[`**foo *bar***
`,`<p><strong>foo <em>bar</em></strong></p>
`],[`**foo *bar **baz**
bim* bop**
`,`<p><strong>foo <em>bar <strong>baz</strong>
bim</em> bop</strong></p>
`],[`**foo [*bar*](/url)**
`,`<p><strong>foo <a href="/url"><em>bar</em></a></strong></p>
`],[`__ is not an empty emphasis
`,`<p>__ is not an empty emphasis</p>
`],[`____ is not an empty strong emphasis
`,`<p>____ is not an empty strong emphasis</p>
`],[`foo ***
`,`<p>foo ***</p>
`],[`foo *\\**
`,`<p>foo <em>*</em></p>
`],[`foo *_*
`,`<p>foo <em>_</em></p>
`],[`foo *****
`,`<p>foo *****</p>
`],[`foo **\\***
`,`<p>foo <strong>*</strong></p>
`],[`foo **_**
`,`<p>foo <strong>_</strong></p>
`],[`**foo*
`,`<p>*<em>foo</em></p>
`],[`*foo**
`,`<p><em>foo</em>*</p>
`],[`***foo**
`,`<p>*<strong>foo</strong></p>
`],[`****foo*
`,`<p>***<em>foo</em></p>
`],[`**foo***
`,`<p><strong>foo</strong>*</p>
`],[`*foo****
`,`<p><em>foo</em>***</p>
`],[`foo ___
`,`<p>foo ___</p>
`],[`foo _\\__
`,`<p>foo <em>_</em></p>
`],[`foo _*_
`,`<p>foo <em>*</em></p>
`],[`foo _____
`,`<p>foo _____</p>
`],[`foo __\\___
`,`<p>foo <strong>_</strong></p>
`],[`foo __*__
`,`<p>foo <strong>*</strong></p>
`],[`__foo_
`,`<p>_<em>foo</em></p>
`],[`_foo__
`,`<p><em>foo</em>_</p>
`],[`___foo__
`,`<p>_<strong>foo</strong></p>
`],[`____foo_
`,`<p>___<em>foo</em></p>
`],[`__foo___
`,`<p><strong>foo</strong>_</p>
`],[`_foo____
`,`<p><em>foo</em>___</p>
`],[`**foo**
`,`<p><strong>foo</strong></p>
`],[`*_foo_*
`,`<p><em><em>foo</em></em></p>
`],[`__foo__
`,`<p><strong>foo</strong></p>
`],[`_*foo*_
`,`<p><em><em>foo</em></em></p>
`],[`****foo****
`,`<p><strong><strong>foo</strong></strong></p>
`],[`____foo____
`,`<p><strong><strong>foo</strong></strong></p>
`],[`******foo******
`,`<p><strong><strong><strong>foo</strong></strong></strong></p>
`],[`***foo***
`,`<p><em><strong>foo</strong></em></p>
`],[`_____foo_____
`,`<p><em><strong><strong>foo</strong></strong></em></p>
`],[`*foo _bar* baz_
`,`<p><em>foo _bar</em> baz_</p>
`],[`*foo __bar *baz bim__ bam*
`,`<p><em>foo <strong>bar *baz bim</strong> bam</em></p>
`],[`**foo **bar baz**
`,`<p>**foo <strong>bar baz</strong></p>
`],[`*foo *bar baz*
`,`<p>*foo <em>bar baz</em></p>
`],[`*[bar*](/url)
`,`<p>*<a href="/url">bar*</a></p>
`],[`_foo [bar_](/url)
`,`<p>_foo <a href="/url">bar_</a></p>
`],[`*<img src="foo" title="*"/>
`,`<p>*<img src="foo" title="*"/></p>
`],[`**<a href="**">
`,`<p>**<a href="**"></p>
`],[`__<a href="__">
`,`<p>__<a href="__"></p>
`],["*a `*`*\n",`<p><em>a <code>*</code></em></p>
`],["_a `_`_\n",`<p><em>a <code>_</code></em></p>
`],[`**a<https://foo.bar/?q=**>
`,`<p>**a<a href="https://foo.bar/?q=**">https://foo.bar/?q=**</a></p>
`],[`__a<https://foo.bar/?q=__>
`,`<p>__a<a href="https://foo.bar/?q=__">https://foo.bar/?q=__</a></p>
`],[`[link](/uri "title")
`,`<p><a href="/uri" title="title">link</a></p>
`],[`[link](/uri)
`,`<p><a href="/uri">link</a></p>
`],[`[](./target.md)
`,`<p><a href="./target.md"></a></p>
`],[`[link]()
`,`<p><a href="">link</a></p>
`],[`[link](<>)
`,`<p><a href="">link</a></p>
`],[`[]()
`,`<p><a href=""></a></p>
`],[`[link](/my uri)
`,`<p>[link](/my uri)</p>
`],[`[link](</my uri>)
`,`<p><a href="/my%20uri">link</a></p>
`],[`[link](foo
bar)
`,`<p>[link](foo
bar)</p>
`],[`[link](<foo
bar>)
`,`<p>[link](<foo
bar>)</p>
`],[`[a](<b)c>)
`,`<p><a href="b)c">a</a></p>
`],[`[link](<foo\\>)
`,`<p>[link](&lt;foo&gt;)</p>
`],[`[a](<b)c
[a](<b)c>
[a](<b>c)
`,`<p>[a](&lt;b)c
[a](&lt;b)c&gt;
[a](<b>c)</p>
`],[`[link](\\(foo\\))
`,`<p><a href="(foo)">link</a></p>
`],[`[link](foo(and(bar)))
`,`<p><a href="foo(and(bar))">link</a></p>
`],[`[link](foo(and(bar))
`,`<p>[link](foo(and(bar))</p>
`],[`[link](foo\\(and\\(bar\\))
`,`<p><a href="foo(and(bar)">link</a></p>
`],[`[link](<foo(and(bar)>)
`,`<p><a href="foo(and(bar)">link</a></p>
`],[`[link](foo\\)\\:)
`,`<p><a href="foo):">link</a></p>
`],[`[link](#fragment)

[link](https://example.com#fragment)

[link](https://example.com?foo=3#frag)
`,`<p><a href="#fragment">link</a></p>
<p><a href="https://example.com#fragment">link</a></p>
<p><a href="https://example.com?foo=3#frag">link</a></p>
`],[`[link](foo\\bar)
`,`<p><a href="foo%5Cbar">link</a></p>
`],[`[link](foo%20b&auml;)
`,`<p><a href="foo%20b%C3%A4">link</a></p>
`],[`[link]("title")
`,`<p><a href="%22title%22">link</a></p>
`],[`[link](/url "title")
[link](/url 'title')
[link](/url (title))
`,`<p><a href="/url" title="title">link</a>
<a href="/url" title="title">link</a>
<a href="/url" title="title">link</a></p>
`],[`[link](/url "title \\"&quot;")
`,`<p><a href="/url" title="title &quot;&quot;">link</a></p>
`],[`[link](/url\xA0"title")
`,`<p><a href="/url%C2%A0%22title%22">link</a></p>
`],[`[link](/url "title "and" title")
`,`<p>[link](/url &quot;title &quot;and&quot; title&quot;)</p>
`],[`[link](/url 'title "and" title')
`,`<p><a href="/url" title="title &quot;and&quot; title">link</a></p>
`],[`[link](   /uri
  "title"  )
`,`<p><a href="/uri" title="title">link</a></p>
`],[`[link] (/uri)
`,`<p>[link] (/uri)</p>
`],[`[link [foo [bar]]](/uri)
`,`<p><a href="/uri">link [foo [bar]]</a></p>
`],[`[link] bar](/uri)
`,`<p>[link] bar](/uri)</p>
`],[`[link [bar](/uri)
`,`<p>[link <a href="/uri">bar</a></p>
`],[`[link \\[bar](/uri)
`,`<p><a href="/uri">link [bar</a></p>
`],["[link *foo **bar** `#`*](/uri)\n",`<p><a href="/uri">link <em>foo <strong>bar</strong> <code>#</code></em></a></p>
`],[`[![moon](moon.jpg)](/uri)
`,`<p><a href="/uri"><img src="moon.jpg" alt="moon" /></a></p>
`],[`[foo [bar](/uri)](/uri)
`,`<p>[foo <a href="/uri">bar</a>](/uri)</p>
`],[`[foo *[bar [baz](/uri)](/uri)*](/uri)
`,`<p>[foo <em>[bar <a href="/uri">baz</a>](/uri)</em>](/uri)</p>
`],[`![[[foo](uri1)](uri2)](uri3)
`,`<p><img src="uri3" alt="[foo](uri2)" /></p>
`],[`*[foo*](/uri)
`,`<p>*<a href="/uri">foo*</a></p>
`],[`[foo *bar](baz*)
`,`<p><a href="baz*">foo *bar</a></p>
`],[`*foo [bar* baz]
`,`<p><em>foo [bar</em> baz]</p>
`],[`[foo <bar attr="](baz)">
`,`<p>[foo <bar attr="](baz)"></p>
`],["[foo`](/uri)`\n",`<p>[foo<code>](/uri)</code></p>
`],[`[foo<https://example.com/?search=](uri)>
`,`<p>[foo<a href="https://example.com/?search=%5D(uri)">https://example.com/?search=](uri)</a></p>
`],[`[foo][bar]

[bar]: /url "title"
`,`<p><a href="/url" title="title">foo</a></p>
`],[`[link [foo [bar]]][ref]

[ref]: /uri
`,`<p><a href="/uri">link [foo [bar]]</a></p>
`],[`[link \\[bar][ref]

[ref]: /uri
`,`<p><a href="/uri">link [bar</a></p>
`],[`[link *foo **bar** \`#\`*][ref]

[ref]: /uri
`,`<p><a href="/uri">link <em>foo <strong>bar</strong> <code>#</code></em></a></p>
`],[`[![moon](moon.jpg)][ref]

[ref]: /uri
`,`<p><a href="/uri"><img src="moon.jpg" alt="moon" /></a></p>
`],[`[foo [bar](/uri)][ref]

[ref]: /uri
`,`<p>[foo <a href="/uri">bar</a>]<a href="/uri">ref</a></p>
`],[`[foo *bar [baz][ref]*][ref]

[ref]: /uri
`,`<p>[foo <em>bar <a href="/uri">baz</a></em>]<a href="/uri">ref</a></p>
`],[`*[foo*][ref]

[ref]: /uri
`,`<p>*<a href="/uri">foo*</a></p>
`],[`[foo *bar][ref]*

[ref]: /uri
`,`<p><a href="/uri">foo *bar</a>*</p>
`],[`[foo <bar attr="][ref]">

[ref]: /uri
`,`<p>[foo <bar attr="][ref]"></p>
`],[`[foo\`][ref]\`

[ref]: /uri
`,`<p>[foo<code>][ref]</code></p>
`],[`[foo<https://example.com/?search=][ref]>

[ref]: /uri
`,`<p>[foo<a href="https://example.com/?search=%5D%5Bref%5D">https://example.com/?search=][ref]</a></p>
`],[`[foo][BaR]

[bar]: /url "title"
`,`<p><a href="/url" title="title">foo</a></p>
`],[`[\u1E9E]

[SS]: /url
`,`<p><a href="/url">\u1E9E</a></p>
`],[`[Foo
  bar]: /url

[Baz][Foo bar]
`,`<p><a href="/url">Baz</a></p>
`],[`[foo] [bar]

[bar]: /url "title"
`,`<p>[foo] <a href="/url" title="title">bar</a></p>
`],[`[foo]
[bar]

[bar]: /url "title"
`,`<p>[foo]
<a href="/url" title="title">bar</a></p>
`],[`[foo]: /url1

[foo]: /url2

[bar][foo]
`,`<p><a href="/url1">bar</a></p>
`],[`[bar][foo\\!]

[foo!]: /url
`,`<p>[bar][foo!]</p>
`],[`[foo][ref[]

[ref[]: /uri
`,`<p>[foo][ref[]</p>
<p>[ref[]: /uri</p>
`],[`[foo][ref[bar]]

[ref[bar]]: /uri
`,`<p>[foo][ref[bar]]</p>
<p>[ref[bar]]: /uri</p>
`],[`[[[foo]]]

[[[foo]]]: /url
`,`<p>[[[foo]]]</p>
<p>[[[foo]]]: /url</p>
`],[`[foo][ref\\[]

[ref\\[]: /uri
`,`<p><a href="/uri">foo</a></p>
`],[`[bar\\\\]: /uri

[bar\\\\]
`,`<p><a href="/uri">bar\\</a></p>
`],[`[]

[]: /uri
`,`<p>[]</p>
<p>[]: /uri</p>
`],[`[
 ]

[
 ]: /uri
`,`<p>[
]</p>
<p>[
]: /uri</p>
`],[`[foo][]

[foo]: /url "title"
`,`<p><a href="/url" title="title">foo</a></p>
`],[`[*foo* bar][]

[*foo* bar]: /url "title"
`,`<p><a href="/url" title="title"><em>foo</em> bar</a></p>
`],[`[Foo][]

[foo]: /url "title"
`,`<p><a href="/url" title="title">Foo</a></p>
`],[`[foo] 
[]

[foo]: /url "title"
`,`<p><a href="/url" title="title">foo</a>
[]</p>
`],[`[foo]

[foo]: /url "title"
`,`<p><a href="/url" title="title">foo</a></p>
`],[`[*foo* bar]

[*foo* bar]: /url "title"
`,`<p><a href="/url" title="title"><em>foo</em> bar</a></p>
`],[`[[*foo* bar]]

[*foo* bar]: /url "title"
`,`<p>[<a href="/url" title="title"><em>foo</em> bar</a>]</p>
`],[`[[bar [foo]

[foo]: /url
`,`<p>[[bar <a href="/url">foo</a></p>
`],[`[Foo]

[foo]: /url "title"
`,`<p><a href="/url" title="title">Foo</a></p>
`],[`[foo] bar

[foo]: /url
`,`<p><a href="/url">foo</a> bar</p>
`],[`\\[foo]

[foo]: /url "title"
`,`<p>[foo]</p>
`],[`[foo*]: /url

*[foo*]
`,`<p>*<a href="/url">foo*</a></p>
`],[`[foo][bar]

[foo]: /url1
[bar]: /url2
`,`<p><a href="/url2">foo</a></p>
`],[`[foo][]

[foo]: /url1
`,`<p><a href="/url1">foo</a></p>
`],[`[foo]()

[foo]: /url1
`,`<p><a href="">foo</a></p>
`],[`[foo](not a link)

[foo]: /url1
`,`<p><a href="/url1">foo</a>(not a link)</p>
`],[`[foo][bar][baz]

[baz]: /url
`,`<p>[foo]<a href="/url">bar</a></p>
`],[`[foo][bar][baz]

[baz]: /url1
[bar]: /url2
`,`<p><a href="/url2">foo</a><a href="/url1">baz</a></p>
`],[`[foo][bar][baz]

[baz]: /url1
[foo]: /url2
`,`<p>[foo]<a href="/url1">bar</a></p>
`],[`![foo](/url "title")
`,`<p><img src="/url" alt="foo" title="title" /></p>
`],[`![foo *bar*]

[foo *bar*]: train.jpg "train & tracks"
`,`<p><img src="train.jpg" alt="foo bar" title="train &amp; tracks" /></p>
`],[`![foo ![bar](/url)](/url2)
`,`<p><img src="/url2" alt="foo bar" /></p>
`],[`![foo [bar](/url)](/url2)
`,`<p><img src="/url2" alt="foo bar" /></p>
`],[`![foo *bar*][]

[foo *bar*]: train.jpg "train & tracks"
`,`<p><img src="train.jpg" alt="foo bar" title="train &amp; tracks" /></p>
`],[`![foo *bar*][foobar]

[FOOBAR]: train.jpg "train & tracks"
`,`<p><img src="train.jpg" alt="foo bar" title="train &amp; tracks" /></p>
`],[`![foo](train.jpg)
`,`<p><img src="train.jpg" alt="foo" /></p>
`],[`My ![foo bar](/path/to/train.jpg  "title"   )
`,`<p>My <img src="/path/to/train.jpg" alt="foo bar" title="title" /></p>
`],[`![foo](<url>)
`,`<p><img src="url" alt="foo" /></p>
`],[`![](/url)
`,`<p><img src="/url" alt="" /></p>
`],[`![foo][bar]

[bar]: /url
`,`<p><img src="/url" alt="foo" /></p>
`],[`![foo][bar]

[BAR]: /url
`,`<p><img src="/url" alt="foo" /></p>
`],[`![foo][]

[foo]: /url "title"
`,`<p><img src="/url" alt="foo" title="title" /></p>
`],[`![*foo* bar][]

[*foo* bar]: /url "title"
`,`<p><img src="/url" alt="foo bar" title="title" /></p>
`],[`![Foo][]

[foo]: /url "title"
`,`<p><img src="/url" alt="Foo" title="title" /></p>
`],[`![foo] 
[]

[foo]: /url "title"
`,`<p><img src="/url" alt="foo" title="title" />
[]</p>
`],[`![foo]

[foo]: /url "title"
`,`<p><img src="/url" alt="foo" title="title" /></p>
`],[`![*foo* bar]

[*foo* bar]: /url "title"
`,`<p><img src="/url" alt="foo bar" title="title" /></p>
`],[`![[foo]]

[[foo]]: /url "title"
`,`<p>![[foo]]</p>
<p>[[foo]]: /url &quot;title&quot;</p>
`],[`![Foo]

[foo]: /url "title"
`,`<p><img src="/url" alt="Foo" title="title" /></p>
`],[`!\\[foo]

[foo]: /url "title"
`,`<p>![foo]</p>
`],[`\\![foo]

[foo]: /url "title"
`,`<p>!<a href="/url" title="title">foo</a></p>
`],[`<http://foo.bar.baz>
`,`<p><a href="http://foo.bar.baz">http://foo.bar.baz</a></p>
`],[`<https://foo.bar.baz/test?q=hello&id=22&boolean>
`,`<p><a href="https://foo.bar.baz/test?q=hello&amp;id=22&amp;boolean">https://foo.bar.baz/test?q=hello&amp;id=22&amp;boolean</a></p>
`],[`<irc://foo.bar:2233/baz>
`,`<p><a href="irc://foo.bar:2233/baz">irc://foo.bar:2233/baz</a></p>
`],[`<MAILTO:FOO@BAR.BAZ>
`,`<p><a href="MAILTO:FOO@BAR.BAZ">MAILTO:FOO@BAR.BAZ</a></p>
`],[`<a+b+c:d>
`,`<p><a href="a+b+c:d">a+b+c:d</a></p>
`],[`<made-up-scheme://foo,bar>
`,`<p><a href="made-up-scheme://foo,bar">made-up-scheme://foo,bar</a></p>
`],[`<https://../>
`,`<p><a href="https://../">https://../</a></p>
`],[`<localhost:5001/foo>
`,`<p><a href="localhost:5001/foo">localhost:5001/foo</a></p>
`],[`<https://foo.bar/baz bim>
`,`<p>&lt;https://foo.bar/baz bim&gt;</p>
`],[`<https://example.com/\\[\\>
`,`<p><a href="https://example.com/%5C%5B%5C">https://example.com/\\[\\</a></p>
`],[`<foo@bar.example.com>
`,`<p><a href="mailto:foo@bar.example.com">foo@bar.example.com</a></p>
`],[`<foo+special@Bar.baz-bar0.com>
`,`<p><a href="mailto:foo+special@Bar.baz-bar0.com">foo+special@Bar.baz-bar0.com</a></p>
`],[`<foo\\+@bar.example.com>
`,`<p>&lt;foo+@bar.example.com&gt;</p>
`],[`<>
`,`<p>&lt;&gt;</p>
`],[`< https://foo.bar >
`,`<p>&lt; https://foo.bar &gt;</p>
`],[`<m:abc>
`,`<p>&lt;m:abc&gt;</p>
`],[`<foo.bar.baz>
`,`<p>&lt;foo.bar.baz&gt;</p>
`],[`https://example.com
`,`<p>https://example.com</p>
`],[`foo@bar.example.com
`,`<p>foo@bar.example.com</p>
`],[`<a><bab><c2c>
`,`<p><a><bab><c2c></p>
`],[`<a/><b2/>
`,`<p><a/><b2/></p>
`],[`<a  /><b2
data="foo" >
`,`<p><a  /><b2
data="foo" ></p>
`],[`<a foo="bar" bam = 'baz <em>"</em>'
_boolean zoop:33=zoop:33 />
`,`<p><a foo="bar" bam = 'baz <em>"</em>'
_boolean zoop:33=zoop:33 /></p>
`],[`Foo <responsive-image src="foo.jpg" />
`,`<p>Foo <responsive-image src="foo.jpg" /></p>
`],[`<33> <__>
`,`<p>&lt;33&gt; &lt;__&gt;</p>
`],[`<a h*#ref="hi">
`,`<p>&lt;a h*#ref=&quot;hi&quot;&gt;</p>
`],[`<a href="hi'> <a href=hi'>
`,`<p>&lt;a href=&quot;hi'&gt; &lt;a href=hi'&gt;</p>
`],[`< a><
foo><bar/ >
<foo bar=baz
bim!bop />
`,`<p>&lt; a&gt;&lt;
foo&gt;&lt;bar/ &gt;
&lt;foo bar=baz
bim!bop /&gt;</p>
`],[`<a href='bar'title=title>
`,`<p>&lt;a href='bar'title=title&gt;</p>
`],[`</a></foo >
`,`<p></a></foo ></p>
`],[`</a href="foo">
`,`<p>&lt;/a href=&quot;foo&quot;&gt;</p>
`],[`foo <!-- this is a --
comment - with hyphens -->
`,`<p>foo <!-- this is a --
comment - with hyphens --></p>
`],[`foo <!--> foo -->

foo <!---> foo -->
`,`<p>foo <!--> foo --&gt;</p>
<p>foo <!---> foo --&gt;</p>
`],[`foo <?php echo $a; ?>
`,`<p>foo <?php echo $a; ?></p>
`],[`foo <!ELEMENT br EMPTY>
`,`<p>foo <!ELEMENT br EMPTY></p>
`],[`foo <![CDATA[>&<]]>
`,`<p>foo <![CDATA[>&<]]></p>
`],[`foo <a href="&ouml;">
`,`<p>foo <a href="&ouml;"></p>
`],[`foo <a href="\\*">
`,`<p>foo <a href="\\*"></p>
`],[`<a href="\\"">
`,`<p>&lt;a href=&quot;&quot;&quot;&gt;</p>
`],[`<a
> quoted text
`,`<p>&lt;a</p>
<blockquote>
<p>quoted text</p>
</blockquote>
`],[`foo  
baz
`,`<p>foo<br />
baz</p>
`],[`foo\\
baz
`,`<p>foo<br />
baz</p>
`],[`foo       
baz
`,`<p>foo<br />
baz</p>
`],[`foo  
     bar
`,`<p>foo<br />
bar</p>
`],[`foo\\
     bar
`,`<p>foo<br />
bar</p>
`],[`*foo  
bar*
`,`<p><em>foo<br />
bar</em></p>
`],[`*foo\\
bar*
`,`<p><em>foo<br />
bar</em></p>
`],["`code  \nspan`\n",`<p><code>code   span</code></p>
`],["`code\\\nspan`\n",`<p><code>code\\ span</code></p>
`],[`<a href="foo  
bar">
`,`<p><a href="foo  
bar"></p>
`],[`<a href="foo\\
bar">
`,`<p><a href="foo\\
bar"></p>
`],[`foo\\
`,`<p>foo\\</p>
`],[`foo  
`,`<p>foo</p>
`],[`### foo\\
`,`<h3>foo\\</h3>
`],[`### foo  
`,`<h3>foo</h3>
`],[`foo
baz
`,`<p>foo
baz</p>
`],[`foo 
 baz
`,`<p>foo
baz</p>
`],[`hello $.;'there
`,`<p>hello $.;'there</p>
`],[`Foo \u03C7\u03C1\u1FC6\u03BD
`,`<p>Foo \u03C7\u03C1\u1FC6\u03BD</p>
`],[`Multiple     spaces
`,`<p>Multiple     spaces</p>
`]]});function Ao(e){let n=e?.stage??"unknown";return n==="missing_function"?"Function parse_markdown(markdown) is not defined.":n==="compile_error"?`Your Python code could not be executed: ${e.error??"unknown error"}`:n==="runtime_exception"?`parse_markdown(markdown) raised an exception at spec #${me(e.index)}: ${e.error}
Markdown:
${V(e.markdown)}`:n==="non_string_output"?`parse_markdown(markdown) must return a string. It returned ${e.actual_type??"unknown"} at spec #${me(e.index)}.`:n==="mismatch"?`First mismatch at spec #${me(e.index)}.
Markdown:
${V(e.markdown)}
Expected HTML:
${V(e.expected)}
Got:
${V(e.actual)}`:n==="validator_error"?`Validation failed unexpectedly: ${e.error??"unknown error"}`:"Incorrect output. parse_markdown(markdown) did not match the expected HTML."}async function be({pyodide:e,code:n,specs:t,maxCases:r=null}){if(!e?.globals||typeof e.runPythonAsync!="function")throw new Error("Pyodide is not initialized.");let p=String(n??"").trim();if(!p)throw new Error("Submit your Python code defining parse_markdown(markdown).");if(!Array.isArray(t))throw new Error("Validator specs are unavailable.");let u=Number.isFinite(r)&&r>0?Math.floor(r):null,s=u==null?t:t.slice(0,u);e.globals.set("__markdown_parser_code",p),e.globals.set("__markdown_parser_specs_json",JSON.stringify(s));let o;try{await e.runPythonAsync(So),o=e.globals.get("__markdown_parser_result_json");let i=typeof o=="string"?o:typeof o?.toJs=="function"?o.toJs():String(o??""),c=JSON.parse(i||"{}");if(!c.ok)throw new Error(Ao(c));return c}catch(i){throw i instanceof Error?i:new Error(String(i))}finally{X(o);let i=e.globals.get("__markdown_parser_code");X(i),e.globals.delete("__markdown_parser_code");let c=e.globals.get("__markdown_parser_specs_json");X(c),e.globals.delete("__markdown_parser_specs_json");let a=e.globals.get("__markdown_parser_result_json");X(a),e.globals.delete("__markdown_parser_result_json")}}var So,V,me,X,an=b(()=>{"use strict";So=`
import json

__validator_result = {"ok": False, "stage": "unknown"}

try:
    __code = __markdown_parser_code
    __specs = json.loads(__markdown_parser_specs_json)
    __namespace = {}

    try:
        exec(__code, __namespace)
    except Exception as exc:
        __validator_result = {
            "ok": False,
            "stage": "compile_error",
            "error": f"{type(exc).__name__}: {exc}",
        }
    else:
        __parse_markdown = __namespace.get("parse_markdown")
        if not callable(__parse_markdown):
            __validator_result = {"ok": False, "stage": "missing_function"}
        else:
            __validator_result = {"ok": True, "total": len(__specs)}
            for __index, __pair in enumerate(__specs):
                __markdown, __expected = __pair

                try:
                    __actual = __parse_markdown(__markdown)
                except Exception as exc:
                    __validator_result = {
                        "ok": False,
                        "stage": "runtime_exception",
                        "index": __index,
                        "markdown": __markdown,
                        "error": f"{type(exc).__name__}: {exc}",
                    }
                    break

                if not isinstance(__actual, str):
                    __validator_result = {
                        "ok": False,
                        "stage": "non_string_output",
                        "index": __index,
                        "markdown": __markdown,
                        "actual_type": type(__actual).__name__,
                    }
                    break

                if __actual != __expected:
                    __validator_result = {
                        "ok": False,
                        "stage": "mismatch",
                        "index": __index,
                        "markdown": __markdown,
                        "expected": __expected,
                        "actual": __actual,
                    }
                    break
except Exception as exc:
    __validator_result = {
        "ok": False,
        "stage": "validator_error",
        "error": f"{type(exc).__name__}: {exc}",
    }

__markdown_parser_result_json = json.dumps(__validator_result, ensure_ascii=False)
`,V=e=>{let n=String(e??"");return n.length<=240?n:`${n.slice(0,240)}...`},me=e=>Number(e??0)+1,X=e=>{e&&typeof e=="object"&&typeof e.destroy=="function"&&e.destroy()}});var un={};S(un,{COMMONMARK_SPEC_COUNT:()=>Eo,MARKDOWN_PARSER_QUESTION_ID:()=>To,default:()=>Ro,getBrowserPyodide:()=>rn,getServerPyodide:()=>sn,parseMarkdownParserSubmission:()=>ln,validateMarkdownParserBrowserCode:()=>pn,validateMarkdownParserCode:()=>cn,validateMarkdownParserSubmission:()=>zo});async function rn(){return ge||(ge=import("https://cdn.jsdelivr.net/pyodide/v0.27.0/full/pyodide.mjs").then(({loadPyodide:e})=>e())),ge}async function sn(){return Q||(Q=import("pyodide").then(({loadPyodide:e})=>e()).catch(e=>{throw Q=null,new Error(`Unable to load Pyodide for server-side validation: ${e.message}`)})),Q}function ln(e){let t=(typeof e=="string"?e:String(e??"")).trim();if(!t)throw new Error("Submit your Python code defining parse_markdown(markdown).");return t}async function cn({code:e,pyodide:n,specs:t=K}){let r=n??await sn();return await be({pyodide:r,code:e,specs:t}),!0}async function zo({response:e,pyodide:n,specs:t=K}){let r=ln(e);return cn({code:r,pyodide:n,specs:t})}async function pn(e,n){let t=n??await rn();return await be({pyodide:t,code:e,specs:Io}),!0}async function Ro({weight:e=1}){let n="q-markdown-parser-server",{html:t}=await import("https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js"),r="CommonMark Parser in Pure Python",p=t`
    <div class="mb-3">
      <p>
        Write a Python function <code>parse_markdown(markdown)</code> that converts Markdown to HTML according to
        <a href="https://spec.commonmark.org/0.31.2/" target="_blank" rel="noopener">CommonMark 0.31.2</a>.
      </p>

      <h6>Requirements</h6>
      <ul>
        <li>Define exactly one callable function: <code>parse_markdown(markdown)</code>.</li>
        <li>Use pure Python and only the standard library.</li>
        <li>No subprocess, shell commands, network calls, or external packages.</li>
        <li>Return HTML as a string and match expected output exactly.</li>
      </ul>

      <h6>Validation</h6>
      <ul>
        <li>Runs quick smoke tests in Pyodide in your browser for instant feedback.</li>
        <li>
          Tests your function against sample cases from the CommonMark spec:
          <code>src/commonmark_spec.json</code>.
        </li>
        <li>All validation happens client-side using Pyodide—no server submission.</li>
      </ul>

      <details class="my-3">
        <summary><strong>Helpful references</strong></summary>
        <ul class="mb-2">
          <li>
            Spec cases: <code>src/commonmark_spec.json</code> in the format
            <code>[[markdown, html], [markdown, html], ...]</code>
          </li>
          <li>Sample implementation: <code>test/sample_markdown_parser.py</code></li>
        </ul>
      </details>

      <label for="${n}" class="form-label"><strong>Python code</strong></label>
      <textarea class="form-control font-monospace" id="${n}" name="${n}" rows="18">${qo}</textarea>
      <p class="form-text">
        Submit full Python code that defines <code>parse_markdown(markdown)</code>. Keep it deterministic and pure.
      </p>
    </div>
  `;return{id:n,title:r,weight:e,question:p,answer:async s=>pn(s)}}var To,Eo,Io,qo,ge,Q,dn=b(()=>{"use strict";tn();an();To="q-markdown-parser-server",Eo=K.length,Io=[[`# Heading
`,`<h1>Heading</h1>
`],[`- one
- two
`,`<ul>
<li>one</li>
<li>two</li>
</ul>
`],["`x`\n",`<p><code>x</code></p>
`],[`[link](https://example.com)
`,`<p><a href="https://example.com">link</a></p>
`]],qo=`def parse_markdown(markdown):
    """Return HTML for a CommonMark document."""
    # Implement a pure Python CommonMark parser using only the standard library.
    # Do not use subprocess, shell commands, or third-party packages.
    return ""`});import{html as fn}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";function mn(e,n){let t;try{t=new URL(e)}catch{throw new Error(`${n} must be a valid absolute URL`)}if(!/^https?:$/u.test(t.protocol))throw new Error(`${n} must start with http:// or https://`);return t}async function bn(e,n){try{let t=await fetch(e,{cache:"no-store"});if(!t.ok)throw new Error(`${n} returned HTTP ${t.status}`);return t}catch(t){throw t instanceof Error&&t.message.startsWith(n)?t:new Error(`${n} must be public and accessible via CORS`)}}async function Oo(e){if(typeof createImageBitmap=="function"){let n=await createImageBitmap(e);try{return{width:n.width,height:n.height}}finally{n.close?.()}}return await new Promise((n,t)=>{let r=URL.createObjectURL(e),p=new Image;p.onload=()=>{URL.revokeObjectURL(r),n({width:p.naturalWidth||p.width,height:p.naturalHeight||p.height})},p.onerror=()=>{URL.revokeObjectURL(r),t(new Error("Could not decode the image"))},p.src=r})}async function Lo(e){let n=mn(e,"Image URL");if(![...hn.keys()].find(o=>n.pathname.toLowerCase().endsWith(o)))throw new Error("Image URL must end in .png, .jpg, .webp, or .avif");let r=await bn(n.toString(),"Image URL"),p=await r.blob();if(!p.size)throw new Error("Image URL returned an empty file");let u=(r.headers.get("content-type")??p.type??"").split(";")[0].trim().toLowerCase();if(u&&!Po.has(u))throw new Error("Image URL must return a PNG, JPG, WEBP, or AVIF image");let s;try{s=await Oo(p)}catch{throw new Error("Image URL must point to a valid image file")}if(Math.min(s.width,s.height)<1024)throw new Error("Image must be at least 1024px on its short side")}function $o(e,n){if(!No(e))throw new Error("Submission JSON must be an object");let t=n.fields.map(({name:o})=>o),r=n.allowPublishEmail?["publish_email"]:[],p=Object.keys(e),u=t.filter(o=>!(o in e)),s=p.filter(o=>!t.includes(o)&&!r.includes(o));if(u.length)throw new Error(`Submission JSON is missing: ${u.join(", ")}`);if(s.length)throw new Error(`Submission JSON has unexpected fields: ${s.join(", ")}`);if(n.allowPublishEmail&&"publish_email"in e&&e.publish_email!==!0)throw new Error('If included, "publish_email" must be true');for(let{name:o,maxWords:i}of n.fields){let c=e[o];if(typeof c!="string"||!c.trim())throw new Error(`Submission JSON field "${o}" must be a non-empty string`);if(i&&Co(c)>i)throw new Error(`Submission JSON field "${o}" must be ${i} words or fewer`)}}async function Mo(e,n){let t=mn(e,"JSON URL"),r=await bn(t.toString(),"JSON URL"),p;try{p=await r.json()}catch{throw new Error("JSON URL must return valid JSON")}$o(p,n)}function Uo(e){let n=String(e??"").trim().split(/\s+/u).filter(Boolean);if(n.length!==2)throw new Error("Submit exactly two public URLs separated by whitespace: image first, JSON second");return n}function P({id:e,title:n,briefMarkdown:t,schema:r,weight:p=.25,bonusEvaluationNotice:u=!1}){return async function({weight:s=p}={}){let o=async c=>{let[a,l]=Uo(c);return await Lo(a),await Mo(l,r),!0},i=fn`
      <div class="mb-3">
        <div class="alert alert-warning" role="alert">
          <strong>Experimental:</strong> This question may change.
        </div>

        ${u?fn`
            <div class="alert alert-info" role="alert">
              <strong>Bonus marks:</strong> This question carries up to <strong>0.75 bonus marks</strong>, awarded
              later via an offline AI evaluation of your submitted image. This bonus includes a diversity component:
              the more visually unique your image is across submissions, based on image embeddings, the higher the
              bonus may be. This is not part of the immediate automatic checks below.
            </div>
          `:""}

        ${R(Fo(String(t??"")))}

        <div class="alert alert-secondary my-4" role="alert">
          <strong>Automatic verification checks:</strong>
          <ol class="mb-0">
            <li>Exactly two public URLs are submitted, with the image first and JSON second.</li>
            <li>The image URL is CORS-accessible, decodes successfully, uses an accepted format, and is at least 1024px on the short side.</li>
            <li>The JSON URL is CORS-accessible and matches the required submission schema. Optional <code>publish_email</code> is allowed.</li>
          </ol>
        </div>

        <label for="${e}" class="form-label"><strong>Submission URLs</strong></label>
        <textarea
          class="form-control font-monospace"
          id="${e}"
          name="${e}"
          rows="3"
          placeholder="https://your-host.com/image.png  https://your-host.com/submission.json"
          spellcheck="false"
        ></textarea>
        <div class="form-text">Submit the public image URL first, then the JSON URL, separated by whitespace.</div>
      </div>
    `;return{id:e,title:n,weight:s,question:i,answer:o}}}var hn,Po,No,Co,Fo,D=b(()=>{"use strict";oe();hn=new Map([[".png","image/png"],[".jpg","image/jpeg"],[".webp","image/webp"],[".avif","image/avif"]]),Po=new Set([...hn.values(),"image/jpg"]),No=e=>Object.prototype.toString.call(e)==="[object Object]",Co=e=>e.trim().split(/\s+/u).filter(Boolean).length,Fo=e=>e.replace(/^# .*\n+/u,"").trim()});var gn={};S(gn,{default:()=>jo});var jo,wn=b(()=>{"use strict";D();jo=P({id:"q-generate-affective-chart",title:"Image: The Affective Chart",briefMarkdown:`# Exercise 01 \u2014 The Affective Chart

### _When Data Has a Feeling_

> **"Make the viewer feel what the numbers mean \u2014 not just read them."**

- **Time estimate:** 2\u20134 hours. Budget time for iteration \u2014 your first output will rarely be your best.
- **Exhibition and consent:** Submissions will be displayed in a public AI-generated exhibition. If you wish your submission to be attributed to your email ID, add \`"publish_email": true\` to your JSON.
- **Hosting your files:** Submit two public URLs via any CORS-enabled service, e.g. GitHub (raw.githubusercontent.com). **Test both URLs in a private browser window before submitting.** Inaccessible URLs at evaluation time cannot be processed.

## The Brief

Select any publicly available dataset on a topic that matters to you \u2014 public health, climate, economic inequality, migration, language extinction, anything with real stakes. Generate a single image that communicates the dataset's most important insight in a way that produces an emotional response, not just an informational one.

This is not a standard chart. The image should be visually compelling enough to open a long-form magazine story. A viewer who has never seen the dataset should walk away with both a fact and a feeling.

## Constraints

1. The dataset must be real and citable. You do not encode this in the image \u2014 you record it in your JSON. **This constraint is enforced by your instructor via your submission data, not by the AI evaluator.**
2. No standard chart types \u2014 bar, line, pie, scatter \u2014 used in isolation or without significant visual transformation. You may subvert or deconstruct them; you may not simply apply a visual style to one.
3. The image must be interpretable without a legend or axis labels. The visual grammar must carry the meaning. If a viewer needs a key to understand it, the image has not done its job.
4. Single frame only \u2014 no sequences, no multi-panel layouts.

## What to Submit

Submit **two CORS-enabled URLs separated by whitespace** on your submission form:

\`\`\`text
https://your-host.com/image.png  https://your-host.com/submission.json
\`\`\`

**URL 1 \u2014 Image** must end in \`.png\`, \`.jpg\`, \`.webp\`, or \`.avif\`. Minimum 1024px on the short side.

**URL 2 \u2014 JSON** must point to a file containing exactly this structure:

\`\`\`json
{
  "prompt": "your complete final prompt, verbatim \u2014 include any negative prompts, style weights, or model parameters",
  "model": "model name and version, e.g. Midjourney v6.1, DALL\xB7E 3, Flux Pro 1.1",
  "dataset_name": "name of the dataset",
  "dataset_url": "direct URL or full citation",
  "insight": "one sentence: the specific insight you were trying to make visible"
}
\`\`\`

**Your prompt is collected for instructor meta-analysis only. It is not passed to the AI evaluator.** The evaluator sees your image alone.

## Why This Exercise

The default mode for data scientists is precision over affect. This exercise forces a different cognitive posture: what would it look like if your job were to make someone _care_, not just to be correct?

This maps directly to how AI-assisted data visualization is increasingly deployed \u2014 in newsrooms, policy briefs, NGO reports, and executive dashboards where decision-makers are reached through emotional salience, not statistical tables. The critical skill being tested is the ability to translate a quantitative insight into a visual argument, and to steer a generative model toward that argument rather than accepting its defaults.

A secondary skill is escaping model defaults. Asked naively to "visualize climate data," every major image model produces some version of the same thing: a globe, a thermometer, a melting icecap. Strong work here requires identifying what is visually _generic_ about your first output and deliberately steering away from it.

**What differentiates strong submissions:** Generic work looks like a stylized infographic. Strong work finds a visual metaphor \u2014 a spatial arrangement, a color field, a texture, a figure-ground relationship \u2014 where the data's truth feels embodied. The best submissions are ones where a viewer who does not know the dataset still experiences something true about it.

## Recommended Image Generation Models

Choosing a model is part of the exercise. Different models have meaningfully different defaults:

| Model              | Access              | Character                                                |
| ------------------ | ------------------- | -------------------------------------------------------- |
| Midjourney v6.1    | midjourney.com      | Strong aesthetic coherence; leans cinematic and textural |
| DALL\xB7E 3           | ChatGPT Plus or API | Literal prompt following; clean, legible compositions    |
| Flux Pro 1.1       | fal.ai, Replicate   | Fine detail; handles unusual or abstract prompts well    |
| Ideogram 2         | ideogram.ai         | Strong compositional structure; handles text in images   |
| Adobe Firefly 3    | firefly.adobe.com   | Polished and safe; integrates with Creative Cloud        |
| Stable Diffusion 3 | various platforms   | Open; highly customisable with the right setup           |

## Evaluation

Your image is fetched from your image URL and sent to the vision model. **The model does not receive your JSON or your prompt.** It evaluates the image against the brief and constraints above. You can and should run this evaluation yourself before submitting.

### Score Anchors

| Range    | Meaning                                                                        |
| -------- | ------------------------------------------------------------------------------ |
| 9.0\u201310.0 | Exhibition-quality; strikes an expert immediately; would open a magazine story |
| 7.0\u20138.9  | Clearly responds to the brief; genuine craft and conceptual engagement         |
| 5.0\u20136.9  | Competent; meets most constraints but does not escape model defaults           |
| 3.0\u20134.9  | Partial; significant failures in concept or execution                          |
| 0.0\u20132.9  | Does not respond to the brief, or violates multiple constraints                |

### Model

**Gemini 3 Pro** \u2014 currently #1 for visual preference and spatial reasoning on the LMArena Vision leaderboard. Chosen because it produces meaningfully differentiated evaluations of compositional and aesthetic choices, rather than clustering scores toward the middle.

### System Prompt

\`\`\`text
You are an expert evaluator of AI-generated data visualizations for an academic course. You will receive one student-submitted image. Evaluate it strictly against the brief and constraints below. Do not evaluate it as generic art \u2014 evaluate it as a response to a specific assignment.

BRIEF: The student selected a publicly available dataset on a topic with real stakes and generated a single image that communicates the dataset's most important insight in a way that produces an emotional response, not just an informational one. The image should be visually compelling enough to open a long-form magazine story. A viewer who has never seen the dataset should walk away with both a fact and a feeling.

CONSTRAINTS:
1. No standard chart types (bar, line, pie, scatter) used in isolation or without significant visual transformation.
2. The image must be interpretable without a legend or axis labels \u2014 the visual grammar must carry the meaning.
3. Single frame only \u2014 no sequences or multi-panel layouts.

SCORING RULES: Use the full 0.0\u201310.0 range with one decimal point of precision. Reserve scores above 9.0 for genuinely exceptional work. A 5.0 means competent but undistinguished. Be strict and spread scores widely \u2014 they will be used to rank a cohort of 1,000 students and must differentiate them. Avoid clustering in the 5\u20138 range.

Return ONLY valid JSON. No preamble, no markdown, no text outside the JSON object.

{
  "scores": {
    "emotional_impact": {
      "score": <float 0.0\u201310.0>,
      "reason": "<1\u20133 sentences specific to this image \u2014 name what you see>",
      "improvement": "<one concrete, actionable suggestion>"
    },
    "constraint_adherence": {
      "score": <float 0.0\u201310.0>,
      "reason": "<state which constraints are met and which are violated, and how seriously>",
      "improvement": "<one concrete, actionable suggestion>"
    },
    "visual_originality": {
      "score": <float 0.0\u201310.0>,
      "reason": "<does this escape model defaults and clich\xE9s for data topics? name the clich\xE9 if present>",
      "improvement": "<one concrete, actionable suggestion>"
    },
    "legibility_without_labels": {
      "score": <float 0.0\u201310.0>,
      "reason": "<can the core insight be read from the image alone, without any legend, axis, or key?>",
      "improvement": "<one concrete, actionable suggestion>"
    },
    "compositional_intent": {
      "score": <float 0.0\u201310.0>,
      "reason": "<does the image show deliberate compositional decisions, or does it look like a first-pass default output?>",
      "improvement": "<one concrete, actionable suggestion>"
    }
  },
  "overall_score": <float: simple average of the five scores above>,
  "brief_met": <boolean: does the image function as a genuine response to this brief?>,
  "model_default_escaped": <boolean: does the image appear to have escaped generic AI visualization aesthetics?>,
  "exhibition_worthy": <boolean: would you select this for a curated public exhibition?>,
  "one_line_verdict": "<a single evaluative sentence suitable for a gallery card, max 20 words>"
}
\`\`\`

### User Message to Send with Your Image

\`\`\`text
Please evaluate the attached image as a submission for Exercise 01: The Affective Chart.

The student was asked to choose a publicly available dataset and generate a single image that makes its most important insight emotionally felt \u2014 without using standard chart types in isolation, without relying on labels or legends, as a single frame.

Evaluate the image against the brief and constraints above. Do not speculate about how the image was produced.
\`\`\`

### How to Run It Yourself

1. Go to [Google AI Studio](https://aistudio.google.com) and select **Gemini 3 Pro** from the model dropdown.
2. Paste the system prompt above into the **System Instructions** field.
3. In the chat, upload your image directly or paste your image URL into the message.
4. Paste the user message and send.
5. The model returns a JSON evaluation.

**What to check first:** \`legibility_without_labels\` and \`visual_originality\` are the most commonly underperformed dimensions. If \`model_default_escaped\` is \`false\`, that is your most important signal \u2014 look at your image and identify the single most predictable thing about it, then change that.`,bonusEvaluationNotice:!0,schema:{allowPublishEmail:!0,fields:[{name:"prompt"},{name:"model"},{name:"dataset_name"},{name:"dataset_url"},{name:"insight"}]},weight:.25})});var yn={};S(yn,{default:()=>Go});var Go,_n=b(()=>{"use strict";D();Go=P({id:"q-generate-concept-incarnation",title:"Image: The Concept Incarnation",briefMarkdown:`# Exercise 02 \u2014 The Concept Incarnation

### _Make the Abstract Physical_

> **"If overfitting were a place, what would it look like?"**

- **Time estimate:** 2\u20134 hours. The hardest part is the conceptual step before you open a model at all.
- **Exhibition and consent:** Submissions will be displayed in a public AI-generated exhibition. If you wish your submission to be attributed to your email ID, add \`"publish_email": true\` to your JSON.
- **Hosting your files:** Submit two public URLs via any CORS-enabled service, e.g. GitHub (raw.githubusercontent.com). **Test both URLs in a private browser window before submitting.** Inaccessible URLs at evaluation time cannot be processed.

## The Brief

Choose any core concept from data science or machine learning. Generate an image that renders this abstract idea as a concrete, physical, real-world scene \u2014 one that a viewer who does not know the concept could look at and experience something true about it, even without being able to name what they are seeing.

The concept must be recognizable to a domain expert looking at the image alone. The scene must feel like it exists in the physical world.

Eligible concepts include but are not limited to: overfitting, gradient descent, the curse of dimensionality, attention mechanisms, Simpson's paradox, the bias-variance tradeoff, regularization, vanishing gradients, dimensionality reduction, the cold start problem, class imbalance, feature importance, loss landscapes, or any other concept from your course.

## Constraints

1. No diagrams, graphs, mathematical notation, equations, or text of any kind within the image.
2. No floating labels, annotation overlays, or anything that would not exist in an actual physical scene.
3. The scene must be physically plausible \u2014 it should look like something a photographer could have taken or a painter could have observed in the world.
4. The concept must be identifiable by a domain expert from the image alone, without requiring your explanation.

## What to Submit

Submit **two CORS-enabled URLs separated by whitespace** on your submission form:

\`\`\`text
https://your-host.com/image.png  https://your-host.com/submission.json
\`\`\`

**URL 1 \u2014 Image** must end in \`.png\`, \`.jpg\`, \`.webp\`, or \`.avif\`. Minimum 1024px on the short side.

**URL 2 \u2014 JSON** must point to a file containing exactly this structure:

\`\`\`json
{
  "prompt": "your complete final prompt, verbatim \u2014 include any negative prompts, style weights, or model parameters",
  "model": "model name and version, e.g. Midjourney v6.1, DALL\xB7E 3, Flux Pro 1.1",
  "concept": "the name of the concept you chose \u2014 one word or phrase only",
  "metaphor": "max 30 words: what is the physical scene, and what structural feature of it maps to the concept?"
}
\`\`\`

**Your prompt is collected for instructor meta-analysis only. It is not passed to the AI evaluator.** The evaluator receives your image and your \`concept\` field only.

## Why This Exercise

Experts in technical communication increasingly argue that the most powerful explanatory images work not by illustrating a concept but by finding a concrete analogy where the _structural logic_ of the concept is visibly present. This is categorically different from making a diagram look nice.

The skill being tested \u2014 conceptual translation \u2014 is what separates practitioners who can communicate AI ideas to non-technical audiences from those who cannot. For data scientists working in product, policy, science communication, or technical education, this skill becomes more valuable as AI tools proliferate in domains staffed by non-technical decision-makers.

Executing this exercise well requires a two-step cognitive process that naive prompting skips entirely: first, identifying the _essential structure_ of the concept (what makes overfitting _overfitting_ rather than any other learning failure?), and second, finding a physical scene where that same structure appears naturally. The image generation model cannot do either of these steps for you. It can only render the scene you describe \u2014 the conceptual work is yours.

**What differentiates strong submissions:** Generic submissions show neurons firing, gears turning, or data flowing through pipes \u2014 stock AI metaphors that bear no structural relationship to any specific concept. Strong submissions find a non-obvious physical scene where the internal logic of the concept is directly visible. A viewer who knows gradient descent should look at the image and immediately think: _yes, exactly that._

## Recommended Image Generation Models

| Model              | Access              | Character                                                |
| ------------------ | ------------------- | -------------------------------------------------------- |
| Midjourney v6.1    | midjourney.com      | Strong aesthetic coherence; leans cinematic and textural |
| DALL\xB7E 3           | ChatGPT Plus or API | Literal prompt following; clean, legible compositions    |
| Flux Pro 1.1       | fal.ai, Replicate   | Fine detail; handles unusual or abstract prompts well    |
| Ideogram 2         | ideogram.ai         | Strong compositional structure                           |
| Adobe Firefly 3    | firefly.adobe.com   | Polished and safe                                        |
| Stable Diffusion 3 | various platforms   | Open; highly customisable                                |

## Evaluation

Your image is fetched from your image URL. The evaluator also receives the \`concept\` field from your JSON \u2014 used to independently attempt concept identification before reading your stated answer. **Your prompt is not passed to the evaluator.**

### Score Anchors

| Range    | Meaning                                                                                       |
| -------- | --------------------------------------------------------------------------------------------- |
| 9.0\u201310.0 | Expert immediately recognises the concept; scene is physically vivid and structurally precise |
| 7.0\u20138.9  | Concept recognisable with effort; scene is plausible and non-generic                          |
| 5.0\u20136.9  | Partially recognisable; some constraint violations or stock metaphors present                 |
| 3.0\u20134.9  | Concept not recognisable, or multiple constraint violations                                   |
| 0.0\u20132.9  | Does not respond to the brief                                                                 |

### Model

**Gemini 3 Pro** \u2014 chosen for its spatial reasoning capability, which is essential for assessing whether a physical scene's structure genuinely maps to an abstract concept.

### System Prompt

\`\`\`text
You are an expert evaluator of AI-generated conceptual images for an academic data science course. You will receive one student-submitted image and the name of the data science or machine learning concept the student chose to represent. Evaluate the image strictly against the brief and constraints below.

BRIEF: The student was asked to render an abstract data science or machine learning concept as a concrete, physical, real-world scene \u2014 with no diagrams, labels, notation, or text \u2014 such that a domain expert can recognize the concept from the image alone.

CONSTRAINTS:
1. No diagrams, graphs, mathematical notation, equations, or text within the image.
2. No floating labels, annotation overlays, or non-physical elements.
3. The scene must be physically plausible \u2014 it should look like something that exists or could exist in the real world.
4. The concept must be identifiable by a domain expert from the image alone.

IMPORTANT: Before reading the concept the student stated, first record your own independent identification of what concept you think is being depicted. Then evaluate how well the image communicates the stated concept.

The concept the student stated: {CONCEPT}

SCORING RULES: Use the full 0.0\u201310.0 range with one decimal point of precision. Reserve scores above 9.0 for genuinely exceptional work. A 5.0 means competent but undistinguished. Be strict and spread scores widely \u2014 they will rank a cohort of 1,000 students. Avoid clustering in the 5\u20138 range.

Return ONLY valid JSON. No preamble, no markdown, no text outside the JSON object.

{
  "concept_identified_by_evaluator": "<string: what concept do YOU think is being depicted, based on the image alone \u2014 record this before considering the student's stated concept>",
  "concept_match": <boolean: does your independent identification match the student's stated concept?>,
  "scores": {
    "concept_recognition": {
      "score": <float 0.0\u201310.0>,
      "reason": "<would a domain expert recognize the stated concept from this image alone? what makes it recognisable or not?>",
      "improvement": "<one concrete, actionable suggestion>"
    },
    "constraint_adherence": {
      "score": <float 0.0\u201310.0>,
      "reason": "<state which constraints are met and which are violated>",
      "improvement": "<one concrete, actionable suggestion>"
    },
    "physical_plausibility": {
      "score": <float 0.0\u201310.0>,
      "reason": "<does the scene feel like it exists or could exist in the real world? flag any non-physical or annotative elements>",
      "improvement": "<one concrete, actionable suggestion>"
    },
    "structural_fidelity": {
      "score": <float 0.0\u201310.0>,
      "reason": "<does the physical scene map to the deep structure of the concept, or only to its surface associations or name?>",
      "improvement": "<one concrete, actionable suggestion>"
    },
    "visual_execution": {
      "score": <float 0.0\u201310.0>,
      "reason": "<composition, coherence, and craft \u2014 does the image look deliberately made?>",
      "improvement": "<one concrete, actionable suggestion>"
    }
  },
  "overall_score": <float: simple average of the five scores above>,
  "model_default_escaped": <boolean: does the image avoid stock AI-visualization clich\xE9s such as neurons, gears, or glowing data flows?>,
  "exhibition_worthy": <boolean>,
  "one_line_verdict": "<single evaluative sentence, max 20 words>"
}
\`\`\`

### User Message to Send with Your Image

Replace \`{CONCEPT}\` in the system prompt with the concept from your JSON, then send:

\`\`\`text
Please evaluate the attached image as a submission for Exercise 02: The Concept Incarnation.

The student was asked to render an abstract data science or machine learning concept as a physical, real-world scene \u2014 with no diagrams, labels, text, or non-physical elements \u2014 such that a domain expert can recognize the concept from the image alone.

The concept the student stated: [paste your concept here]

First record your own independent assessment of what concept is being depicted. Then evaluate the image against the brief and constraints. Do not speculate about how the image was produced.
\`\`\`

### How to Run It Yourself

1. Go to [Google AI Studio](https://aistudio.google.com) and select **Gemini 3 Pro**.
2. Paste the system prompt into the **System Instructions** field, replacing \`{CONCEPT}\` with your concept.
3. Upload your image or paste your image URL into the chat.
4. Paste the user message (with your concept filled in) and send.

**What to check first:** \`concept_identified_by_evaluator\`. If the model independently identifies a different concept, your structural metaphor is not landing \u2014 this is the most important signal to act on before submitting. \`structural_fidelity\` is the hardest score to improve with surface-level prompt changes; it requires going back to the conceptual step.`,bonusEvaluationNotice:!0,schema:{allowPublishEmail:!0,fields:[{name:"prompt"},{name:"model"},{name:"concept"},{name:"metaphor",maxWords:30}]},weight:.25})});var vn={};S(vn,{default:()=>Do});var Do,kn=b(()=>{"use strict";D();Do=P({id:"q-generate-style-transplant",title:"Image: The Style Transplant",briefMarkdown:`# Exercise 03 \u2014 The Style Transplant

### _Visual Literacy Across Time_

> **"What does gradient descent look like in the style of a 19th-century naturalist illustration?"**

- **Time estimate:** 3\u20135 hours. Research the visual tradition before prompting. Looking at actual examples of the tradition is not optional.
- **Exhibition and consent:** Submissions will be displayed in a public AI-generated exhibition. If you wish your submission to be attributed to your email ID, add \`"publish_email": true\` to your JSON.
- **Hosting your files:** Submit two public URLs via any CORS-enabled service, e.g. GitHub (raw.githubusercontent.com). **Test both URLs in a private browser window before submitting.** Inaccessible URLs at evaluation time cannot be processed.

## The Brief

Choose any data science or machine learning concept and a specific, historically real visual tradition. Render your concept authentically within that tradition \u2014 not as a surface imitation, but as a work that a knowledgeable viewer would recognize as operating within the tradition's actual visual grammar.

The concept must remain discernible. This is not a purely decorative exercise.

**Examples of eligible visual traditions** (illustrative, not exhaustive):

- Bauhaus graphic design (1919\u20131933)
- Soviet Constructivist posters (1920s\u20131930s)
- Japanese Edo-period woodblock prints / ukiyo-e (1603\u20131868)
- Islamic geometric art and tilework (any major period or regional school)
- Medieval European manuscript illumination (any century)
- Art Nouveau botanical illustration (1890s\u20131910s)
- Dada photomontage and collage (1916\u20131924)
- Swiss International Typographic Style (1950s\u20131970s)
- WPA Federal Art Project posters (1935\u20131943)
- Scientific engraving from the Age of Exploration (16th\u201318th century)
- Any other tradition you can precisely name, date, and describe

## Constraints

1. You must choose a specific, named visual tradition with a definable historical period. "Vintage," "retro," or "old-fashioned" are not traditions. You must be able to name the movement, the approximate period, and at least two specific visual characteristics you targeted.
2. The concept must still be discernible in the image \u2014 a viewer who knows both the concept and the tradition should be able to recognize both.
3. Your approach must engage the _grammar_ of the tradition \u2014 its compositional rules, color logic, line quality, typographic conventions, or spatial organization \u2014 not merely its surface appearance or general era.
4. Single frame only.

## What to Submit

Submit **two CORS-enabled URLs separated by whitespace** on your submission form:

\`\`\`text
https://your-host.com/image.png  https://your-host.com/submission.json
\`\`\`

**URL 1 \u2014 Image** must end in \`.png\`, \`.jpg\`, \`.webp\`, or \`.avif\`. Minimum 1024px on the short side.

**URL 2 \u2014 JSON** must point to a file containing exactly this structure:

\`\`\`json
{
  "prompt": "your complete final prompt, verbatim \u2014 include any negative prompts, style weights, or model parameters",
  "model": "model name and version, e.g. Midjourney v6.1, DALL\xB7E 3, Flux Pro 1.1",
  "concept": "the data science or ML concept you chose",
  "tradition_name": "the name of the visual tradition",
  "tradition_period": "approximate historical period, e.g. 1920s\u20131930s",
  "tradition_approach": "max 40 words: which specific visual characteristics of the tradition did you target, and why those?"
}
\`\`\`

**Your prompt is collected for instructor meta-analysis only. It is not passed to the AI evaluator.** The evaluator receives your image and the \`concept\`, \`tradition_name\`, \`tradition_period\`, and \`tradition_approach\` fields.

## Why This Exercise

The ability to specify aesthetic style with precision is one of the highest-value skills in AI image generation \u2014 and one of the most poorly understood. Image generation models respond dramatically differently to vague style references ("make it look historical") versus precise visual vocabulary ("Katsushika Hokusai compositional diagonals, flat areas of unmodulated color, visible woodgrain texture, stark figure-ground contrast, muted indigo and ochre palette"). The difference is not a technical skill; it is knowledge of visual traditions deep enough to decompose them into their constituent elements.

This maps directly to professional use cases in publishing, brand identity, editorial design, UX design, product illustration, and creative direction \u2014 anywhere that a practitioner must specify what they want a generative tool to produce, rather than accepting what it produces by default.

A second skill being tested is authenticity evaluation: can you tell whether a model has genuinely inhabited a visual tradition, or merely produced a superficial pastiche? A Swiss International Typographic Style image that uses a serif font has failed. A ukiyo-e image that uses photographic shading has failed. Strong practitioners develop the eye to catch these failures and the vocabulary to correct them.

**What differentiates strong submissions:** Generic submissions name a style but don't inhabit it \u2014 the image looks generically "old" or "illustrated" without belonging to any specific tradition. Strong submissions apply specific visual rules: a consistent compositional logic, a historically accurate color palette, a recognizable line-making convention. A knowledgeable viewer should be able to identify the tradition without being told.

## Recommended Image Generation Models

| Model              | Access              | Notes for this exercise                                                   |
| ------------------ | ------------------- | ------------------------------------------------------------------------- |
| Midjourney v6.1    | midjourney.com      | Responds well to detailed style vocabulary; good for painterly traditions |
| DALL\xB7E 3           | ChatGPT Plus or API | More literal; works well for poster and graphic design traditions         |
| Flux Pro 1.1       | fal.ai, Replicate   | Handles fine line work and unusual historical styles well                 |
| Ideogram 2         | ideogram.ai         | Strong for traditions with integrated text elements                       |
| Stable Diffusion 3 | various platforms   | LoRA fine-tunes exist for some specific traditions                        |

## Evaluation

Your image is fetched from your image URL. The evaluator also receives the \`concept\`, \`tradition_name\`, \`tradition_period\`, and \`tradition_approach\` fields from your JSON. It will independently attempt to identify both the concept and the tradition before comparing its identification to your stated choices. **Your prompt is not passed to the evaluator.**

### Score Anchors

| Range    | Meaning                                                                                    |
| -------- | ------------------------------------------------------------------------------------------ |
| 9.0\u201310.0 | A knowledgeable viewer identifies tradition and concept without prompting; no anachronisms |
| 7.0\u20138.9  | Tradition clearly recognisable; concept discernible; grammar engaged, not just surface     |
| 5.0\u20136.9  | Tradition partially present; concept unclear or pasted in rather than integrated           |
| 3.0\u20134.9  | Tradition not identifiable, or multiple constraint violations                              |
| 0.0\u20132.9  | Does not respond to the brief                                                              |

### Model

**Gemini 3 Pro** \u2014 chosen for its art-historical knowledge and ability to identify visual traditions, compositional grammars, and anachronistic elements in generated images.

### System Prompt

\`\`\`text
You are an expert evaluator of AI-generated images for an academic data science course. You have deep knowledge of art history, visual traditions, and design movements. You will receive one student-submitted image along with the data science concept they chose and a description of the visual tradition they targeted. Evaluate the image strictly against the brief and constraints below.

BRIEF: The student was asked to choose a data science or machine learning concept and render it authentically within a specific, historically real visual tradition \u2014 engaging the tradition's actual visual grammar, not merely imitating its surface appearance. The concept must remain discernible.

CONSTRAINTS:
1. A specific, named visual tradition with a definable period and vocabulary must be evident in the image.
2. The concept must be discernible to a viewer who knows it.
3. The image must engage the grammar of the tradition \u2014 its compositional rules, color logic, line quality, or spatial organization \u2014 not just its general era or surface texture.
4. Single frame only.

IMPORTANT: Before reading the student's stated tradition, first record your own independent identification of what visual tradition you think this image belongs to. Then evaluate how well the image inhabits the stated tradition.

The student's stated concept: {CONCEPT}
The student's stated tradition: {TRADITION_NAME} ({TRADITION_PERIOD})
The student's stated approach: {TRADITION_APPROACH}

SCORING RULES: Use the full 0.0\u201310.0 range with one decimal point of precision. Reserve scores above 9.0 for genuinely exceptional work. A 5.0 means competent but undistinguished. Be strict and spread scores widely \u2014 they will rank a cohort of 1,000 students. Avoid clustering in the 5\u20138 range.

Return ONLY valid JSON. No preamble, no markdown, no text outside the JSON object.

{
  "tradition_identified_by_evaluator": "<string: what visual tradition do YOU think this image belongs to, based on the image alone \u2014 record this before considering the student's stated tradition>",
  "tradition_match": <boolean: does your independent identification match the student's stated tradition?>,
  "concept_identified_by_evaluator": "<string: what data science concept do you think is being depicted, based on the image alone?>",
  "concept_match": <boolean: does your identification match the student's stated concept?>,
  "anachronisms_detected": "<string: list specific visual elements that violate the stated tradition's period or grammar \u2014 or 'none detected'>",
  "scores": {
    "tradition_authenticity": {
      "score": <float 0.0\u201310.0>,
      "reason": "<does the image genuinely inhabit the stated tradition or merely imitate its surface? name specific visual elements that support your assessment>",
      "improvement": "<one concrete, actionable suggestion>"
    },
    "tradition_identifiability": {
      "score": <float 0.0\u201310.0>,
      "reason": "<would a knowledgeable viewer identify this tradition without being told? how confidently?>",
      "improvement": "<one concrete, actionable suggestion>"
    },
    "concept_discernibility": {
      "score": <float 0.0\u201310.0>,
      "reason": "<can the stated concept be recognized by someone who knows it? is it integrated or pasted in?>",
      "improvement": "<one concrete, actionable suggestion>"
    },
    "grammar_over_surface": {
      "score": <float 0.0\u201310.0>,
      "reason": "<does the image apply the tradition's compositional rules, color logic, and structural conventions \u2014 or only its general visual texture?>",
      "improvement": "<one concrete, actionable suggestion>"
    },
    "integration": {
      "score": <float 0.0\u201310.0>,
      "reason": "<do the concept and the tradition feel genuinely fused, or does the concept feel pasted into a styled background?>",
      "improvement": "<one concrete, actionable suggestion>"
    }
  },
  "overall_score": <float: simple average of the five scores above>,
  "exhibition_worthy": <boolean>,
  "one_line_verdict": "<single evaluative sentence, max 20 words>"
}
\`\`\`

### User Message to Send with Your Image

Replace the placeholders in the system prompt with your content from the JSON, then send:

\`\`\`text
Please evaluate the attached image as a submission for Exercise 03: The Style Transplant.

The student was asked to render a data science or machine learning concept authentically within a specific, historically real visual tradition \u2014 applying its actual grammar, not merely imitating its appearance.

Concept: [paste from your JSON]
Tradition: [tradition_name] ([tradition_period])
Approach: [tradition_approach]

First record your own independent identifications of the tradition and the concept. Then evaluate the image against the brief and constraints. Do not speculate about how the image was produced.
\`\`\`

### How to Run It Yourself

1. Go to [Google AI Studio](https://aistudio.google.com) and select **Gemini 3 Pro**.
2. Paste the system prompt into **System Instructions**, replacing all \`{PLACEHOLDERS}\` with your values.
3. Upload your image or paste your image URL, then paste the user message.

**What to check first:** \`tradition_identified_by_evaluator\` and \`anachronisms_detected\`. If the model identifies the wrong tradition, the grammar is not landing. If it detects anachronisms you didn't intend, those are specific elements to remove. \`grammar_over_surface\` is the score hardest to improve by tweaking the prompt \u2014 it requires knowing the tradition well enough to describe its rules, not just its look.`,bonusEvaluationNotice:!0,schema:{allowPublishEmail:!0,fields:[{name:"prompt"},{name:"model"},{name:"concept"},{name:"tradition_name"},{name:"tradition_period"},{name:"tradition_approach",maxWords:40}]},weight:.25})});var xn={};S(xn,{default:()=>Jo});var Jo,Sn=b(()=>{"use strict";D();Jo=P({id:"q-generate-paradox-portrait",title:"Image: The Paradox Portrait",briefMarkdown:`# Exercise 04 \u2014 The Paradox Portrait

### _Visible Contradictions_

> **"Make a logical impossibility look inevitable."**

- **Time estimate:** 3\u20135 hours. Expect your first image to be wrong, and plan for at least two rounds of deliberate revision.
- **Exhibition and consent:** Submissions will be displayed in a public AI-generated exhibition. If you wish your submission to be attributed to your email ID, add \`"publish_email": true\` to your JSON.
- **Hosting your files:** Submit two public URLs via any CORS-enabled service, e.g. GitHub (raw.githubusercontent.com). **Test both URLs in a private browser window before submitting.** Inaccessible URLs at evaluation time cannot be processed.

## The Brief

Choose one statistical or logical paradox and generate an image that makes it visible \u2014 without using text, numbers, equations, or any literal representation of the paradox's mathematical structure.

The image should make a viewer feel the uncanny quality of the paradox: the sense that two things are simultaneously true in a way that should not be possible, or that a system behaves in a way that defies the assumption you brought to it. The image does not need to _explain_ the paradox. It needs to _be_ it.

**Eligible paradoxes** (you may propose others to your instructor):

| Paradox                | The core strangeness                                                                                                                  |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Simpson's Paradox      | A trend appears in every subgroup but reverses when the groups are combined                                                           |
| Goodhart's Law         | Optimizing a measure destroys its value as a measure                                                                                  |
| The Inspection Paradox | You always seem to arrive during a long gap \u2014 the average interval looks different depending on whether you sample events or arrivals |
| The Birthday Problem   | A room of 23 people has a 50% chance of a shared birthday \u2014 far higher than intuition suggests                                        |
| Benford's Law          | In naturally occurring data, 1 appears as the leading digit far more often than any other number                                      |
| The Ecological Fallacy | What is true of the group is not necessarily true of any of its members                                                               |
| The Ellsberg Paradox   | People prefer known risks over unknown risks, even when the expected values are equal                                                 |
| The Friendship Paradox | Your friends have more friends than you do, on average \u2014 always, as a mathematical fact                                               |

## Constraints

1. No text, numbers, formulas, chart elements, or mathematical notation of any kind within the image.
2. The image must work as a standalone visual. A viewer who knows the paradox should recognize it; a viewer who does not should feel something unresolved or uncanny.
3. You may submit a diptych \u2014 two panels composed as a single image \u2014 only if the contrast between the panels is _structurally necessary_ to the paradox, not merely decorative. If you submit a single image, it must carry the paradox alone.
4. The image must avoid literal illustration. A picture of a bus is not the Inspection Paradox. The image must find the paradox's structural or perceptual essence and render that.

## What to Submit

Submit **two CORS-enabled URLs separated by whitespace** on your submission form:

\`\`\`text
https://your-host.com/image.png  https://your-host.com/submission.json
\`\`\`

**URL 1 \u2014 Image** must end in \`.png\`, \`.jpg\`, \`.webp\`, or \`.avif\`. Minimum 1024px on the short side. If submitting a diptych, compose both panels into a single image file.

**URL 2 \u2014 JSON** must point to a file containing exactly this structure:

\`\`\`json
{
  "prompt": "your complete final prompt, verbatim \u2014 include any negative prompts, style weights, or model parameters",
  "model": "model name and version, e.g. Midjourney v6.1, DALL\xB7E 3, Flux Pro 1.1",
  "paradox": "name of the paradox you chose",
  "visual_logic": "max 40 words: what does the viewer see, and how does that visual structure map to the paradox's essence?"
}
\`\`\`

**Your prompt is collected for instructor meta-analysis only. It is not passed to the AI evaluator.** The evaluator receives your image and the \`paradox\` and \`visual_logic\` fields.

## Why This Exercise

Generating conceptually coherent images of paradoxes is one of the most demanding prompting challenges in this series, for a precise reason: the failure mode is entirely invisible to a naive prompter. Describe Simpson's Paradox literally and you get a chart. Describe the _feeling_ of Simpson's Paradox without understanding what that feeling is and you get an abstract image that feels arbitrary. The only path to a strong submission runs through genuine conceptual engagement \u2014 understanding the paradox well enough to identify its phenomenological core, and then finding a visual structure that embodies that core without representing it.

This is the frontier use case for AI image generation: not illustration, but ideation. Not making a picture of an idea, but using visual form to _think through_ an idea. This maps to the work of designers, art directors, and strategic communicators who use generative tools to produce images that _argue_ rather than images that _describe_.

A secondary skill being tested is tolerance for iterative failure. Most first attempts will be wrong in specific, diagnosable ways \u2014 too literal, too abstract, too decorative. Strong practitioners identify precisely what their first output fails to do and revise with a theory, not a guess. The evaluation rubric is designed to give you enough specific feedback to iterate meaningfully before submitting.

**What differentiates strong submissions:** Generic submissions literally illustrate the paradox \u2014 a bus stop for the Inspection Paradox, birthday candles for the Birthday Problem. Strong submissions find the paradox's perceptual or structural core and find a visual equivalent. For Simpson's Paradox, that might mean a spatial arrangement where local and global structure are simultaneously visible and contradictory. The image should produce the _experience_ of the paradox, not an explanation of it.

## Recommended Image Generation Models

| Model              | Access              | Notes for this exercise                                |
| ------------------ | ------------------- | ------------------------------------------------------ |
| Midjourney v6.1    | midjourney.com      | Strongest for surreal or uncanny compositions          |
| Flux Pro 1.1       | fal.ai, Replicate   | Good at holding unusual spatial arrangements           |
| DALL\xB7E 3           | ChatGPT Plus or API | Reliable for precise compositional descriptions        |
| Ideogram 2         | ideogram.ai         | Good for structured, geometric paradox representations |
| Stable Diffusion 3 | various platforms   | Fine control with inpainting for diptych construction  |

## Evaluation

Your image is fetched from your image URL. The evaluator also receives the \`paradox\` and \`visual_logic\` fields from your JSON. It will independently attempt to identify the paradox before comparing its identification to your stated choice. **Your prompt is not passed to the evaluator.**

### Score Anchors

| Range    | Meaning                                                                                               |
| -------- | ----------------------------------------------------------------------------------------------------- |
| 9.0\u201310.0 | Expert recognizes the paradox unprompted; non-expert feels genuine unease; avoids all literalism      |
| 7.0\u20138.9  | Paradox recognisable to expert with effort; some uncanny quality present; non-literal                 |
| 5.0\u20136.9  | Partially non-literal but concept not clearly communicated, or unease is generic rather than specific |
| 3.0\u20134.9  | Literal illustration, or paradox not identifiable                                                     |
| 0.0\u20132.9  | Does not respond to the brief, or violates multiple constraints                                       |

### Model

**Gemini 3 Pro** \u2014 chosen for its spatial reasoning and ability to evaluate whether a visual composition produces the specific perceptual experience of a paradox rather than simply depicting its surface subject matter.

### System Prompt

\`\`\`text
You are an expert evaluator of AI-generated conceptual images for an academic data science course. You have knowledge of logic, statistics, and visual rhetoric. You will receive one student-submitted image, the name of the statistical or logical paradox they chose to depict, and a brief description of the visual logic they used. Evaluate the image strictly against the brief and constraints below.

BRIEF: The student was asked to make a statistical or logical paradox visible in a single image (or composed diptych), without using any text, numbers, formulas, or literal representation of the paradox's mathematical structure. The image should make a viewer who knows the paradox recognize it, and make a viewer who does not feel something unresolved or uncanny.

CONSTRAINTS:
1. No text, numbers, formulas, chart elements, or mathematical notation within the image.
2. Must function as a standalone visual \u2014 producing recognition for an expert, or unease for a non-expert.
3. A diptych is permitted only if the two-panel contrast is structurally necessary to the paradox, not merely decorative.
4. Must embody the paradox's structural or perceptual essence \u2014 not illustrate it literally.

IMPORTANT: Before reading the student's stated paradox, first record your own independent identification of which paradox you think is being depicted. Then evaluate how well the image communicates the stated paradox.

The student's stated paradox: {PARADOX}
The student's stated visual logic: {VISUAL_LOGIC}

SCORING RULES: Use the full 0.0\u201310.0 range with one decimal point of precision. Reserve scores above 9.0 for genuinely exceptional work. A 5.0 means competent but undistinguished. Be strict and spread scores widely \u2014 they will rank a cohort of 1,000 students. Avoid clustering in the 5\u20138 range.

Return ONLY valid JSON. No preamble, no markdown, no text outside the JSON object.

{
  "paradox_identified_by_evaluator": "<string: which paradox do YOU think is being depicted, based on the image alone \u2014 record this before considering the student's stated choice>",
  "paradox_match": <boolean: does your independent identification match the student's stated paradox?>,
  "scores": {
    "paradox_embodiment": {
      "score": <float 0.0\u201310.0>,
      "reason": "<does the image embody the structural or perceptual essence of the paradox \u2014 or does it illustrate it literally or arbitrarily?>",
      "improvement": "<one concrete, actionable suggestion>"
    },
    "constraint_adherence": {
      "score": <float 0.0\u201310.0>,
      "reason": "<state which constraints are met and which are violated, and how seriously>",
      "improvement": "<one concrete, actionable suggestion>"
    },
    "expert_recognition": {
      "score": <float 0.0\u201310.0>,
      "reason": "<would someone who knows this paradox recognize it in this image? what tips them off \u2014 or prevents recognition?>",
      "improvement": "<one concrete, actionable suggestion>"
    },
    "uncanny_quality": {
      "score": <float 0.0\u201310.0>,
      "reason": "<does the image produce a sense of wrongness, contradiction, or unresolvability \u2014 even for a viewer who does not know the paradox?>",
      "improvement": "<one concrete, actionable suggestion>"
    },
    "avoidance_of_literalism": {
      "score": <float 0.0\u201310.0>,
      "reason": "<does the image find the paradox's abstract core, or does it illustrate the paradox's surface narrative or named subject? penalize literal illustrations heavily>",
      "improvement": "<one concrete, actionable suggestion>"
    }
  },
  "overall_score": <float: simple average of the five scores above>,
  "diptych": <boolean: is this a two-panel composed image?>,
  "diptych_justified": <boolean or null: if diptych, is the two-panel structure structurally necessary to the paradox rather than decorative? null if not a diptych>,
  "exhibition_worthy": <boolean>,
  "one_line_verdict": "<single evaluative sentence, max 20 words>"
}
\`\`\`

### User Message to Send with Your Image

Replace the placeholders with your values from the JSON, then send:

\`\`\`text
Please evaluate the attached image as a submission for Exercise 04: The Paradox Portrait.

The student was asked to make a statistical or logical paradox visible in a single image or composed diptych \u2014 without text, numbers, formulas, or literal illustration \u2014 using only visual structure and composition to convey the paradox's essence.

Paradox: [paste from your JSON]
Visual logic: [paste from your JSON]

First record your own independent identification of which paradox you think is depicted. Then evaluate the image against the brief and constraints. Do not speculate about how the image was produced.
\`\`\`

### How to Run It Yourself

1. Go to [Google AI Studio](https://aistudio.google.com) and select **Gemini 3 Pro**.
2. Paste the system prompt into **System Instructions**, replacing \`{PARADOX}\` and \`{VISUAL_LOGIC}\` with your values.
3. Upload your image or paste your image URL, then paste the user message.

**What to check first:** \`paradox_identified_by_evaluator\` \u2014 if the model gets there independently, your image is working. \`avoidance_of_literalism\` is the score that most directly separates strong from generic submissions; if it is below 6.0, your visual metaphor is still too close to the paradox's surface subject. \`uncanny_quality\` is the test of whether the image has found the paradox's perceptual core \u2014 this is what makes a submission worth exhibiting.`,bonusEvaluationNotice:!0,schema:{allowPublishEmail:!0,fields:[{name:"prompt"},{name:"model"},{name:"paradox"},{name:"visual_logic",maxWords:40}]},weight:.25})});function Tn(e){return String(e??"").trim().toLowerCase()}function En(e){return zn.has(e)?"detective":e}function Ko(e){return zn.has(e)?"detective or detection":e}function Vo(e){return(e+"=".repeat((4-(e.length%4||4))%4)).replace(/-/g,"+").replace(/_/g,"/")}function Rn(e){let n=Vo(e);if(typeof atob=="function"){let t=atob(n);return Uint8Array.from(t,r=>r.charCodeAt(0))}if(typeof Buffer<"u")return Uint8Array.from(Buffer.from(n,"base64"));throw new Error("No base64 decoder available in this runtime")}function In(e,n){try{return JSON.parse(Bo.decode(Rn(e)))}catch{throw new Error(`Invalid JWT ${n}`)}}function Xo(e){let n=String(e??"").trim();if(!n)throw new Error("Submit the completion JWT token from the game");let t=n.split(".");if(t.length!==3)throw new Error("JWT must have header.payload.signature format");let[r,p,u]=t;return{token:n,header:In(r,"header"),payload:In(p,"payload"),signingInput:new TextEncoder().encode(`${r}.${p}`),signature:Rn(u)}}function Qo(e,n){let r=(Array.isArray(e?.keys)?e.keys:[]).filter(u=>u?.kty==="EC"&&u?.crv==="P-256");if(!r.length)throw new Error("JWKS did not contain any ES256 verification keys");if(!n)return r;let p=r.filter(u=>u.kid===n);if(!p.length)throw new Error(`No JWKS key matched kid ${n}`);return p}async function Zo(e){let n=e.kid??`${e.x}:${e.y}`;return ye.has(n)||ye.set(n,crypto.subtle.importKey("jwk",e,{name:"ECDSA",namedCurve:"P-256"},!1,["verify"])),ye.get(n)}async function et({signingInput:e,signature:n,jwks:t,kid:r}){for(let p of Qo(t,r)){let u=await Zo(p);if(await crypto.subtle.verify({name:"ECDSA",hash:"SHA-256"},u,n,e))return!0}return!1}async function qn(e){let n=await e(Yo);if(!n.ok)throw new Error(`Unable to fetch JWKS: HTTP ${n.status}`);let t=await n.json();if(!Array.isArray(t?.keys))throw new Error("JWKS response did not contain a keys array");return t}async function nt(e=fetch){return e!==fetch?qn(e):(we||(we=qn(e)),we)}function ot(e=new Date){let n=new Date(e),t=new Date(Date.UTC(n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate())),r=t.getUTCDay()||7;t.setUTCDate(t.getUTCDate()+4-r);let p=new Date(Date.UTC(t.getUTCFullYear(),0,1)),u=Math.ceil(((t-p)/864e5+1)/7);return`${t.getUTCFullYear()}-W${String(u).padStart(2,"0")}`}function tt({payload:e,email:n,expectedGame:t,now:r=new Date}){if(e?.iss!==An)throw new Error(`Expected iss=${An}, got ${e?.iss??"missing"}`);if(Tn(e?.sub)!==Tn(n))throw new Error(`JWT sub must match ${n}`);let p=e?.game;if(En(p)!==En(t))throw new Error(`JWT game must be ${Ko(t)}, got ${p??"missing"}`);let u=ot(r);if(e?.week_id!==u)throw new Error(`JWT week_id must be ${u}, got ${e?.week_id??"missing"}`);let s=new Date(e?.completed_at??"");if(Number.isNaN(s.getTime()))throw new Error("JWT completed_at must be a valid ISO timestamp");let i=new Date(r).getTime()-s.getTime();if(i<-Ho)throw new Error("JWT completed_at cannot be in the future");if(i>Wo)throw new Error("JWT completed_at must be within the last 7 days")}async function L({token:e,email:n,expectedGame:t,now:r=new Date,fetchImpl:p=fetch,jwks:u=null}){let{header:s,payload:o,signingInput:i,signature:c}=Xo(e);if(s?.alg!=="ES256")throw new Error(`Expected ES256 JWT, got ${s?.alg??"unknown"}`);if(s?.typ&&s.typ!=="JWT")throw new Error(`Expected typ=JWT, got ${s.typ}`);let a=u??await nt(p);if(!await et({signingInput:i,signature:c,jwks:a,kid:s?.kid}))throw new Error("JWT signature verification failed");return tt({payload:o,email:n,expectedGame:t,now:r}),o}var Bo,Wo,Ho,An,Yo,we,ye,zn,Z=b(()=>{"use strict";Bo=new TextDecoder,Wo=7*24*60*60*1e3,Ho=5*60*1e3,An="tds-network-games.sanand.workers.dev",Yo="https://tds-network-games.sanand.workers.dev/.well-known/jwks.json",ye=new Map,zn=new Set(["detective","detection"])});async function rt(e,n,t={}){return L({token:e,email:n,expectedGame:at,...t})}async function Pn({email:e}){return async n=>(await rt(n,e),!0)}var at,Nn=b(()=>{"use strict";Z();at="labyrinth"});import{html as it}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";function $({id:e,title:n,url:t,summary:r,tokenGame:p,weight:u=1,validatorFactory:s}){return async function({user:o,weight:i=u}){let c=await s(o),a=it`
      <div class="mb-3">
        <div class="alert alert-warning" role="alert">
          <strong>Experimental:</strong> This question may change.
          <ul class="mb-0 mt-2">
            <li>Students are expected to figure out the game mechanics on their own.</li>
            <li>AI coding agents might help them win.</li>
          </ul>
        </div>

        <p>
          Open <a href="${t}" target="_blank" rel="noopener">${n}</a> and solve this week's run.
        </p>
        <p>${r}</p>

        <h6>What to submit</h6>
        <p>Submit the completion JWT token returned by the game after a successful solve.</p>

        <div class="alert alert-secondary my-4" role="alert">
          <strong>Automatic verification checks:</strong>
          <ol class="mb-0">
            <li>The JWT signature verifies against the game's public JWKS.</li>
            <li>The token <code>sub</code> matches your email ID: <code>${o.email}</code>.</li>
            <li>The token <code>game</code> claim matches <code>${p}</code>.</li>
            <li>The token <code>week_id</code> matches the current ISO week.</li>
            <li>The token <code>completed_at</code> is within the last 7 days.</li>
          </ol>
        </div>

        <label for="${e}" class="form-label"><strong>Completion JWT token</strong></label>
        <textarea
          class="form-control font-monospace"
          id="${e}"
          name="${e}"
          rows="6"
          placeholder="eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9..."
          spellcheck="false"
        ></textarea>
        <div class="form-text">Paste the JWT exactly as returned by the game.</div>
      </div>
    `;return{id:e,title:n,weight:i,question:a,answer:c}}}var ee=b(()=>{"use strict"});var Cn={};S(Cn,{default:()=>st});var st,Fn=b(()=>{"use strict";Nn();ee();st=$({id:"q-network-game-labyrinth",title:"Network Game: Data Labyrinth",url:"https://tds-network-games.sanand.workers.dev/labyrinth/",summary:"Explore a shifting maze, collect the right data fragments, and answer one final analytics query.",tokenGame:"labyrinth",weight:1,validatorFactory:Pn})});async function ct(e,n,t={}){return L({token:e,email:n,expectedGame:lt,...t})}async function On({email:e}){return async n=>(await ct(n,e),!0)}var lt,Ln=b(()=>{"use strict";Z();lt="detective"});var $n={};S($n,{default:()=>pt});var pt,Mn=b(()=>{"use strict";Ln();ee();pt=$({id:"q-network-game-detective",title:"Network Game: Graph Detective",url:"https://tds-network-games.sanand.workers.dev/detective/",summary:"Probe a transaction graph with limited queries to identify the compromised account and shortest proof path.",tokenGame:"detective",weight:1,validatorFactory:On})});async function dt(e,n,t={}){return L({token:e,email:n,expectedGame:ut,...t})}async function Un({email:e}){return async n=>(await dt(n,e),!0)}var ut,jn=b(()=>{"use strict";Z();ut="signal"});var Gn={};S(Gn,{default:()=>ft});var ft,Dn=b(()=>{"use strict";jn();ee();ft=$({id:"q-network-game-signal",title:"Network Game: The Signal",url:"https://tds-network-games.sanand.workers.dev/signal/",summary:"Scavenge a locked facility, solve chained puzzles, and assemble the final passcode to escape.",tokenGame:"signal",weight:1,validatorFactory:Un})});import{html as G,render as Xn}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";function _e(e,n){let t=G`<ol class="mt-3">
    ${e.map(({id:u,title:s,weight:o})=>G`<li><a href="#h${u}">${s}</a> (${o} ${o==1?"mark":"marks"})</li>`)}
  </ol>`,r=[G`<h1 class="display-6">Questions</h1>`,t,...e.map(({id:u,title:s,weight:o,question:i,help:c},a)=>(c&&!Array.isArray(c)&&(c=[c]),G`
        <div class="card my-5" data-question="${u}" id="h${u}">
          <div class="card-header">
            <span class="badge text-bg-primary me-2">${a+1}</span>
            ${s} (${o} ${o==1?"mark":"marks"})
          </div>
          ${c?c.map(l=>G`<div class="card-body border-bottom">${l}</div>`):""}
          <div class="card-body">${i}</div>
          <div class="card-footer d-flex">
            <button type="button" class="btn btn-primary check-answer" data-question="${u}">Check</button>
          </div>
        </div>
      `))],p={index:t,questions:r};for(let[u,s]of n)Xn(p[s],u)}oe();var O=e=>[R(`
### Ask AI

${e.map(n=>`- [${n}](#askai)`).join(`
`)}
`)];async function ca(e,n){let t=[{...await Promise.resolve().then(()=>(We(),Be)).then(r=>r.default({user:e,weight:1})),help:[R(`
### Ask AI

- [My AI course asks me to connect to hundreds of people to get some info. What's the point in the AI era?](#askai)
- [I need to get a key and code from across hundreds of students. I don't know them. Suggest efficient strategies.](#askai)
- [In a student assignment where each student has to collect a key and code from other students, when should I cooperate or defect?](#askai)
`)]},{...await Promise.resolve().then(()=>(Qe(),Xe)).then(r=>r.default({user:e,weight:1})),help:[R(`
### Ask AI

- [My AI course asks me to transcribe 300 digits. What's it trying to teach me in the AI era?](#askai)
- [What're the easiest modern ways I can transcribe an audio file reciting 300 digits without errors, cheaply?](#askai)
- [What's faster? Writing a program to transcribe 300 digits from a 5 min audio, or manually transcribing 300 digits?](#askai)
`)]},{...await Promise.resolve().then(()=>(on(),nn)).then(r=>r.default({user:e,weight:1})),help:[R(`
### Ask AI

- [Why are open-source maintainers getting overloaded by AI-generated PRs, and what practical harm does that cause?](#askai)
- [How do I choose a tiny, high-value first PR in a popular repo that is easy to review and likely to be merged?](#askai)
- [How should I disclose AI assistance in a PR without making maintainers do extra work?](#askai)
- [What should I do if maintainers do not respond, request changes, or close the PR?](#askai)
`)]},{...await Promise.resolve().then(()=>(dn(),un)).then(r=>r.default({user:e,weight:1})),help:[R(`
### Ask AI

- [My AI course asks me to implement a CommonMark parser. Others have already done it, so why is ME doing this a skill that's useful in the AI era?](#askai)
- [As of today, using AI coding agents, what's the easiest way to quickly build a CommonMark parser that passes all the tests?](#askai)
- [If AI coding agents can build parsers against test cases (e.g. CommonMark, HTML, ...) rapidly, what are the most interesting and useful parsers I can build?](#askai)
`)]},{...await Promise.resolve().then(()=>(wn(),gn)).then(r=>r.default({user:e,weight:.25})),help:O(["How do I choose a real dataset and extract one emotionally strong insight instead of making a generic infographic?","What visual clich\xE9s do image models fall into for data topics, and how do I steer away from them?","How can I judge whether a visualization communicates the insight without labels, legends, or axes?"])},{...await Promise.resolve().then(()=>(_n(),yn)).then(r=>r.default({user:e,weight:.25})),help:O(["How do I translate an ML concept like overfitting or gradient descent into a physically plausible real-world scene?","What makes a concept-to-scene metaphor structurally faithful rather than just decorative?","How can I prompt image models to avoid diagrams, labels, and generic AI icons while keeping the concept recognizable?"])},{...await Promise.resolve().then(()=>(kn(),vn)).then(r=>r.default({user:e,weight:.25})),help:O(["How do I research a historical visual tradition well enough to describe its actual grammar to an image model?","What distinguishes an authentic use of a visual tradition from a superficial pastiche or anachronism?","How can I keep a data-science concept legible while rendering it inside a specific historical visual tradition?"])},{...await Promise.resolve().then(()=>(Sn(),xn)).then(r=>r.default({user:e,weight:.25})),help:O(["How do I turn a statistical paradox into a visual experience instead of a literal illustration?","What visual structures can make contradiction or uncanniness feel inevitable without using text or charts?","How should I iterate when an image is too literal, too abstract, or not recognizable to someone who knows the paradox?"])},{...await Promise.resolve().then(()=>(Fn(),Cn)).then(r=>r.default({user:e,weight:1})),help:O(["How would you systematically reverse-engineer a deterministic maze game with collectible fragments and one final analytics question?","If I can only inspect the browser app and network calls, how should I map the labyrinth and track the fragment data efficiently?","Can an AI coding agent help me automate the map, inventory, and final calculation without blindly wasting moves?"])},{...await Promise.resolve().then(()=>(Mn(),$n)).then(r=>r.default({user:e,weight:1})),help:O(["How do I use a limited query budget to identify an anomalous or compromised node in a transaction graph?","What is a good strategy for reconstructing a shortest proof path in a partially observed network?","How can an AI coding agent help me instrument the page or analyze queried node data without wasting scarce queries?"])},{...await Promise.resolve().then(()=>(Dn(),Gn)).then(r=>r.default({user:e,weight:1})),help:O(["How would you approach a deterministic escape-room style web game with chained puzzles, locks, and craftable items?","What is a good method for turning room descriptions, inventory, and puzzle clues into a searchable state model?","Can an AI coding agent help me plan routes, track dependencies, and assemble the final passcode efficiently?"])}];return _e(t,n),Object.fromEntries(t.map(({id:r,...p})=>[r,p]))}export{ca as questions};
