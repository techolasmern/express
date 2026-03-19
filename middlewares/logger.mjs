export const logger = (req, res, next) => {
    const start_time = Date.now(); // time in milliseconds
    const path = req.path;
    const method = req.method;
    res.on("finish", () => {
        const end_time = Date.now(); // time in ms
        const time_taken = end_time - start_time;
        console.log(`${method} ${path} (${res.statusCode}) ${time_taken}ms - ${new Date()}`);
    });
    next();
}
