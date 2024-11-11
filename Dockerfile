# Use an NGINX base image
FROM nginx:alpine

# Copy game files to the NGINX server root
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
