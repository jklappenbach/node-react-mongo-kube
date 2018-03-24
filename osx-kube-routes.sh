#! /bin/bash

# Remove any existing routes
sudo route -n delete 10/24 > /dev/null 2>&1

# Create route
sudo route -n add 10.0.0.0/24 $(minikube ip)

# Create a DNS resolver to allow traffic to use the minikube internal DNS server for resolution
sudo cat <<EOF >/etc/resolver/svc.cluster.local

# Update mac dns resolver
sudo defaults write /Library/Preferences/com.apple.mDNSResponder.plist AlwaysAppendSearchDomains -bool YES

# xhyve uses "bridge100 / virtualbox uses "bridge0"
ifconfig 'bridge0' | grep member | awk'{print $2}'

# Take ll interaces from the previous command and apply
sudo ifconfig bridge0 -hostfilter en5

