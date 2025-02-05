#!/bin/bash

# Check if a datetime argument was provided
if [ -z "$1" ]; then
    echo "Please provide a datetime to rollback to."
    echo "Usage: ./rollback.sh <datetime>"
    echo "Available datetimes:"
    grep "^## " ROLLBACK_POINTS.md | sed 's/^## //'
    exit 1
fi

TARGET_DATETIME="$1"

# Find the section starting with the datetime and extract the hash
SECTION=$(grep -A 2 "^## $TARGET_DATETIME$" ROLLBACK_POINTS.md)
COMMIT_HASH=$(echo "$SECTION" | grep "^Commit Hash:" | cut -d' ' -f3)

if [ -z "$COMMIT_HASH" ]; then
    echo "No commit hash found for datetime: $TARGET_DATETIME"
    echo "Available datetimes:"
    grep "^## " ROLLBACK_POINTS.md | sed 's/^## //'
    exit 1
fi

# Confirm with the user
echo "Found commit hash: $COMMIT_HASH for datetime: $TARGET_DATETIME"
read -p "Are you sure you want to rollback to this commit? (y/N) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]
then
    # Perform the rollback and cleanup
    git reset --hard "$COMMIT_HASH"
    git gc --prune=now
    echo "Successfully rolled back to commit from $TARGET_DATETIME and cleaned up repository"
else
    echo "Rollback cancelled"
fi