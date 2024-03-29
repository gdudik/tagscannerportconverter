This companion program is designed to work with USB UHF tag readers that act as USB HID (Human Interface Devices) and collect the correct piece of data that Ipico TagScanner, Race Director, or Trident Tag Scanner use to record chip reads.

This program works with a virtual COM port software like com0com or any other software that creates two virtual serial ports and connects them with an emulated null modem connection.

~~Unfortunately, com0com has crappy drivers that require Win10 machines to disable secure boot. But it's free!~~

# Setup

~~## Secure Boot Disable~~

~~You will need to disable BitLocker before attempting this. Click the Start Menu and search for `Device Encryption`. You will find Bitlocker/Device Encryption settings. You're looking for "Disable Bitlocker" or "Disable Encryption". Windows will show a progress bar and say you can keep using your computer. This process can take several hours to complete.~~
~~Before we begin, you'll need to disable Secure Boot in the BIOS.~~
~~For AthleticTiming Dell Machines~~

~~1. Turn the computer off~~
~~2. Press the power button to turn the computer on. As soon as you do, start tapping the `F2` key until you see the message "Preparing to Enter Setup".~~
~~3. From the menu that appears, click on "Secure Boot", then "Secure Boot Enable".~~
~~4. Select the "Disabled" radio button, then click "Apply" and "Exit".~~
~~5. The computer will then restart~~

## com0com Setup
1. Download com0com [here](https://github.com/gdudik/tagscannerportconverter/raw/master/com0com.zip)
2. Extract the zip file to `C:\`. It should make a folder called `C:\com0com`
3. Open the Start Menu, type `cmd`, and then, under Command Prompt, select "Run As Administrator".
4. Enter `cd C:\com0com\x64`
5. Enter `setupc`
6. Enter `install - -`. CNCA0 and CNCB0 should be returned.
7. Enter `change CNCA0 PortName=COM98`. You may be prompted by Windows to allow an installation. Allow it.
8. Enter `change CNCB0 PortName=COM99`.

## TagScanner or Race Director Setup

1. Open the tag-scanning program of your choice, whether that's Race Director, Ipico Tagscanner, or whatever.
2. Select COM98 as the serial port to listen to.
3. Start the tag logging process by clicking start or equivalent in your tag scanner program. 

## Final Setup

1. Download the TagScannerPortConverter program [here](https://github.com/gdudik/tagscannerportconverter/raw/master/tagscannerportconverter.zip). Ignore any dire warnings from Chrome about how it's never heard of what you're downloading etc etc.
2. Unzip the folder to a location of your choice for safekeeping. 
3. From inside the folder you unzipped, run `tagscannerportconverter-win.exe`. 
4. Ignore any dire warnings from Windows about how it's never heard of this software, etc.
5. When you run the program, you'll be prompted to enter a COM port number. Enter `99`
6. After that, you'll be prompted to enter a tag. Scan your first tag and it should appear in the Race Director or Ipico software.

If you're testing and you don't have a tag scanner, here are some sample tags for you to type in:
`0064eef518ba`
`0217ae1bc40b`

Remember that the USB tag scanner for UHF acts as a keyboard. It will type the Tag ID and then hit `enter`. If you click out of the command line window where the program is running, any tags you scan will get typed into whatever program you're focused on, rather than being saved.
I recommend having the tag logger software and the command line window with the port converter software open side-by-side so you can see what's happening. Entertainment while tag scanning should be loaded on a TV or other computer.