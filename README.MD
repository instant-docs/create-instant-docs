# create-instant-docs

[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/instant-docs/create-instant-docs)

🚀 **CLI tool to create app with instant-docs framework**

Create a new instant-docs documentation site in seconds! This tool scaffolds a complete documentation framework with multi-language support, versioning, search functionality, and customizable themes.

## ✨ Features

- 📚 **Multi-language support** - Built-in internationalization with dictionary-based content
- 🎨 **Multiple color themes** - Choose from 8 pre-built themes (Amazon, Google, YouTube, Reddit, and more)
- 🔍 **Full-text search** - Powered by Fuse.js for fast, fuzzy searching
- 📱 **Responsive design** - Mobile-first approach with clean sidebar navigation
- 🔧 **Plugin system** - Extensible with frontend and backend plugins
- 📝 **Markdown support** - Write your docs in Markdown with dynamic content injection

## 🚀 Quick Start

### Using npx
```bash
# Create in current directory
npx create-instant-docs

# Create in a new directory
npx create-instant-docs my-docs
```

### Using pnpm
```bash
# Create in current directory
pnpm create instant-docs

# Create in a new directory
pnpm create instant-docs my-docs
```

### Using yarn
```bash
# Create in current directory
yarn create instant-docs

# Create in a new directory
yarn create instant-docs my-docs
```

## 🎯 What You Get

After running the command, you'll have a complete documentation site with:

- **Template structure** with versioned content organization
- **Static assets** including CSS themes and JavaScript utilities
- **Plugin system** for extending functionality
- **Sample content** demonstrating advanced Node.js concepts
- **Multi-language setup** with English and French examples

## 📖 Next Steps

Once created, navigate to your project directory and:

```bash
cd my-docs  # if you specified a directory name
npm install  # Install dependencies
npm run dev    # Start the development server
```

## 🛠️ Project Structure

```
your-docs/
├── src/
│   └── plugins/          # Frontend & backend plugins
├── static/
│   ├── css/             # Stylesheets and themes
│   └── js/              # JavaScript utilities
└── versions/
    ├── latest/          # Current version content
    └── 2.0/            # Version-specific content
```

## Building & Deployment

The following command will build your documentation site for production:

```bash
npm run build
```

The output will be created regarding the `CONTENT_LANGUAGES`, `BUILD_DIR` and `LINK_FORMAT` variables in the `.env` file.

## 📄 License

This project is licensed under the GNU Affero General Public License v3.0.

---

**Get started with instant-docs today and create beautiful, searchable documentation sites in minutes!** 🎉

## Notes

This CLI tool is designed to scaffold instant-docs documentation projects quickly. The generated project includes a complete framework with multilingual support, theming system, and plugin architecture. The tool copies a comprehensive template that includes sample Node.js documentation content, demonstrating the framework's capabilities for creating professional documentation sites.
