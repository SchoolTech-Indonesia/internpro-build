import{r as d,S as w,j as e,M as x,a as R,D as T,I as B,R as X,f as A,b as _,C as O,c as Z,d as P,e as ee,g as te,A as Y,h as q,l as ae,B as se,i as re,k as oe,P as H,m as U,n as ne,o as le,p as ce,q as ie,F as ue,H as de,s as he}from"./index-DOPFWfes.js";const F=a=>a.replace(/-/g,""),V=(a,o,r)=>{let n=null;return r==="phone_number"&&(o=F(o)),a.required&&o===""?n=a.required.message:a.maxLength&&o.length>a.maxLength.value?n=a.maxLength.message:a.minLength&&o.length<a.minLength.value?n=a.minLength.message:a.pattern&&(n=a.pattern.value.test(o)?null:a.pattern.message),{errorMessage:n,isError:n!==null}},L=(a,o)=>{let r=0;return o&&o.forEach(n=>{!n.isError&&n.value!==""&&r++}),r==a.length},$=({schoolValidations:a})=>{const[o,r]=d.useState([{label:"School Name",name:"school_name",type:"text",placeholder:"School Name",required:!0,isError:!1,errorMessage:null,value:"",validations:a.schoolNameValidations},{label:"School Address",name:"school_address",type:"text",placeholder:"Address",required:!0,isError:!1,errorMessage:null,value:"",validations:a.schoolAddressValidations},{label:"Contact",name:"phone_number",type:"number",placeholder:"Contact",required:!0,isError:!1,errorMessage:null,value:"",validations:a.phoneNumberValidations},{label:"Start",name:"start_member",type:"date",placeholder:"Select Date",isError:!1,errorMessage:null,value:"",validations:a.startMemberValidations},{label:"End",name:"end_member",type:"date",placeholder:"Select Date",isError:!1,errorMessage:null,value:"",validations:a.endMemberValidations}]);return{formData:o,setFormData:r}},z={required:{value:!0,message:"*This field must be filled"},minLength:{value:3,message:"School Name should not be less than 3 characters"},maxLength:{value:50,message:"School Name should not exceed 50 characters"}},G={required:{value:!0,message:"*This field must be filled"},minLength:{value:3,message:"School Address should not be less than 3 characters"},maxLength:{value:100,message:"School Address should not exceed 50 characters"}},J={required:{value:!0,message:"*This field must be filled"},pattern:{value:/^08\d{8,13}$/,message:"*Please enter only 10-15 numbers"}},K={required:{value:!0,message:"*This field must be filled"}},Q={required:{value:!0,message:"*This field must be filled"}},me=()=>{const{visibleModal:a,setVisibleModal:o,setIsTableLoading:r,setIsRefreshPage:n}=d.useContext(w),h={schoolNameValidations:z,schoolAddressValidations:G,phoneNumberValidations:J,startMemberValidations:K,endMemberValidations:Q},{formData:i,setFormData:j}=$({schoolValidations:h}),[u,c]=d.useState(!0),g=(s,b)=>{j(C=>{const D=C.map(t=>{const{errorMessage:l,isError:v}=V(t.validations,s,b);return t.name==b?{...t,isError:v,value:s,errorMessage:l}:t});return c(!L(i,D)),D})},p=s=>{let{name:b,value:C}=s.target;j(D=>{const t=D.map(l=>{const{errorMessage:v,isError:f}=V(l.validations,C,b),S=b==="phone_number"?A(C):C;return l.name==b?{...l,value:S,errorMessage:v,isError:f}:l});return c(!L(i,t)),t})},m=async()=>{I();try{r(!0);const s=i.reduce((b,C)=>{const{value:D,name:t}=C,l=C.name==="phone_number"?F(D):D;return b[t]=l,b},{});await _.createSchool(s),x.success({title:"Create School Data",content:"Data added successfully!",centered:!0,onOk:I})}catch(s){const b=s.response;x.error({title:"Create School Data",content:b.message,centered:!0,onOk:I})}finally{r(!1),n(s=>!s)}},y=s=>{s.preventDefault(),x.info({title:"Create School",content:"Are you sure the data correct?",okCancel:!0,onOk:m,centered:!0})},E=s=>{s.preventDefault(),x.warning({title:"Create School",content:"Are you sure you want to exit? The data will not be saved.",okCancel:!0,centered:!0,onOk:I,width:500})},I=()=>{o(0),x.destroyAll()};return e.jsx(x,{title:"Create School",open:a,onCancel:E,onOk:y,okButtonProps:{disabled:u},centered:!0,children:e.jsx("form",{className:"flex flex-col gap-3",children:i.map((s,b)=>s.type=="date"?e.jsxs(R,{direction:"vertical",className:"w-full text-black/90",children:[e.jsxs("label",{htmlFor:s.name,children:[e.jsx("span",{className:"text-errorHover",children:"*"})," ",s.label]}),e.jsx(T,{className:"w-full text-black/90",format:"YYYY/MM/DD",name:s.name,placeholder:s.placeholder,onChange:(C,D)=>g(D,s.name),required:!0}),s.errorMessage&&e.jsx("span",{className:"text-errorBase",children:s.errorMessage})]},b):e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs("h3",{className:"text-lg text-black/0.88",children:[e.jsx("span",{className:"text-errorHover",children:"*"})," ",s.label]}),e.jsx(B,{type:"text",id:s.name,name:s.name,placeholder:s.placeholder,value:s.value,onChange:p,suffix:e.jsx(X,{className:`text-errorBase ${s.isError?"block":"hidden"}`})}),s.errorMessage&&e.jsx("span",{className:"text-errorBase",children:s.errorMessage})]},b))})})},xe=()=>{const{setVisibleModal:a,visibleModal:o,selectedSchoolUUID:r}=d.useContext(w),[n,h]=d.useState(!1),i=d.useRef({}),[j,u]=d.useState([[],[]]),c=()=>{a(0),x.destroyAll()},g=p=>P(p).format("DD/MM/YYYY");return d.useEffect(()=>{const p=async()=>{const m=await _.getSchoolByUUID(r);i.current[r]=[[{label:"School Name",value:m.school_name},{label:"Address",value:m.school_address},{label:"Contact",value:A(m.phone_number)}],[{label:"Start",value:g(m.start_member),type:"date"},{label:"End",value:g(m.end_member),type:"date"}]],u(i.current[r])};if(r)if(i.current[r])h(!0),u(i.current[r]),h(!1);else{h(!0);try{p()}catch{x.error({title:"Error fetching school details",content:"Failed to fetch school details",centered:!0}),h(!1)}}},[r,j]),e.jsx(x,{title:"Detail School",open:o,onCancel:c,footer:null,centered:!0,children:n?e.jsx("p",{children:"Loading..."}):e.jsx("div",{children:e.jsxs("div",{className:"flex flex-col gap-4",children:[j[0].map((p,m)=>e.jsxs(O,{className:"flex flex-col",children:[e.jsx("p",{children:e.jsxs("strong",{children:[p.label," :"]})}),e.jsx("p",{children:p.value})]},m)),e.jsx(Z,{children:j[1].map((p,m)=>e.jsxs(O,{span:12,children:[e.jsx("p",{children:e.jsxs("strong",{children:[p.label," :"]})}),e.jsx("p",{children:p.value})]},m))})]})})})},pe=()=>{const a={schoolNameValidations:z,schoolAddressValidations:G,phoneNumberValidations:J,startMemberValidations:K,endMemberValidations:Q},{selectedSchoolUUID:o,setVisibleModal:r,visibleModal:n,setIsTableLoading:h,setIsRefreshPage:i}=d.useContext(w),[j,u]=d.useState(!0),{formData:c,setFormData:g}=$({schoolValidations:a}),[p,m]=d.useState(!0),y=d.useCallback(()=>{r(0),x.destroyAll()},[r]),E=(t,l)=>{g(v=>{const f=v.map(S=>{const{errorMessage:N,isError:k}=V(S.validations,t,l);return S.name==l?{...S,isError:k,value:t,errorMessage:N}:S});return m(!L(c,f)),f})},I=t=>{const{name:l,value:v}=t.target;g(f=>{const S=f.map(N=>{const{errorMessage:k,isError:M}=V(N.validations,v,l),W=l==="phone_number"?A(v):v;return N.name==l?{...N,value:W,errorMessage:k,isError:M}:N});return m(!L(c,S)),S})},s=async()=>{try{h(!0);const t=c.reduce((l,v)=>{const{name:f,value:S,type:N}=v;if(N==="date")l[f]=P(S).format("YYYY-MM-DD");else{const k=f==="phone_number"?F(S):S;l[f]=k}return l},{});await _.updateSchoolByUUID(o,t),x.success({title:"Update School",content:"Data added successfully!",onOk:y,centered:!0})}catch{x.error({title:"Error updating school",content:"Failed to update school",centered:!0,onOk:y})}finally{i(t=>!t),h(!1)}},b=t=>{t.preventDefault();let l=0;if(c.forEach(v=>{v.isError||l++}),l!==c.length)return!1;x.info({title:"Update School",content:"Are you sure to make a change?",centered:!0,okCancel:"Cancel",onOk:s})},C=t=>{t.preventDefault(),x.warning({title:"Update School",content:"Are you sure you want to exit? The data will not be saved.",okCancel:!0,centered:!0,onOk:y,width:500})},D=d.useCallback(async()=>{try{u(!0);const t=await _.getSchoolByUUID(o);if(t){const{school_name:l,school_address:v,phone_number:f,start_member:S,end_member:N}=t;g(k=>k.map(M=>{switch(M.name){case"school_name":return{...M,value:l};case"school_address":return{...M,value:v};case"phone_number":return{...M,value:A(f)};case"start_member":return{...M,value:P(S)};case"end_member":return{...M,value:P(N)};default:return M}}))}}catch{x.error({title:"Data not found",content:"school data not valid, please try again",onOk:y})}finally{u(!1)}},[u,y,o,g]);return d.useEffect(()=>{D()},[D]),e.jsx(x,{title:"Update School",open:n,onCancel:C,onOk:b,okButtonProps:{disabled:p},centered:!0,children:j?e.jsx("div",{className:"flex justify-center my-5",children:e.jsx(ee,{spinning:!0,indicator:e.jsx(te,{style:{fontSize:24},spin:!0})})}):e.jsx("form",{className:"flex flex-col gap-3",children:c.map((t,l)=>t.type=="date"?e.jsxs(R,{direction:"vertical",className:"w-full text-black/90",children:[e.jsxs("label",{htmlFor:t.name,children:[e.jsx("span",{className:"text-errorHover",children:"*"})," ",t.label]}),e.jsx(T,{className:"w-full text-black/90",format:"YYYY/MM/DD",name:t.name,defaultValue:t.value,placeholder:t.placeholder,onChange:(v,f)=>E(f,t.name),required:!0}),t.errorMessage&&e.jsx("span",{className:"text-errorBase",children:t.errorMessage})]},l):e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs("h3",{className:"text-lg text-black/0.88",children:[e.jsx("span",{className:"text-errorHover",children:"*"})," ",t.label]}),e.jsx(B,{type:"text",id:t.name,name:t.name,placeholder:t.placeholder,value:t.value,onChange:I}),t.errorMessage&&e.jsx("span",{className:"text-errorBase",children:t.errorMessage})]},l))})})},{Search:ge}=B,be=()=>{const{setRowPerPage:a,setVisibleModal:o,setSearchSchool:r,setCurrentPage:n}=d.useContext(w),{accessMenu:h}=d.useContext(Y),i=q({accessMenu:h,permissionName:H.SCHOOL}),j=[{value:"5",label:"5"},{value:"10",label:"10"},{value:"15",label:"15"},{value:"20",label:"20"},{value:"50",label:"50"}],u=ae.debounce(async c=>{n(1),r(c)},300);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsx(ge,{placeholder:"Search",className:"w-1/4",onSearch:c=>u(c),onChange:c=>u(c.target.value),enterButton:!0}),i.hasCreate&&e.jsx(se,{iconPosition:"end",icon:e.jsx(re,{}),type:"primary",className:"py-5 px-5",onClick:()=>o(1),children:"Create School"})]}),e.jsxs("div",{className:"my-6 flex gap-3 items-center",children:[e.jsx("span",{className:"text-black",children:"Show"}),e.jsx(oe,{defaultValue:"5",className:"w-15",options:j,onChange:c=>{n(1),a(c)}}),e.jsx("span",{children:"Entries"})]})]})},ve=(a,o)=>{const{accessMenu:r}=d.useContext(Y),n=q({accessMenu:r,permissionName:H.SCHOOL});return[{title:"No",dataIndex:"id",key:"id"},{title:"Name",dataIndex:"schoolName",key:"schoolName",sorter:(h,i)=>h.schoolName.localeCompare(i.name)},{title:"Start",dataIndex:"startDate",key:"startDate"},{title:"End",dataIndex:"endDate",key:"endDate"},{title:"Action",dataIndex:"actions",key:"actions",render:(h,i)=>e.jsxs("div",{className:"flex gap-3",children:[n.hasView&&e.jsx(U,{label:"See",type:"success",icon:e.jsx(ne,{}),onClick:()=>a(3,i)}),n.hasUpdate&&e.jsx(U,{label:"Edit",type:"primary",icon:e.jsx(le,{}),onClick:()=>a(2,i)}),n.hasDelete&&e.jsx(U,{label:"Delete",type:"danger",icon:e.jsx(ce,{}),onClick:()=>{x.error({title:"Delete School Data",content:"Are you sure you want to delete this data?.",centered:!0,okCancel:!0,onOk:()=>o(i)})}})]})}]},Se=()=>{const{currentPage:a,rowsPerPage:o,setCurrentPage:r,totalPages:n,totalData:h}=d.useContext(w),i=u=>{r(u)},j=(u,c,g,p)=>g==="prev"?u===1?e.jsx("a",{className:"text-black/0.25",children:"Previous"}):e.jsx("a",{className:"text-primary",onClick:()=>i(u-1),children:"Previous"}):g==="next"?u===c?e.jsx("a",{className:"text-black/0.25",children:"Next"}):e.jsx("a",{className:"text-primary",onClick:()=>i(u+1),children:"Next"}):p;return e.jsx(ie,{align:"center",className:"mt-10",itemRender:(u,c,g)=>j(a,n,c,g),onChange:u=>i(u),defaultCurrent:1,current:a,total:h,pageSize:o})},je=()=>{const{setVisibleModal:a,setSelectedSchoolUUID:o,schoolData:r,isTableLoading:n,setIsTableLoading:h,setCurrentPage:i,isRefreshPage:j,setIsRefreshPage:u,getAllSchools:c}=d.useContext(w);d.useEffect(()=>{try{c()}catch{x.error({title:"Error fetching school data",content:"Failed to fetch school data",centered:!0})}},[c,j]);const g=async m=>{try{h(!0),await _.deleteSchoolByUUID(m.uuid),x.success({title:"Delete School Data",content:"Data deleted sucessfuly!",centered:!0})}catch{x.error({title:"Data not found",content:"school data not found",centered:!0})}finally{h(!1),i(1),u(y=>!y)}},p=(m,y={})=>{const E=y.uuid?y.uuid:null;o(E),a(m)};return e.jsxs("div",{children:[e.jsx(ue,{columns:ve(p,g),dataSource:r,bordered:!0,pagination:!1,locale:{emptyText:e.jsx("span",{className:"text-black/0.88 font-semibold",children:"Data Not Found"})},loading:n}),e.jsx(Se,{})]})},ye=()=>{const{visibleModal:a}=d.useContext(w),o=[{title:"School Management",path:he.SCHOOL_MANAGEMENT}],r=n=>{switch(n){case 1:return e.jsx(me,{});case 2:return e.jsx(pe,{});case 3:return e.jsx(xe,{});default:return null}};return e.jsxs("section",{className:"section",children:[e.jsx(de,{pageName:"School Dashboard",subPages:o}),e.jsxs("div",{className:"m-5 bg-white p-10 rounded-md",children:[e.jsx(be,{}),e.jsx(je,{})]}),r(a)]})};export{ye as default};
