// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fetch from 'node-fetch';

export default function handler(req, res) {
    if (req.method === 'POST') {

        // Dependencies to install:
        // $ npm install node-fetch --save

        const options = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.COURIER_API_KEY}`
        },
        body: JSON.stringify({
            "message": {
            "to": {
                "email": req.body.email
            },
            "template": "9YEF2M5R76MMZXMGJTHT85P8WWQX"
            }
        })
        };

        fetch('https://api.courier.com/send', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
        
        
    }
    
  }
  