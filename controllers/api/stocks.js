const { Stock, List } = require("../../models")
const router = require('express').Router();
router.get('/', async (req, res) => {
    try{
        const dbStockData = await List.findAll({
            include: [{
                model: Stock
            }]
        })
        const stocks = dbStockData.map(stock => stock.get({ plain: true }))
        console.log(stocks)
        res.render("list2", { lists: stocks })
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})
// GET -> /:listId -> show all stocks
router.get('/:listId', async (req, res) => {
    try {
            const dbStockData = await List.findByPk(req.params.listId, {
                include: [{
                    model: Stock
                }]
            })
        console.log(dbStockData)
        const stocks = dbStockData.get({ plain: true })
        res.render("list", { list: stocks })
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})


// POST => /:listId -> Add a stock

router.post('/:listId', async (req, res) => {
    try {
        await Stock.update({
            where: {
                listId: req.parms.listId
            },
            // How do I do this? Based on the data
        })
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})




module.exports = router;
// router.get('/', async (req, res) => {
//     try {
//       const dbStockData = await stock.findAll({
        
//       });
  
//       const Stock = dbStockData.map((Stock) =>
//         gallery.get({ plain: true })
//       );
  
//       res.render('homepage', {
//         stocks,
//         loggedIn: req.session.loggedIn,
//       });
//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }
//   });