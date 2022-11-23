const fs = require('fs');
const {execSync} = require('child_process')
if (!fs.existsSync('./.env')){
    execSync(`echo "PORT=8000\nCORS_URLS='http://localhost:8000,http://localhost:8080'" > .env`);
}
if (!fs.existsSync('./.gitignore')){
    execSync(`echo "node_modules/\nuploads/\n.env" > .gitignore;`)
}
