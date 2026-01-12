import "./styles/styles.css";

const saveButton = document.querySelector("#saveBtn");
const deleteButton = document.querySelector("#deleteBtn");

saveButton?.addEventListener("click", () => {
  saveButton.classList.toggle("loading");
  saveButton.textContent = saveButton.classList.contains("loading")
    ? "Saving..."
    : "Save";
});

deleteButton?.addEventListener("click", () => {
  deleteButton.classList.toggle("error");
});

document.querySelectorAll("[data-tabs]").forEach((tabs) => {
  const tabButtons = Array.from(tabs.querySelectorAll("[data-tab]"));
  const panels = Array.from(tabs.querySelectorAll("[data-panel]"));

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.dataset.tab;

      tabButtons.forEach((tab) => {
        tab.classList.toggle("is-active", tab === button);
      });

      panels.forEach((panel) => {
        panel.classList.toggle("hidden", panel.dataset.panel !== target);
      });
    });
  });
});

document.querySelectorAll("[data-var]").forEach((input) => {
  const unit = input.dataset.unit ?? "";
  const variable = input.dataset.var;

  if (!variable) {
    return;
  }

  const update = () => {
    document.documentElement.style.setProperty(variable, `${input.value}${unit}`);
  };

  input.addEventListener("input", update);
  update();
});
