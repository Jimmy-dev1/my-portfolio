# 🚀 Portfolio Deployment Guide

This guide walks you through containerizing and deploying your portfolio website to various cloud platforms.

## 📋 Prerequisites

- Docker installed on your local machine
- Docker Hub account (for image registry)
- Cloud platform account (GCP, AWS, or Azure)

## 🐳 Local Development & Testing

### 1. Build the Docker Image

```bash
# Build the image
docker build -t my-portfolio .

# Verify the build
docker images | grep my-portfolio
```

### 2. Run Locally

```bash
# Run the container
docker run -d -p 8080:80 --name portfolio-container my-portfolio

# Access your portfolio
open http://localhost:8080
```

### 3. Stop and Clean Up

```bash
# Stop the container
docker stop portfolio-container

# Remove the container
docker rm portfolio-container
```

## 📤 Push to Docker Hub

### 1. Tag Your Image

```bash
# Replace 'yourusername' with your Docker Hub username
docker tag my-portfolio yourusername/portfolio:latest
docker tag my-portfolio yourusername/portfolio:v1.0.0
```

### 2. Push to Registry

```bash
# Login to Docker Hub
docker login

# Push the images
docker push yourusername/portfolio:latest
docker push yourusername/portfolio:v1.0.0
```

## ☁️ Cloud Deployment Options

### 🌐 Google Cloud Run

#### Setup
```bash
# Install Google Cloud CLI
# https://cloud.google.com/sdk/docs/install

# Authenticate
gcloud auth login
gcloud config set project YOUR_PROJECT_ID
```

#### Deploy
```bash
# Deploy from Docker Hub
gcloud run deploy portfolio \
  --image yourusername/portfolio:latest \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --port 80

# Or deploy directly from source
gcloud run deploy portfolio \
  --source . \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
```

#### Custom Domain (Optional)
```bash
# Map custom domain
gcloud run domain-mappings create \
  --service portfolio \
  --domain yourdomain.com \
  --region us-central1
```

### 🚀 AWS ECS with Fargate

#### Setup
```bash
# Install AWS CLI
# https://aws.amazon.com/cli/

# Configure credentials
aws configure
```

#### Deploy
```bash
# Create ECS cluster
aws ecs create-cluster --cluster-name portfolio-cluster

# Create task definition
cat > task-definition.json << EOF
{
  "family": "portfolio",
  "networkMode": "awsvpc",
  "requiresCompatibilities": ["FARGATE"],
  "cpu": "256",
  "memory": "512",
  "executionRoleArn": "arn:aws:iam::YOUR_ACCOUNT:role/ecsTaskExecutionRole",
  "containerDefinitions": [
    {
      "name": "portfolio",
      "image": "yourusername/portfolio:latest",
      "portMappings": [
        {
          "containerPort": 80,
          "protocol": "tcp"
        }
      ],
      "logConfiguration": {
        "logDriver": "awslogs",
        "options": {
          "awslogs-group": "/ecs/portfolio",
          "awslogs-region": "us-east-1",
          "awslogs-stream-prefix": "ecs"
        }
      }
    }
  ]
}
EOF

# Register task definition
aws ecs register-task-definition --cli-input-json file://task-definition.json

# Create service
aws ecs create-service \
  --cluster portfolio-cluster \
  --service-name portfolio-service \
  --task-definition portfolio:1 \
  --desired-count 1 \
  --launch-type FARGATE \
  --network-configuration "awsvpcConfiguration={subnets=[subnet-12345],securityGroups=[sg-12345],assignPublicIp=ENABLED}"
```

### 🔷 Azure Container Apps

#### Setup
```bash
# Install Azure CLI
# https://docs.microsoft.com/en-us/cli/azure/install-azure-cli

# Login
az login
```

#### Deploy
```bash
# Create resource group
az group create --name portfolio-rg --location eastus

# Create container app environment
az containerapp env create \
  --name portfolio-env \
  --resource-group portfolio-rg \
  --location eastus

# Deploy container app
az containerapp create \
  --name portfolio \
  --resource-group portfolio-rg \
  --environment portfolio-env \
  --image yourusername/portfolio:latest \
  --target-port 80 \
  --ingress external \
  --cpu 0.25 \
  --memory 0.5Gi
```

## 🔄 Continuous Deployment with GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy Portfolio

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Set up Docker Buildx
      uses: docker/setup-buildx-action@v2
    
    - name: Login to Docker Hub
      uses: docker/login-action@v2
      with:
        username: ${{ secrets.DOCKER_USERNAME }}
        password: ${{ secrets.DOCKER_PASSWORD }}
    
    - name: Build and push
      uses: docker/build-push-action@v4
      with:
        context: .
        push: true
        tags: yourusername/portfolio:latest
    
    # Add cloud-specific deployment steps here
```

## 🛠️ Maintenance & Updates

### Update Content
1. Edit source files in `src/` directory
2. Rebuild Docker image: `docker build -t my-portfolio .`
3. Push updated image: `docker push yourusername/portfolio:latest`
4. Redeploy on your cloud platform

### Monitor Performance
- **Google Cloud Run**: Use Cloud Monitoring
- **AWS ECS**: Use CloudWatch
- **Azure Container Apps**: Use Application Insights

### Scale Based on Traffic
All platforms support automatic scaling based on CPU/memory usage and request volume.

## 💡 Pro Tips

1. **Environment Variables**: Use cloud platform secrets management for sensitive data
2. **SSL/TLS**: All platforms provide automatic HTTPS certificates
3. **CDN**: Consider adding CloudFlare or cloud provider CDN for better performance
4. **Health Checks**: Implement `/health` endpoint for better monitoring
5. **Cost Optimization**: Set up budget alerts and review resource usage regularly

## 🆘 Troubleshooting

### Common Issues
- **Port Configuration**: Ensure nginx is listening on port 80
- **Build Context**: Make sure Dockerfile is in project root
- **Memory Limits**: Increase if build fails with out-of-memory errors
- **Networking**: Check security groups/firewall rules if app is unreachable

### Debug Commands
```bash
# Check container logs
docker logs portfolio-container

# Access container shell
docker exec -it portfolio-container sh

# Test nginx configuration
docker run --rm -v $(pwd)/nginx.conf:/etc/nginx/nginx.conf nginx:alpine nginx -t
```

Happy deploying! 🎉