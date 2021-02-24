# 技術文件模版

使用 VuePress 平台，做為「技術文件模版」，以利「技術文件編輯與發行作業」更加便利。

本專案以：「使用 Manjaro KDE 作業系統，建置軟體開發環境為目標，透過實例展示，如
何將 VuePress 當成技術文件模版」。

## 安裝作業

1. 下載文件模版。

```
cd ~/workspace/docs
git clone git@github.com:AlanJui/my-docs.git
```

2. 安裝 npm 套件

```
cd my-docs
npm install
```

## 編輯作業

1. 啟動「編輯預覽」功能。

```
yarn docs:dev
```

```
npm run docs:dev
```

2. 啟動「編輯器」，執行編輯作業。

```
nvim
```

## 發行文件作業

1. 執行「文件發行建構作業」。

```
yarn docs:dev
```

```
npm run docs:dev
```

2. 預覽建構作業成品。

```
yarn docs:dist
```

```
npm run docs:dist
```
