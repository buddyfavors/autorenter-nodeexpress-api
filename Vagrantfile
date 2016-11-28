# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/xenial64"
  config.vm.network "forwarded_port", guest: 3000, host: 3000
  config.vm.network "private_network", ip: "192.168.99.100"

  config.vm.provision "shell", inline: "curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -"
  config.vm.provision "shell", inline: "apt-get install -y nodejs build-essential"
end
