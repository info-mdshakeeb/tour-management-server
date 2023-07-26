const ApiError = require("../errors/ApiError")
const Services = require("../model/Service.model")

module.exports.createService = async (payload) => {
    const data = await Services.create(payload)
    if (!data) {
        throw new ApiError(400, "service is not created")
    }
    return data
}