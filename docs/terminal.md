---
sidebar: auto
---

# 終端機設定指引

作業程序：

- 安裝 Nerd Font 字型
- 設定終端機使用 Nerd Font 字型

## 安裝 Nerd Font 字型

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

## 設定終端機使用 Nerd Font 字型

## 驗證

## 參考
