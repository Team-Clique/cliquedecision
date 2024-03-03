const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3002;

// CORS setup
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// Routes
app.get('/searchRestaurant', async (req, res) => {
    const config = {
        headers: {
            Authorization: 'Bearer I2fvgV1wVR9EAMbzSgZptbv4X-7AJKJSA4ULh0mu3oy-jZDDPxY4j66xrhcHUHsYcKvd4hQDxR11N_L_Sec3UJJ8vxB6Ns4oxwogTMzYV-fEd28r94WvPSkCBKfgZXYx'
        }
    };

    const { page = 1 } = req.query;
    const limit = 50;
    const offset = (page - 1) * limit;

    try {
        const response = await axios.get('https://api.yelp.com/v3/businesses/search', {
            params: {
                sort_by: 'best_match',
                latitude: '47.6238799',
                longitude: '-122.1328896',
                radius: '16093', // 10 miles (in meters)
                limit: limit, // Number of results to return per request
                offset: offset // Offset for pagination
            },
            headers: config.headers
        });

        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app;

