# This script is used to create a new migration file

echo "********************************************************************"
echo "This script is used to create a new migration file"
echo "********************************************************************"

if [ -z "$1" ]; then
  # Check if the name of the migration is provided in red
  echo "********************************************************************"
  echo "Please provide the name of the migration"
  echo "Migration name is required"
  exit 1
fi

# Format the migration name
# Default format: YYYYMMDDHHMMSS+name.js
# Give options to create or add into the table

# Create a new migration file with touch
Time=$(date +%Y%m%d%H%M%S)
touch "src/database/migrations/${Time}-${1}.ts"



