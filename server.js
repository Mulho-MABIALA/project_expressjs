const express = require('express');
const app = express();
const port = 3000;

// Pour servir les fichiers CSS
app.use(express.static('public'));

// Middleware pour vérifier les heures de travail
app.use((req, res, next) => {
    const now = new Date();
    const day = now.getDay(); // 0 = dimanche, 1 = lundi ... 6 = samedi
    const hour = now.getHours();

    if (day === 0 || day === 6 || hour < 9 || hour >= 17) {
        return res.send("Le site n'est disponible que du lundi au vendredi, de 9h à 17h.");
    }
    next();
});

// Routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html'); // si tu n'utilises pas EJS
});

app.get('/services', (req, res) => {
    res.sendFile(__dirname + '/views/services.html');
});

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/views/contact.html');
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur lancé sur http://localhost:${port}`);
});
