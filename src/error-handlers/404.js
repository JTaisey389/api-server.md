'use strict';

// module.exports = (req, res, next) => {
//   //after we do stuff and it works, then go to the next middleware
//   res.status(404).json({ msg: 'not found'});
//   next();
// }

function forhunderedHandle( req, res, next){
  req.status(404).send({ msg: 'not found'});
}

module.exports = forhunderedHandle;