# Express/Node.js - Windows Setup
If you are running AutoRenter Express/Node.js on a Windows environment, there are additional steps you must take to ensure the virtual environment is compatible with your host.

- All commands must be run from a Powershell launched in Administrator mode.

## Enable Symbolic Links in Powershell

Enable all four evaluations of Symbolic Links.

```Powershell
fsutil behavior set SymlinkEvaluation L2L:1 R2R:1 L2R:1 R2L:1
```

Verify that all Symlink evaluations are now set to `enabled`:

```Powershell
fsutil behavior query SymlinkEvaluation

# Should return:
Local to local symbolic links are enabled.
Local to remote symbolic links are enabled.
Remote to local symbolic links are enabled.
Remote to remote symbolic links are enabled.
```

## Add Vagrant directories to your environment's PATH.

This document assumes that your install path for Git is `C:\Program Files\Git`.

1) Launch the Environment Variables dialog

```Powershell
rundll32 sysdm.cpl,EditEnvironmentVariables
```
2) In the `System Variables` list of the Environment Variables dialog, scroll down to `Path` and click `Edit`.

3) In the `Edit environment variable` dialog, add the following paths (Clicking "New" to add each path):

  - C:\Program Files\Git\bin

  - C:\Program Files\Git\cmd

  - C:\Program Files\Git\usr\bin

4) Close and reopen any running instances of Powershell so that the new path variables are registered.

## Use Powershell to launch Vagrant

- You must use Powershell, launched in Administrator mode, to launch Vagrant.
- Cygwin, Git Bash, and other GNU ports are untested and unsupported.
