document.querySelectorAll('div').forEach((e) => {
    e.onclick = (e) => console.log(e.currentTarget.id);
});