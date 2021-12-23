var express = require("express")
var router = express.Router()

// TODOS: Login with just school number

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Welcome to Library" })
})

router.post("/", (req, res, next) => {
  let { schoolId } = req.body
  schoolId = Number(schoolId)

  if (typeof schoolId == "number")
    res.redirect(`/dashboard/?schoolId=${Number(schoolId)}`)
  else res.redirect("/")
})

router.get("/dashboard", (req, res, next) => {
  let { schoolId } = req.query
  schoolId = Number(schoolId)
  if (!schoolId || typeof schoolId !== "number") {
    res.redirect("/")
  }
  res.render("dashboard", { schoolId })
})

module.exports = router
