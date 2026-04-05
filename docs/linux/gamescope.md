---
sidebar_position: 3
---

# Gamescope

I could use Bazzite or any other distro that have Gamescope preinstalled but I don't like that if you choose to have Gamescope preinstalled, gamescope is always launched first and if you want to boot in a more traditionnal desktop environment like KDE or Gnome first,it is not possible. 

Also I had some problem with bazzite (without gamescope) but I don't remember what, I think it was because of the distrobox but I might be wrong. 

And I prefer to have a non immutable distro on my main pc (I have a steam deck with still SteamOS on it (so immutable) but it is not my main pc and SteamOS 3.0 was made for the steam deck) as I like to tinker (using Fedora at the moment)

So I found this [reddit post](https://www.reddit.com/r/linux_gaming/comments/1jh2sdr/i_automated_switching_to_steam_gamemode_and_back/) that change to gamescope when changing tty

And this [github page](https://github.com/shahnawazshahin/steam-using-gamescope-guide) is for login directly into gamescope that I'll surely use in the future if I use a computer as a HTPC

## Warning
If you have steam games on a partition other than the main linux install, in your normal desktop environment, the saves/prefix will be on the partition where the games is installed, e.g. :  `/run/media/partition/SteamLibrary/steamapps/compatdata/2246340/pfx/drive_c/Program Files (x86)/Steam/userdata/91543845/2246340/`

But in gamescope the save will be located in the home directory: 

`/home/yvain/.steam/steam/steamapps/compatdata/2246340/pfx/drive_c/Program Files (x86)/Steam/userdata/91543845/2246340/`

And this difference makes that the saves won't be up to date and the steam cloud won't always update one side, I don't remember which so I have to copy the save from either side. And worse, if the games doesn't have cloud save, it is necessary to copy the files 

Maybe there is a fix to that to tell where the save should be in the Gamescope side or in the desktop side but I don't know yet and I didn't see on the internet if someone has encountered this problem and solved it.

### Update April 4th 2026
I found [this program](https://github.com/mtkennerly/ludusavi) that help back up and restore to the save file it founds, have not really tried it yet but it seems really good

## My files
### Warning
You'll surely have to modify the file gamescope-session
### Download
[Download zip](../files/gamescope.zip)
## Installation
### Information
The reddit post will be much more informative at what all these do
### Steps
#### Install gamescope and mangohud
```bash
sudo dnf install gamescope mangohud
```
#### Go through first setup of gamescope
```bash
gamescope
```
#### Copy and modify the necessary files 
```bash
chmod +x gamescope-session
cp gamescope-session ~/.local/bin/
```
```bash
chmod +x steamos-session-select  
cp steamos-session-select ~/.local/bin/
```
```bash
chmod +x steamos-select-branch  
cp steamos-select-branch ~/.local/bin/
```
```bash
chmod +x steamos-update  
cp steamos-update ~/.local/bin/
```
```bash
chmod +x jupiter-biosupdate
cp jupiter-biosupdate ~/.local/bin/
```
```bash
sudo systemctl edit getty@tty3
```
#### At the beginning and replace username
```sh
[Service]
ExecStart=
ExecStart=-/sbin/agetty -o '-p -f -- \\u' --noclear --autologin <username> %I TERM
Restart=no
```

```bash
nano ~/.bashrc 
```
#### At the end
```
alias gsteam="gamescope-session; chvt 2; exit"
```
```bash
nano ~/.bash_profile
```
#### At the end
```sh
if [[ $(tty) == "/dev/tty3" ]]; then
    gsteam
fi
```
#### Reboot and press ctrl+alt+f3