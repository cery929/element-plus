sed -i 's/"name": "cery929-ui",/"name": "@cery929-ui\/nightly",/' packages/cery929-ui/package.json
sed -i '2s/cery929-ui/@cery929-ui\/nightly/' internal/build-constants/src/pkg.ts

# remove line 14 to 22, will not publish eslint-config and metadata to npm on nightly
sed -i '14,22d' scripts/publish.sh
