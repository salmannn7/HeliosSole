
// Function to get all products
const getAll = () => {
    return fetch("https://8f146194-0c00-45d2-aaed-d3c94395bd43-00-1h6pryaiftp3x.spock.replit.dev/products")
        .then((response) => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw "Something went wrong"
            }
        })
        .then((resJson) => {
            return resJson
        })
        .catch((error) => {
            console.log("Err", error)
            return Promise.reject(error)
        })
}

// Function to get all products based on it's type property
const getType = (type) => {
    return fetch("https://8f146194-0c00-45d2-aaed-d3c94395bd43-00-1h6pryaiftp3x.spock.replit.dev/products/" + type)
        .then((response) => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw "Something went wrong"
            }
        })
        .then((resJson) => {
            return resJson
        })
        .catch((error) => {
            console.log("Err", error)
            return Promise.reject(error)
        })
}

// Function to get a product based on it's product ID
const getOne = (id) => {
    return fetch("https://8f146194-0c00-45d2-aaed-d3c94395bd43-00-1h6pryaiftp3x.spock.replit.dev/products/" + id)
        .then((response) => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw "Something went wrong"
            }
        })
        .then((resJson) => {
            return resJson
        })
        .catch((error) => {
            console.log("Err", error)
            return Promise.reject(error)
        })
}

// Exported product service functions
export const productsService = {
    getAll,
    getOne,
    getType,
}
