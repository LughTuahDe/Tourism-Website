# Travel and Tourism Management System (MERN)

## Overview

This is a Travel and Tourism Management System built using the MERN stack (MongoDB, Express, React, Node.js). It allows users to explore, book, and pay for travel packages while providing an admin panel to manage travel packages and monitor payments.

## Features

- **User Module:** Browse travel packages, book trips, view best offers, and search for packages.
- **Admin Panel:** Add and manage travel packages, view all bookings, and monitor payments.
- **Payment Integration:** Integrated with Braintree for secure payment processing.

## Screenshots

### Home Page
![HomePage](https://github.com/LughTuahDe/Tourism-Website/blob/main/homepage.png)
### Best Offers
![BestOffers](https://github.com/LughTuahDe/Tourism-Website/blob/main/best%20offers.png)
### Search Packages
![SearchPackagePage](https://github.com/LughTuahDe/Tourism-Website/blob/main/search%20package.png)
### User Page
![UserPage](https://github.com/LughTuahDe/Tourism-Website/blob/main/dashboard.png)
### About Page
![AboutPage](https://github.com/LughTuahDe/Tourism-Website/blob/main/about.png)
## .ENV Configuration

To run the application, configure the environment variables in a `.env` file as follows:

MONGO_URL=your_mongo_url JWT_SECRET=secret 
BRAINTREE_MERCHANT_ID=your_braintree_id 
BRAINTREE_PUBLIC_KEY=your_braintree_public_key 
BRAINTREE_PRIVATE_KEY=your_braintree_private_key 
NODE_ENV_CUSTOM=development/production 
SERVER_URL=your_server_url
