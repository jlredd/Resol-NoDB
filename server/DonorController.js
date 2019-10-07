const donors = [
  {
    id: 1,
    img: 'https://images.squarespace-cdn.com/content/v1/5ca2cef8c46f6d5875726ead/1562254214634-GGZTL554HQG4QHRQ3HFL/ke17ZwdGBToddI8pDm48kLZQwwXdRKomRiz4Br0DVQdZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzqbC_mLKpMha8CAXDf9YV86hRS9m2SEr6rcRK_5GFqqHpfkFQmsFKk-El_uM2BBHA/download.jpg?format=300w',
    name: 'Rosemary Card',
    title: 'CEO of Q.Noor'
  },
  {
    id: 2,
    img: 'https://images.squarespace-cdn.com/content/v1/5ca2cef8c46f6d5875726ead/1562254224879-N1HE0OPX8FD3G5MY094E/ke17ZwdGBToddI8pDm48kBfbnvJzwdcj4CdyyB4d76dZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxGtL3H4q4Q9FEC7wZKtUBg7WxnKQNsh8Nf2FkyvtT8aVnWexLBwQdnyV6JpK6QCI4/Cubby.jpg?format=300w',
    name: 'Cubby James',
    title: `CEO of Cubby's`
  },
  {
    id: 3,
    img: 'https://images.squarespace-cdn.com/content/v1/5ca2cef8c46f6d5875726ead/1562254235118-EKHYTIBIVLBZODQGVZIA/ke17ZwdGBToddI8pDm48kLxnK526YWAH1qleWz-y7AFZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVFUQAah1E2d0qOFNma4CJuw0VgyloEfPuSsyFRoaaKT76QvevUbj177dmcMs1F0H-0/Disruptive-Advertising.png?format=300w',
    name: 'Disruptive Advertising'
  }
]

module.exports = {
  read: (req, res) => {
    res.status(200).send(donors)
  }
}