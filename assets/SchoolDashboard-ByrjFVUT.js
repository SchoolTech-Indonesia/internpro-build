import{r as m,S as w,j as e,M as i,a as T,D as L,I as B,R as K,v as P,i as A,f as V,b as O,c as _,C as R,d as Q,e as F,g as W,h as X,l as Z,B as ee,k as ae,m as te,n as U,o as se,p as re,q as oe,P as ne,F as le,H as ce,A as ue}from"./index-rwViqCVp.js";const Y={required:{value:!0,message:"*This field must be filled"},minLength:{value:3,message:"School Name should not be less than 3 characters"},maxLength:{value:50,message:"School Name should not exceed 50 characters"}},q={required:{value:!0,message:"*This field must be filled"},minLength:{value:3,message:"School Address should not be less than 3 characters"},maxLength:{value:100,message:"School Address should not exceed 50 characters"}},H={required:{value:!0,message:"*This field must be filled"},pattern:{value:/^08\d{8,13}$/,message:"*Please enter only 10-15 numbers"}},$={required:{value:!0,message:"*This field must be filled"}},z={required:{value:!0,message:"*This field must be filled"}},G=({schoolValidations:o})=>{const[h,r]=m.useState([{label:"School Name",name:"school_name",type:"text",placeholder:"School Name",required:!0,isError:!1,errorMessage:null,value:"",validations:o.schoolNameValidations},{label:"School Address",name:"school_address",type:"text",placeholder:"Address",required:!0,isError:!1,errorMessage:null,value:"",validations:o.schoolAddressValidations},{label:"Contact",name:"phone_number",type:"number",placeholder:"Contact",required:!0,isError:!1,errorMessage:null,value:"",validations:o.phoneNumberValidations},{label:"Start",name:"start_member",type:"date",placeholder:"Select Date",isError:!1,errorMessage:null,value:"",validations:o.startMemberValidations},{label:"End",name:"end_member",type:"date",placeholder:"Select Date",isError:!1,errorMessage:null,value:"",validations:o.endMemberValidations}]);return{formData:h,setFormData:r}},de=()=>{const{visibleModal:o,setVisibleModal:h,setIsTableLoading:r,setIsRefreshPage:l}=m.useContext(w),b={schoolNameValidations:Y,schoolAddressValidations:q,phoneNumberValidations:H,startMemberValidations:$,endMemberValidations:z},{formData:c,setFormData:u}=G({schoolValidations:b}),[d,x]=m.useState(!0),n=(t,g)=>{u(D=>{const f=D.map(a=>{const{errorMessage:s,isError:v}=P(a.validations,t,g);return a.name==g?{...a,isError:v,value:t,errorMessage:s}:a});return x(!A(c,f)),f})},p=t=>{let{name:g,value:D}=t.target;u(f=>{const a=f.map(s=>{const{errorMessage:v,isError:j}=P(s.validations,D,g),S=g==="phone_number"?V(D):D;return s.name==g?{...s,value:S,errorMessage:v,isError:j}:s});return x(!A(c,a)),a})},N=async()=>{I();try{r(!0);const t=c.reduce((g,D)=>{const{value:f,name:a}=D,s=D.name==="phone_number"?O(f):f;return g[a]=s,g},{});await _.createSchool(t),i.success({title:"Create School Data",content:"Data added successfully!",centered:!0,onOk:I})}catch(t){const g=t.response;i.error({title:"Create School Data",content:g.message,centered:!0,onOk:I})}finally{r(!1),l(t=>!t)}},y=t=>{t.preventDefault(),i.info({title:"Create School",content:"Are you sure the data correct?",okCancel:!0,onOk:N,centered:!0})},E=t=>{t.preventDefault(),i.warning({title:"Create School",content:"Are you sure you want to exit? The data will not be saved.",okCancel:!0,centered:!0,onOk:I,width:500})},I=()=>{h(0),i.destroyAll()};return e.jsx(i,{title:"Create School",open:o,onCancel:E,onOk:y,okButtonProps:{disabled:d},centered:!0,children:e.jsx("form",{className:"flex flex-col gap-3",children:c.map((t,g)=>t.type=="date"?e.jsxs(T,{direction:"vertical",className:"w-full text-black/90",children:[e.jsxs("label",{htmlFor:t.name,children:[e.jsx("span",{className:"text-errorHover",children:"*"})," ",t.label]}),e.jsx(L,{className:"w-full text-black/90",format:"YYYY/MM/DD",name:t.name,placeholder:t.placeholder,onChange:(D,f)=>n(f,t.name),required:!0}),t.errorMessage&&e.jsx("span",{className:"text-errorBase",children:t.errorMessage})]},g):e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs("h3",{className:"text-lg text-black/0.88",children:[e.jsx("span",{className:"text-errorHover",children:"*"})," ",t.label]}),e.jsx(B,{type:"text",id:t.name,name:t.name,placeholder:t.placeholder,value:t.value,onChange:p,suffix:e.jsx(K,{className:`text-errorBase ${t.isError?"block":"hidden"}`})}),t.errorMessage&&e.jsx("span",{className:"text-errorBase",children:t.errorMessage})]},g))})})},ie=()=>{const{setVisibleModal:o,visibleModal:h,selectedSchoolUUID:r}=m.useContext(w),[l,b]=m.useState(!1),c=m.useRef({}),[u,d]=m.useState([[],[]]),x=()=>{o(0),i.destroyAll()};return m.useEffect(()=>{const n=async()=>{const p=await _.getSchoolByUUID(r);c.current[r]=[[{label:"School Name",value:p.school_name},{label:"Address",value:p.school_address},{label:"Contact",value:V(p.phone_number)}],[{label:"Start",value:p.start_member,type:"date"},{label:"End",value:p.end_member,type:"date"}]],d(c.current[r])};if(r)if(c.current[r])b(!0),d(c.current[r]),b(!1);else{b(!0);try{n()}catch{i.error({title:"Error fetching school details",content:"Failed to fetch school details",centered:!0}),b(!1)}}},[r,u]),e.jsx(i,{title:"Detail School",open:h,onCancel:x,footer:null,centered:!0,children:l?e.jsx("p",{children:"Loading..."}):e.jsx("div",{children:e.jsxs("div",{className:"flex flex-col gap-4",children:[u[0].map((n,p)=>e.jsxs(R,{className:"flex flex-col",children:[e.jsx("p",{children:e.jsxs("strong",{children:[n.label," :"]})}),e.jsx("p",{children:n.value})]},p)),e.jsx(Q,{children:u[1].map((n,p)=>e.jsxs(R,{span:12,children:[e.jsx("p",{children:e.jsxs("strong",{children:[n.label," :"]})}),e.jsx("p",{children:n.value})]},p))})]})})})},he=()=>{const o={schoolNameValidations:Y,schoolAddressValidations:q,phoneNumberValidations:H,startMemberValidations:$,endMemberValidations:z},{selectedSchoolUUID:h,setVisibleModal:r,visibleModal:l,setIsTableLoading:b,setIsRefreshPage:c}=m.useContext(w),[u,d]=m.useState(!0),{formData:x,setFormData:n}=G({schoolValidations:o}),[p,N]=m.useState(!0),y=m.useCallback(()=>{r(0),i.destroyAll()},[r]),E=(a,s)=>{n(v=>{const j=v.map(S=>{const{errorMessage:C,isError:M}=P(S.validations,a,s);return S.name==s?{...S,isError:M,value:a,errorMessage:C}:S});return N(!A(x,j)),j})},I=a=>{const{name:s,value:v}=a.target;n(j=>{const S=j.map(C=>{const{errorMessage:M,isError:k}=P(C.validations,v,s),J=s==="phone_number"?V(v):v;return C.name==s?{...C,value:J,errorMessage:M,isError:k}:C});return N(!A(x,S)),S})},t=async()=>{try{b(!0);const a=x.reduce((s,v)=>{const{name:j,value:S,type:C}=v;if(C==="date")s[j]=F(S).format("YYYY-MM-DD");else{const M=j==="phone_number"?O(S):S;s[j]=M}return s},{});await _.updateSchoolByUUID(h,a),i.success({title:"Update School",content:"Data added successfully!",onOk:y,centered:!0})}catch{i.error({title:"Error updating school",content:"Failed to update school",centered:!0,onOk:y})}finally{c(a=>!a),b(!1)}},g=a=>{a.preventDefault();let s=0;if(x.forEach(v=>{v.isError||s++}),s!==x.length)return!1;i.info({title:"Update School",content:"Are you sure to make a change?",centered:!0,okCancel:"Cancel",onOk:t})},D=a=>{a.preventDefault(),i.warning({title:"Update School",content:"Are you sure you want to exit? The data will not be saved.",okCancel:!0,centered:!0,onOk:y,width:500})},f=m.useCallback(async()=>{try{d(!0);const a=await _.getSchoolByUUID(h);if(a){const{school_name:s,school_address:v,phone_number:j,start_member:S,end_member:C}=a;n(M=>M.map(k=>{switch(k.name){case"school_name":return{...k,value:s};case"school_address":return{...k,value:v};case"phone_number":return{...k,value:V(j)};case"start_member":return{...k,value:F(S)};case"end_member":return{...k,value:F(C)};default:return k}}))}}catch{i.error({title:"Data not found",content:"school data not valid, please try again",onOk:y})}finally{d(!1)}},[d,y,h,n]);return m.useEffect(()=>{f()},[f]),e.jsx(i,{title:"Update School",open:l,onCancel:D,onOk:g,okButtonProps:{disabled:p},centered:!0,children:u?e.jsx("div",{className:"flex justify-center my-5",children:e.jsx(W,{spinning:!0,indicator:e.jsx(X,{style:{fontSize:24},spin:!0})})}):e.jsx("form",{className:"flex flex-col gap-3",children:x.map((a,s)=>a.type=="date"?e.jsxs(T,{direction:"vertical",className:"w-full text-black/90",children:[e.jsxs("label",{htmlFor:a.name,children:[e.jsx("span",{className:"text-errorHover",children:"*"})," ",a.label]}),e.jsx(L,{className:"w-full text-black/90",format:"YYYY/MM/DD",name:a.name,defaultValue:a.value,placeholder:a.placeholder,onChange:(v,j)=>E(j,a.name),required:!0}),a.errorMessage&&e.jsx("span",{className:"text-errorBase",children:a.errorMessage})]},s):e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs("h3",{className:"text-lg text-black/0.88",children:[e.jsx("span",{className:"text-errorHover",children:"*"})," ",a.label]}),e.jsx(B,{type:"text",id:a.name,name:a.name,placeholder:a.placeholder,value:a.value,onChange:I}),a.errorMessage&&e.jsx("span",{className:"text-errorBase",children:a.errorMessage})]},s))})})},{Search:me}=B,xe=()=>{const{setRowPerPage:o,setVisibleModal:h,setSearchSchool:r,setCurrentPage:l}=m.useContext(w),b=[{value:"5",label:"5"},{value:"10",label:"10"},{value:"15",label:"15"},{value:"20",label:"20"},{value:"50",label:"50"}],c=Z.debounce(async u=>{l(1),r(u)},300);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsx(me,{placeholder:"Search",className:"w-1/4",onSearch:u=>c(u),onChange:u=>c(u.target.value),enterButton:!0}),e.jsx(ee,{iconPosition:"end",icon:e.jsx(ae,{}),type:"primary",className:"py-5 px-5",onClick:()=>h(1),children:"Create School"})]}),e.jsxs("div",{className:"my-6 flex gap-3 items-center",children:[e.jsx("span",{className:"text-black",children:"Show"}),e.jsx(te,{defaultValue:"5",className:"w-15",options:b,onChange:u=>{l(1),o(u)}}),e.jsx("span",{children:"Entries"})]})]})},pe=(o,h)=>[{title:"No",dataIndex:"id",key:"id"},{title:"Name",dataIndex:"schoolName",key:"schoolName",sorter:(r,l)=>r.schoolName.localeCompare(l.name)},{title:"Start",dataIndex:"startDate",key:"startDate"},{title:"End",dataIndex:"endDate",key:"endDate"},{title:"Action",dataIndex:"actions",key:"actions",render:(r,l)=>e.jsxs("div",{className:"flex gap-3",children:[e.jsx(U,{label:"See",type:"success",icon:e.jsx(se,{}),onClick:()=>o(3,l)}),e.jsx(U,{label:"Edit",type:"primary",icon:e.jsx(re,{}),onClick:()=>o(2,l)}),e.jsx(U,{label:"Delete",type:"danger",icon:e.jsx(oe,{}),onClick:()=>{i.error({title:"Delete School Data",content:"Are you sure you want to delete this data?.",centered:!0,okCancel:!0,onOk:()=>h(l)})}})]})}],be=()=>{const{currentPage:o,rowsPerPage:h,setCurrentPage:r,totalPages:l,totalData:b}=m.useContext(w),c=d=>{r(d)},u=(d,x,n,p)=>n==="prev"?d===1?e.jsx("a",{className:"text-black/0.25",children:"Previous"}):e.jsx("a",{className:"text-primary",onClick:()=>c(d-1),children:"Previous"}):n==="next"?d===x?e.jsx("a",{className:"text-black/0.25",children:"Next"}):e.jsx("a",{className:"text-primary",onClick:()=>c(d+1),children:"Next"}):p;return e.jsx(ne,{align:"center",className:"mt-10",itemRender:(d,x,n)=>u(o,l,x,n),onChange:d=>c(d),defaultCurrent:1,current:o,total:b,pageSize:h})},ge=()=>{const{setVisibleModal:o,setSelectedSchoolUUID:h,schoolData:r,isTableLoading:l,setIsTableLoading:b,setCurrentPage:c,isRefreshPage:u,setIsRefreshPage:d,getAllSchools:x}=m.useContext(w);m.useEffect(()=>{try{x()}catch{i.error({title:"Error fetching school data",content:"Failed to fetch school data",centered:!0})}},[x,u]);const n=async N=>{try{b(!0),await _.deleteSchoolByUUID(N.uuid),i.success({title:"Delete School Data",content:"Data deleted sucessfuly!",centered:!0})}catch{i.error({title:"Data not found",content:"school data not found",centered:!0})}finally{b(!1),c(1),d(y=>!y)}},p=(N,y={})=>{const E=y.uuid?y.uuid:null;h(E),o(N)};return e.jsxs("div",{children:[e.jsx(le,{columns:pe(p,n),dataSource:r,bordered:!0,pagination:!1,locale:{emptyText:e.jsx("span",{className:"text-black/0.88 font-semibold",children:"Data Not Found"})},loading:l}),e.jsx(be,{})]})},Se=()=>{const{visibleModal:o}=m.useContext(w),h=[{title:"School Management",path:ue.SCHOOL_MANAGEMENT}],r=l=>{switch(l){case 1:return e.jsx(de,{});case 2:return e.jsx(he,{});case 3:return e.jsx(ie,{});default:return null}};return e.jsxs("section",{className:"section",children:[e.jsx(ce,{pageName:"School Dashboard",subPages:h}),e.jsxs("div",{className:"m-5 bg-white p-10 rounded-md",children:[e.jsx(xe,{}),e.jsx(ge,{})]}),r(o)]})};export{Se as default};
