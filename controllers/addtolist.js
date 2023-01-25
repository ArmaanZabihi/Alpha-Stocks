const { Stock, List, ListStock } = require("../models")
const router = require('express').Router();

//GET -> / -> show all stocks
router.get('/', async (req, res) => {
    try{
        const dbStockData = await Stock.findAll();
        res.status(200).json(dbStockData);
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

// GET -> one stock
router.get('/:id', async (req, res) => {
    try {

        const singleStock = await Stock.findByPk(req.params.id);
        if (!singleStock){
            res.status(404).json({message: "No stock found with this id"})
            return;
        }
        res.status(200).json(singleStock);
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
});


// POST => /:listId -> create a stock

router.post('/', async (req, res) => {
    const newStock = await Stock.create({ stock_symbol: req.body.stock_symbol })
        .then((stockIds) => res.status(200).json(stockIds))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    });

    
// router.put('/:id', async (req, res) => {
//     // First get the list that we are going to update
//     const list = await ListStock.findByPk(req.params.id);
//     const newStocks = [
//         ...list.stocks.map((stock) => stock.id),
//         req.body.id
//     ]
//     // all of the old stocks plus the new one
//     return list.setStocks(newStocks);
// })

router.post('/:id', async (req, res) => {
    const stockView = req.params.id
    const newStockDb = await Stock.findOne({
        where: {
            stock_symbol: req.body.stock_symbol
        }
    })
    const newStock = newStockDb.get({ plain: true })
    ListStock.create(
    {
        list_id: req.params.id,

        stock_id: newStock.id,
    })
    .then((updatedStock) => {
        // new to Encode URL 
       res.redirect(`/stocks/${stockView}-${newStock.stock_symbol}`)
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});


// // PUT => /:listId -> Update a stock to the list
// router.put('/:id', (req, res) => {
    
//             .then((stock) => {
//                 return ListStock.findAll({where: { stock_id: req.params.id } });
//             })
//             .then((stockIds) => {
//                 // get list of current list_ids
//                 const stockListIds = stockIds.map(({ list_id }) => list_id);
//                 // create filtered list of new list_ids
//                 const newStockList = req.body.stockIds
//                     .filter((list_id) => !stockListIds.includes(list_id))
//                     .map((list_id) => {
//                         return {
//                             stock_id: req.params.id,
//                             list_id,
//                         };
//                     });
//                 // figure out which ones to remove
//                 const stockToRemove = stockIds
//                     .filter(({ list_id }) => !req.body.stockIds.includes(list_id))
//                     .map(({ id }) => id);

//                 // run both actions
//                 return Promise.all([
//                     ListStock.destroy({ where: { id: stockToRemove } }),
//                     ListStock.bulkCreate(newStockList),
//                 ]);
//             })
//             .then((updatedStockList) => res.json(updatedStockList))
//             .catch((err) => {
//                 // console.log(err);
//                 res.status(400).json(err);
//             });
// });

router.delete('/:id', async (req, res) => {
    // delete stock by its `id` value
    try {
      const currentStock = await Stock.destroy({
        where: { 
          id: req.params.id,
        }
      });
  
      if (!currentStock) {
        res.status(404).json({ message: 'Stock not found' });
        return;
      }
  
      res.status(200).json({ message: 'Stock deleted' });
      } catch (err) {
      res.status(500).json(err);
      }
  });


module.exports = router;