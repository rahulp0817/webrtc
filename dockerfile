# Step 1: Build the app
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first (for caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all source files
COPY . .

# Build Next.js app
RUN npm run build

# Step 2: Create lightweight production image
FROM node:20-alpine

WORKDIR /app

# Copy only the build output and node_modules from builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Expose port 3000
EXPOSE 3000

# CMD ["npx", "next", "start"]
CMD ["npx", "next", "start", "-H", "0.0.0.0", "-p", "3000"]
