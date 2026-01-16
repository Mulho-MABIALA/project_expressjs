const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Configuration du moteur de template EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware pour servir les fichiers statiques (CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Middleware personnalisé pour vérifier les heures de travail
const checkWorkingHours = (req, res, next) => {
  const now = new Date();
  const day = now.getDay(); // 0 = Dimanche, 1 = Lundi, ..., 6 = Samedi
  const hour = now.getHours(); // 0-23

  // Vérifier si c'est un jour de semaine (Lundi à Vendredi)
  const isWeekday = day >= 1 && day <= 5;

  // Vérifier si c'est pendant les heures de travail (9h-17h)
  const isWorkingHours = hour >= 9 && hour < 17;

  if (isWeekday && isWorkingHours) {
    // Pendant les heures de travail, continuer
    next();
  } else {
    // En dehors des heures de travail, afficher une page d'indisponibilité
    res.status(503).render('closed', {
      day: now.toLocaleDateString('fr-FR', { weekday: 'long' }),
      hour: now.toLocaleTimeString('fr-FR'),
      currentPage: 'closed'
    });
  }
};

// Appliquer le middleware à toutes les routes
app.use(checkWorkingHours);

// Routes
app.get('/', (req, res) => {
  res.render('home', { currentPage: 'home' });
});

app.get('/services', (req, res) => {
  res.render('services', { currentPage: 'services' });
});

app.get('/contact', (req, res) => {
  res.render('contact', { currentPage: 'contact' });
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
  console.log(`Application disponible du lundi au vendredi de 9h à 17h`);
});
