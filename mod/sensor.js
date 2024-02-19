const data = require("../task/data");

class sensorModel {
    static async getsensor() {
        return new Promise((resolve, reject) => {
            data.query("SELECT * FROM sensors", [], (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
        });
    }


    static async addsensor(sensor_name , sensor_type , location)
{
    return new Promise (resolve=>{
        data.query ("insert into sensors (sensor_name ,sensor_type ,location) values (?,?,?)",[sensor_name,sensor_type,location],(e,r)=>{
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
static async edit(id,sensor_name,sensor_type,location){

  return new Promise (resolve=>{
    data.query("update sensors set sensor_name=?,sensor_type=?,location=? where id=?",[sensor_name,sensor_type,location,id],(error,result)=>{
        if(!error)

        resolve (true)
    })
  })
}

static async deletesensor(id)
{
    return new Promise (resolve=>{
        data.query ("delete from sensors where location=?",[ilocation],(error,result)=>{
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
module.exports=sensorModel