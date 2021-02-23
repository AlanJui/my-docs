---
sidebar: auto
---

# GitHub SSH Key 建置與設定指引

作業程序：

1.  Generating a new SSH key
2.  Adding SSH key to the ssh-agent
3.  Add the SSH key to GitHub account

## macOS

1.  Generating a new SSH key

    ```
    $ ssh-keygen -t ed25519 -C "alanjui.1960@gmail.com"
    ```

2.  Adding SSH key to the ssh-agent

    (1) Start the ssh-agent in the background.

         $ eval "$(ssh-agent -s)"

    (2) If you're using macOS Sierra 10.12.2 or later, you will need to modify your `~/.ssh/config` file to automatically load keys into the ssh-agent and store passphrases in your keychain.

        vim ~/.ssh/config

    《config》:

        Host *
          AddKeysToAgent yes
          UseKeychain yes
          IdentityFile ~/.ssh/id_ed25519

    (3) Add your SSH private key to the ssh-agent and store your passphrase in the keychain.

        $ ssh-add -K ~/.ssh/id_ed25519

3.  Add the SSH key to GitHub account

    ```
    $ pbcopy < ~/.ssh/id_ed25519.pub
    ```

## Linux

1.  Generating a new SSH key

        $ ssh-keygen -t ed25519 -C "alanjui.1960@gmail.com"

2.  Adding SSH key to the ssh-agent

    Start the ssh-agent in the background.

        $ eval $(ssh-agent -s)

3.  Add the SSH key to GitHub account

    - ArchLinux

    ```
    $ sudo pacman -S xclip
    $ xclip -selection clipboard < ~/.ssh/id_ed25519.pub
    ```

    - Debian / Ubuntu

    ```
    $ sudo apt install xclip
    $ xclip -selection clipboard < ~/.ssh/id_ed25519.pub
    ```
