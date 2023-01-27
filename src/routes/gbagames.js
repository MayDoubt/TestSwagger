const { Router } = require('express');
const router = Router();
const _ = require('underscore');

// Simuled Database
const gbagames = require('../database/GBAGames.json')

router.get('/', (req, res) => {
    res.json(gbagames);
});

router.get('/:id', (req, res) => {
    _.each(gbagames, (game) => {
        const { id } = req.params;
        if(game.Id == id) {
            res.json(game);
        }
    });
});

router.post('/', (req, res) => {
    const { Game, GameLink, Year, Dev, DevLink, Publisher, PublisherLink,
        Platform, PlatformLink } = req.body;
    if(Game && GameLink && Year && Dev && DevLink && Publisher
        && PublisherLink && Platform && PlatformLink) {
            const Id = gbagames.length + 1;
            const newGame = {Id,...req.body};
            gbagames.push(newGame);
            res.json(gbagames);
        } else {
            res.status(500).json('There was an error.')
        }
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { Game, GameLink, Year, Dev, DevLink, Publisher, PublisherLink,
        Platform, PlatformLink } = req.body;
    if(Game && GameLink && Year && Dev && DevLink && Publisher
        && PublisherLink && Platform && PlatformLink) {
        _.each(gbagames, (game, i) => {
            if(game.Id == id) {
                game.Game = Game;
                game.GameLink = GameLink;
                game.Year = Year;
                game.Dev = Dev;
                game.DevLink = DevLink;
                game.Publisher = Publisher;
                game.PublisherLink = PublisherLink;
                game.Platform = Platform;
                game.PlatformLink = PlatformLink;
            }
        });
        res.json(gbagames)
    } else {
        res.status(500).json('There was an error.')
    }
});

router.delete('/:id', (req, res) => {
    _.each(gbagames, (game, i) => {
        const { id } = req.params;
        if(game.Id == id) {
            gbagames.splice(i, 1);
            res.json(gbagames);
        }
    });
});

module.exports = router;