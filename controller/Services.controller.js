const Services = require("../model/Service.model");
const { createService } = require("../services/services.service");
const catchAsync = require("../utils/catchAsync");
const sandResponse = require("../utils/sandResponse");

module.exports.postServices = catchAsync(
    async (req, res) => {
        const { ...service } = req.body
        const data = await createService(service)

        sandResponse(res, {
            statusCode: 200,
            success: true,
            message: "Service create successfully",
            data: data

        })

    }
)