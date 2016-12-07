# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/xenial64"
  config.vm.network "forwarded_port", guest: 3000, host: 3000

  config.vm.provider "virtualbox" do |vb|
    vb.customize ["setextradata", :id, "VBoxInternal2/SharedFoldersEnableSymlinksCreate/vagrant", "1"]
  end

  config.vm.provision "shell", inline: "echo 'cd /vagrant' >> /home/ubuntu/.bashrc"
  config.vm.provision "shell", inline: "curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -"
  config.vm.provision "shell", inline: "apt-get install -y nodejs build-essential"
  config.vm.provision "shell", inline: "npm install -g eslint@'~3.11.1'"
  config.vm.provision "shell", inline: "npm install -g mocha@'~3.2.0'"
end
