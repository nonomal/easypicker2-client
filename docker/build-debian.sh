docker buildx build -f debian.Dockerfile -t sugarjl/debian:latest --platform=linux/arm64,linux/amd64 . --push