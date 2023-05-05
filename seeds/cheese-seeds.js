const { Cheese } = require('../models');

const cheeseData = [
    {
        id: 1,
        cheese_name:'Parmesan',
        description:'Smells like feet but tastes fantastic',
        milkType: 'cow'
    },
    {
        id: 2,
        cheese_name:'',
        description:'',
        milkType:''
    },
    {
        id: 3,
        cheese_name:'',
        description:'',
        milkType:''
    },
    {
        id: 4,
        cheese_name:'',
        description:'',
        milkType:''
    },
    {
        id: 5,
        cheese_name:'',
        description:'',
        milkType:''
    },
    {
        id: 6,
        cheese_name:'',
        description:'',
        milkType:''
    },
    {
        id: 7,
        cheese_name:'',
        description:'',
        milkType:''
    },
    {
        id: 8,
        cheese_name:'',
        description:'',
        milkType:''
    },
    {
        id: 9,
        cheese_name:'',
        description:'',
        milkType:''
    },
    {
        id: 10,
        cheese_name:'',
        description:'',
        milkType:''
    },
]

const seedCheese = () => Cheese.bulkCreate(cheeseData);