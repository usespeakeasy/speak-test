ARG PROJECT_ID=speak-2-dev

# Use our own prebuilt docker image
FROM gcr.io/$PROJECT_ID/speak-api-base

# Copy application code.
COPY . /app/

# Disable NPM notifications
RUN npm config set update-notifier false

# Install dependencies.
RUN npm ci

# Start the app
CMD ["node", "dist/server.js"]