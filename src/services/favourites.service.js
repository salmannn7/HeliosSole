
// Function to get all descriptions of the products
const getAll = () => {
    return fetch("https://8f146194-0c00-45d2-aaed-d3c94395bd43-00-1h6pryaiftp3x.spock.replit.dev/favourites")
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

// Function to get the user's favourites based on the user's ID
const getUser = (id) => {
    return fetch("https://8f146194-0c00-45d2-aaed-d3c94395bd43-00-1h6pryaiftp3x.spock.replit.dev/favourites/users/" + id)
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

// Function to get a user's favourite based on it's favourite ID
const getOne = (id) => {
    return fetch("https://8f146194-0c00-45d2-aaed-d3c94395bd43-00-1h6pryaiftp3x.spock.replit.dev/favourites/" + id)
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

// Function to favourite a product
const create = (product_id, user_id) => {
    return fetch("https://8f146194-0c00-45d2-aaed-d3c94395bd43-00-1h6pryaiftp3x.spock.replit.dev/favourites", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            "product_id": product_id,
            "user_id": user_id
        })
    })
        .then((response) => {
            if (response.status === 201) {
                return response.json();
            } else if (response.status === 400) {
                throw "bad request"
            } else if (response.status === 401) {
                throw "unauthorised"
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

// Function to unfavourite a product
const deleteFavourite = (id) => {
    return fetch("https://8f146194-0c00-45d2-aaed-d3c94395bd43-00-1h6pryaiftp3x.spock.replit.dev/favourites/" + id, {
        method: "DELETE",
    })
        .then((response) => {
            if (response.status === 200) {
                return "Favourite Removed"
            } else if (response.status === 401) {
                throw "unauthorised"
            } else if (response.status === 404) {
                throw "not found"
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

// Exported description service functions
export const favouritesService = {
    getAll,
    getOne,
    create,
    getUser,
    deleteFavourite,
}
