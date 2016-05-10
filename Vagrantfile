# -*- mode: ruby -*-
# vi: set ft=ruby :

# Specify Vagrant version and Vagrant API version
Vagrant.require_version ">= 1.6.0"
VAGRANTFILE_API_VERSION = "2"

# Install dependencies
unless Vagrant.has_plugin?("vagrant-docker-compose")
  system("vagrant plugin install vagrant-docker-compose")
  puts "Dependencies install, please try the command again."
  exit
end

unless Vagrant.has_plugin?("vagrant-gatling-rsync")
  system("vagrant plugin install vagrant-gatling-rsync")
  puts "Dependencies install, please try the command again."
  exit
end

# Create and configure the Docker container(s)
Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box = "ubuntu/trusty64"
  config.vm.hostname = "docker-host"
  config.vm.network(:forwarded_port, guest: 3000, host: 3000)
  config.vm.synced_folder '.', '/src', type: 'rsync'
  config.vm.provision :shell, inline: "apt-get update"
  config.vm.provision :docker
  config.vm.provision :docker_compose, compose_version: "1.7.0", yml: "/src/docker_compose.yml", rebuild: true, run: "always"
end
