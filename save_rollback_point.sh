#!/bin/bash

# Get current date in ISO format
DATETIME=$(date -u +"%Y-%m-%dT%H:%M:%S%z")

# Create git commit
git add .
git commit -m "Checkpoint ${DATETIME}"

# Get the commit hash
COMMIT_HASH=$(git rev-parse HEAD)

# Append to ROLLBACK_POINTS.md
echo -e "\n## ${DATETIME}\nCommit Hash: ${COMMIT_HASH}" >> ROLLBACK_POINTS.md

echo "Created commit ${COMMIT_HASH} and recorded in ROLLBACK_POINTS.md"
