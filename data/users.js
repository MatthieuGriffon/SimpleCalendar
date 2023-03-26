// données des utilisateurs
let users = [
  { username: 'JohnDoe', password: '123456' },
  { username: 'JaneDoe', password: '654321' }
];

// enregistrer un nouvel utilisateur
function registerUser(username, password) {
  // vérifier si l'utilisateur existe déjà
  const userExists = users.some(user => user.username === username);

  if (!userExists) {
    // ajouter le nouvel utilisateur
    users.push({ username, password });

    // enregistrer les utilisateurs dans un fichier JSON
    saveUsers();
    return true;
  } else {
    return false;
  }
}

// se connecter avec un nom d'utilisateur et un mot de passe
function loginUser() {
  // récupérer les valeurs du formulaire
  const username = document.getElementById('login-input').value;
  const password = document.getElementById('password-input').value;

  // vérifier si l'utilisateur existe et que le mot de passe est correct
  console.log("functionlogin");
  const user = users.find(user => user.username === username && user.password === password);

  if (user) {
    console.log("utilisateur trouvé")
    document.getElementById('user-name').textContent = user.username;
    return true;
  } else {
    return false;
  }
}

// enregistrer les utilisateurs dans un fichier JSON
function saveUsers() {
  const json = JSON.stringify(users);
  localStorage.setItem('users', json);
}

// charger les utilisateurs depuis un fichier JSON
function loadUsers() {
  const json = localStorage.getItem('users');

  if (json) {
    users = JSON.parse(json);
  }
}

// charger les utilisateurs au démarrage de l'application
loadUsers();

document.getElementById("login-button").addEventListener("click", function() {
  // Appelle la fonction de connexion dans le fichier users.js
  loginUser();
});