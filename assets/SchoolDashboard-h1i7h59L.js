import{r as m,S as P,M as u,j as e,C as R,R as G,a as E,f as F,b as T,D as L,I as B,c as J,v as A,i as V,d as O,e as U,g as K,h as X,B as _,k as Z,l as ee,m as ae,P as te,F as se,n as re,o as oe,H as le,Q as ne,p as ce,q as de}from"./index-Bw3jx-LT.js";const ue=()=>{const{setVisibleModal:d,visibleModal:i,selectedSchoolUUID:l}=m.useContext(P),[x,g]=m.useState(!1),n=m.useRef({}),[v,c]=m.useState([[],[]]),h=()=>{d(0),u.destroyAll()};return m.useEffect(()=>{const o=async()=>{const s=await E.getSchoolByUUID(l);n.current[l]=[[{label:"School Name",value:s.school_name},{label:"Address",value:s.school_address},{label:"Contact",value:F(s.phone_number)}],[{label:"Start",value:s.start_member,type:"date"},{label:"End",value:s.end_member,type:"date"}]],c(n.current[l])};if(l)if(n.current[l])g(!0),c(n.current[l]),g(!1);else{g(!0);try{o()}catch{u.error({title:"Error fetching school details",content:"Failed to fetch school details",centered:!0}),g(!1)}}},[l,v]),e.jsx(u,{title:"Detail School",open:i,onCancel:h,footer:null,centered:!0,children:x?e.jsx("p",{children:"Loading..."}):e.jsx("div",{children:e.jsxs("div",{className:"flex flex-col gap-3",children:[v[0].map((o,s)=>e.jsxs(R,{className:"flex flex-col",children:[e.jsx("p",{children:e.jsxs("strong",{children:[o.label," :"]})}),e.jsx("p",{children:o.value})]},s)),e.jsx(G,{children:v[1].map((o,s)=>e.jsxs(R,{span:12,children:[e.jsx("p",{children:e.jsxs("strong",{children:[o.label," :"]})}),e.jsx("p",{children:o.value})]},s))})]})})})},Y={required:{value:!0,message:"*This field must be filled"},minLength:{value:3,message:"School Name should not be less than 3 characters"},maxLength:{value:50,message:"School Name should not exceed 50 characters"}},q={required:{value:!0,message:"*This field must be filled"},minLength:{value:3,message:"School Address should not be less than 3 characters"},maxLength:{value:100,message:"School Address should not exceed 50 characters"}},$={required:{value:!0,message:"*This field must be filled"},pattern:{value:/^08\d{8,13}$/,message:"*Please enter only 10-15 numbers"}},H={required:{value:!0,message:"*This field must be filled"}},z={required:{value:!0,message:"*This field must be filled"}},Q=({schoolValidations:d})=>{const[i,l]=m.useState([{label:"School Name",name:"school_name",type:"text",placeholder:"School Name",required:!0,isError:!1,errorMessage:null,value:"",validations:d.schoolNameValidations},{label:"School Address",name:"school_address",type:"text",placeholder:"Address",required:!0,isError:!1,errorMessage:null,value:"",validations:d.schoolAddressValidations},{label:"Contact",name:"phone_number",type:"number",placeholder:"Contact",required:!0,isError:!1,errorMessage:null,value:"",validations:d.phoneNumberValidations},{label:"Start",name:"start_member",type:"date",placeholder:"Select Date",isError:!1,errorMessage:null,value:"",validations:d.startMemberValidations},{label:"End",name:"end_member",type:"date",placeholder:"Select Date",isError:!1,errorMessage:null,value:"",validations:d.endMemberValidations}]);return{formData:i,setFormData:l}},ie=()=>{const{visibleModal:d,setVisibleModal:i,setIsTableLoading:l,setIsRefreshPage:x}=m.useContext(P),g={schoolNameValidations:Y,schoolAddressValidations:q,phoneNumberValidations:$,startMemberValidations:H,endMemberValidations:z},{formData:n,setFormData:v}=Q({schoolValidations:g}),[c,h]=m.useState(!0),o=(t,p)=>{v(k=>{const y=k.map(a=>{const{errorMessage:r,isError:b}=A(a.validations,t,p);return a.name==p?{...a,isError:b,value:t,errorMessage:r}:a});return h(!V(n,y)),y})},s=t=>{let{name:p,value:k}=t.target;v(y=>{const a=y.map(r=>{const{errorMessage:b,isError:f}=A(r.validations,k,p),j=p==="phone_number"?F(k):k;return r.name==p?{...r,value:j,errorMessage:b,isError:f}:r});return h(!V(n,a)),a})},D=async()=>{N();try{l(!0);const t=n.reduce((p,k)=>{const{value:y,name:a}=k,r=k.name==="phone_number"?O(y):y;return p[a]=r,p},{});await E.createSchool(t),u.success({title:"Create School Data",content:"Data added successfully!",centered:!0,onOk:N})}catch(t){const p=t.response;u.error({title:"Create School Data",content:p.message,centered:!0,onOk:N})}finally{l(!1),x(t=>!t)}},S=t=>{t.preventDefault(),u.info({title:"Create School",content:"Are you sure the data correct?",okCancel:!0,onOk:D,centered:!0})},C=t=>{t.preventDefault(),u.warning({title:"Create School",content:"Are you sure you want to exit? The data will not be saved.",okCancel:!0,centered:!0,onOk:N,width:500})},N=()=>{i(0),u.destroyAll()};return e.jsx(u,{title:"Create School",open:d,onCancel:C,onOk:S,okButtonProps:{disabled:c},centered:!0,children:e.jsx("form",{className:"flex flex-col gap-3",children:n.map((t,p)=>t.type=="date"?e.jsxs(T,{direction:"vertical",className:"w-full text-black/90",children:[e.jsxs("label",{htmlFor:t.name,children:[e.jsx("span",{className:"text-errorHover",children:"*"})," ",t.label]}),e.jsx(L,{className:"w-full text-black/90",format:"YYYY/MM/DD",name:t.name,placeholder:t.placeholder,onChange:(k,y)=>o(y,t.name),required:!0}),t.errorMessage&&e.jsx("span",{className:"text-errorBase",children:t.errorMessage})]},p):e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs("h3",{className:"text-lg text-black/0.88",children:[e.jsx("span",{className:"text-errorHover",children:"*"})," ",t.label]}),e.jsx(B,{type:"text",id:t.name,name:t.name,placeholder:t.placeholder,value:t.value,onChange:s,suffix:e.jsx(J,{className:`text-errorBase ${t.isError?"block":"hidden"}`})}),t.errorMessage&&e.jsx("span",{className:"text-errorBase",children:t.errorMessage})]},p))})})},he=()=>{const d={schoolNameValidations:Y,schoolAddressValidations:q,phoneNumberValidations:$,startMemberValidations:H,endMemberValidations:z},{selectedSchoolUUID:i,setVisibleModal:l,visibleModal:x,setIsTableLoading:g,setIsRefreshPage:n}=m.useContext(P),[v,c]=m.useState(!0),{formData:h,setFormData:o}=Q({schoolValidations:d}),[s,D]=m.useState(!0),S=m.useCallback(()=>{l(0),u.destroyAll()},[l]),C=(a,r)=>{o(b=>{const f=b.map(j=>{const{errorMessage:M,isError:I}=A(j.validations,a,r);return j.name==r?{...j,isError:I,value:a,errorMessage:M}:j});return D(!V(h,f)),f})},N=a=>{const{name:r,value:b}=a.target;o(f=>{const j=f.map(M=>{const{errorMessage:I,isError:w}=A(M.validations,b,r),W=r==="phone_number"?F(b):b;return M.name==r?{...M,value:W,errorMessage:I,isError:w}:M});return D(!V(h,j)),j})},t=async()=>{try{g(!0);const a=h.reduce((r,b)=>{const{name:f,value:j,type:M}=b;if(M==="date")r[f]=U(j).format("YYYY-MM-DD");else{const I=f==="phone_number"?O(j):j;r[f]=I}return r},{});await E.updateSchoolByUUID(i,a),u.success({title:"Update School",content:"Data added successfully!",onOk:S,centered:!0})}catch{u.error({title:"Error updating school",content:"Failed to update school",centered:!0,onOk:S})}finally{n(a=>!a),g(!1)}},p=a=>{a.preventDefault();let r=0;if(h.forEach(b=>{b.isError||r++}),r!==h.length)return!1;u.info({title:"Update School",content:"Are you sure to make a change?",centered:!0,okCancel:"Cancel",onOk:t})},k=a=>{a.preventDefault(),u.warning({title:"Update School",content:"Are you sure you want to exit? The data will not be saved.",okCancel:!0,centered:!0,onOk:S,width:500})},y=m.useCallback(async()=>{try{c(!0);const a=await E.getSchoolByUUID(i);if(a){const{school_name:r,school_address:b,phone_number:f,start_member:j,end_member:M}=a;o(I=>I.map(w=>{switch(w.name){case"school_name":return{...w,value:r};case"school_address":return{...w,value:b};case"phone_number":return{...w,value:F(f)};case"start_member":return{...w,value:U(j)};case"end_member":return{...w,value:U(M)};default:return w}}))}}catch{u.error({title:"Data not found",content:"school data not valid, please try again",onOk:S})}finally{c(!1)}},[c,S,i,o]);return m.useEffect(()=>{y()},[y]),e.jsx(u,{title:"Update School",open:x,onCancel:k,onOk:p,okButtonProps:{disabled:s},centered:!0,children:v?e.jsx("div",{className:"flex justify-center my-5",children:e.jsx(K,{spinning:!0,indicator:e.jsx(X,{style:{fontSize:24},spin:!0})})}):e.jsx("form",{className:"flex flex-col gap-3",children:h.map((a,r)=>a.type=="date"?e.jsxs(T,{direction:"vertical",className:"w-full text-black/90",children:[e.jsxs("label",{htmlFor:a.name,children:[e.jsx("span",{className:"text-errorHover",children:"*"})," ",a.label]}),e.jsx(L,{className:"w-full text-black/90",format:"DD/MM/YYYY",name:a.name,defaultValue:a.value,placeholder:a.placeholder,onChange:(b,f)=>C(f,a.name),required:!0}),a.errorMessage&&e.jsx("span",{className:"text-errorBase",children:a.errorMessage})]},r):e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs("h3",{className:"text-lg text-black/0.88",children:[e.jsx("span",{className:"text-errorHover",children:"*"})," ",a.label]}),e.jsx(B,{type:"text",id:a.name,name:a.name,placeholder:a.placeholder,value:a.value,onChange:N}),a.errorMessage&&e.jsx("span",{className:"text-errorBase",children:a.errorMessage})]},r))})})},me=(d,i)=>[{title:"No",dataIndex:"id",key:"id"},{title:"Name",dataIndex:"schoolName",key:"schoolName"},{title:"Start",dataIndex:"startDate",key:"startDate"},{title:"End",dataIndex:"endDate",key:"endDate"},{title:"Action",dataIndex:"actions",key:"actions",render:(l,x)=>e.jsxs("div",{className:"flex gap-3",children:[e.jsx(_,{label:"See",type:"success",icon:e.jsx(Z,{}),onClick:()=>d(3,x)}),e.jsx(_,{label:"Edit",type:"primary",icon:e.jsx(ee,{}),onClick:()=>d(2,x)}),e.jsx(_,{label:"Delete",type:"danger",icon:e.jsx(ae,{}),onClick:()=>{u.error({title:"Delete School Data",content:"Are you sure you want to delete this data?.",centered:!0,okCancel:!0,onOk:()=>i(x)})}})]})}],xe=()=>{const{currentPage:d,rowsPerPage:i,setCurrentPage:l,totalPages:x,totalData:g}=m.useContext(P),n=c=>{l(c)},v=(c,h,o,s)=>o==="prev"?c===1?e.jsx("a",{className:"text-black/0.25",children:"Previous"}):e.jsx("a",{className:"text-primary",onClick:()=>n(c-1),children:"Previous"}):o==="next"?c===h?e.jsx("a",{className:"text-black/0.25",children:"Next"}):e.jsx("a",{className:"text-primary",onClick:()=>n(c+1),children:"Next"}):s;return e.jsx(te,{align:"center",className:"mt-10",itemRender:(c,h,o)=>v(d,x,h,o),onChange:c=>n(c),defaultCurrent:1,current:d,total:g,pageSize:i})},pe=()=>{const{setVisibleModal:d,setSelectedSchoolUUID:i,schoolData:l,tableErrorMessage:x,isTableLoading:g,setIsTableLoading:n,setCurrentPage:v,isRefreshPage:c,setIsRefreshPage:h,getAllSchools:o}=m.useContext(P);m.useEffect(()=>{try{o()}catch{u.error({title:"Error fetching school data",content:"Failed to fetch school data",centered:!0})}},[o,c]);const s=async S=>{try{n(!0),await E.deleteSchoolByUUID(S.uuid),u.success({title:"Delete School Data",content:"Data deleted sucessfuly!",centered:!0})}catch{u.error({title:"Data not found",content:"school data not found",centered:!0})}finally{n(!1),v(1),h(C=>!C)}},D=(S,C={})=>{const N=C.uuid?C.uuid:null;i(N),d(S)};return x?e.jsx("div",{className:"flex w-full justify-center mt-5",children:e.jsx("span",{className:"text-red-500",children:x})}):e.jsxs("div",{children:[e.jsx(se,{columns:me(D,s),dataSource:l,bordered:!0,pagination:!1,loading:g}),e.jsx(xe,{})]})},{Search:be}=B,ve=()=>{const{setRowPerPage:d,visibleModal:i,setVisibleModal:l,setCurrentPage:x,setSchoolData:g,setIsTableLoading:n,setTableErrorMessage:v,setIsRefreshPage:c}=m.useContext(P),h=[{value:"5",label:"5"},{value:"10",label:"10"},{value:"15",label:"15"},{value:"20",label:"20"},{value:"50",label:"50"}],o=re.debounce(async s=>{if(v(""),s==="")c(D=>!D);else try{n(!0);const C=(await E.searchSchoolByName(s)).data.map((N,t)=>oe(N,t+1,N));n(!1),x(1),g(C)}catch(D){const S=D.response;n(!1),v(S.message)}},300);return e.jsxs("section",{className:"section",children:[e.jsx(le,{pageName:"School Dashboard",subPages:["School Management"]}),e.jsx(ne,{toastStyle:{width:"200%",borderColor:"#FFA39E",backgroundColor:"#FFF1F0",color:"#000",fontSize:"12px",borderRadius:"8px",borderWidth:"1px",borderStyle:"solid",padding:"16px"}}),e.jsxs("div",{className:"m-5 bg-white p-10 rounded-md",children:[e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsx(be,{placeholder:"Search",className:"w-1/4",onSearch:s=>o(s),onChange:s=>o(s.target.value),enterButton:!0}),e.jsx(_,{icon:e.jsx(ce,{}),type:"primary",label:"Create School",iconPosition:"end",className:"py-5 px-5",onClick:()=>l(1)})]}),e.jsxs("div",{className:"my-6 flex gap-3 items-center",children:[e.jsx("span",{className:"text-black",children:"Show"}),e.jsx(de,{defaultValue:"5",className:"w-15",options:h,onChange:s=>d(s)}),e.jsx("span",{children:"Entries"})]}),e.jsx(pe,{})]}),i===1?e.jsx(ie,{}):i===2?e.jsx(he,{}):i===3?e.jsx(ue,{}):null]})};export{ve as default};
