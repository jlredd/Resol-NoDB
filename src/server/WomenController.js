const women = [
  {
    id: 0,
    img: 'imgURL',
    name: 'Model Name',
    cost: 500,
    description: 'Sample description'
  }
]

let id = 1;

// console.log(women)


module.exports = {
  create: (req, res) => {
    const {img, name, cost, description} = req.body;
    const newWoman = {
      id: id,
      img: img,
      name: name,
      cost: cost,
      description: description
    }
    women.push(newWoman);
    id++;

    res.status(200).send(women);
  },
  
  read: (req, res) => {
    res.status(200).send(women);
  },

  update: (req, res) => {
    const {id} = req.params;
    const {img, name, cost, description} = req.body;
    const womanIndex = women.findIndex(e => e.id === +id);

    women[womanIndex].id = women[womanIndex].id;
    women[womanIndex].img = img || women[womanIndex].img;
    women[womanIndex].name = name || women[womanIndex].name;
    women[womanIndex].cost = cost || women[womanIndex].cost;
    women[womanIndex].description = description || women[womanIndex].description;

    res.status(200).send(women);
  },
  
  delete: (req, res) => {
    const {id} = req.params;
    // const womanIndex = women.findIndex(e => e.id === +id);

    women.splice(+id, 1);

    res.status(200).send(women);
  }
}