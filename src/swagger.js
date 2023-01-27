const { urlencoded } = require('express');
const swaggerJSDOC = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const { object } = require('underscore');

// Metadata info about our API
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: 'VideoGames API Rest with Swagger',
            version: '1.0.0'
        },
        contact: {
            name: 'Fernando Pérez Nieto',
            email: 'quizasdudas@gmail.com'
        },
        licence: {
            name: 'GPLv3',
            url: "https://www.gnu.org/licences/gpl-3.0.en.html"
        },
        paths: {
            '/api/gbagames': {
                get: {
                    summary: 'Returns all gameboy advance games from the database',
                    tags: [
                        'GameBoyAdvance Games List'
                    ],
                    responses: {
                        200: {
                            description: 'List of games from GameBoy Advance',
                            content: {
                                "application/json": {
                                    schema: {
                                        type: 'array',
                                        items: {
                                            type: 'object',
                                            properties: {
                                                Id: {
                                                    type: 'Integer',
                                                    format: 'int64'
                                                },
                                                Game: {
                                                    type: 'String'
                                                },
                                                GameLink: {
                                                    type: 'String'
                                                }, 
                                                Year: {
                                                    type: 'Integer',
                                                    format: 'int64'
                                                }, 
                                                Dev: {
                                                    type: 'String'
                                                }, 
                                                DevLink: {
                                                    type: 'String'
                                                }, 
                                                Publisher: {
                                                    type: 'String'
                                                }, 
                                                PublisherLink: {
                                                    type: 'String'
                                                },
                                            }, example: {
                                                'Id': 1,
                                                'Game': 'NombreJuego',
                                                'GameLink': 'https://www.wikipedia.com/NombreJuego',
                                                'Year': '2023',
                                                'Dev': 'Fernando Pérez',
                                                'DevLink': 'https://www.wikipedia.com/Fernando-Perez',
                                                'Publisher': 'Naughty Dog',
                                                'PublisherLink': 'https://www.naughtydog.com'
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            '/api/gbagames/{id}': {
                get: {
                    summary: 'Returns a gameboy advance game from the database by the id',
                    tags: [
                        'GameBoyAdvance Games List'
                    ],
                    parameters: [
                        {
                            name: 'id',
                            in: 'path',
                            description: 'Game Id to fetch',
                            required: 'true',
                            type: 'integer',
                            format: 'int64'
                        }
                    ],
                    responses: {
                        200: {
                            description: 'A game from GameBoy Advance',
                            content: {
                                "application/json": {
                                    schema: {
                                        type: 'array',
                                        items: {
                                            type: 'object',
                                            properties: {
                                                Id: {
                                                    type: 'Integer',
                                                    format: 'int64'
                                                },
                                                Game: {
                                                    type: 'String'
                                                },
                                                GameLink: {
                                                    type: 'String'
                                                }, 
                                                Year: {
                                                    type: 'Integer',
                                                    format: 'int64'
                                                }, 
                                                Dev: {
                                                    type: 'String'
                                                }, 
                                                DevLink: {
                                                    type: 'String'
                                                }, 
                                                Publisher: {
                                                    type: 'String'
                                                }, 
                                                PublisherLink: {
                                                    type: 'String'
                                                },
                                            }, example: {
                                                'Id': 1,
                                                'Game': 'NombreJuego',
                                                'GameLink': 'https://www.wikipedia.com/NombreJuego',
                                                'Year': '2023',
                                                'Dev': 'Fernando Pérez',
                                                'DevLink': 'https://www.wikipedia.com/Fernando-Perez',
                                                'Publisher': 'Naughty Dog',
                                                'PublisherLink': 'https://www.naughtydog.com'
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                delete: {
                    summary: 'Delete a game from the Gameboy Advance Game List',
                    tags: [
                        'GameBoyAdvance Games List'
                    ],
                    parameters: [
                        {
                            name: 'id',
                            in: 'path',
                            description: 'Game Id to delete',
                            required: 'true',
                            type: 'integer',
                            format: 'int64'
                        }
                    ],
                    responses: {
                        200: {
                            description: 'Updated list from the Gameboy Advance Game List',
                            content: {
                                "application/json": {
                                    schema: {
                                        type: 'array',
                                        items: {
                                            type: 'object',
                                            properties: {
                                                Id: {
                                                    type: 'Integer',
                                                    format: 'int64'
                                                },
                                                Game: {
                                                    type: 'String'
                                                },
                                                GameLink: {
                                                    type: 'String'
                                                }, 
                                                Year: {
                                                    type: 'Integer',
                                                    format: 'int64'
                                                }, 
                                                Dev: {
                                                    type: 'String'
                                                }, 
                                                DevLink: {
                                                    type: 'String'
                                                }, 
                                                Publisher: {
                                                    type: 'String'
                                                }, 
                                                PublisherLink: {
                                                    type: 'String'
                                                },
                                            }, example: {
                                                'Id': 1,
                                                'Game': 'NombreJuego',
                                                'GameLink': 'https://www.wikipedia.com/NombreJuego',
                                                'Year': '2023',
                                                'Dev': 'Fernando Pérez',
                                                'DevLink': 'https://www.wikipedia.com/Fernando-Perez',
                                                'Publisher': 'Naughty Dog',
                                                'PublisherLink': 'https://www.naughtydog.com'
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                put: {
                    summary: 'Update a game from the Gameboy Advance Game List',
                    tags: [
                        'GameBoyAdvance Games List'
                    ],
                    parameters: [
                        {
                            name: 'id',
                            in: 'path',
                            description: 'Game Id to update',
                            required: 'true',
                            type: 'integer',
                            format: 'int64'
                        }
                    ],
                    requestBody: {
                        description: 'A game to update',
                        required: 'true',
                        content: {
                            'multipart/form-data': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        Game: {
                                            type: 'String'
                                        },
                                        GameLink: {
                                            type: 'String'
                                        }, 
                                        Year: {
                                            type: 'Integer',
                                            format: 'int64'
                                        }, 
                                        Dev: {
                                            type: 'String'
                                        }, 
                                        DevLink: {
                                            type: 'String'
                                        }, 
                                        Publisher: {
                                            type: 'String'
                                        }, 
                                        PublisherLink: {
                                            type: 'String'
                                        },
                                    }, example: {
                                        'Id': 1,
                                        'Game': 'NombreJuego',
                                        'GameLink': 'https://www.wikipedia.com/NombreJuego',
                                        'Year': '2023',
                                        'Dev': 'Fernando Pérez',
                                        'DevLink': 'https://www.wikipedia.com/Fernando-Perez',
                                        'Publisher': 'Naughty Dog',
                                        'PublisherLink': 'https://www.naughtydog.com'
                                    }
                                }
                            }
                        }
                    },
                    responses: {
                        200: {
                            description: 'Updated list from the Gameboy Advance Game List',
                            content: {
                                "application/json": {
                                    schema: {
                                        type: 'array',
                                        items: {
                                            type: 'object',
                                            properties: {
                                                Id: {
                                                    type: 'Integer',
                                                    format: 'int64'
                                                },
                                                Game: {
                                                    type: 'String'
                                                },
                                                GameLink: {
                                                    type: 'String'
                                                }, 
                                                Year: {
                                                    type: 'Integer',
                                                    format: 'int64'
                                                }, 
                                                Dev: {
                                                    type: 'String'
                                                }, 
                                                DevLink: {
                                                    type: 'String'
                                                }, 
                                                Publisher: {
                                                    type: 'String'
                                                }, 
                                                PublisherLink: {
                                                    type: 'String'
                                                },
                                            }, example: {
                                                'Id': 1,
                                                'Game': 'NombreJuego',
                                                'GameLink': 'https://www.wikipedia.com/NombreJuego',
                                                'Year': '2023',
                                                'Dev': 'Fernando Pérez',
                                                'DevLink': 'https://www.wikipedia.com/Fernando-Perez',
                                                'Publisher': 'Naughty Dog',
                                                'PublisherLink': 'https://www.naughtydog.com'
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
    },
    apis: [
        'src/routes/gbagames.js',
        'src/routes/snesgames.js'
    ],
};

// Docs in JSON format
const swaggerSpec = swaggerJSDOC(options);

// Function to setup our docs
const swaggerDocs = (app, port) => {
    app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
    app.get('/api/docs.json', (req, res) => {
        res.setHeader("Content-Type", "application/json");
        res.send(swaggerSpec);
    });
    
    console.log(
        `📄 Version 1 Docs are available at http://localhost:${port}/api/docs`
    )
}

module.exports = { swaggerDocs };
