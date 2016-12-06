# Express/Node.js - Windows Setup
If you are running AutoRenter Express/Node.js on a Windows environment, there are additional steps you must take to ensure the virtual environment is compatible with your host.

- All commands must be run from a PowerShell launched in Administrator mode.

## Enable Symbolic Links in PowerShell

1) Enable all four evaluations of Symbolic Links.

    ```PowerShell
	fsutil behavior set SymlinkEvaluation L2L:1 R2R:1 L2R:1 R2L:1
	```

2) Verify that all Symlink evaluations are now set to `enabled`:

    ```PowerShell
    fsutil behavior query SymlinkEvaluation

    # Should return:
    Local to local symbolic links are enabled.
    Local to remote symbolic links are enabled.
    Remote to local symbolic links are enabled.
    Remote to remote symbolic links are enabled.
    ```

## Add Vagrant directories to your environment's PATH.

1) Launch the Environment Variables dialog

    ```PowerShell
    rundll32 sysdm.cpl,EditEnvironmentVariables
    ```

2) In the `System Variables` list of the Environment Variables dialog, scroll down to `Path` and click `Edit`.

3) In the `Edit environment variable` dialog, click "new" and add each of these paths. *Your Git installation's path is assumed to be `C:\Program Files\Git`*

    * C:\Program Files\Git\bin

    * C:\Program Files\Git\cmd

    * C:\Program Files\Git\usr\bin

4) Close and reopen any running instances of PowerShell so that the new path variables are registered.

## Use PowerShell to launch Vagrant

- You must use PowerShell, launched in Administrator mode, to launch Vagrant.
- Cygwin, Git Bash, and other GNU ports are untested and unsupported.
