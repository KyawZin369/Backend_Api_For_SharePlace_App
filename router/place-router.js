const express = require('express');

const router = express.Router();

  const USER_PLACE = [{
    id : "p2" ,
    title : "Bagan, Myanmar",
    ImageUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAId8E37gzsZjZPBromhRvuv6Lz8qQWOHrug&s",
    desc : " While this ancient site may not be on the average traveler's radar, it's another of Southeast Asia's bucket-list attractions.Spread out over a lush plain are more than 10,000 sacred structures dating from 1044 through to 1287. Hire a bicycle and pedal your way from one amazing structure to the next, or take a tour. Some of the structures can be entered, but the real beauty is the sheer number that dot the landscape. For an aerial view, consider taking a hot air balloon tour at dawn.",
    address : "5VC5+MCV, Old Bagan",
    location: {
        lat: 21.1722165,
        lng: 94.8537147
    },

    creator : "u2"  
}]

router.get("/:pid",(req,res,next)=>{
    const placeId = req.params.pid;
    const place = USER_PLACE.find(p => {
        return p.id === placeId;
    })

    res.json({place})
})

router.get("/user/:uid" , (req,res,next)=>{
    const userId = req.params.uid;
    const user = USER_PLACE.find(user => {
        return user.creator === userId;
    })

    res.json({user})
})


module.exports = router;