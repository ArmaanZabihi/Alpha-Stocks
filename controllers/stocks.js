const { Stock, List } = require("../models")
const router = require('express').Router();
router.get('/', async (req, res) => {
    try {

        const dbStockListsData = await List.findAll({
            where: {
                user_id: req.session.user_id
            }
        })
        // console.log("this one is the list",dbStockListsData)
        const stockLists = dbStockListsData.map(list => list.get({ plain: true }))
        console.log(stockLists)

        listId = stockLists[0].id

        const dbStockData = await List.findByPk(listId, {
            include: [{
                model: Stock
            }]
        })
        // console.log("stock data", dbStockData)
        const stocks = dbStockData.get({ plain: true })
        console.log(stocks)

        res.redirect(`./stocks/${stockLists[0].id}-${stocks.stocks[0].stock_symbol}`)

    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})
// GET -> /:listId -> show all stocks
router.get('/:listId', async (req, res) => {
    try {

        params = req.params.listId.split('-')
        const listId = params[0]

        // console.log(req.session.user_id)

        const dbStockListsData = await List.findAll({
            where: {
                user_id: req.session.user_id
            }
        })
        // console.log("this one is the list",dbStockListsData)
        const stockLists = dbStockListsData.map(list => list.get({ plain: true }))
        console.log(stockLists)

        const dbStockData = await List.findByPk(listId, {
            include: [{
                model: Stock
            }]
        })
        // console.log("stock data", dbStockData)
        const stocks = dbStockData.get({ plain: true })
        console.log(stocks)

        res.render("list", { 
            loggedIn: req.session.loggedIn,
            list: stocks,
            lists: stockLists
        })
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