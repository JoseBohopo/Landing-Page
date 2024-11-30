---

# **Landing Page for Software Engineer Presentation**

This project is a professional landing page designed to showcase the profile of a **Mid-Senior Software Engineer**. The page is optimized to highlight skills, experience, and technologies in a modern and professional way, with support for **light/dark mode**.

## **Key Features**

- **Modern and responsive design**: Optimized for mobile, tablet, and desktop devices.
- **Light/Dark mode**: Users can toggle between themes:
  - **Light Mode**: Features a vibrant gradient background (`from-indigo-500 to-teal-400`) for a dynamic and visually engaging appearance.
  - **Dark Mode**: A sleek gradient background (`from-black via-indigo-900 to-black`) for a sophisticated and modern look.
- **Technology showcase**: Interactive slider displaying key technologies.
- **Icon integration**: Uses `React Icons` to visually represent technologies and social media links.
- **Smooth transitions with Framer Motion**: High-quality animations for a professional touch.

---

## **Technologies Used**

- **React**: The main library for building the user interface.
- **Tailwind CSS**: CSS framework for quick and efficient styling.
- **Framer Motion**: Animation library for smooth and engaging transitions.
- **React Icons**: Icon library for representing technologies and social media links.
- **Vite**: A fast development and build tool.

---

## **How the Project Works**

### **1. Light and Dark Modes**
- **Light Mode**: A vibrant gradient background:
  - **Gradient Colors**: 
    - **From**: Indigo (`#6366F1`)
    - **To**: Teal (`#38B2AC`)
  - Creates a dynamic and energetic feel, ideal for showcasing creativity and innovation.

- **Dark Mode**: A sleek gradient background:
  - **Gradient Colors**:
    - **From**: Black (`#000000`)
    - **Via**: Deep Indigo (`#312E81`)
    - **To**: Black (`#000000`)
  - Adds a sophisticated, modern feel that works perfectly in low-light conditions.

- The theme state is managed with `useState` and saved in `localStorage` for user preference persistence.

### **2. Technology Slider**
- Icons representing technologies like **React**, **Node.js**, **TypeScript**, and more are displayed in an interactive slider created with **Framer Motion**.
- The animation allows elements to move smoothly from one side of the screen to the other in an infinite loop.

### **3. Social Media Links**
- **GitHub** and **LinkedIn** icons are integrated with links to professional profiles.
- Icons are managed with `React Icons` and adapt to light or dark themes.

### **4. Responsive Design**
- Tailwind CSS ensures the design is fully responsive across all screen sizes.
- Uses `grid` and `flexbox` to efficiently organize content.

---

## **How to Install and Run the Project**

### **Prerequisites**
- Node.js (v14 or higher)
- npm or yarn

### **Steps**
1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open the browser**:
   Visit `http://localhost:3000` to see the application in action.

---

## **Project Structure**

```
src/
├── components/
│   ├── TechnologySlider.tsx    # Interactive slider for technologies
│   ├── ThemeToggle.tsx         # Button to toggle between light/dark mode
├── context/
│   └── ThemeContext.tsx        # (Optional) Theme handling with context
├── styles/
│   └── index.css               # Custom global styles
├── App.tsx                     # Main application component
├── main.tsx                    # Application entry point
```

---

## **Next Steps**

- **Enhance the project section**: Add an interactive gallery for featured projects.
- **SEO and accessibility**: Optimize meta tags and improve accessibility standards.
- **Backend integration**: Connect the landing page to an API for dynamic data.

---

## **Contributions**

If you’d like to contribute to this project, feel free to fork the repository and submit a Pull Request. All improvements are welcome!

---

## **Author**

- **Name**: [Jose Bohopo](https://es.linkedin.com/in/jose-bohopo)
- **Email**: rabohopo@yahoo.es
- **GitHub**: [Your GitHub](https://github.com/JoseBohopo)

---