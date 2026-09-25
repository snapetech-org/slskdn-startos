# Updating the upstream version

This package wraps Start9 Labs' own [slskdn](https://github.com/Start9Labs/slskdn) source, which we build and publish ourselves as `ghcr.io/start9labs/slskdn`. "Upstream" here means that source repo, not the image namespace.

## Determining the upstream version

- **slskdn** ([Start9Labs/slskdn](https://github.com/Start9Labs/slskdn)) — fetch the latest release tag:

  ```sh
  gh release view -R Start9Labs/slskdn --json tagName -q .tagName
  ```

  The current pin lives in `startos/manifest/index.ts` at `images['slskdn'].source.dockerTag` (the version after the `:` in `ghcr.io/start9labs/slskdn:<version>`).

## Applying the bump

- Bump `dockerTag` in `startos/manifest/index.ts` to `ghcr.io/start9labs/slskdn:<new version>` (drop the leading `v` from the release tag).
