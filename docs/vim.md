---
sidebar: auto
---

# Vim 安裝與設定指引

前置作業：

- [建置及設定 SSH Key](./ssh.md)

作業程序：

1.  Install Vim
2.  Clone configurations from GitHub Repo
3.  Setup for Vim plugins

## Install Vim

```
sudo pacman -S vim
```

## Clone configurations from GitHub Repo

1.  **下載 Vim 8 設定檔**

```
git clone git@github.com:AlanJui/vim8.git ~/.vim
```

2. 下載 Terminal 用 Nerd Font

```
$ su -
$ cd /usr/share/fonts/truetype/

$ wget https://github.com/source-foundry/Hack/releases/download/v3.003/Hack-v3.003-ttf.zip
$ unzip Hack-v3.003-ttf.zip

$ fc-cache -f -v
$ fc-list | grep "Hack"
```

## Setup for Vim plugins

安裝 Plugin 相依之作業系統軟件

```
$ sudo pacman -S ripgrep

$ sudo pacman -S fzf
```
