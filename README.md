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
node/01-node-farm/
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
```
# *********************************************************************************************

# Project 02:  How Node.js Works Behind the Scenes

This project is a deep dive into the internal workings of Node.js and the foundational concepts of modern web development. Through this project, I explored how Node.js operates under the hood and gained a better understanding of web development paradigms, the Node.js runtime, and key architectural components.

## Key Concepts Covered

1. **An Overview of How the Web Works**  
   - Understanding how the web functions, including clients, servers, and communication over HTTP.

2. **HTTP in Action**  
   - How HTTP requests and responses are structured and processed in a web application.

3. **Front-End vs Back-End Web Development**  
   - Differentiating roles and responsibilities in web development and the interplay between the two.

4. **Static vs Dynamic vs API**  
   - Differences between static websites, dynamic websites, and APIs.

5. **Node.js, V8, Libuv, and C++**  
   - The building blocks of Node.js:
     - **V8**: JavaScript engine for executing code.
     - **Libuv**: Library for handling asynchronous I/O.
     - C++ components for system-level operations.

6. **Processes, Threads, and the Thread Pool**  
   - Understanding the single-threaded nature of Node.js and how it uses a thread pool for heavy operations.

7. **The Node.js Event Loop**  
   - Core mechanism for handling non-blocking I/O.

8. **The Event Loop in Practice**  
   - Hands-on practice with the event loop, observing its stages and behavior in real applications.

9. **Events and Event-Driven Architecture**  
   - How Node.js uses an event-driven model for scalability and efficiency.

10. **Events in Practice**  
    - Implementing custom events and using built-in events with the `EventEmitter` class.

11. **Introduction to Streams**  
    - Basics of streams in Node.js for efficient data handling.

12. **Streams in Practice**  
    - Using readable and writable streams to process large datasets or files.

13. **How Requiring Modules Really Works**  
    - Behind-the-scenes exploration of the `require()` function, module caching, and the CommonJS module system.

14. **Requiring Modules in Practice**  
    - Practical implementation of requiring and creating modules in Node.js applications.

## Learning Highlights

- **Node.js Runtime**: Gained insights into how Node.js operates and how its architecture supports asynchronous programming.
- **Event-Driven Design**: Learned the importance of event-driven architecture for building scalable and efficient applications.
- **Streams and Data Handling**: Understood how streams enable efficient data processing.
- **Module System**: Explored how Node.js manages dependencies and modules.

## How to Run

This project involves studying and implementing concepts without a concrete application. However, to practice:
1. Run Node.js scripts included in the project folder to see examples in action.
2. Use the following command to execute a script:
   ```bash
   node filename.js

## Project Structure

```plaintext
node/02-how-node-works/
│
├── event-loop.js           # Demonstrates the Node.js Event Loop
├── events.js               # Practical implementation of event-driven architecture
├── modules.js              # Examples of how modules work in Node.js
├── streams.js              # Demonstrates the use of streams for data handling
├── test-file.txt           # Test file for practicing file system and streams
├── test-module-1.js        # Sample module for module practice
├── test-module-2.js        # Another sample module
├── test-module-3.js        # Third sample module
```


