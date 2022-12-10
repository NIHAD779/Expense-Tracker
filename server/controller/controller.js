const model = require('../models/model')
async function create_catagories(req,res){
    if(!req.body) return res.status(400).json("Post HTTP Data not Provided");
    let {type, color} = req.body;
    // const Create = new model.Categories({
    //     // type:"investment",
    //     // color:'blue'        
    // })
    const create = await new model.Categories(
        {
            type,
            color
        }
    );

    create.save(function(err){
        if(!err) return res.json(create);
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

async function delete_Transaction(req,res){
    if (!req.body) res.status(400).json({message:"Request body not Found"});
    await model.Transaction.deleteOne(req.body,function(err){
        if(!err) res.json("Record Deleted");
    }).clone().catch(function(err){res.json("error while deleting transaction Record")})
};

async function get_labels(req,res){
    model.Transaction.aggregate([
        {
            $lookup : {
                from: "categories",
                localField: "type",
                foreignField: "type",
                as: "categories_info"
            }
        },
        {
            $unwind: "$categories_info"
        }
    ]).then(result =>{
        let data = result.map(v=> Object.assign({},{_id:v._id,name:v.name,type:v.type,amount:v.amount,color:v.categories_info.color}))
        res.json(data);
    }).catch(error =>{
        // console.log(error)
        res.status(400).json("Lookup collection error")
    })
}



module.exports={
    create_catagories,
    get_Categories,
    create_Transaction,
    get_Transaction,
    delete_Transaction,
    get_labels
}