const fs = require("fs")
const path = require("path")

const productsFilepath = path.join(path.dirname(require.main.filename), "data", "products.json")


const getProductsFromFile = (cb) => {
    fs.readFile(productsFilepath, (err, data) => {
        if(!err) {
            return cb(JSON.parse(data))
        }
        return cb([])
    })
}

 module.exports = class Product {
    constructor(title, imageURL, description, price) {
        this.title = title,
        this.imageURL = imageURL,
        this.description = description,
        this.price = price
    }

    save(){
        getProductsFromFile((products) => {
            products.push(this)
            fs.writeFile(productsFilepath, JSON.stringify(products), (err) => {
                if(err) console.log("Error saving file:", err);
            })
        })
        
        
    }
    
    static fetchAll(cb){
        getProductsFromFile(cb)
    }
}

