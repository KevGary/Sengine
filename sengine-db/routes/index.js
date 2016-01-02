var express = require('express');
var router = express.Router();

var models = require('../server/models/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//-------Users-------
//get one user
router.get('/users/:id', function (req, res) {
  models.Users.find({
    where: {
      id: req.params.id
    }
  }).then(function (user) {
    res.json(user);
  });
});
//get all users
router.get('/users', function (req, res) {
  models.Users.findAll({}).then(function (user) {
    res.json(user);
  });
});
//post user
router.post('/users', function (req, res) {
  models.Users.create({
    jwt: req.body.jwt,
    email: req.body.email,
    password: req.body.password
  }).then(function (user) {
    res.json(user);
  });
});
//update one user
router.put('/users/:id', function (req, res) {
  models.Users.find({
    where: {
      id: req.params.id
    }
  }).then(function (user) {
    if (user) {
      user.updateAttributes({
        jwt: req.body.jwt,
        email: req.body.email,
        password: req.body.password
      }).then(function (user) {
        res.json(user);
      });
    } else {
      res.json('user not found');
    }
  });
});
//delete on user
router.delete('/users/:id', function (req, res) {
  models.Users.destroy({
    where: {
      id: req.params.id
    }
  }).then(function (user) {
    res.json(user);
  });
});

//-------Containers-------
//get one container
router.get('/containers/:id', function (req, res) {
  models.Containers.find({
    where: {
      id: req.params.id
    }
  }).then(function (container) {
    res.json(container);
  });
});
//get all containers
router.get('/containers', function (req, res) {
  models.Containers.findAll({}).then(function (containers) {
    res.json(containers);
  });
});
//post container
router.post('/containers', function (req, res) {
  models.Containers.create({
    CID: req.body.CID,
    name: req.body.name
  }).then(function (container) {
    res.json(container);
  });
});
//update one container
router.put('/containers/:id', function (req, res) {
  models.Containers.find({
    where: {
      id: req.params.id
    }
  }).then(function (container) {
    if (container) {
      container.updateAttributes({
        CID: req.body.CID,
        name: req.body.name
      }).then(function (container) {
        res.json(container);
      });
    } else {
      res.json('container not found');
    }
  });
});
//delete on container
router.delete('/containers/:id', function (req, res) {
  models.Containers.destroy({
    where: {
      id: req.params.id
    }
  }).then(function (container) {
    res.json(container);
  });
});

//-------APITokens-------
//get one apiToken
router.get('/apiTokens/:id', function (req, res) {
  models.APITokens.find({
    where: {
      id: req.params.id
    }
  }).then(function (apiTokens) {
    res.json(apiTokens);
  });
});
//get all containers
router.get('/apiTokens', function (req, res) {
  models.APITokens.findAll({}).then(function (apiToken) {
    res.json(apiToken);
  });
});
//post container
router.post('/apiTokens', function (req, res) {
  models.APITokens.create({
    apiToken: req.body.apiToken
  }).then(function (apiToken) {
    res.json(apiToken);
  });
});
//update one container
router.put('/apiTokens/:id', function (req, res) {
  models.APITokens.find({
    where: {
      id: req.params.id
    }
  }).then(function (apiToken) {
    if (apiToken) {
      apiToken.updateAttributes({
        apiToken: req.body.apiToken
      }).then(function (apiToken) {
        res.json(apiToken);
      });
    } else {
      res.json('apiToken not found');
    }
  });
});
//delete on container
router.delete('/apiTokens/:id', function (req, res) {
  models.APITokens.destroy({
    where: {
      id: req.params.id
    }
  }).then(function (apiToken) {
    res.json(apiToken);
  });
});

module.exports = router;
