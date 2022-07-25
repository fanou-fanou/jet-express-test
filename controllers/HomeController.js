const home = (req , res) => {
    return res.render('home/index' , {controllerName : "Home Controller"})
}

module.exports = {home}