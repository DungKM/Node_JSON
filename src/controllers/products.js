import axios from "axios";
import Joi from "joi";

const productSchema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required()
})

// getAll
export const getAll = async function (req, res) {
    try{
        const {data} = await axios.get(`http://localhost:3002/products`);
        if(data.length === 0){
         return res.status(400).json({message:"Không có sản phẩm"});
        }
        return res.json(data);
    }catch(error){
        return res.json({
            message: error,
        });
    }
}
//post
export const post = async (req, res) => {
   try {
    const body = req.body;
    const {data} = await axios.post(`http://localhost:3002/products`,body);
    if(!data) {
       return res.json({message:"Không thể thêm"})
    }
    return res.json(data);
   } catch (error) {
    return res.json({
        message:error
    })
   }
}
// delete
export const remove = async function (req, res){
    try {
        const id = req.params.id;
        await axios.delete(`http://localhost:3002/products/${id}`);
        return res.json(data);
    } catch (error) {
        return res.json({
            message: error
        })
    }
}

// put
export const put = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const {data} = await axios.put(`http://localhost:3002/products/${id}`,body);
        if(!data){
        return res.status(400).json({message:"không thể update"})
        }
        return res.status(400).json({message:"Update thành công", data})
    } catch (error) {
        return res.json({
            message:error
        })
    }
}
// get 
export const get = async (req, res) => {
    try {
        const id = req.params.id;
        const {data} = await axios.get(`http://localhost:3002/products/${id}`);
        if(!data) {
            return res.status(400).json({message: "Không có "})
        }
        return res.status(400).json({message: "Gọi thành công", data});
    } catch (error) {
        return res.json({
            message:error
        })
    }
}

