const sensorModel = require("../mod/sensor");

class sensorController {
    static async getallsensors(req, res) {
        try {
            const results = await sensorModel.getsensors();
            res.send(results);
        } catch (error) {
            console.error(error);
            res.status(500).send("Internal Server Error");
        }
    }

    static async addnewsensor(req, res) {

        var sensor_name=req.body.sensor_name
        var sensor_type=req.body.sensor_type
        var location=req.body.location
        var x=await sensorModel.addsensor(sensor_name,sensor_type,location)
        if(x==true)
        res.send("added successfully ")
    else
        res.send("add failed")
      
    }
    static async updatesensor(req,res){
        console.log("edit sensor ")
        const s_id=req.body.s_id;
        const newsensor_name=req.body.sensor_name;
        const newsensor_type=req.body.sensor_type;
        const newlocation=req.body.location;
       const x= await sensorModel.edit(s_id,newsensor_name,newsensor_type,newlocation);
       if(x)
       res.send("data edited successfully")
    else{
       res.send("failed to update sensor")
    }
    }

    static async deletesensor(req, res) {

        const location =req.body.location;
        if(location)
        {
            var x=await sensorModel.deleteuser(location);
            if (x)
                res.send("delete done")
            
            else
               res.send("failed to delete sensor")
        }
    }


}

module.exports = sensorController;
