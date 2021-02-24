---
sidebar: auto
---

# yay 套件管理器安裝與設定指引

## 安裝

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

## 設定

N/A

## 驗證

Install Chrome from Terminal.

1. Install from source.

```
yay -S google-chrome
```

2. Verify.

```
which google-chrome-stable

google-chrome-stable
```

3. Configure shortcut.

```
ln -sfn $(which google-chrome-stable) ~/.local/bin/google-chrome
```

## 參考

[How to Install Google Chrome Web Browser on Debian 10 Linux](https://linuxize.com/post/how-to-install-google-chrome-web-browser-on-debian-10/)

1. Open the terminal.

   [Ctrl] + [Alt] + [T]

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
