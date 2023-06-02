#!/bin/bash

pushd ..

npm run build
firebase deploy --only hosting

popd