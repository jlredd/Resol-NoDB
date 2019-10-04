const women = [
  {
    id: 1,
    img: 'https://images.squarespace-cdn.com/content/v1/5ca2cef8c46f6d5875726ead/1557589430037-8W7AI3TKPZTBFB9OZ4IO/ke17ZwdGBToddI8pDm48kFWNavzyyk3HlleHYEOMsJNZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIw7yBgmf38v2HWfcgsc3BA3WqqiJriAYGxnw5HVKWBfYKMshLAGzx4R3EDFOm1kBS/resol+3.jpg?format=750w',
    name: 'Kelly',
    cost: 500,
    description: `After moving to Ecuador less than two years ago, Kelly and her husband have been selling bonsai trees and other decorative plants in order to provide for their four children.
    She plans to expand this business into an actual plant shop and nursery where they can grow their business and give their children a far more financially secure home.`
  },
  {
    id: 2,
    img: 'https://images.squarespace-cdn.com/content/v1/5ca2cef8c46f6d5875726ead/1557589704846-J01P0SSKS1BIDL6GNCEX/ke17ZwdGBToddI8pDm48kFWNavzyyk3HlleHYEOMsJNZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIw7yBgmf38v2HWfcgsc3BA3WqqiJriAYGxnw5HVKWBfYKMshLAGzx4R3EDFOm1kBS/resol+1.jpg?format=750w',
    name: 'Zorania',
    cost: 1000,
    description: `Zorania worked as a physical therapist in Venezuela, but since seeking refuge in Ecuador has been providing for her children by washing clothes. She intends to open a laundromat and already has an ever-growing list of clientele, but first must purchase more washing machines. `
  },
  {
    id: 3,
    img: 'https://images.squarespace-cdn.com/content/v1/5ca2cef8c46f6d5875726ead/1562195765998-F10083MTPQ8YX65RCRUU/ke17ZwdGBToddI8pDm48kGbDzLGYLKFJRAs3QH-Q0RJZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVFWGLIt4VAZVy6CHfTMSpUIurJe-N7JwroLO8-Q2eODrW0nsU3dfn6w--du8-EjPUE/Screen+Shot+2019-07-03+at+5.15.55+PM.png?format=500w',
    name: 'Iraima',
    cost: 1000,
    description: `In coming to Ecuador, Iraima realized that Venezuela had something her new home did not - laundromats which allowed customers to come and use the machines themselves instead of trusting someone else to wash their clothes. She used the little money she had to buy one machine and instantly started to get calls asking to use it.

    With her Resol money, Iraima will purchase a few more machines and open her full-fledged do-it-yourself laundromat.`
  },
  {
    id: 4,
    img: 'https://images.squarespace-cdn.com/content/v1/5ca2cef8c46f6d5875726ead/1562189257292-P3XPTDBXULFNIL45XECM/ke17ZwdGBToddI8pDm48kDkPVUPwAPobrIxuqguBVEdZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVEAq8ACoKgDG8CNpnkIkFF2pmMamsCrb3QAuWf5InFMm6QvevUbj177dmcMs1F0H-0/marielba?format=500w',
    name: 'Marielba',
    cost: 1500,
    description: `In Venezuela, Marielba ran a very successful commercial bakery and provided for her entire family. Now that she and her daughters have found themselves in Ecuador, Marielba has been renting the equipment of other bakeries in the middle of the night in order to make enough bread to survive. 

    All Marielba needs to restart her bakery in Ecuador is a commercial oven and commercial mixer.`
  },
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
    const womanIndex = women.findIndex(e => e.id === +id);

    women.splice(womanIndex, 1);

    res.status(200).send(women);
  }
}