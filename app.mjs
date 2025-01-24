import express from 'express';
import session from 'express-session';

import path from 'path';
import { fileURLToPath } from 'url';
import hbs from 'hbs';

import fs from 'fs';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
}));

// To make sure the variables passed to handlebars are available to javascript
hbs.registerPartials(path.join(__dirname, 'views'));
hbs.registerHelper('json', function (context) {
    return JSON.stringify(context);
});

app.use((req, res, next) => {
    console.log(req.path.toUpperCase(), req.body);
    next();
});

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/work', (req, res) => {
    res.render('work');
});

app.get('/projects', (req, res) => {
    const field = req.query.field;
    const projects = JSON.parse(fs.readFileSync('details.json', 'utf-8'));
    const filteredProjects = projects.filter((p) => {
        if (p['field'] === field) {
            return true;
        }
    });
    res.render('projects', { field: field, projects: filteredProjects })
})

// const PORT = process.env.PORT || 3000;
app.listen(0, () => {
    console.log(`Server running on port ${server.address().port}`);
});
