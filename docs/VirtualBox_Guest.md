---
sidebar: auto
---

# VirtualBox Guest 安裝與設定指引

## 安裝

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

## 設定

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

## 驗證

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

## 參考

[VirtualBox/Install Arch Linux as a guest](https://wiki.archlinux.org/index.php/VirtualBox/Install_Arch_Linux_as_a_guest)
