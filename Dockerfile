# Use our own prebuilt docker image
FROM gcr.io/speak-2-dev/speak-api-base

# Copy application code.
COPY . /app/

# Disable NPM notifications
RUN npm config set update-notifier false

# Install dependencies.
RUN npm ci

# Start the app
CMD ["node", "dist/server.js"]