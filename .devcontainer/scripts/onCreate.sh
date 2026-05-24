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
# Node modules permissions
#------------------------------

print_command "Setting up node_modules permissions..." "🔧"
NODE_MODULES_OWNER="$(stat -c '%U:%G' /workspaces/christopherbull.github.io/node_modules)"
if [[ "$NODE_MODULES_OWNER" != "vscode:vscode" ]]; then
  sudo chown -R vscode:vscode "/workspaces/christopherbull.github.io/node_modules"
  print_command "node_modules permissions are set up!" "✅"
else
  print_command "node_modules permissions already set; skipping chown." "✅"
fi

#------------------------------
# Jekyll site permissions
#------------------------------

print_command "Setting up _site permissions..." "🔧"
SITE_OWNER="$(stat -c '%U:%G' /workspaces/christopherbull.github.io/_site)"
if [[ "$SITE_OWNER" != "vscode:vscode" ]]; then
  sudo chown -R vscode:vscode "/workspaces/christopherbull.github.io/_site"
  print_command "_site permissions are set up!" "✅"
else
  print_command "_site permissions already set; skipping chown." "✅"
fi

#------------------------------
# Vendor bundle permissions
#------------------------------

print_command "Setting up vendor/bundle permissions..." "🔧"
VENDOR_OWNER="$(stat -c '%U:%G' /workspaces/christopherbull.github.io/vendor/bundle)"
if [[ "$VENDOR_OWNER" != "vscode:vscode" ]]; then
  sudo chown -R vscode:vscode "/workspaces/christopherbull.github.io/vendor/bundle"
  print_command "vendor/bundle permissions are set up!" "✅"
else
  print_command "vendor/bundle permissions already set; skipping chown." "✅"
fi

#------------------------------
# Mise
#------------------------------

print_command "Trusting Mise configuration..." "🔧"
$MISE trust .mise.toml
print_command "Mise config is trusted!" "✅"
