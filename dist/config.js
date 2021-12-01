"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dotenv = require("dotenv");

/**
 * Reading Environment Variables
 */
(0, _dotenv.config)();
var _default = {
  database: {
    connectionLimit: 10,
    host: process.env.DATABASE_HOST || "btxvcu2oohxjmg5thqyo-mysql.services.clever-cloud.com",
    user: process.env.DATABASE_USER || "ut5iz1jcvs6h2zjx",
    password: process.env.DATABASE_PASSWORD || "a6rCeN6CEUncXTMjcyhG",
    database: process.env.DATABASE_NAME || "btxvcu2oohxjmg5thqyo"
  },
  port: process.env.PORT || 4010,
  SECRET: 'RMS-WebApp-API'
};
exports.default = _default;