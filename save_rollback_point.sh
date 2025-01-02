#!/bin/bash

# Parse command line options
COMMENT=""
while getopts "m:" opt; do
    case $opt in
        m)
            COMMENT="$OPTARG"
            ;;
        \?)
            echo "Invalid option: -$OPTARG" >&2
            exit 1
            ;;
    esac
done

# Get current date in ISO format
DATETIME=$(date -u +"%Y-%m-%dT%H:%M:%S%z")

# Create git commit
git add .
git commit -m "Checkpoint ${DATETIME}${COMMENT:+ - }${COMMENT}"

# Get the commit hash
COMMIT_HASH=$(git rev-parse HEAD)

# Append to ROLLBACK_POINTS.md
{
    echo -e "\n## ${DATETIME}"
    [ ! -z "$COMMENT" ] && echo "# ${COMMENT}"
    echo "Commit Hash: ${COMMIT_HASH}"
} >> ROLLBACK_POINTS.md

echo "Created commit ${COMMIT_HASH} and recorded in ROLLBACK_POINTS.md"