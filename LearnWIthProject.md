initialise a project with npm  --> npm init -y  
express install  --> npm i express  

setting up parsers for form --> app.use(express.json());
app.use(express.urlencoded({extended: true}))   

setting up ejs for ejs pages  -->  

EJS html jaise hi hota hai but usme ham operation perform kar sakte hai 

   1.Install ejs from npm  
   2.Set-up ejs as a view engine --> app.set('view engine', 'ejs')  

   aap.get mein res.render likhte hai send ki jagah jisse ki ejs mein likhi hui code jayegi jo ki (views) folder me hogi 

   agar ejs mein kuch operation karna chahte hai to usko iske andar (<%= %>) likhna padta hai, agar chahhe to usme kuch bhi dynamic stuff likh sakte hai  

setting up public static files  

   const path = require('path')  
  app.use(express.static(path.join(__dirname,'public')))   --> __dirname ka matlab current directory tak lata hai and public jo ki folder h jisme sab kuch store hai current directory par  

  app.use(express.static(iski jagah pura path ajayega)) --> express.static se kah rahe ki static file khojna is path par



dynamic routing  

hom log kayi baar kuch routes dekhte hai unmein sirf ek hi hissa change hota hai jaise  
 /author/harsh  
 /author/harshita  
 /author/harshika  

 /profile/harsh  
 /profile/harshita  

 sabse pahle broswer pe jao   
 url likhiye apna jo aapko chahiye and enter dabaye ab us url route ko create kariye  
 res bhejiye kuch bhi  
 ab usi url ko agar dynamic banana hai to realise karo ko konsa part dynamic hai aur us part ke aage route main : lagao do eg-> "/profile/:tabish"  

 aisa kuch bhi jiske age colon(:) hai --> req.params  

   dynamic routing   
   how to get data coming from frontened at backend route  