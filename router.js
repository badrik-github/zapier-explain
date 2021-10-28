const express = require('express');

const router = express.Router();


subscribe = async (req, res) => {

      try {




      }
      catch (err) {
            console.log(err)
      }
}


unsubscribe = async (req, res) => {

      try {



      }
      catch (err) {
            console.log(err)
      }

}

router.post("/subscribe", subscribe)

router.post("/unsubscribe", unsubscribe)


module.exports = router
