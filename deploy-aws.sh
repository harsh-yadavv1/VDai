#!/bin/bash

# Build the Docker image
docker build -t vdbyai .

# Login to AWS ECR
aws ecr get-login-password --region your-region | docker login --username AWS --password-stdin your-account-id.dkr.ecr.your-region.amazonaws.com

# Tag the image
docker tag vdbyai:latest your-account-id.dkr.ecr.your-region.amazonaws.com/vdbyai:latest

# Push to ECR
docker push your-account-id.dkr.ecr.your-region.amazonaws.com/vdbyai:latest

# Update ECS service
aws ecs update-service --cluster vdbyai-cluster --service vdbyai-service --force-new-deployment 