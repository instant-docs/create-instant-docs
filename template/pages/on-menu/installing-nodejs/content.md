Below is a step-by-step guide to installing Node.js on Windows, macOS, and popular Linux distributions such as Ubuntu/Debian and Fedora.

## Installing Node.js on Windows

1. **Download the Installer:**
   - Go to the [Node.js download page](https://nodejs.org/en/download/).
   - Download the installer suitable for your version of Windows (Windows 7/8/10).

2. **Run the Installer:**
   - Double-click the downloaded `.msi` file to start the installer.
   - Follow the on-screen instructions: click "Next" through the license agreement and then click "I Agree".
   - Choose where you want Node.js installed, usually the default is fine.
   - Click "Install" and wait for the installation to complete.
   - Once installed, click "Finish".

3. **Verify Installation:**
   - Open a Command Prompt (cmd).
   - Type `node -v` to check the Node.js version.
   - Type `npm -v` to check the npm version.

## Installing Node.js on macOS

1. **Using Homebrew (Recommended):**
   - Install [Homebrew](https://brew.sh/) if you haven't already. It’s a package manager for macOS which makes it easy to install software.
   ```sh
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```
   - Install Node.js using Homebrew:
   ```sh
   brew install node
   ```

2. **Download the Installer:**
   - Go to the [Node.js download page](https://nodejs.org/en/download/).
   - Download the macOS installer (pkg file).

3. **Run the Installer:**
   - Double-click the downloaded `.pkg` file and follow the on-screen instructions.
   - The installation will include Node.js and npm automatically.

4. **Verify Installation:**
   - Open a Terminal.
   - Type `node -v` to check the Node.js version.
   - Type `npm -v` to check the npm version.

## Installing Node.js on Ubuntu/Debian (Linux)

1. **Using Ubuntu’s Default Repository:**
   - Update your package index:
   ```sh
   sudo apt update
   ```
   - Install Node.js and npm using `apt`:
   ```sh
   sudo apt install nodejs npm
   ```
   - If you also want to include the npm package manager, use:
   ```sh
   sudo apt install node-legacy
   ```

2. **Using Ubuntu’s Default Repository (Alternative):**
   - Install NodeSource repository for a more recent version of Node.js:
   ```sh
   curl -fsSL https://deb.nodesource.com/setup_16.x | sudo bash -
   sudo apt install nodejs
   ```
   - You can replace `16` with any other version number (e.g., 14, 18) as needed.

3. **Verify Installation:**
   - Open a Terminal.
   - Type `node -v` to check the Node.js version.
   - Type `npm -v` to check the npm version.

## Installing Node.js on Fedora (Linux)

1. **Using Fedora’s Default Repository:**
   - Update your package index:
   ```sh
   sudo dnf update
   ```
   - Install Node.js and npm using `dnf`:
   ```sh
   sudo dnf install nodejs
   ```

2. **Verify Installation:**
   - Open a Terminal.
   - Type `node -v` to check the Node.js version.
   - Type `npm -v` to check the npm version.

By following these steps, you should have Node.js and npm installed on your Windows, macOS, Ubuntu/Debian, or Fedora system.