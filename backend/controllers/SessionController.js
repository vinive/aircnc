//index = retorna uma listagem
//show =  listar uma unica sessão
//store = criar uma sessão
//update = alterar sessão
//dstroy = deletar sessão

const User = require('../models/User');

module.exports = {
    async store(req, res){
        const { email } = req.body;

        let user = await User.findOne({ email });

        if (!user) {
            user = await User.create({ email });
        }        
       return res.json(user);


    }
    
};