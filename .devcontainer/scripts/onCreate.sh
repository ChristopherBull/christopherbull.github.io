#!/usr/bin/env bash
set -euo pipefail

#------------------------------
# FUNCTIONS
#------------------------------

print_command() {
  local message=$1
  local icon=$2
  echo -e "\e[34m»»» $icon \e[32m$message\e[0m ..."
}

#------------------------------
# MISE
#------------------------------

MISE=$(which mise)

if [ -z "$MISE" ]; then
  print_command "Mise is not installed. Please install Mise before running this script." "❌"
  exit 1
fi

#------------------------------
# Permissions
#------------------------------

print_command "Setting up permissions..." "🔧"
if [[ ! -d "/mnt/mise-data" ]]; then
  sudo mkdir -p "/mnt/mise-data"
fi

MISE_DATA_OWNER="$(stat -c '%U:%G' /mnt/mise-data)"
if [[ "$MISE_DATA_OWNER" != "vscode:vscode" ]]; then
  sudo chown -R vscode:vscode "/mnt/mise-data"
  print_command "Permissions are set up!" "✅"
else
  print_command "Permissions already set; skipping chown." "✅"
fi

#------------------------------
# Mise
#------------------------------

print_command "Trusting Mise configuration..." "🔧"
$MISE trust .mise.toml
print_command "Mise config is trusted!" "✅"
