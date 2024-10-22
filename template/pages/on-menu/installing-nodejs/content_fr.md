Voici un guide étape par étape pour installer Node.js sur Windows, macOS et les distributions Linux populaires telles qu'Ubuntu/Debian et Fedora.

## Installer Node.js sur Windows

1. **Télécharger le Installer:**
   - Visitez la page de téléchargement de Node.js (https://nodejs.org/en/download/).
   - Téléchargez l'installateur compatible avec votre version de Windows (Windows 7/8/10).

2. **Exécuter l'Installer:**
   - Double-cliquez sur le fichier `.msi` téléchargé pour démarrer l'installateur.
   - Suivez les instructions à l'écran: sélectionnez "Suivant" à travers l'accord de licence et cliquez sur "J'accède".
   - Choisissez où vous souhaitez installer Node.js, généralement la valeur par défaut est suffisante.
   - Cliquez sur "Installer" et attendez que l'installation soit terminée.
   - Une fois installé, cliquez sur "Terminer".

3. **Vérifier l'Installation:**
   - Ouvrez un Command Prompt (cmd).
   - Tapez `node -v` pour vérifier la version de Node.js.
   - Tapez `npm -v` pour vérifier la version de npm.

## Installer Node.js sur macOS

1. **Utiliser Homebrew (Recommandé):**
   - Installez Homebrew si vous n'avez pas déjà. C'est un gestionnaire de paquets pour macOS qui facilite l'installation de logiciels.
   ```sh
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)
   ```
   - Installez Node.js en utilisant Homebrew :
   ```sh
   brew install node
   ```

2. **Télécharger l'Installer:**
   - Visitez la page de téléchargement de Node.js (https://nodejs.org/en/download/).
   - Téléchargez l'installateur pour macOS (fichier pkg).

3. **Exécuter l'Installer:**
   - Double-cliquez sur le fichier `.pkg` téléchargé et suivez les instructions à l'écran.
   - L'installation inclut automatiquement Node.js et npm.

4. **Vérifier l'Installation:**
   - Ouvrez un Terminal.
   - Tapez `node -v` pour vérifier la version de Node.js.
   - Tapez `npm -v` pour vérifier la version de npm.

## Installer Node.js sur Ubuntu/Debian (Linux)

1. **En utilisant le Repository par défaut d'Ubuntu:**
   - Mettez à jour votre index de paquets :
   ```sh
   sudo apt update
   ```
   - Installez Node.js et npm en utilisant `apt` :
   ```sh
   sudo apt install nodejs npm
   ```
   - Si vous souhaitez également inclure le gestionnaire de paquets npm, utilisez :
   ```sh
   sudo apt install node-legacy
   ```

2. **En utilisant le Repository par défaut d'Ubuntu (Alternative):**
   - Installez le repository NodeSource pour une version plus récente de Node.js :
   ```sh
   curl -fsSL https://deb.nodesource.com/setup_16.x | sudo bash -
   sudo apt install nodejs
   ```
   - Vous pouvez remplacer `16` par n'importe quelle autre version numéro (par exemple, 14, 18) si nécessaire.

3. **Vérifier l'Installation:**
   - Ouvrez un Terminal.
   - Tapez `node -v` pour vérifier la version de Node.js.
   - Tapez `npm -v` pour vérifier la version de npm.

## Installer Node.js sur Fedora (Linux)

1. **En utilisant le Repository par défaut de Fedora:**
   - Mettez à jour votre index de paquets :
   ```sh
   sudo dnf update
   ```
   - Installez Node.js et npm en utilisant `dnf` :
   ```sh
   sudo dnf install nodejs
   ```

2. **Vérifier l'Installation:**
   - Ouvrez un Terminal.
   - Tapez `node -v` pour vérifier la version de Node.js.
   - Tapez `npm -v` pour vérifier la version de npm.