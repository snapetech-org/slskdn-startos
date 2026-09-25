# slskdN on StartOS

This wrapper packages [slskdN](https://github.com/snapetech/slskdn) for
StartOS using the public multi-architecture Docker image
`docker.io/snapetech/slskdn:2026092517-slskdn.325`.

It persists `/app`, `/downloads`, and `/music`, exposes the web UI on port
5030, and documents TCP/UDP port 50300 for Soulseek, DHT, and mesh traffic.

## Build and verify

The Start9 SDK and Docker are required:

```sh
npm install
npm run check
npm run build
make
start-sdk verify s9pk slskdn.s9pk
```

The resulting package must be tested by sideloading it on StartOS before a
marketplace submission. Start9's current submission path is the wrapper-repo
link plus package details sent to `submissions@start9labs.com`.

Upstream: <https://github.com/snapetech/slskdn>
