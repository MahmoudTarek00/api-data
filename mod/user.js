const data = require("../task/data");

class usermodel {
    static async getusers() {
        return new Promise((resolve, reject) => {
            data.query("SELECT * FROM users", [], (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
        });
    }


    static async adduser(name , email , password)
{
    return new Promise (resolve=>{
        data.query ("insert into users (name ,email ,password) values (?,?,?)",[name,email,password],(e,r)=>{
            if (!e) 
                resolve(true)
        else
            {
                console.log("error",e);
                resolve(false)    
            }
            
        })
    })

}

static async edit(id,name,email,password){

  return new Promise (resolve=>{
    data.query("update users set name=?,email=?,password=? where id=?",[name,email,password,id],(error,result)=>{
        if(!error)

        resolve (true)
    })
  })
}
static async deleteuser(id)
{
    return new Promise (resolve=>{
        data.query ("delete from users where id=?",[id],(error,result)=>{
            if (error) 
                resolve(false)
        else
            {
                
                resolve(true)    
            }
            
        })
    })

}


}

module.exports=usermodel