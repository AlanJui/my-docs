---
sidebar: auto
---

# Node.JS 環境建置指引

## 安裝與設定

（1）安裝 Node.JS 版本管理套件：n (Node.js Versions Manager)
    
```
cd
curl -L https://git.io/n-install | bash
. ~/.bashrc
```

（2）以 Node.JS 版本管理套件，安裝 LTS 版本

```
n lts
```

```
[alanjui@VB03-ArchLinux-KDE ~]$ n lts
installed : v14.15.4 (with npm 6.14.10)
```     

## 驗證安裝結果

```
node -v
npm -v
```

```
[alanjui@VB03-ArchLinux-KDE ~]$ node -v
v14.15.4

[alanjui@VB03-ArchLinux-KDE ~]$ npm -v
6.14.10
```

# 安裝 yarn 套件管理工具

Node.JS 的套件管理工具除了官方提供的 npm ，還有另一套廣為群眾喜歡的 yarn 。
  
（1）安裝軟體套件

```
pacman -S yarn
```

（2）驗證

```
[alanjui@VB03-ArchLinux-KDE ~]$ sudo pacman -S yarn
正在解決依賴關係…
正在檢查衝突的軟體包…
    
軟體包 (3) libuv-1.40.0-1  nodejs-15.5.1-1  yarn-1.22.10-1
    
總計下載大小：   9.61 MiB
總計安裝大小：  35.08 MiB
    
:: 進行安裝嗎？ [Y/n] y
:: 正在接收軟體包…
libuv-1.40.0-1-x86_64                               224.8 KiB  1561 KiB/s 00:00 [##############################################] 100%
nodejs-15.5.1-1-x86_64                                8.5 MiB  10.8 MiB/s 00:01 [##############################################] 100%
yarn-1.22.10-1-any                                  953.5 KiB  10.3 MiB/s 00:00 [##############################################] 100%
(3/3) 正在檢查鑰匙圈中的鑰匙                                                     [##############################################] 100%
(3/3) 正在檢查軟體包完整性                                                       [##############################################] 100%
(3/3) 正在載入軟體包檔案                                                         [##############################################] 100%
(3/3) 正在檢查檔案衝突                                                           [##############################################] 100%
(3/3) 正在檢查可用磁碟空間                                                       [##############################################] 100%
:: 正在處理軟體包變更…
(1/3) 正在安裝 libuv                                                             [##############################################] 100%
(2/3) 正在安裝 nodejs                                                            [##############################################] 100%
nodejs 的可選依賴
npm: nodejs package manager
(3/3) 正在安裝 yarn                                                              [##############################################] 100%
:: 正在執行後置作業掛鉤…
(1/1) Arming ConditionNeedsUpdate...
    
[alanjui@VB03-ArchLinux-KDE ~]$ which yarn
/usr/bin/yarn

[alanjui@VB03-ArchLinux-KDE ~]$ yarn --version
1.22.10

[alanjui@VB03-ArchLinux-KDE ~]$ node -v
v14.15.4

[alanjui@VB03-ArchLinux-KDE ~]$ npm -v
6.14.10
```
    
## 參考

 - [n – Interactively Manage Your Node.js Versions](https://github.com/tj/n#n--interactively-manage-your-nodejs-versions)


