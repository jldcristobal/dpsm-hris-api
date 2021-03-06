const express = require('express');
// const log4js = require('log4js');
const config = require('config');

const errorHandler = require('../middlewares/error-handler');
const authHandler = require('../middlewares/authentication-handler');

const app = express();

const health = require('./health');
const userEnrollment = require('./user-enrollment');
const login = require('./login');
const faculty = require('./faculty');
const student = require('./student');
const alumni = require('./alumni');
const download = require('./fileDownload');

const router = express.Router();

/**
 * Set up logging
 
const logger = log4js.getLogger('routes - index');
logger.level = config.logLevel;
*/

/**
 * Error handler
 */
app.use(errorHandler.catchNotFound);
app.use(errorHandler.handleError);


/**
 * Add routes
 */
router.use('/health', health);
router.use('/user',userEnrollment);
router.use('/login',login);
router.use(authHandler.authenticateUser);
router.use('/faculty',faculty);
router.use('/student',student);
router.use('/alumni',alumni);
router.use('/download',download);

module.exports = router;
