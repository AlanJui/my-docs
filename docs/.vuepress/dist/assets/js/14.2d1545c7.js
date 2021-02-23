(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{379:function(s,n,a){"use strict";a.r(n);var e=a(40),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"python-guideline"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#python-guideline"}},[s._v("#")]),s._v(" Python Guideline")]),s._v(" "),a("h2",{attrs:{id:"install-python-tools"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-python-tools"}},[s._v("#")]),s._v(" Install Python Tools")]),s._v(" "),a("ol",[a("li",[s._v("Install software")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("cd\ngit clone https://github.com/pyenv/pyenv.git ~/.pyenv\ngit clone https://github.com/pyenv/pyenv-virtualenv.git ~/.pyenv/plugins/pyenv-virtualenv\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("Configure Shell")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("vim ~/.profile\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("~/.profile:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('....\n#--------------------------------------------------------------------\n# pyenv\n#--------------------------------------------------------------------\n\nexport PYENV_ROOT="$HOME/.pyenv"\nexport PATH="$PYENV_ROOT/bin:$PATH"\n\nif command -v pyenv 1>/dev/null 2>&1; then\n  eval "$(pyenv init -)"\n  eval "$(pyenv virtualenv-init -)"   # pyenv-virtualenv: pyenv plugin\nfi\nexport PYENV_VIRTUALENV_DISABLE_PROMPT=1\n\n....\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("Reset shell configuration")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("exec $SHELL\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"install-python-interpreter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-python-interpreter"}},[s._v("#")]),s._v(" Install Python Interpreter")]),s._v(" "),a("ol",[a("li",[s._v("Install")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("pyenv install 3.8.5\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ pyenv versions\n* system (set by /Users/alanjui/.pyenv/version)\n\n$ pyenv install 3.8.5\npython-build: use openssl@1.1 from homebrew\npython-build: use readline from homebrew\nDownloading Python-3.8.5.tar.xz...\n-> https://www.python.org/ftp/python/3.8.5/Python-3.8.5.tar.xz\nInstalling Python-3.8.5...\npython-build: use readline from homebrew\npython-build: use zlib from xcode sdk\nInstalled Python-3.8.5 to /Users/alanjui/.pyenv/versions/3.8.5\n\n$ pyenv versions\n* system (set by /Users/alanjui/.pyenv/version)\n  3.8.5\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("Configure default Python Interpreter")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("pyenv global <VerNo>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("Ex: Without Python 2 specified")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ pyenv global 3.8.5\n\n$ pyenv versions\n  system\n* 3.8.5 (set by /Users/alanjui/.pyenv/version)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("Ex: With Python 2 and Python 3 specified")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$  pyenv versions\n  system\n  2.7.16\n* 3.8.5 (set by /Users/alanjui/.pyenv/version)\n  3.9.1\n\n$ pyenv global 2.7.16 3.9.1\n\n$ pyenv versions\n  system\n* 2.7.16 (set by /Users/alanjui/.pyenv/version)\n  3.8.5\n* 3.9.1 (set by /Users/alanjui/.pyenv/version)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('$ which python\n/usr/bin/python\n$ la /usr/bin/python\nlrwxr-xr-x  1 root  wheel    75B  1  1  2020 /usr/bin/python -> ../../System/Library/Frameworks/Python.framework/Versions/2.7/bin/python2.7\n$ /usr/bin/python\n\nWARNING: Python 2.7 is not recommended.\nThis version is included in macOS for compatibility with legacy software.\nFuture versions of macOS will not include Python 2.7.\nInstead, it is recommended that you transition to using \'python3\' from within Terminal.\n\nPython 2.7.16 (default, Dec 21 2020, 23:00:36)\n[GCC Apple LLVM 12.0.0 (clang-1200.0.30.4) [+internal-os, ptrauth-isa=sign+stri on darwin\nType "help", "copyright", "credits" or "license" for more information.\n>>> ^D\n\n$ which python2\n/usr/bin/python2\n$ la /usr/bin/python2\nlrwxr-xr-x  1 root  wheel    75B  1  1  2020 /usr/bin/python2 -> ../../System/Library/Frameworks/Python.framework/Versions/2.7/bin/python2.7\n\n$ which python3\n/usr/local/bin/python3\n$ la /usr/local/bin/python3\nlrwxr-xr-x  1 alanjui  admin    40B  2 13 12:23 /usr/local/bin/python3 -> ../Cellar/python@3.9/3.9.1_8/bin/python3\n$ /usr/local/bin/python3\nPython 3.9.1 (default, Feb  3 2021, 07:38:02)\n[Clang 12.0.0 (clang-1200.0.32.29)] on darwin\nType "help", "copyright", "credits" or "license" for more information.\n>>> ^D\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br")])]),a("p",[s._v("Python installed locally:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ ls -l -d  ~/.pyenv/shims/python[0-9]\n-rwxr-xr-x  1 alanjui  staff  408  2 20 11:56 /Users/alanjui/.pyenv/shims/python2\n-rwxr-xr-x  1 alanjui  staff  408  2 20 11:27 /Users/alanjui/.pyenv/shims/python3\n\n$ ls -l -d ~/.pyenv/shims/python\n-rwxr-xr-x  1 alanjui  staff  408  2 20 11:27 /Users/alanjui/.pyenv/shims/python\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('$ ~/.pyenv/shims/python\nPython 2.7.16 (default, Feb 20 2021, 11:55:00)\n[GCC Apple LLVM 12.0.0 (clang-1200.0.32.28)] on darwin\nType "help", "copyright", "credits" or "license" for more information.\n>>>\n\n$ ~/.pyenv/shims/python3\nPython 3.9.1 (default, Feb 20 2021, 11:45:58)\n[Clang 12.0.0 (clang-1200.0.32.28)] on darwin\nType "help", "copyright", "credits" or "license" for more information.\n>>>\n\n$ exec $SHELL\n\n$ echo $PATH\n/usr/local/opt/openjdk/bin:/Users/alanjui/.pyenv/plugins/pyenv-virtualenv/shims:/Users/alanjui/.pyenv/shims:/Users/alanjui/.pyenv/bin:/usr/local/opt/sqlite/bin:/Users/alanjui/.yarn/bin:/Users/alanjui/.config/yarn/global/node_modules/.bin:/Users/alanjui/.gem/bin:/usr/local/opt/libiconv/bin:/usr/local/opt/openssl@1.1/bin:/usr/local/opt/ruby/bin:/Users/alanjui/bin:/Users/alanjui/.local/bin:/usr/local/bin:/usr/bin:/bin:/usr/local/sbin:/usr/sbin:/sbin:/Applications/Visual Studio Code.app/Contents/Resources/app/bin:/usr/local/share/dotnet:/Users/alanjui/n/bin:/Applications/Postgres.app/Contents/Versions/latest/bin:/Users/alanjui/.fzf/bin\n\n$ which python\n/Users/alanjui/.pyenv/shims/python\n$ /Users/alanjui/.pyenv/shims/python\nPython 2.7.16 (default, Feb 20 2021, 11:55:00)\n[GCC Apple LLVM 12.0.0 (clang-1200.0.32.28)] on darwin\nType "help", "copyright", "credits" or "license" for more information.\n>>>\n\n$ which python3\n/Users/alanjui/.pyenv/shims/python3\n$ /Users/alanjui/.pyenv/shims/python3\nPython 3.9.1 (default, Feb 20 2021, 11:45:58)\n[Clang 12.0.0 (clang-1200.0.32.28)] on darwin\nType "help", "copyright", "credits" or "license" for more information.\n>>>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br")])]),a("h2",{attrs:{id:"manage-python-virtualenvs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#manage-python-virtualenvs"}},[s._v("#")]),s._v(" Manage Python Virtualenvs")]),s._v(" "),a("h3",{attrs:{id:"create-virtualenv"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-virtualenv"}},[s._v("#")]),s._v(" Create Virtualenv")]),s._v(" "),a("ol",[a("li",[s._v("Create")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("pyenv virtualenv <VerNo> <VirtualEnvName>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("Ex:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("pyenv virtualenv 3.9.1 venv-3.9.1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("Configure VirtualEnv for Project")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("pyenv local <VirtualEnvName>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ cd ~/workspace/django/test-100\n\n$ pyenv virtualenv 3.9.1 venv-3.9.1\nLooking in links: /var/folders/36/6kwybs_92bj1_x96p67h7q8w0000gp/T/tmp67ulkd55\nRequirement already satisfied: setuptools in /Users/alanjui/.pyenv/versions/3.9.1/envs/venv-3.9.1/lib/python3.9/site-packages (49.2.1)\nRequirement already satisfied: pip in /Users/alanjui/.pyenv/versions/3.9.1/envs/venv-3.9.1/lib/python3.9/site-packages (20.2.3)\n\n$ pyenv local venv-3.9.1\n\n$pyenv versions\n  system\n  2.7.16\n  3.8.5\n  3.9.1\n  3.9.1/envs/venv-3.9.1\n* venv-3.9.1 (set by /Users/alanjui/workspace/django/test-100/.python-version)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("h2",{attrs:{id:"configure-pip"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configure-pip"}},[s._v("#")]),s._v(" Configure pip")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ cd\n$ pyenv version\n2.7.16 (set by /Users/alanjui/.pyenv/version)\n3.9.1 (set by /Users/alanjui/.pyenv/version)\n\n$ ~/.pyenv/versions/3.9.1/bin/python3.9 -m pip install --upgrade pip\nCollecting pip\n  Downloading pip-21.0.1-py3-none-any.whl (1.5 MB)\n     |████████████████████████████████| 1.5 MB 1.6 MB/s\nInstalling collected packages: pip\n  Attempting uninstall: pip\n    Found existing installation: pip 20.2.3\n    Uninstalling pip-20.2.3:\n      Successfully uninstalled pip-20.2.3\nSuccessfully installed pip-21.0.1\n\n$ pip install pynvim\nCollecting pynvim\n  Using cached https://files.pythonhosted.org/packages/9c/76/d16f58648f4d3398ecd5b48ae7fb064f1701c51fe094e0b7b4e08586df0c/pynvim-0.4.2.tar.gz\nCollecting msgpack>=0.5.0 (from pynvim)\n  Downloading https://files.pythonhosted.org/packages/59/04/87fc6708659c2ed3b0b6d4954f270b6e931def707b227c4554f99bd5401e/msgpack-1.0.2.tar.gz (123kB)\n    100% |████████████████████████████████| 133kB 1.7MB/s\nCollecting trollius (from pynvim)\n  Using cached https://files.pythonhosted.org/packages/0b/31/356ae13ad4df58f963e9954d55118f6cffdb3a903c1547973ad7bc347fb9/trollius-2.2.post1.tar.gz\nCollecting greenlet (from pynvim)\n  Downloading https://files.pythonhosted.org/packages/92/be/878cc5314fa5aadce33e68738c1a24debe317605196bdfc2049e66bc9c30/greenlet-1.0.0.tar.gz (84kB)\n    100% |████████████████████████████████| 92kB 8.7MB/s\nCollecting six (from trollius->pynvim)\n  Using cached https://files.pythonhosted.org/packages/ee/ff/48bde5c0f013094d729fe4b0316ba2a24774b3ff1c52d924a8a4cb04078a/six-1.15.0-py2.py3-none-any.whl\nCollecting futures (from trollius->pynvim)\n  Using cached https://files.pythonhosted.org/packages/d8/a6/f46ae3f1da0cd4361c344888f59ec2f5785e69c872e175a748ef6071cdb5/futures-3.3.0-py2-none-any.whl\nInstalling collected packages: msgpack, six, futures, trollius, greenlet, pynvim\n  Running setup.py install for msgpack ... done\n  Running setup.py install for trollius ... done\n  Running setup.py install for greenlet ... done\n  Running setup.py install for pynvim ... done\nSuccessfully installed futures-3.3.0 greenlet-1.0.0 msgpack-1.0.2 pynvim-0.4.2 six-1.15.0 trollius-2.2.post1\nYou are using pip version 18.1, however version 20.3.4 is available.\nYou should consider upgrading via the 'pip install --upgrade pip' command.\n\n$ pip install --upgrade pip\nCollecting pip\n  Downloading https://files.pythonhosted.org/packages/27/79/8a850fe3496446ff0d584327ae44e7500daf6764ca1a382d2d02789accf7/pip-20.3.4-py2.py3-none-any.whl (1.5MB)\n    100% |████████████████████████████████| 1.5MB 5.3MB/s\nInstalling collected packages: pip\n  Found existing installation: pip 18.1\n    Uninstalling pip-18.1:\n      Successfully uninstalled pip-18.1\nSuccessfully installed pip-20.3.4\n\n$ which pip\n/Users/alanjui/.pyenv/shims/pip\n\n$ pip install pynvim\nDEPRECATION: Python 2.7 reached the end of its life on January 1st, 2020. Please upgrade your Python as Python 2.7 is no longer maintained. pip 21.0 will drop support for Python 2.7 in January 2021. More details about Python 2 support in pip can be found at https://pip.pypa.io/en/latest/development/release-process/#python-2-support pip 21.0 will remove support for this functionality.\nRequirement already satisfied: pynvim in ./.pyenv/versions/2.7.16/lib/python2.7/site-packages (0.4.2)\nRequirement already satisfied: msgpack>=0.5.0 in ./.pyenv/versions/2.7.16/lib/python2.7/site-packages (from pynvim) (1.0.2)\nRequirement already satisfied: trollius in ./.pyenv/versions/2.7.16/lib/python2.7/site-packages (from pynvim) (2.2.post1)\nRequirement already satisfied: greenlet in ./.pyenv/versions/2.7.16/lib/python2.7/site-packages (from pynvim) (1.0.0)\nRequirement already satisfied: six in ./.pyenv/versions/2.7.16/lib/python2.7/site-packages (from trollius->pynvim) (1.15.0)\nRequirement already satisfied: futures in ./.pyenv/versions/2.7.16/lib/python2.7/site-packages (from trollius->pynvim) (3.3.0)\n\n$ pip3 install pynvim\nCollecting pynvim\n  Using cached pynvim-0.4.2.tar.gz (42 kB)\nCollecting msgpack>=0.5.0\n  Using cached msgpack-1.0.2-cp39-cp39-macosx_10_14_x86_64.whl (74 kB)\nCollecting greenlet\n  Using cached greenlet-1.0.0-cp39-cp39-macosx_10_14_x86_64.whl (86 kB)\nUsing legacy 'setup.py install' for pynvim, since package 'wheel' is not installed.\nInstalling collected packages: msgpack, greenlet, pynvim\n    Running setup.py install for pynvim ... done\nSuccessfully installed greenlet-1.0.0 msgpack-1.0.2 pynvim-0.4.2\n\n$ la ~/.pyenv/versions/3.9.1/lib/python3.9/site-packages\ntotal 16\n-rw-r--r--   1 alanjui  staff   119B  2 20 11:46 README.txt\ndrwxr-xr-x   3 alanjui  staff    96B  2 20 11:46 __pycache__\n-rw-r--r--   1 alanjui  staff   126B  2 20 11:46 easy_install.py\ndrwxr-xr-x  10 alanjui  staff   320B  2 20 14:17 greenlet\ndrwxr-xr-x  10 alanjui  staff   320B  2 20 14:17 greenlet-1.0.0.dist-info\ndrwxr-xr-x   9 alanjui  staff   288B  2 20 14:17 msgpack\ndrwxr-xr-x   8 alanjui  staff   256B  2 20 14:17 msgpack-1.0.2.dist-info\ndrwxr-xr-x   5 alanjui  staff   160B  2 20 14:17 neovim\ndrwxr-xr-x   7 alanjui  staff   224B  2 20 14:05 pip\ndrwxr-xr-x  10 alanjui  staff   320B  2 20 14:05 pip-21.0.1.dist-info\ndrwxr-xr-x   6 alanjui  staff   192B  2 20 11:46 pkg_resources\ndrwxr-xr-x   9 alanjui  staff   288B  2 20 14:17 pynvim\ndrwxr-xr-x   9 alanjui  staff   288B  2 20 14:17 pynvim-0.4.2-py3.9.egg-info\ndrwxr-xr-x  45 alanjui  staff   1.4K  2 20 11:46 setuptools\ndrwxr-xr-x  12 alanjui  staff   384B  2 20 11:46 setuptools-49.2.1.dist-info\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br"),a("span",{staticClass:"line-number"},[s._v("80")]),a("br"),a("span",{staticClass:"line-number"},[s._v("81")]),a("br"),a("span",{staticClass:"line-number"},[s._v("82")]),a("br"),a("span",{staticClass:"line-number"},[s._v("83")]),a("br"),a("span",{staticClass:"line-number"},[s._v("84")]),a("br"),a("span",{staticClass:"line-number"},[s._v("85")]),a("br"),a("span",{staticClass:"line-number"},[s._v("86")]),a("br"),a("span",{staticClass:"line-number"},[s._v("87")]),a("br"),a("span",{staticClass:"line-number"},[s._v("88")]),a("br"),a("span",{staticClass:"line-number"},[s._v("89")]),a("br"),a("span",{staticClass:"line-number"},[s._v("90")]),a("br"),a("span",{staticClass:"line-number"},[s._v("91")]),a("br")])]),a("h2",{attrs:{id:"django-project"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#django-project"}},[s._v("#")]),s._v(" Django Project")]),s._v(" "),a("ol",[a("li",[s._v("Install package for projects")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("pip install -r requirements.txt\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ cd ~/workspace/django/test-100\n\n$ pyenv version\nvenv-3.9.1 (set by /Users/alanjui/workspace/django/test-100/.python-version)\n\n$ la ~/.pyenv/versions/3.9.1/envs/venv-3.9.1/lib/python3.9/site-packages\ntotal 8\ndrwxr-xr-x   3 alanjui  staff    96B  2 20 21:12 __pycache__\n-rw-r--r--   1 alanjui  staff   126B  2 20 21:12 easy_install.py\ndrwxr-xr-x   7 alanjui  staff   224B  2 20 21:12 pip\ndrwxr-xr-x  10 alanjui  staff   320B  2 20 21:12 pip-20.2.3.dist-info\ndrwxr-xr-x   6 alanjui  staff   192B  2 20 21:12 pkg_resources\ndrwxr-xr-x  45 alanjui  staff   1.4K  2 20 21:12 setuptools\ndrwxr-xr-x  12 alanjui  staff   384B  2 20 21:12 setuptools-49.2.1.dist-info\n\n$ pip install -r requirements.txt\n....\n\n$la ~/.pyenv/versions/3.9.1/envs/venv-3.9.1/lib/python3.9/site-packages\ntotal 616\ndrwxr-xr-x  12 alanjui  staff   384B  2 20 21:53 Django-3.1.7.dist-info\ndrwxr-xr-x   7 alanjui  staff   224B  2 20 21:53 __pycache__\ndrwxr-xr-x  12 alanjui  staff   384B  2 20 21:53 asgiref\ndrwxr-xr-x   9 alanjui  staff   288B  2 20 21:53 asgiref-3.3.1.dist-info\ndrwxr-xr-x  30 alanjui  staff   960B  2 20 21:53 astroid\ndrwxr-xr-x  10 alanjui  staff   320B  2 20 21:53 astroid-2.4.2.dist-info\ndrwxr-xr-x  11 alanjui  staff   352B  2 20 21:53 autopep8-1.5.5.dist-info\n-rw-r--r--   1 alanjui  staff   148K  2 20 21:53 autopep8.py\ndrwxr-xr-x  22 alanjui  staff   704B  2 20 21:53 django\n-rw-r--r--   1 alanjui  staff   126B  2 20 21:12 easy_install.py\ndrwxr-xr-x  10 alanjui  staff   320B  2 20 21:53 greenlet\ndrwxr-xr-x   9 alanjui  staff   288B  2 20 21:53 greenlet-1.0.0-py3.9.egg-info\ndrwxr-xr-x  34 alanjui  staff   1.1K  2 20 21:53 isort\ndrwxr-xr-x   9 alanjui  staff   288B  2 20 21:53 isort-5.7.0.dist-info\ndrwxr-xr-x  10 alanjui  staff   320B  2 20 21:53 lazy_object_proxy\ndrwxr-xr-x  10 alanjui  staff   320B  2 20 21:53 lazy_object_proxy-1.4.3.dist-info\ndrwxr-xr-x  11 alanjui  staff   352B  2 20 21:53 mccabe-0.6.1.dist-info\n-rw-r--r--   1 alanjui  staff    10K  2 20 21:53 mccabe.py\ndrwxr-xr-x   9 alanjui  staff   288B  2 20 21:53 msgpack\ndrwxr-xr-x   7 alanjui  staff   224B  2 20 21:53 msgpack-1.0.2-py3.9.egg-info\ndrwxr-xr-x   5 alanjui  staff   160B  2 20 21:53 neovim\ndrwxr-xr-x  10 alanjui  staff   320B  2 20 21:53 neovim_remote-2.4.0.dist-info\ndrwxr-xr-x   5 alanjui  staff   160B  2 20 21:53 nvr\ndrwxr-xr-x   7 alanjui  staff   224B  2 20 21:54 pip\ndrwxr-xr-x  10 alanjui  staff   320B  2 20 21:54 pip-21.0.1.dist-info\ndrwxr-xr-x   6 alanjui  staff   192B  2 20 21:12 pkg_resources\ndrwxr-xr-x  16 alanjui  staff   512B  2 20 21:53 psutil\ndrwxr-xr-x   9 alanjui  staff   288B  2 20 21:53 psutil-5.8.0-py3.9.egg-info\ndrwxr-xr-x  11 alanjui  staff   352B  2 20 21:53 pycodestyle-2.6.0.dist-info\n-rw-r--r--   1 alanjui  staff   101K  2 20 21:53 pycodestyle.py\ndrwxr-xr-x  20 alanjui  staff   640B  2 20 21:53 pylint\ndrwxr-xr-x  10 alanjui  staff   320B  2 20 21:53 pylint-2.6.2.dist-info\ndrwxr-xr-x   9 alanjui  staff   288B  2 20 21:53 pynvim\ndrwxr-xr-x   9 alanjui  staff   288B  2 20 21:53 pynvim-0.4.2-py3.9.egg-info\ndrwxr-xr-x  10 alanjui  staff   320B  2 20 21:53 pytz\ndrwxr-xr-x  12 alanjui  staff   384B  2 20 21:53 pytz-2021.1.dist-info\ndrwxr-xr-x  45 alanjui  staff   1.4K  2 20 21:12 setuptools\ndrwxr-xr-x  12 alanjui  staff   384B  2 20 21:12 setuptools-49.2.1.dist-info\ndrwxr-xr-x   9 alanjui  staff   288B  2 20 21:53 six-1.15.0.dist-info\n-rw-r--r--   1 alanjui  staff    33K  2 20 21:53 six.py\ndrwxr-xr-x  16 alanjui  staff   512B  2 20 21:53 sqlparse\ndrwxr-xr-x  11 alanjui  staff   352B  2 20 21:53 sqlparse-0.4.1.dist-info\ndrwxr-xr-x   8 alanjui  staff   256B  2 20 21:53 toml\ndrwxr-xr-x   9 alanjui  staff   288B  2 20 21:53 toml-0.10.2.dist-info\ndrwxr-xr-x   8 alanjui  staff   256B  2 20 21:53 wrapt\ndrwxr-xr-x   7 alanjui  staff   224B  2 20 21:53 wrapt-1.12.1-py3.9.egg-info\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);