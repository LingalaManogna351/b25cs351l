const http = require("http");
const querystring = require("querystring");
const server = http.createServer((req, res) => {
    if (req.method === "GET" && req.url === "/") {
        res.writeHead(200, {
            "Content-Type": "text/html"
        });
        res.end(`
            <h1>Student Form</h1>
            <form method="POST" action="/submit">
                <label>Name:</label>
                <input type="text" name="name">
                <br><br>
                <label>Age:</label>
                <input type="text" name="age">
                <br><br>
                <button type="submit">Submit</button>
            </form>
        `);
    }
    else if (req.method === "POST" && req.url === "/submit") {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk.toString();
        });
        req.on("end", () => {
            const formData = querystring.parse(body);
            console.log("Form Parameters:", formData);
            res.writeHead(200, {
                "Content-Type": "text/html"
            });
            res.end(`
                <h1>Form Submitted Successfully</h1>
                <p>Name: ${formData.name}</p>
                <p>Age: ${formData.age}</p>
            `);
        });
    }
    else {
        res.writeHead(404, {
            "Content-Type": "text/plain"
        });
        res.end("Page Not Found");
    }
});
server.listen(3000, () => {
    console.log("Server running on port 3000");
});
