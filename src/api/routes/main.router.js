const express = require('express');
const mainRouter = express.Router();

/** new routers go here **
 * example
 * mainRouter.use(require('../routes/authRouter'))
*/
 


/** routers end here **/

mainRouter.get('/',(req,res) => {
    res.status(200).json({
        message: "Yo I'm working !!!"
    })
})

module.exports = mainRouter;