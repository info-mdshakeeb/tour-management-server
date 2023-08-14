const ApiError = require("../errors/ApiError")
const Services = require("../model/Service.model")

module.exports.createService = async (payload) => {
    const data = await Services.create(payload)
    if (!data) {
        throw new ApiError(400, "service is not created")
    }
    return data
}
module.exports.getAllServices = async (payload) => {
    const data = await Services.find({}).limit(payload)
    return data
}

module.exports.searchServices = async (payload) => {
    // /services/search?destination=${destination}&location=${location}
    const { destination, location } = payload
    const data = await Services.find({
        $or: [
            { city: { $regex: location, $options: 'i' } },
            { distance: { $regex: destination, $options: 'i' } }
        ]
    })
    return data
}


module.exports.getAServices = (payload) => {
    const data = Services.findById(payload)
    return data
}