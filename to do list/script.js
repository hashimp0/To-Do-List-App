function showPage(pageId) {
      const pages = document.querySelectorAll('.page');
      pages.forEach(page => page.classList.remove('active'));
      const targetPage = document.getElementById(pageId);
      targetPage.classList.add('active');
    }

    function addTask() {
      const taskInput = document.getElementById("taskInput");
      const taskList = document.getElementById("taskList");
      const taskText = taskInput.value.trim();

      if (taskText !== "") {
        const li = document.createElement("li");
        li.textContent = taskText;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "×";
        deleteBtn.style.marginTop = "2px";
        deleteBtn.className = "delete-btn";
        deleteBtn.onclick = () => li.remove();

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        taskInput.value = "";
      }
    }

function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  html.setAttribute('data-theme', newTheme);

  const btn = document.getElementById('themeToggleBtn');
  // Update icon: 🌞 for light mode, 🌙 for dark mode
  btn.textContent = newTheme === 'light' ? '🌙' : '🌞';
}

// Initialize icon on page load
window.onload = () => {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
  const btn = document.getElementById('themeToggleBtn');
  btn.textContent = currentTheme === 'light' ? '🌙' : '🌞';
};
