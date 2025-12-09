# TodoList App — React + Vite

A simple and clean Todo List application built using **React** with **Vite** as the development environment.  
The goal of the project is to practice React fundamentals such as component structure, state management, props, and dynamic rendering.

---

## 🖼️ Preview
LightMode:
![TodoList-LightMode](./docs/images/lightMode.png)
DarkMode:
![TodoList-DarkMode](./docs/images/darkMode.png)
---

## ✨ Features

- Add new tasks
- Mark tasks as completed / uncompleted
- Edit tasks
- Delete tasks
- Filter tasks by:
  - **All**
  - **Active**
  - **Completed**
- Persist todos using **localStorage**
- Light / Dark mode toggle
- Footer with filtering functionality and copyright

---
## 💾 Local Storage Persistence
All todos are automatically saved in your browser using the localStorage API.
Even if you refresh or close the tab, your tasks remain stored locally on your device(you can delete them from the local storage).

To view the stored data manually:

1. Open Developer Tools (Right-click → Inspect)

2. Go to the Application tab

3. Expand Local Storage

4. Select your site’s URL

5. Look for the key named "todos"


Example view:

![TodoList-localStorage](./docs/images/localStorage.png)

## 🧱 Tech Stack

- **React** (Functional Components + Hooks)
- **Vite** (Fast development and HMR)
- **CSS** for component styling
- **localStorage API** for persistence

---

## 🎯 Learning Objectives

This project is part of our React learning journey.  
We aim to strengthen knowledge in:

- Component-based architecture
- State and event handling (`useState`, `useEffect`)
- Mapping and filtering arrays
- Conditional styling using dynamic class names
- Layout with Flexbox

---

## 🚀 Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

---

## 🛣️ Future Improvements

- Edit todo text inline
- Drag & drop reordering
- Animations for list changes
- Unit testing (Jest / React Testing Library)
- Deploy to web hosting (Netlify / Vercel)

---

## 👥 Authors

| Name | LinkedIn |
|------|----------|
| **Noam Cohen** | https://www.linkedin.com/in/noam-cohen-a7802b275 |
| **Yair Margalit** | https://www.linkedin.com/in/yair-margalit-089164337/ |

---

Feel free to clone, use, and contribute.  
Learning React one component at a time! 💪🚀
