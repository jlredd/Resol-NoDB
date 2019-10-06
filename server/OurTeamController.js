const ourTeam = [
  {
    id: 1,
    img: 'https://images.squarespace-cdn.com/content/v1/5ca2cef8c46f6d5875726ead/1554582053994-0ZRJRPL2PM86HSHDQN5O/ke17ZwdGBToddI8pDm48kFEo-VzwHLv6xsN4TtBivNZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmJdLpeZW_ttQnjXwTxihzWNNcr3qND5NVbUPIEq7D_isUuuvQKBpL19fqDETYmdtt/IMG_2951_websize.jpg?format=750w',
    name: 'Lizzie Card',
    description: `Queen of bright ideas, checklists, and curtain-bangs.

    Lizzie is an Organizational Psychology student at Brigham Young University minoring in International Business and Spanish. She works as a mentor at the BYU Ballard Center helping other students start their own social innovation projects. She has spent 5 years at LDS Philanthropies, working with donors to provide education for underprivileged students. Lizzie has spent nearly two years volunteering in Argentina, Ecuador, Colombia, and Mexico. `
  },
  {
    id: 2,
    img: 'https://images.squarespace-cdn.com/content/v1/5ca2cef8c46f6d5875726ead/1554582094923-U7Y24XLCLVWZN553FW19/ke17ZwdGBToddI8pDm48kFEo-VzwHLv6xsN4TtBivNZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmJdLpeZW_ttQnjXwTxihzWNNcr3qND5NVbUPIEq7D_isUuuvQKBpL19fqDETYmdtt/IMG_2956.jpg?format=750w',
    name: 'Olive Redd',
    description: `Design wizard, thrifting maven, and logistics extraordinaire.

    Olive is studying Experience Design Management in the Marriott School of Business at BYU, with Spanish and Graphic Design minors. She currently manages all social media for Brainstorm Inc. Olive spent 18 months working with Hispanic refugees in South Texas. She has a passion for innovation and bringing people together.  `
  },
  {
    id: 3,
    img: 'https://images.squarespace-cdn.com/content/v1/5ca2cef8c46f6d5875726ead/1554582122018-GR7ZB6SSRTPVA3045YEU/ke17ZwdGBToddI8pDm48kFEo-VzwHLv6xsN4TtBivNZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmJdLpeZW_ttQnjXwTxihzWNNcr3qND5NVbUPIEq7D_isUuuvQKBpL19fqDETYmdtt/IMG_2968.jpg?format=750w',
    name: 'Reagan Curtis',
    description: `Public relations mastermind, compulsive concert-goer, and definitely going to guilt-trip you for not voting.

    Reagan splits her time between teaching English as a second language, writing for the BYU David M. Kennedy Center for International Studies, and interning for the Youth Refugee Coalition. She also leads youth humanitarian trips to Paraguay and Brazil. Reagan spent 18 months volunteering with recent immigrants in British Columbia, where she learned fluent Spanish. She now studies Political Science at Brigham Young University with minors in International Diplomacy, French, and Design.  `
  },
  {
    id: 4,
    img: 'https://images.squarespace-cdn.com/content/v1/5ca2cef8c46f6d5875726ead/1554582142336-B41HN8RQA0HCTGYJY95L/ke17ZwdGBToddI8pDm48kFEo-VzwHLv6xsN4TtBivNZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmJdLpeZW_ttQnjXwTxihzWNNcr3qND5NVbUPIEq7D_isUuuvQKBpL19fqDETYmdtt/IMG_2987.jpg?format=750w',
    name: 'Stephanie Williams',
    description: `Real-life entrepreneur genius, outdoor activity yes-man, and a Ben & Jerry’s aficionado.

    Stephanie is double-majoring in Entrepreneurship and Russian at Brigham Young University. Stephanie spent last summer interning in Moscow — helping eliminate traffic congestion during the World Cup. She is thoroughly fascinated by any sort of problem to be solved, but her end goal is to help women in underdeveloped countries to become financially independent. Stephanie is currently interning at the Cambodian Job Foundation where she mentors local Cambodian entrepreneurs and is a 2019 Crocker Innovation Fellow.`
  },

]

module.exports = {
  read: (req, res) => {
    res.status(200).send(ourTeam)
  }
}