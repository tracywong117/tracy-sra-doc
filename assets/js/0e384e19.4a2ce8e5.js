"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[976],{1512:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var t=s(4848),i=s(8453);const r={sidebar_position:1},a="TracySRA",l={id:"intro",title:"TracySRA",description:"This project is a search engine for SRA metadata on NCBI. It consists of two parts: a frontend Vue application and a backend Flask application.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/tracy-sra-doc/docs/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/tracywong117/tracy-sra-doc/tree/main/docs/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Data Processing",permalink:"/tracy-sra-doc/docs/category/data-processing"}},c={},o=[{value:"Description",id:"description",level:2},{value:"Install prerequisites",id:"install-prerequisites",level:2},{value:"Vue.js Frontend",id:"vuejs-frontend",level:2},{value:"Install",id:"install",level:3},{value:"Build the static Web App",id:"build-the-static-web-app",level:3},{value:"Host the Web App using Nginx",id:"host-the-web-app-using-nginx",level:3},{value:"Enable SSL Connection using Certbot",id:"enable-ssl-connection-using-certbot",level:3},{value:"Flask Backend",id:"flask-backend",level:2},{value:"Install",id:"install-1",level:3},{value:"SSL Connection for Flask Backend",id:"ssl-connection-for-flask-backend",level:3},{value:"Run a script at startup using systemd",id:"run-a-script-at-startup-using-systemd",level:2},{value:"TODO",id:"todo",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",input:"input",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"tracysra",children:"TracySRA"}),"\n",(0,t.jsx)(n.p,{children:"This project is a search engine for SRA metadata on NCBI. It consists of two parts: a frontend Vue application and a backend Flask application."}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"The project aims to provide a user-friendly search functionality for exploring SRA metadata. The frontend Vue application offers convenient tools such as a Wikipedia popup for scientific names, autocomplete for organism names using partial input of common or scientific names, and an advanced search feature."}),"\n",(0,t.jsx)(n.p,{children:"The Flask backend application serves as an API, providing endpoints for retrieving database and implementing features like autocomplete."}),"\n",(0,t.jsx)(n.h2,{id:"install-prerequisites",children:"Install prerequisites"}),"\n",(0,t.jsx)(n.p,{children:"Make sure you have the necessary prerequisites installed, such as Node.js, npm, and Python, before following the installation steps."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Prerequisites"}),(0,t.jsx)(n.th,{children:"Version"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Node.js"}),(0,t.jsx)(n.td,{children:"18.17.0"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"npm"}),(0,t.jsx)(n.td,{children:"9.6.7"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Python"}),(0,t.jsx)(n.td,{children:"3.8.10"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"To run each part of the project, follow the installation steps below:"}),"\n",(0,t.jsx)(n.h2,{id:"vuejs-frontend",children:"Vue.js Frontend"}),"\n",(0,t.jsx)(n.h3,{id:"install",children:"Install"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Navigate to the ",(0,t.jsx)(n.code,{children:"search-vue"})," directory:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:"cd search-vue\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Install the required dependencies:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:"npm install\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Launch the Vue.js development server with the specified host (0.0.0.0) to make the application accessible from other devices on the same network:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:"npm run dev -- --host 0.0.0.0\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"build-the-static-web-app",children:"Build the static Web App"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["To deploy the latest static website, use the build tool:","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:"npm run build\n"})}),"\n","This will update the ",(0,t.jsx)(n.code,{children:"~/sra-metagenome-frontend-backend/search-vue/dist"})," directory with the new version of the website."]}),"\n",(0,t.jsxs)(n.li,{children:["Run the following after building:","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:"mkdir ~/sra-metagenome-frontend-backend/search-vue/dist/assets/svg-btn\ncp -R ~/sra-metagenome-frontend-backend/search-vue/src/assets/svg-btn ~/sra-metagenome-frontend-backend/search-vue/dist/assets\n"})}),"\n","This will solve the bug of missing one image folder in ",(0,t.jsx)(n.code,{children:"dist/assets"})," temporarily. (Can be fixed)"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"host-the-web-app-using-nginx",children:"Host the Web App using Nginx"}),"\n",(0,t.jsxs)(n.p,{children:["The frontend Vue App can be served using ",(0,t.jsx)(n.strong,{children:"Nginx"}),"."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Install Nginx:","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"sudo apt update\nsudo apt install nginx\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["After the installation is complete, the NGINX service should start automatically. You can check the status of the service with:","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"sudo systemctl status nginx\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Nginx's configuration directory is located at ",(0,t.jsx)(n.code,{children:"/etc/nginx/"}),".\nCreate a configuration file in ",(0,t.jsx)(n.code,{children:"/etc/nginx/sites-available"}),":","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"touch sra-metagenome\n"})}),"\n","Then, you have the configuration file located at ",(0,t.jsx)(n.code,{children:"/etc/nginx/sites-available/sra-metagenome"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["The configuration template before setting up SSL connection:","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:"server {\n   listen 80;\n   server_name _ mg-db.org;    \n   # charset utf-8;\n   root    /home/tracy/sra-metagenome-frontend-backend/search-vue/dist;\n   index   /index.html;\n   #Always serve index.html for any request\n   location / {\n       root /home/tracy/sra-metagenome-frontend-backend/search-vue/dist;\n       try_files $uri /index.html;\n   }    \n   error_log  /var/log/nginx/vue-app-error.log;\n   access_log /var/log/nginx/vue-app-access.log;\n}\n"})}),"\n","Nginx will serve the contents of ",(0,t.jsx)(n.code,{children:"~/sra-metagenome-frontend-backend/search-vue/dist"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Enable the site configuration:","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"sudo ln -s /etc/nginx/sites-available/sra-metagenome /etc/nginx/sites-enabled/\n"})}),"\n","May remove the default NGINX configuration file from sites-enabled to avoid any onflicts:","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"sudo rm /etc/nginx/sites-enabled/default\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Reload NGINX to apply the changes:","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"sudo systemctl reload nginx\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"enable-ssl-connection-using-certbot",children:"Enable SSL Connection using Certbot"}),"\n",(0,t.jsxs)(n.p,{children:["For SSL/TLS certificate management, use ",(0,t.jsx)(n.strong,{children:"Certbot"})," by running (in any directory):"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:"sudo certbot --nginx\n"})}),"\n",(0,t.jsx)(n.p,{children:"Enter all the necessary information according to the prompt by Certbot."}),"\n",(0,t.jsx)(n.h2,{id:"flask-backend",children:"Flask Backend"}),"\n",(0,t.jsx)(n.h3,{id:"install-1",children:"Install"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Navigate to the ",(0,t.jsx)(n.code,{children:"backend-flask"})," directory:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:"cd backend-flask\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Install the required Python dependencies using pip3:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:"pip3 install -r requirements.txt\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Run the Flask backend server:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:"python3 main_visualization_psql.py\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"ssl-connection-for-flask-backend",children:"SSL Connection for Flask Backend"}),"\n",(0,t.jsxs)(n.p,{children:["For secure communication, our Flask backend requires the same SSL certificates generated by Let's Encrypt using Certbot ",(0,t.jsx)(n.code,{children:"sudo certbot --nginx"})," in the above for the frontend deployment. These certificates are associated with the domain mg-db.org. Let's Encrypt certificates are valid for 90 days and are typically set up to auto-renew (located in /etc/letsencrypt/live/mg-db.org which is not accessible by default to the Python environment). Therefore, the most straightforward method is to copy the updated certificates to the backend folder after each auto-renewal to ensure continuous HTTPS service."]}),"\n",(0,t.jsx)(n.p,{children:"Use the following commands to copy the necessary certificate files:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:"cd ~/sra-metagenome-frontend-backend/backend-flask\nsudo cp /etc/letsencrypt/live/mg-db.org/fullchain.pem .\nsudo cp /etc/letsencrypt/live/mg-db.org/privkey.pem .\n"})}),"\n",(0,t.jsx)(n.h2,{id:"run-a-script-at-startup-using-systemd",children:"Run a script at startup using systemd"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Create a new systemd service file under ",(0,t.jsx)(n.code,{children:"/etc/systemd/system/"}),", such as ",(0,t.jsx)(n.code,{children:"mgdb-flask.service"}),".\nThe systemd service file that run startup.sh in WorkingDirectory:","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:"[Unit]\nDescription=mgdb-flask Startup\nAfter=network.target\n\n[Service]\nType=simple\nWorkingDirectory=/home/tracy\nExecStart=/bin/bash startup.sh\nUser=tracy\nGroup=tracy\n\n[Install]\nWantedBy=multi-user.target\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Enable the service to run on startup:","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:"sudo systemctl enable mgdb-flask.service\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Start the service immediately to test it:","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:"sudo systemctl start mgdb-flask.service\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"todo",children:"TODO"}),"\n",(0,t.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,t.jsxs)(n.li,{className:"task-list-item",children:[(0,t.jsx)(n.input,{type:"checkbox",disabled:!0})," ","Enhance the startup.sh script that can recover from error"]}),"\n",(0,t.jsxs)(n.li,{className:"task-list-item",children:[(0,t.jsx)(n.input,{type:"checkbox",disabled:!0})," ","Deploy the Flask Backend with a production WSGI server","\n",(0,t.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,t.jsxs)(n.li,{className:"task-list-item",children:[(0,t.jsx)(n.input,{type:"checkbox",disabled:!0})," ","use nginx reverse proxy"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{className:"task-list-item",children:[(0,t.jsx)(n.input,{type:"checkbox",disabled:!0})," ","Fix the bug of missing one image folder"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>l});var t=s(6540);const i={},r=t.createContext(i);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);