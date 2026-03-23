const renderFile = (request, response) => {
    return response.status(200).render("index", {
        message: "Hello World",
        title: "Sample Page"
    });
}

export default { renderFile };