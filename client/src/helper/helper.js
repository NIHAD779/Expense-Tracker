import _ from 'lodash';



export function getSum(transaction,type){
    let sum = _(transaction)
            .groupBy("type")
            .map((objs,key)=>{
                if(!type) return _.sumBy(objs,'amount')
                return {
                    "type" : key,
                    'color':objs[0].color,
                    'total':_.sumBy(objs,'amount')

                }
            })
            .value()
    return sum;            
}

export function getLabels(transaction,type){
    let amountSum = getSum(transaction,type)
    let Total = _.sum(getSum(transaction));
    let percent = _(amountSum)
                .map(objs =>_.assign(objs,{percent:(100*objs.total/Total)}))
                .value()
    return percent
}

export function chart_Data(transaction,custom){

    let bg = _.map(transaction,a => a.color)
    bg = _.uniq(bg)
    console.log(bg)
    let dataValue = getSum(transaction)

    const config = {
        data: {
            datasets: [{
                data: dataValue,
                backgroundColor:bg
            }],
        
            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: [
                'Red',
                'Yellow',
                'Blue'
            ]},
              options:{
                cutout:115
        }
    }

    return custom ?? config;
    
}