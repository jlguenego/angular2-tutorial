const express = require('express');
const router = express.Router();
module.exports = router;

const heroes = [{
        id: 11,
        name: 'Mr. Nice'
    },
    {
        id: 12,
        name: 'Narco'
    },
    {
        id: 13,
        name: 'Bombasto'
    },
    {
        id: 14,
        name: 'Celeritas'
    },
    {
        id: 15,
        name: 'Magneta'
    },
    {
        id: 16,
        name: 'RubberMan'
    },
    {
        id: 17,
        name: 'Dynama'
    },
    {
        id: 18,
        name: 'Dr IQ'
    },
    {
        id: 19,
        name: 'Magma'
    },
    {
        id: 20,
        name: 'Tornado'
    }
];

let lastId = 20;

router.use((req, res, next) => {
    console.log('ws', req.url);
    next();
});

router.get('/heroes', (req, res, next) => {
    res.json({
        data: heroes
    });
});

router.get('/heroes/:id', (req, res, next) => {
    console.log('req.params', req.params);
    const hero = heroes.find(hero => hero.id === +req.params.id);
    res.json({
        data: hero
    });
});

router.post('/heroes', (req, res, next) => {
    console.log('req.params', req.params);
    console.log('req.body', req.body);
    lastId++;
    const hero = {name: req.body.name, id: lastId};
    heroes.push(hero);
    res.json({
        data: hero
    });
});

router.put('/heroes/:id', (req, res, next) => {
    console.log('req.params', req.params);
    heroes.find(hero => hero.id === +req.params.id).name = req.body.name;
    res.json({
        status: 'ok'
    });
});

