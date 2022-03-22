const router = require('express').Router()

router.route('/').get((req, res) => {
    msg = `Bienvenido ${req.query.name || "Usuario"} a la tienda gamers!`;
    res.json({msg});
})

router.route('/:lang').get((req, res) => {
    switch(req.params.lang){
      case "es": 
        msg="Bienvenido a la tienda gamers!";
        break;
      case "en":
        msg="Welcome to gamer store!";
        break;
      case "fr":
        msg="Bienvenue dans la boutique du joueur!";
        break;
      default:
        msg="Bem-vindo à loja de jogadores!";
    }
    res.json({msg});
})
  
router.route('/').post((req, res) => {
    msg = `El usuario ${req.body.name || "Nuevo"} se ha registrado!`;
    res.json({msg});
})

module.exports = router
