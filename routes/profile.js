const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.get('/:platform/:username', async (req,res)=>{
    const {platform,username} = req.params;
    try {
        const headers = {
            'TRN-Api-Key': process.env.API_KEY
        }

        const response = await fetch(`${process.env.URL}/${platform}/${username}`, {headers});
        const data = await response.json();
        res.json(data);
        console.log(data);
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;