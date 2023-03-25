const express = require('express');
const bodyParser=require('body-parser')
const mysql=require('mysql')
const multer = require('multer');
const path=require('path')
//Cors
const cors=require('cors');
const { json } = require('body-parser');

//Config multer

const app=express()
app.use(cors())
const port=8081

app.use(bodyParser.json())
//Url para pegar imagens
app.use('/files',express.static(path.resolve(__dirname,"public")))

const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'reactautos'
})

//Conexão com banco de dados
connection.connect((err)=>{
    if(err){
        console.error("Erro ao conectar ao banco de dados: "+ err.stack)
        return
    }
    console.log("Conexão estabelecida com sucesso!")
})

// Configurar o middleware Multer para processar a imagem
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/upload/');
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname);
    },
  });
const upload = multer({ storage: storage });

//Rotas

//Retorna vários clientes
app.get('/usuarios',(req,res)=>{
    connection.query('select * from usuarios',(error,results)=>{
        if(error){
            console.log("Errro ao executar a consulta "+error.stack)
            return
        }
        res.json(results) 
    })
})

//Retorna um cliente
app.get('/usuario/:cpf', (req, res) => {
    const CPF=req.params.cpf
    return new Promise((aceito,rejeitado)=>{
        connection.query('SELECT * FROM usuarios WHERE cpf = ?',[CPF],(error,results)=>{
            if(error){rejeitado(error);return;}
            if(results.length>0){
                aceito(results[0])
            }else{
                aceito(false)
            }
            res.json(results)
        })
    })
});

//Cadastra cliente
app.post('/cadastrar', (req, res) => {
    const {cpf,email,senha,nome,nascimento,numero,cidade,estado} = req.body;

    return new Promise((aceito,rejeitado)=>{
        connection.query('INSERT INTO usuarios (cpf,email,senha,nome,nascimento,telefone,cidade,estado) VALUES (?,?,?,?,?,?,?,?)',[cpf,email,senha,nome,nascimento,numero,cidade,estado],(error,results)=>{
            if(error){rejeitado(error);return;}
            aceito(results)
        })
    })               
});

//Cria anúncio
app.post("/criaranuncio",upload.single('imagem'),async(req,res)=>{
    const imagem=req.file
    const {cpf,nome,marca,ano,quilometragem,preco} = req.body

    const query = 'INSERT INTO anuncios (cpf,nome,marca,ano,quilometragem,preco,imagem) VALUES (?,?,?,?,?,?,?)';
    connection.query(query, [cpf,nome,marca,ano,quilometragem,preco,imagem.filename], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send('Erro ao salvar imagem.');
    } else {
      res.status(200).send('Imagem salva com sucesso.');
    }
    });
})

//Retorna anuncios do cliente
app.get('/clienteanuncios/:cpf',(req,res)=>{
    const CPF=req.params.cpf
    connection.query('select * from anuncios where cpf=?',[CPF],(error,results)=>{
        if(error){
            console.log("Errro ao executar a consulta "+error.stack)
            return
        }
        res.json({
            erro:false,
            results,
            url:"http://localhost:8081/files/upload/"
        }) 
    })
})

//Retorna todos anúncios
app.get('/anuncios',(req,res)=>{
    connection.query('select anuncios.id,usuarios.estado,anuncios.nome,anuncios.marca,anuncios.ano,anuncios.quilometragem,anuncios.preco,anuncios.imagem from usuarios inner join anuncios on usuarios.cpf=anuncios.cpf',(error,results)=>{
        if(error){
            console.log("Errro ao executar a consulta "+error.stack)
            return
        }
        res.json({
            erro:false,
            results,
            url:"http://localhost:8081/files/upload/"
        })
    })
})

//Retorna um anúncio
app.get('/umanuncios/:id',(req,res)=>{
    const id=req.params.id
    connection.query('select * from anuncios where id=?',[id],(error,results)=>{
        if(error){
            console.log("Errro ao executar a consulta "+error.stack)
            return
        }
        res.json({
            erro:false,
            results,
            url:"http://localhost:8081/files/upload/"
        })
    })
})

//Apagar anúncio
app.delete('/apagaranuncio/:id',(req,res)=>{
    const ID=req.params.id
    return new Promise((aceito,rejeitado)=>{
        connection.query('DELETE FROM anuncios where id=?',[ID],(error,results)=>{
            if(error){rejeitado(error);return;}
            aceito(results)
        })
    })
})

//Inicia servidor
app.listen(port,()=>{
    console.log('Servidor rodando na porta '+port)
})



