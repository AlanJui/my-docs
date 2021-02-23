# Manjaro KDE Guideline

## Install Manjaro-KDE

### Install Linux OS: Manjaro-KDE

1. Install Manjaro-KDE.

2. Update packages.

3. Reboot system.

### Install package manager tool

1. Prepare build environment.

```
sudo pacman -Sy base-devel
```

2. Prepare workspace to build.

```
cd
mkdir build && cd $_
```

3. Install yay package.

```
git clone https://aur.archlinux.org/yay.git
cd yay
makepkg -si
```

## Install VirtualBox Guest for ArchLinux

### Install and configure

1. Install ArchLinux kernel headers

```
sudo pacman -S linux-headers
```

2. Check version of Linux Kernel

```
uname -r
```

3. Install VirtualBox Guest utilities with X support

```
sudo pacman -S virtualbox-guest-utils
```

4. Enable VirtualBox Service

```
sudo systemctl enable vboxservice
```

5. Start VirtualBox Service started

```
sudo systemctl start vboxservice
sysemctl status vboxservice
```

6. Add user account to vboxsf group

```
sudo usermod -aG vboxsf alanjui
grep vboxsf /etc/group
```

7. Reboot system.

```
sudo reboot
```

### Verify

1. Verify VirtualBox Service has been started.

   ```
   systemctl status vboxservice
   ```

2. Share clipboard enabled.

   (1) Configure shared clipboard:
   Select command: VirtualBox VM / Devices / Share Clipboard / Bidirectional

   (2) Verify copy from host: copy command and paste to guest terminal.

   - copy command text on macOS.
   - open terminal on Manjaro-KDE and press [Ctrl] + [Shift] + [V] keys
     to paste command from Host Clipboard to Guest Terminal.

   (3) Verfify paste to host: copy text from guest and paste to host.

   - copy text on guest(Manjaro-KDE).
   - paste text to terminal on host(macOS).

3. Share folder enabled.

   (1) Create folder to be mount to host

   ```
   cd
   mkdir -p ~/host
   ```

   (2) Configure shared folders:

   Select command: VirtualBox VM / Devices / Shared Folders Settings:

   - Folder Path: /Users/alanjui
   - Folder Name: vboxsf [v] Auto-mount
   - Mount point: /home/alanjui/host [v] Make Permanent

   (3) Verify

   ```
   ls -la ~/host
   ```

## Configure Terminal

### Install Nerd Font

1. Download Nerd Font to Host.

```
cd build
wget https://github.com/ryanoasis/nerd-fonts/blob/master/patched-fonts/FiraMono/Regular/complete/Fira%20Mono%20Regular%20Nerd%20Font%20Complete.otf
```

2. Copy font to system-wide font:

```
sudo cp 'Fira Mono Regular nerd Font Complete.otf' /usr/share/fonts/
```

```
$ fc-cache -f -v
$ fc-list | grep "Fira"
```

```
$ su -
$ cd /usr/share/fonts/truetype/

$ wget https://github.com/source-foundry/Hack/releases/download/v3.003/Hack-v3.003-ttf.zip
$ unzip Hack-v3.003-ttf.zip

$ fc-cache -f -v
$ fc-list | grep "Hack"
```

### Install Python

### Install Node.JS

### Install Lua

### Setup Vim

1. Install Vim 8.

```
sudo pacman -S vim
```

2. Download configuration from GitHub Repo.

```
cd
git clone https://github.com/AlanJui/vim8.git .vim
```

3. Install system packages for plugin.

```
sudo pacman -S greppip
```

## Install Chrome from Terminal

[How to Install Google Chrome Web Browser on Debian 10 Linux](https://linuxize.com/post/how-to-install-google-chrome-web-browser-on-debian-10/)

1. Open the terminal.

<Ctrl> + <Alt> + <T>

2. Download the latest Google Chrome .deb package.

```
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
```

3. Installing Google Chrome

```
sudo apt install ./google-chrome-stable_current_amd64.deb
```

4. Start Google Chrome from Terminal

```
$ google-chrome
```
