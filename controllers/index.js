const { therapyService } = require('../services')
const { testTherapy } = therapyService

const postTherapy = (req, res, next) => {
  const {a, b, c, d, e, f} = req.body
  try {
    const result = testTherapy(a, b, c, d, e, f)
    res.sendStatus(201, result)
    next()
  } catch(e) {
    console.log(e.message)
    res.sendStatus(500) && next(error)
  }
}

module.exports = {
  postTherapy
}
