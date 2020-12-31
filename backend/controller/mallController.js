const { request } = require('express');
const express = require('express');
const router = express.Router();
const Mall = require('../Model/mallSchema');

router.get("/getMall", async (req, res) => {
    console.log("Get request for all malls")
    Mall.find({}, function(err, mall){
        if (err){
            res.send("Something is wrong with the api");
        } else {
            res.send(mall);
        }
    })

});

// router.get("/getMall/:mallname", async (req, res) => {
//     console.log("Get request for single mall")
//     mallName = req.params.mallname;
//     console.log(req.params.mallname)
//     Mall.find({"mallname": mallName}, function(err, mall){
//         if (err){
//             res.send("Something is wrong");
//         } else {
//             res.send(mall);
//         }
//     })
// });

router.get("/getMall/mall/:mallname", async (req, res) => {
    console.log("Get request for single mall")
    mallName = req.params.mallname;
    // console.log(req.params.mallname)
    Mall.find({"mall.name": mallName}, function(err, mall){
        if (err){
            res.send("Something is wrong");
        } else {
            res.send(mall);
        }
    })
});


module.exports = router;