# 
# Node.js monitored with Nodemon Dockerfile 
# 
# Pull base image. 
FROM ubuntu:14.04
# Install Node.js 
RUN apt-get update -y
RUN apt-get install -y curl wget git vim supervisor build-essential
# Use 'n' to install Node.js 
RUN mkdir -p /usr/local/bin
RUN curl https://raw.githubusercontent.com/burgerboydaddy/nodeinstall/master/nodeinstall -o /usr/local/bin/nodeinstall
RUN chmod 755 /usr/local/bin/nodeinstall
RUN chown root:root /usr/local/bin/nodeinstall
RUN /usr/local/bin/nodeinstall lts || true
# Install file system watcher to auto-reload node during development 
RUN /usr/local/bin/npm install -g nodemon
# Expose default app port
EXPOSE 8081
# Create application folder
RUN mkdir /opt/app
# Copy application (for now; later will go from git)
#ADD index.js /opt/app/index.js
WORKDIR /opt/app
# Define default command. 
CMD ["/usr/local/bin/nodemon", "/opt/app/index.js"]
