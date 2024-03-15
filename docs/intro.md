---
sidebar_position: 1
---

# TracySRA

This project is a search engine for SRA metadata on NCBI. It consists of two parts: a frontend Vue application and a backend Flask application.

## Description

The project aims to provide a user-friendly search functionality for exploring SRA metadata. The frontend Vue application offers convenient tools such as a Wikipedia popup for scientific names, autocomplete for organism names using partial input of common or scientific names, and an advanced search feature.

The Flask backend application serves as an API, providing endpoints for retrieving database and implementing features like autocomplete.

## Install prerequisites
Make sure you have the necessary prerequisites installed, such as Node.js, npm, and Python, before following the installation steps.

| Prerequisites | Version |
| ------------- | ------- |
| Node.js       | 18.17.0 |
| npm           | 9.6.7   |
| Python        | 3.8.10  |

To run each part of the project, follow the installation steps below:

## Vue.js Frontend
### Install
1. Navigate to the `search-vue` directory:
   ```plaintext
   cd search-vue
   ```

2. Install the required dependencies:
   ```plaintext
   npm install
   ```

3. Launch the Vue.js development server with the specified host (0.0.0.0) to make the application accessible from other devices on the same network:
   ```plaintext
   npm run dev -- --host 0.0.0.0
   ```

### Build the static Web App
1. To deploy the latest static website, use the build tool:
   ```plaintext
   npm run build
   ```
   This will update the `~/sra-metagenome-frontend-backend/search-vue/dist` directory with the new version of the website.
2. Run the following after building: 
   ```plaintext
   mkdir ~/sra-metagenome-frontend-backend/search-vue/dist/assets/svg-btn
   cp -R ~/sra-metagenome-frontend-backend/search-vue/src/assets/svg-btn ~/sra-metagenome-frontend-backend/search-vue/dist/assets
   ```
   This will solve the bug of missing one image folder in `dist/assets` temporarily. (Can be fixed)

### Host the Web App using Nginx
The frontend Vue App can be served using **Nginx**.
1. Install Nginx:
   ```
   sudo apt update
   sudo apt install nginx
   ```
2. After the installation is complete, the NGINX service should start automatically. You can check the status of the service with:
   ```
   sudo systemctl status nginx
   ```
3. Nginx's configuration directory is located at `/etc/nginx/`. 
   Create a configuration file in `/etc/nginx/sites-available`:
   ```
   touch sra-metagenome
   ```
   Then, you have the configuration file located at `/etc/nginx/sites-available/sra-metagenome`.
4. The configuration template before setting up SSL connection:
   ```plaintext
   server {
      listen 80;
      server_name _ mg-db.org;    
      # charset utf-8;
      root    /home/tracy/sra-metagenome-frontend-backend/search-vue/dist;
      index   /index.html;
      #Always serve index.html for any request
      location / {
          root /home/tracy/sra-metagenome-frontend-backend/search-vue/dist;
          try_files $uri /index.html;
      }    
      error_log  /var/log/nginx/vue-app-error.log;
      access_log /var/log/nginx/vue-app-access.log;
   }
   ```
   Nginx will serve the contents of `~/sra-metagenome-frontend-backend/search-vue/dist`.
5. Enable the site configuration:
   ```
   sudo ln -s /etc/nginx/sites-available/sra-metagenome /etc/nginx/sites-enabled/
   ```
   May remove the default NGINX configuration file from sites-enabled to avoid any onflicts:
   ```
   sudo rm /etc/nginx/sites-enabled/default
   ```
6. Reload NGINX to apply the changes:
   ```   
   sudo systemctl reload nginx
   ```

### Enable SSL Connection using Certbot 
For SSL/TLS certificate management, use **Certbot** by running (in any directory):
```plaintext
sudo certbot --nginx
```
Enter all the necessary information according to the prompt by Certbot.

## Flask Backend
### Install
1. Navigate to the `backend-flask` directory:
   ```plaintext
   cd backend-flask
   ```

2. Install the required Python dependencies using pip3:
   ```plaintext
   pip3 install -r requirements.txt
   ```

3. Run the Flask backend server:
   ```plaintext
   python3 main_visualization_psql.py
   ```

### SSL Connection for Flask Backend
For secure communication, our Flask backend requires the same SSL certificates generated by Let's Encrypt using Certbot `sudo certbot --nginx` in the above for the frontend deployment. These certificates are associated with the domain mg-db.org. Let's Encrypt certificates are valid for 90 days and are typically set up to auto-renew (located in /etc/letsencrypt/live/mg-db.org which is not accessible by default to the Python environment). Therefore, the most straightforward method is to copy the updated certificates to the backend folder after each auto-renewal to ensure continuous HTTPS service. 

Use the following commands to copy the necessary certificate files:
```plaintext
cd ~/sra-metagenome-frontend-backend/backend-flask
sudo cp /etc/letsencrypt/live/mg-db.org/fullchain.pem .
sudo cp /etc/letsencrypt/live/mg-db.org/privkey.pem .
```

## Run a script at startup using systemd
1. Create a new systemd service file under `/etc/systemd/system/`, such as `mgdb-flask.service`.
   The systemd service file that run startup.sh in WorkingDirectory:
   ```plaintext
   [Unit]
   Description=mgdb-flask Startup
   After=network.target

   [Service]
   Type=simple
   WorkingDirectory=/home/tracy
   ExecStart=/bin/bash startup.sh
   User=tracy
   Group=tracy

   [Install]
   WantedBy=multi-user.target
   ```
2. Enable the service to run on startup:
   ```plaintext
   sudo systemctl enable mgdb-flask.service
   ```
3. Start the service immediately to test it:
   ```plaintext
   sudo systemctl start mgdb-flask.service
   ```

## TODO
- [ ] Enhance the startup.sh script that can recover from error
- [ ] Deploy the Flask Backend with a production WSGI server
  - [ ] use nginx reverse proxy
- [ ] Fix the bug of missing one image folder

