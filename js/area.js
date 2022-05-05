let textarea = document.querySelector(".area")

textarea.addEventListener("keyup", () => {
    if (!/^\S+#\S+\.\S+$/.test(textarea.value)) {
      textarea.style.color = "red" 
    }
});