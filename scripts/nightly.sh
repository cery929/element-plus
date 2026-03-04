sed -i 's/"name": "kn-ui",/"name": "@kn-ui\/nightly",/' packages/kn-ui/package.json
sed -i '2s/kn-ui/@kn-ui\/nightly/' internal/build-constants/src/pkg.ts

# remove line 14 to 22, will not publish eslint-config and metadata to npm on nightly
sed -i '14,22d' scripts/publish.sh
