const { Router } = require('express');
const router = Router();
const _ = require('underscore');

// Simulated Database
const snesgames = require('../database/SNESGames.json')

router.get('/', (req, res) => {
    res.json(snesgames);
});

router.get('/:id', (req, res) => {
    _.each(snesgames, (game) => {
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
            const Id = snesgames.length + 1;
            const newGame = {Id,...req.body};
            snesgames.push(newGame);
            res.json(snesgames);
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
        _.each(snesgames, (game, i) => {
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
        res.json(snesgames)
    } else {
        res.status(500).json('There was an error.')
    }
});

router.delete('/:id', (req, res) => {
    _.each(snesgames, (game, i) => {
        const { id } = req.params;
        if(game.Id == id) {
            snesgames.splice(i, 1);
            res.json(snesgames);
        }
    });
});

module.exports = router;