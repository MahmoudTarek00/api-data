const UserModel = require("../mod/user");

class UserController {
    static async getallUsers(req, res) {
        try {
            const results = await UserModel.getusers();
            res.send(results);
        } catch (error) {
            console.error(error);
            res.status(500).send("Internal Server Error");
        }
    }

    static async addnewuser(req, res) {

        var name=req.body.name
        var email=req.body.email
        var password=req.body.password
        var x=await UserModel.adduser(name,email,password)
        if(x==true)
        res.send("added successfully ")
    else
        res.send("add failed")
      
    }
    static async updateuser(req,res){
        console.log("edit user ")
        const id=req.body.id;
        const newname=req.body.name;
        const newemail=req.body.email;
        const newpass=req.body.password;
       const x= await UserModel.edit(id,newname,newemail,newpass);
       if(x)
       res.send("data edited successfully")
    else{
        res.send("failed to update user")
    }
    }

    static async deleteuser(req, res) {

        const d_id =req.body.id;
        if(d_id)
        {
            var x=await UserModel.deleteuser(d_id);
            if (x)
                res.send("delete done")
            
            else
               res.send("failed to delete user")
        }
    }



}

module.exports = UserController;
