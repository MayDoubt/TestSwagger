const { Router } = require('express');
const { builtinModules } = require('module');
const router = Router();

router.get('/', (req, res) => {
    const data = {
        'name': 'Fernando',
        'website': 'fernando.com'
    }
    res.json(data);
});

module.exports = router;