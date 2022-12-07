import { Router } from 'express';
const mainRouter = Router();

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

export default mainRouter;