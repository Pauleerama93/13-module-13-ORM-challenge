## Description
Internet retail, also known as e-commerce, plays a significant role within the electronics industry, as it empowers businesses and consumers alike to conveniently engage in online buying and selling of electronic products. In the latest available data from 2021, the industry in the United States alone was estimated to have generated the substantial amount of US$2.54 trillion, according to the United Nations Conference on Trade and Development. E-commerce platforms like Shopify and WooCommerce provide a suite of services to businesses of all sizes. Due to the prevalence of these platforms, developers should understand the fundamental architecture of e-commerce sites.

In this challenge I had to build the back end for an e-commerce site. I took a working Express.js API and configure it to use Sequelize to interact with a PostgreSQL database.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Testing API Routes](#testing-api-routes)
- [Video Walkthrough](#video-walkthrough)
- [Credits](#credits)

## Installation

1. Clone the Repository:
- Clone the starter code repository and make your own repository with the starter code. Do not fork the starter code repository!
- Sarter code: https://github.com/coding-boot-camp/bookish-sniffle
    ```sh
    git clone <starter-code-repo-url>
    cd <repository-name>
    ```
2. Install Dependencies:
 - Ensure you have Node.js installed. Then, install the necessary npm packages.
 ```sh 
 npm install
 ```
3. Set Up Environment Variables
- Create a .env file in the root directory and add your PostgreSQL database credentials.
```sh
DB_NAME='your-database-name'
DB_USER='your-database-username'
DB_PASSWORD='your-database-password'
```
4. Database Setup
- Run the schema and seed commands to set up your development database.
```sh
npm run schema
npm run seed
```
5. Start the Application
- Start the server and sync Sequelize models to the PostgreSQL database.
```sh
npm start
```
## Testing API Routes

1. GET Routes

- Use Insomnia Core to test the following GET routes and check the formatted JSON data.
- /api/categories
- /api/products
- /api/tags

2. POST, PUT, DELETE Routes
- Use Insomnia Core to test the following API routes:
- Create a new record: POST
- Update an existing record: PUT
- Delete a record: DELETE

## Video Walkthrough



## Credits

Special thanks to my teachers, Drew and Kyle, for their guidance and support in teaching me the right methods to complete this module. Drew's speed runs were particularly helpful.

## License
This project is licensed under the MIT License.