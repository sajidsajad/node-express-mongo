# Project 01: Node-Farm

Node-Farm is a simple web application created to understand the fundamentals of Node.js, including synchronous and asynchronous file systems, core modules, third-party modules, and template manipulation. This project does not use Express or MongoDB; instead, it focuses on the core capabilities of Node.js.

## Features

- Demonstrates synchronous and asynchronous file handling.
- Utilizes Node.js core modules for functionality.
- Creates and integrated Node.js users own modules for functionality.
- Integrates third-party modules for additional utilities.
- Implements dynamic web pages using a template system.
- Replaces placeholders like `{%var%}` in templates to render data dynamically.

## Learning Highlights

1. **File System**:
   - Read and write files synchronously and asynchronously.
   - Manage file data for dynamic template generation.

2. **Modules**:
   - Core Modules: `fs`, `http`, `url`, and `querystring`.
   - Third-Party Modules: `slugify` and `nodemon` - Implemented additional functionality.

3. **Dynamic Templates**:
   - Use of placeholder strings `{%var%}` in templates.
   - Replace placeholders with dynamic data for rendering web pages.

## Project Structure

```plaintext
01-node-farm/
│
├── dev-data/
│   ├── data.json          # Data file used for rendering products
│   └── ...
│
├── templates/
│   ├── templateOverview.html      # Template for the main page
│   ├── templateProduct.html       # Template for product details
│   ├── ...
│
├── index.js               # Main server file

