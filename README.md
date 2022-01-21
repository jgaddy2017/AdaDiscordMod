# Ada-1 Daily Mod Discord bot

## Create SSL Certificate

Run this in bash to create selfsigned ssl key and cert for https

```bash
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout ./cert/selfsigned.key -out ./cert/selfsigned.crt
```

## Install Node Packages

Then run npm install to install all used node packages

```bash
npm install
```

## Create .env

Create a file name .env at the root of your project.  Your file should look something like this.

```
APIKEY=Your API Key here
CLIENT_ID=Your Client ID
```

