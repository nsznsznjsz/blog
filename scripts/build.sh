#! /bin/bash

npm install

build_paths=(
  learn-data-structure
)

for path in ${build_paths[@]}; do
  echo "build ${path}"
  npm run build ${path}
done
