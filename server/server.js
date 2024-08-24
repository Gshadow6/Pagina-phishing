import { createServer } from 'node:http';
import { writeFile } from "node:fs";
import { join } from "node:path";

const endpoint = (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST", "OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "POST" && req.url === "/") {
        let body = "";

        req.on("data", (chunk) => body += chunk.toString());
        req.on("end", () => {
            console.log(body);
            try {
                const data = JSON.parse(body);

                const path = join("db", `${data.correo}.txt`);
                writeFile(path, body, {flag: "a"}, (err) => {
                    if (err) return console.error("Error al intentar crear el archivo");
                    console.log(`Archivo creado: ${path}`);
                });

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(data));
            }
            catch(error) {
                console.log(error);
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ msg: "Error while parsing JSON" }));
            }
        });
    }
    else if (req.method === "OPTIONS") {
        res.writeHead(204);
        res.end();
    }
    else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ msg: "Not Found" }));
    }
}

const server = createServer(endpoint);

// starts a simple http server locally on port 3000
server.listen(8080, '127.0.0.1', () => {
  console.log('Listening on http://localhost:8080/');
});

// run with `node server.mjs`
