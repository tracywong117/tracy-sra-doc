"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[538],{3913:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>d,metadata:()=>o,toc:()=>c});var s=a(4848),n=a(8453);const d={sidebar_position:2},r="2. Download study data",o={id:"data-processing/download-study-data",title:"2. Download study data",description:"Extract data from metastudyset.xml (~5 mins)",source:"@site/docs/data-processing/download-study-data.md",sourceDirName:"data-processing",slug:"/data-processing/download-study-data",permalink:"/tracy-sra-doc/docs/data-processing/download-study-data",draft:!1,unlisted:!1,editUrl:"https://github.com/tracywong117/tracy-sra-doc/tree/main/docs/data-processing/download-study-data.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"1. Download NCBI SRA metadata from BigQuery",permalink:"/tracy-sra-doc/docs/data-processing/download-ncbi-sra-metadata"},next:{title:"3. Useful Data",permalink:"/tracy-sra-doc/docs/data-processing/useful-data"}},i={},c=[{value:"Extract data from meta_study_set.xml (~5 mins)",id:"extract-data-from-meta_study_setxml-5-mins",level:2}];function l(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,n.R)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"2-download-study-data",children:"2. Download study data"}),"\n",(0,s.jsx)(e.h2,{id:"extract-data-from-meta_study_setxml-5-mins",children:"Extract data from meta_study_set.xml (~5 mins)"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"meta_study_set.xml"})," is available at ",(0,s.jsx)(e.a,{href:"https://ftp.ncbi.nlm.nih.gov/sra/reports/Mirroring/",children:"https://ftp.ncbi.nlm.nih.gov/sra/reports/Mirroring/"}),"."]}),"\n",(0,s.jsxs)(e.li,{children:["Navigate to  ",(0,s.jsx)(e.code,{children:"NCBI_SRA_Mirroring_YYYYMMDD_Full"})," folder. This folder is updated monthly."]}),"\n",(0,s.jsxs)(e.li,{children:["Data extracted:","\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"PRIMARY_ID, STUDY_TITLE, STUDY_ABSTRACT, CENTER_PROJECT_NAME, STUDY_TYPE  \n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["Save to ",(0,s.jsx)(e.code,{children:"all-study.csv"})]}),"\n",(0,s.jsxs)(e.li,{children:["Load csv file into dataframe ",(0,s.jsx)(e.code,{children:"df = pd.read_csv('all-study.csv', lineterminator='\\n')"})]}),"\n",(0,s.jsxs)(e.li,{children:["Python script is available in ",(0,s.jsx)(e.code,{children:"/script/extract_study.ipynb"})]}),"\n",(0,s.jsx)(e.li,{children:"Number of study records: 465111"}),"\n"]})]})}function u(t={}){const{wrapper:e}={...(0,n.R)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(l,{...t})}):l(t)}},8453:(t,e,a)=>{a.d(e,{R:()=>r,x:()=>o});var s=a(6540);const n={},d=s.createContext(n);function r(t){const e=s.useContext(d);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function o(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(n):t.components||n:r(t.components),s.createElement(d.Provider,{value:e},t.children)}}}]);