express=require('express')
const path=require('path')
const fs=require('fs')
const captcha=require('trek-captcha')

app=express()

app.use(express.static(path.join(__dirname,'public')))
app.listen(3000,()=>{
    console.log('Server running on 3000 port ')
})
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.render('index.ejs')
})
app.get('/user',(req,res)=>{
    res.render('user.ejs')
})

async function run() {
    const { token, buffer } = await captcha()
    fs.createWriteStream('./public/captcha.gif').on('finish', () =>
      gchaptch=token).end(buffer)
  }
  run()

 app.post('/user',async(req,res)=>{
    usercaptch=req.body.captcha
      
    if(gchaptch==usercaptch){  
        res.redirect('/user')   
    }
    else{ res.redirect('/')}
    })
    