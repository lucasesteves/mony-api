"use strict";
module.exports = {
    PORT: process.env.PORT || 4000,
    DB_URL: `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASSWORD}@cluster0-nydyr.mongodb.net/${process.env.DB_PATH}?retryWrites=true`
    // DB_URL:'mongodb://localhost:2800/test'
};
//# sourceMappingURL=config.js.map