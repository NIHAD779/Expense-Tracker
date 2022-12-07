const model = require('../models/model')
async function create_catagories(req,res){
    const Create = new model.Categories({
        type:"Shanu",
        color:'#1F3B5C'
    }) 

    await Create.save(function(err){
        if(!err) return res.json(Create);
        return res.status(400).json({message:`Error in  creating categories ${err}`});
    });
}

async function get_Categories(req,res){
    let data = await model.Categories.find({})

    let filter = await data.map(v => Object.assign({},{type:v.type,color:v.color}));
    return res.json(filter);
}

async function create_Transaction(req, res){
    if(!req.body) return res.status(400).json("Post HTTP Data not Provided");
    let { name, type, amount } = req.body;

    const create = await new model.Transaction(
        {
            name,
            type,
            amount,
            date: new Date()
        }
    );

    create.save(function(err){
        if(!err) return res.json(create);
        return res.status(400).json({ message : `Erro while creating transaction ${err}`});
    });

}

async function get_Transaction(req,res){
    let data = await model.Transaction.find({});
    return res.json(data)


}



module.exports={
    create_catagories,
    get_Categories,
    create_Transaction,
    get_Transaction
}