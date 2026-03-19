const get_users = (request, response) => {
    return response.status(200).send({
        message: "All users fetched successfully"
    })
}

export default { get_users };