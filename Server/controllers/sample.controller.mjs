const renderFile = (request, response) => {
    return response.status(200).render("index", {
        message: "Hello World",
        title: "Sample Page",
        arr: [1, 2, 3, 4, 5]
    });
}

export default { renderFile };