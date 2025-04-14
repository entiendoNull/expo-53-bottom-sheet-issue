# Repro of an issue regarding BottomSheet in @expo/ui SDK 53

Issue: https://github.com/expo/expo/issues/36145

The bottom sheet is always open on mount, regardless of the value provided in `isOpened`.

![image](https://github.com/user-attachments/assets/6ebf740e-ea17-4194-884a-b94c7fc50646)

### Run it to repro

First `bun install`, create a dev build and run it on your simulator/device.
