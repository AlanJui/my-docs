---
sidebar: auto
---

# Vim 安裝與設定指引

前置作業：

- [設定終端機作業環境](./terminal.md)
- [建置及設定 SSH Key](./ssh.md)

作業程序：

1.  Install Vim
2.  Clone configurations from GitHub Repo
3.  Setup for Vim plugins

## Install Vim

安裝 Vim 8.2 套件。

```
sudo pacman -S vim
```

## Clone configurations from GitHub Repo

**下載 Vim 8 設定檔**。

```
git clone git@github.com:AlanJui/vim8.git ~/.vim
```

## Setup for Vim plugins

安裝 Plugin 相依之作業系統軟件

```
$ sudo pacman -S ripgrep

$ sudo pacman -S fzf
```
