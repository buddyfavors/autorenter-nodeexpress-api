# -*- mode: ruby -*-
# vi: set ft=ruby :

unless Vagrant.has_plugin?("vagrant-docker-compose")
  system("vagrant plugin install vagrant-docker-compose")
  puts "Dependencies install, please try the command again."
  exit
end

Vagrant.configure("2") do |config|
  config.vm.box = "hashicorp/precise64"

  config.vm.network(:forwarded_port, guest: 3000, host: 3000)

  config.vm.provision :shell, inline: "apt-get update"
  config.vm.provision :docker
  config.vm.provision :docker_compose, yml: ["/vagrant/docker_compose.yml"], rebuild: true, project_name: "api", run: "always"
end
