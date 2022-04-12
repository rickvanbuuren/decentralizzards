const express = require('express');
const route = express.Router();

const services = require('../services/render');
const controller = require('../controller/controller');

/** 
 * @description Root route
 * @method GET /
*/
route.get('/', services.homeRoutes);

/** 
 * @description Collections route
 * @method GET /collections
*/
route.get('/collections', services.collections);

/** 
 * @description frequently asked questions route
 * @method GET /faq
*/
route.get('/faq', services.faq);

/** 
 * @description Road map route
 * @method GET /roadmap
*/
route.get('/road-map', services.roadmap);

/** 
 * @description contact route
 * @method GET /contact
*/
route.get('/contact', services.contact);



/** 
 * @description add users
 * @method GET /add-user
*/
route.get('/add-user', services.add_user);

/** 
 * @description for update user
 * @method GET /update-user
*/
route.get('/update-user', services.update_user);

// API
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);

module.exports = route