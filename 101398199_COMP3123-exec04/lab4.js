const express = require ('express');
const lab4 = express();
const port = process.env.PORT || 3000;


lab4.use(express.json());

lab4.get('/hello',(req,res) =>{
    res.send('Hello Express JS');
});

lab4.get('/user',(req,res) =>{
    const v ={ firstName:"Vedantsinh",lastName:"Gohel"}
    res.json(v)
});

lab4.post('/user',(req,res) =>{
    const v ={ firstName:"Vedantsinh",lastName:"Gohel"}
    res.json(v)
});


lab4.listen(port,() => {
    console.log(`Server Is Running On Port ${port}`);
});