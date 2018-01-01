const express = require('express');

const app = express();

app.get('/api/customers', (req, res)=>{
  const customers = [
    {id: 1, firstName: 'john', lastName: 'Doe'},
    {id: 2, firstName: 'dan', lastName: 'mao'},
    {id: 3, firstName: 'jam', lastName: 'Ddeee'}
  ];

  res.json(customers);

});

const port = 5000;
app.listen(port, ()=> console.log(`server started on port ${port}`) );
