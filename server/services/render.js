const axios = require('axios');

exports.homeRoutes = (req, res) =>{
    // Make a get requeast to /api/users
    axios.get('http://localhost:3000/api/users').then(function(response){
        // console.log(response);
        console.log(response.data);
        res.render('index', { users: response.data });
    }).catch(err =>{
        res.send(err)
    })
}

exports.add_user = (req, res) => {
    res.render('add_user');
}

exports.update_user = (req, res) => {
    axios.get('http://localhost:3000/api/users', {params: { id: req.query.id  }}).then(function(userdata){
        res.render('update_user', { user: userdata.data });
    }).catch(err=>{
        res.send(err)
    })
}

exports.collections = (req, res) => {
    res.render('collections');
}

exports.faq = (req, res) => {
    res.render('faq');
}

exports.roadmap = (req, res) => {
    res.render('roadmap');
}

exports.contact = (req, res) => {
    res.render('contact');
}

