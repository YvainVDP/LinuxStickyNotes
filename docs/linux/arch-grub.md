---
sidebar_position: 1
---

# Arch-grub


Used when the grub of arch was broken, I don't know why so I had this when  it broke. Since then, I changed distro, I don't know if I have will have this issue ever again even if I decide to go back to arch but I still prefer to have it. Use these commands when in arch install.

You will maybe need to find the correct drive for your linux install, but I don't remember the command to check the drives, will maybe update if I have to redo it

## Step
Have at hand the arch iso in a usb drive (using balena etcher or other usb flasher but I recommend ventoy).

Load your keyboard layout (by default it is the us layout so maybe you won't have to change it)
```
loadkeys be-latin1
```
Mount your root drive
```
mount /dev/sda2 /mnt
```
Go into your drive
```
arch-chroot /mnt
```
Mount your efi
```
mount /dev/sda1 /boot/efi
```
Repair grub
```
grub-mkconfig -o /boot/grub/grub.cfg
```
```
exit
```
Unmount
```
umount -l /mnt
```

## Note for myself
Use React page to use a select input for the keyboard selection
