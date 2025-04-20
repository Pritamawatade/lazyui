#!/bin/bash

echo "⌛ Cleaning previous (/dist)..."
rm -rf dist
echo "✅ Previous (/dist) cleared!"

echo "|-----------------------------------------------------|"

echo "⌛ Building Homepage (/apps/www)..."
cd apps/www
npm install
npm run build
echo "✅ Homepage build completed in (/apps/www/dist)!"

echo "|-----------------------------------------------------|"

echo "⌛ Copying Homepage build from (/apps/www/dist)..."
cd ../../
mkdir -p dist
cp -r apps/www/dist/* dist/
echo "✅ Homepage build copied to (/dist)!"

echo "|-----------------------------------------------------|"

echo "⌛ Cleaning the dist folder in (/apps/www)..."
rm -rf apps/www/dist
echo "✅ Cleaned up (/apps/www/dist)!"

echo "|-----------------------------------------------------|"

echo "⌛ Building Shadcn Registry (/apps/shadcn)..."
cd apps/shadcn
npm install
npm run registry:build
npm run registry:generate
npm run build
rm -rf public
echo "✅ Shadcn Registry build completed in (/apps/shadcn/dist)!"

echo "|-----------------------------------------------------|"

echo "⌛ Copying Shadcn Registry build from (/apps/shadcn/dist)..."
cd ../../
mkdir -p dist/registry
cp -r apps/shadcn/dist/* dist/registry/
echo "✅ Shadcn Registry build copied to (/dist/registry)!"

echo "|-----------------------------------------------------|"

echo "⌛ Cleaning the dist folder in (/apps/shadcn)..."
rm -rf apps/shadcn/dist
echo "✅ Cleaned up (/apps/shadcn/dist)!"

echo "|-----------------------------------------------------|"

echo "⌛ Building Docs (/apps/docs)..."
cd apps/docs
npm install
npm run build
echo "✅ Docs build completed in (/apps/docs/dist)!"

echo "|-----------------------------------------------------|"

echo "⌛ Copying Docs build from (/apps/docs/dist)..."
cd ../../
mkdir -p dist/docs
cp -r apps/docs/dist/* dist/docs/
echo "✅ Homepage build copied to (/dist/docs)!"

echo "|-----------------------------------------------------|"

echo "⌛ Cleaning the dist folder in (/apps/docs)..."
rm -rf apps/docs/dist
echo "✅ Cleaned up (/apps/docs/dist)!"

echo "|-----------------------------------------------------|"

echo "✅ Build Completed and ready in (/dist)!"
