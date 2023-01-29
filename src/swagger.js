const { urlencoded } = require('express');
const swaggerJSDOC = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const { object } = require('underscore');

// Metadata info about our API
const options = {
    definition: {
        "openapi": "3.0.3",
        "info": {
            "title": "VideoGames API Rest with Swagger 3.0",
            "description": "This is a sample VideoGames API Rest based on the OpenAPI 3.0 specification.  You can find out more about\nSwagger at [https://swagger.io](https://swagger.io).\n\nSome useful links:\n- [VideoGames API Rest repository](https://github.com/MayDoubt/TestSwagger)\n- [The source API definition for the VideoGames API Rest](https://github.com/swagger-api/swagger-petstore/blob/master/src/main/resources/openapi.yaml)",
            "termsOfService": "http://swagger.io/terms/",
            "contact": {
                "email": "quizasdudas@gmail.com"
            },
            "license": {
                "name": "GPLv3",
                "url": "https://www.gnu.org/licences/gpl-3.0.en.html"
            },
            "version": "3.0.0"
        },
        "externalDocs": {
            "description": "Find out more about Swagger",
            "url": "http://swagger.io"
        },
        "tags": [
            {
                "name": "Gameboy Advance Games",
                "description": "Database with all the Gameboy Advance Games released",
                "externalDocs": {
                    "description": "Json File with data",
                    "url": "https://github.com/MayDoubt/TestSwagger/blob/main/src/database/GBAGames.json"
                }
            },
            {
                "name": "SNES Games",
                "description": "Database with all the SNES Games released",
                "externalDocs": {
                    "description": "Json File with data",
                    "url": "https://github.com/MayDoubt/TestSwagger/blob/main/src/database/SNESGames.json"
                }
            }
        ],
        "paths": {
            "/api/gbagames": {
                "get": {
                    "tags": [
                        "Gameboy Advance Games"
                    ],
                    "summary": "Get all Gameboy Advance Games",
                    "description": "Multiple status values can be provided with comma separated strings",
                    "operationId": "getAllGBAGames",
                    "responses": {
                        "200": {
                            "description": "successful operation",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "type": "array",
                                        "items": {
                                            "$ref": "#/components/schemas/Game"
                                        }
                                    }
                                },
                                "application/xml": {
                                    "schema": {
                                        "type": "array",
                                        "items": {
                                            "$ref": "#/components/schemas/Game"
                                        }
                                    }
                                }
                            }
                        },
                        "400": {
                            "description": "Invalid status value"
                        }
                    }
                },
                "post": {
                    "tags": [
                        "Gameboy Advance Games"
                    ],
                    "summary": "Add a new Gameboy Advance game into the database",
                    "description": "Add a new Gameboy Advance game into the database",
                    "operationId": "addGBAGame",
                    "requestBody": {
                        "description": "Create a new Gameboy Advance game into the database",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/NewGame"
                                }
                            },
                            "application/xml": {
                                "schema": {
                                    "$ref": "#/components/schemas/NewGame"
                                }
                            },
                            "application/x-www-form-urlencoded": {
                                "schema": {
                                    "$ref": "#/components/schemas/NewGame"
                                }
                            }
                        },
                        "required": true
                    },
                    "responses": {
                        "200": {
                            "description": "Successful operation",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "type": "array",
                                        "items": {
                                            "$ref": "#/components/schemas/Game"
                                        }
                                    }
                                },
                                "application/xml": {
                                    "schema": {
                                        "type": "array",
                                        "items": {
                                            "$ref": "#/components/schemas/Game"
                                        }
                                    }
                                }
                            }
                        },
                        "400": {
                            "description": "Invalid ID supplied"
                        },
                        "404": {
                            "description": "Game not found"
                        },
                        "405": {
                            "description": "Validation exception"
                        }
                    }
                }
            },
            "/api/snesgames": {
                "get": {
                    "tags": [
                        "SNES Games"
                    ],
                    "summary": "Get all SNES Games",
                    "description": "Multiple status values can be provided with comma separated strings",
                    "operationId": "getAllSNESGames",
                    "responses": {
                        "200": {
                            "description": "successful operation",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "type": "array",
                                        "items": {
                                            "$ref": "#/components/schemas/Game"
                                        }
                                    }
                                },
                                "application/xml": {
                                    "schema": {
                                        "type": "array",
                                        "items": {
                                            "$ref": "#/components/schemas/Game"
                                        }
                                    }
                                }
                            }
                        },
                        "400": {
                            "description": "Invalid status value"
                        }
                    }
                },
                "post": {
                    "tags": [
                        "SNES Games"
                    ],
                    "summary": "Add a new SNES game into the database",
                    "description": "Add a new SNES game into the database",
                    "operationId": "addSNESGame",
                    "requestBody": {
                        "description": "Create a new SNES game into the database",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/NewGame"
                                }
                            },
                            "application/xml": {
                                "schema": {
                                    "$ref": "#/components/schemas/NewGame"
                                }
                            },
                            "application/x-www-form-urlencoded": {
                                "schema": {
                                    "$ref": "#/components/schemas/NewGame"
                                }
                            }
                        },
                        "required": true
                    },
                    "responses": {
                        "200": {
                            "description": "Successful operation",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "type": "array",
                                        "items": {
                                            "$ref": "#/components/schemas/Game"
                                        }
                                    }
                                },
                                "application/xml": {
                                    "schema": {
                                        "type": "array",
                                        "items": {
                                            "$ref": "#/components/schemas/Game"
                                        }
                                    }
                                }
                            }
                        },
                        "400": {
                            "description": "Invalid ID supplied"
                        },
                        "404": {
                            "description": "Game not found"
                        },
                        "405": {
                            "description": "Validation exception"
                        }
                    }
                }
            },
            "/api/gbagames/{Id}": {
                "get": {
                    "tags": [
                        "Gameboy Advance Games"
                    ],
                    "summary": "Get a Gameboy Advance Game",
                    "description": "Multiple status values can be provided with comma separated strings",
                    "operationId": "getGBAGameById",
                    "parameters": [
                        {
                            "name": "Id",
                            "in": "path",
                            "description": "ID of game to return",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int64"
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "successful operation",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Game"
                                    }
                                },
                                "application/xml": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Game"
                                    }
                                }
                            }
                        },
                        "400": {
                            "description": "Invalid status value"
                        }
                    }
                },
                "put": {
                    "tags": [
                        "Gameboy Advance Games"
                    ],
                    "summary": "Update an existing Gameboy advance game",
                    "description": "Update an existing game by Id",
                    "operationId": "updateGBAGame",
                    "parameters": [
                        {
                            "name": "Id",
                            "in": "path",
                            "description": "ID of game to update",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int64"
                            }
                        }
                    ],
                    "requestBody": {
                        "description": "Update an existent game into the database",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/NewGame"
                                }
                            },
                            "application/xml": {
                                "schema": {
                                    "$ref": "#/components/schemas/NewGame"
                                }
                            },
                            "application/x-www-form-urlencoded": {
                                "schema": {
                                    "$ref": "#/components/schemas/NewGame"
                                }
                            }
                        },
                        "required": true
                    },
                    "responses": {
                        "200": {
                            "description": "Successful operation",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "type": "array",
                                        "items": {
                                            "$ref": "#/components/schemas/Game"
                                        }
                                    }
                                },
                                "application/xml": {
                                    "schema": {
                                        "type": "array",
                                        "items": {
                                            "$ref": "#/components/schemas/Game"
                                        }
                                    }
                                }
                            }
                        },
                        "400": {
                            "description": "Invalid ID supplied"
                        },
                        "404": {
                            "description": "Game not found"
                        },
                        "405": {
                            "description": "Validation exception"
                        }
                    }
                },
                "delete": {
                    "tags": [
                        "Gameboy Advance Games"
                    ],
                    "summary": "Deletes a Gameboy Advance game",
                    "description": "delete a Gameboy Advance game",
                    "operationId": "deleteGBAGame",
                    "parameters": [
                        {
                            "name": "Id",
                            "in": "path",
                            "description": "ID of game to delete",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int64"
                            }
                        }
                    ],
                    "responses": {
                        "400": {
                            "description": "Invalid game value"
                        }
                    }
                }
            },
            "/api/snesgames/{Id}": {
                "get": {
                    "tags": [
                        "SNES Games"
                    ],
                    "summary": "Get a SNES Game",
                    "description": "Multiple status values can be provided with comma separated strings",
                    "operationId": "getSNESGameById",
                    "parameters": [
                        {
                            "name": "Id",
                            "in": "path",
                            "description": "ID of game to return",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int64"
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "successful operation",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Game"
                                    }
                                },
                                "application/xml": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Game"
                                    }
                                }
                            }
                        },
                        "400": {
                            "description": "Invalid status value"
                        }
                    }
                },
                "put": {
                    "tags": [
                        "SNES Games"
                    ],
                    "summary": "Update an existing SNES game",
                    "description": "Update an existing SNES game by Id",
                    "operationId": "updateSNESGame",
                    "parameters": [
                        {
                            "name": "Id",
                            "in": "path",
                            "description": "ID of game to update",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int64"
                            }
                        }
                    ],
                    "requestBody": {
                        "description": "Update an existent SNES game into the database",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/NewGame"
                                }
                            },
                            "application/xml": {
                                "schema": {
                                    "$ref": "#/components/schemas/NewGame"
                                }
                            },
                            "application/x-www-form-urlencoded": {
                                "schema": {
                                    "$ref": "#/components/schemas/NewGame"
                                }
                            }
                        },
                        "required": true
                    },
                    "responses": {
                        "200": {
                            "description": "Successful operation",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "type": "array",
                                        "items": {
                                            "$ref": "#/components/schemas/Game"
                                        }
                                    }
                                },
                                "application/xml": {
                                    "schema": {
                                        "type": "array",
                                        "items": {
                                            "$ref": "#/components/schemas/Game"
                                        }
                                    }
                                }
                            }
                        },
                        "400": {
                            "description": "Invalid ID supplied"
                        },
                        "404": {
                            "description": "Game not found"
                        },
                        "405": {
                            "description": "Validation exception"
                        }
                    }
                },
                "delete": {
                    "tags": [
                        "SNES Games"
                    ],
                    "summary": "Deletes a SNES game",
                    "description": "delete a SNES game",
                    "operationId": "deleteSNESGame",
                    "parameters": [
                        {
                            "name": "Id",
                            "in": "path",
                            "description": "ID of game to delete",
                            "required": true,
                            "schema": {
                                "type": "integer",
                                "format": "int64"
                            }
                        }
                    ],
                    "responses": {
                        "400": {
                            "description": "Invalid game value"
                        }
                    }
                }
            }
        },
        "components": {
            "schemas": {
                "Game": {
                    "type": "object",
                    "properties": {
                        "Id": {
                            "type": "integer",
                            "description": "Game id",
                            "format": "int64"
                        },
                        "Game": {
                            "type": "string",
                            "description": "Game name",
                            "example": "The Legend of Zelda"
                        },
                        "GameLink": {
                            "type": "string",
                            "description": "Game wikipedia url",
                            "example": "https://es.wikipedia.org/wiki/The_Legend_of_Zelda"
                        },
                        "Year": {
                            "type": "integer",
                            "format": "int64",
                            "example": 1986
                        },
                        "Dev": {
                            "type": "string",
                            "description": "Dev name",
                            "example": "Shigeru Miyamoto"
                        },
                        "DevLink": {
                            "type": "string",
                            "description": "Dev wikipedia url",
                            "example": "https://es.wikipedia.org/wiki/Shigeru_Miyamoto"
                        },
                        "Publisher": {
                            "type": "string",
                            "description": "Publisher name",
                            "example": "Capcom"
                        },
                        "PublisherLink": {
                            "type": "string",
                            "description": "Publisher url",
                            "example": "https://www.capcom.com/"
                        },
                        "Platform": {
                            "type": "string",
                            "description": "Platform name",
                            "example": "Gameboy Advance"
                        },
                        "PlatformLink": {
                            "type": "string",
                            "description": "Platform url",
                            "example": "https://es.wikipedia.org/wiki/Game_Boy_Advance"
                        }
                    }
                },
                "NewGame": {
                    "type": "object",
                    "properties": {
                        "Game": {
                            "type": "string",
                            "description": "Game name",
                            "example": "The Legend of Zelda"
                        },
                        "GameLink": {
                            "type": "string",
                            "description": "Game wikipedia url",
                            "example": "https://es.wikipedia.org/wiki/The_Legend_of_Zelda"
                        },
                        "Year": {
                            "type": "integer",
                            "format": "int64",
                            "example": 1986
                        },
                        "Dev": {
                            "type": "string",
                            "description": "Dev name",
                            "example": "Shigeru Miyamoto"
                        },
                        "DevLink": {
                            "type": "string",
                            "description": "Dev wikipedia url",
                            "example": "https://es.wikipedia.org/wiki/Shigeru_Miyamoto"
                        },
                        "Publisher": {
                            "type": "string",
                            "description": "Publisher name",
                            "example": "Capcom"
                        },
                        "PublisherLink": {
                            "type": "string",
                            "description": "Publisher url",
                            "example": "https://www.capcom.com/"
                        },
                        "Platform": {
                            "type": "string",
                            "description": "Platform name",
                            "example": "Gameboy Advance"
                        },
                        "PlatformLink": {
                            "type": "string",
                            "description": "Platform url",
                            "example": "https://es.wikipedia.org/wiki/Game_Boy_Advance"
                        }
                    }
                }
            },
            "requestBodies": {
                "newGame": {
                    "description": "Game object that needs to be added to the database",
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/NewGame"
                            }
                        },
                        "application/xml": {
                            "schema": {
                                "$ref": "#/components/schemas/NewGame"
                            }
                        }
                    }
                }
            }
        }
    },
    apis: [
        'src/routes/gbagames.js',
        'src/routes/snesgames.js'
    ]
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
