export function filtrerTaches(tasks, filtre) {
      if (filtre === "toutes") return tasks;
      if (filtre === "afaire") return tasks.filter((t) => !t.checked);
      if (filtre === "terminees") return tasks.filter((t) => t.checked);
      return tasks;
}
