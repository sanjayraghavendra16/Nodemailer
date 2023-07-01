const express = require("express");
const app = express();
const port = 3000;
//const sendMail = require("./controller/send")
const axios = require("axios");

// import axios from 'axios'

app.use(express.json());
// app.post("/sendMail", sendMail);

// app.get("/oppurtunities/:id", async (req, res) => {
//   const id = req.params.id;
//   if (id) {
//     const tk =
//       "cGlOU20rUFZHREtQWDVpak12ZXhlcE9KV3hpY0lNbVlybkVhT2dTMmdxRGpWNGxlOg==";
//     const options = {
//       headers: {
//         Authorization: `Basic ${tk}`,
//       },
//     };
//     const response = await axios.get(
//       `https://api.sandbox.lever.co/v1/opportunities/${id}`,
//       options
//     );
//     if (response.status == 200) {
//       res.send(response.data);
//     }
//   } else {
//     res.status(404).send("Not Found");
//     console.log;
//   }
// });

    const tk = "cGlOU20rUFZHREtQWDVpak12ZXhlcE9KV3hpY0lNbVlybkVhT2dTMmdxRGpWNGxlOg=="

    const candidate = async(token) =>{
        try{
            const options = {
                headers:{
                    Authorization: `Basic ${token}`

                }
            }
            const response = await axios.get("https://api.sandbox.lever.co/v1/opportunities/c066e477-7cac-4e59-b3c2-23ffc7cfa46a",options)
            if(response.status==200){
                console.log(response.data)
                return response.data

            }

            return null;
        }
        catch(error){
            console.log(error)
            throw new Error("Smething went wrong")
        }
    }

 candidate(tk)

 const id = "cGlOU20rUFZHREtQWDVpak12ZXhlcE9KV3hpY0lNbVlybkVhT2dTMmdxRGpWNGxlOg=="

   const requisition = async(token) => {
    try{
        const requ = {
            headers:{
                Authorization: `Basic ${token}`

            }
        }
        const response = await axios.get("https://api.sandbox.lever.co/v1/requisitions/a712f33d-6be2-4c59-b40a-c6f13458a820",requ)
        if(response.status==200){
             console.log(response.data)
             return response.data
    }
    return null;
   }
   catch(error){
        console.log(error)
        throw new Error("Smething went wrong")      
        // res.status(404).send({message:"Smething went wrong"})
   }
}

requisition(id)

async function main(){
    requisition(id)
    candidate(tk)
}
main().catch(console.error)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});





