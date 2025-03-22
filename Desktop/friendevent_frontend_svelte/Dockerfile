FROM jenkins/inbound-agent:latest-jdk11

USER root

# Installer Node.js
RUN apt-get update && apt-get install -y curl gnupg \
    && curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs \
    && npm install -g jest \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Revenir à l'utilisateur jenkins (très important)
USER jenkins