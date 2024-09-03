const express = require('express');
const axios = require('axios');
const { check, validationResult } = require('express-validator');

const router = express.Router();

// Submit Code Route
router.post(
  '/submit',
  [
    check('sourceCode', 'Source code is required').not().isEmpty(),
    check('language', 'Language ID is required').not().isEmpty(),
    check('stdin', 'Standard input is required').optional(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { sourceCode, language, stdin } = req.body;

    try {
      const response = await axios.post(
        'https://judge0.p.rapidapi.com/submissions',
        {
          source_code: sourceCode,
          language_id: language,
          stdin: stdin,
        },
        {
          headers: {
            'content-type': 'application/json',
            'x-rapidapi-host': 'judge0.p.rapidapi.com',
            'x-rapidapi-key': process.env.JUDGE0_API_KEY,
          },
        }
      );

      // Returning submission token to fetch results later
      res.json(response.data);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server error');
    }
  }
);

// Get Submission Result Route
router.get('/result/:token', async (req, res) => {
  try {
    const response = await axios.get(
      `https://judge0.p.rapidapi.com/submissions/${req.params.token}`,
      {
        headers: {
          'x-rapidapi-host': 'judge0.p.rapidapi.com',
          'x-rapidapi-key': process.env.JUDGE0_API_KEY,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
