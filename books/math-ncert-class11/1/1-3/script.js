fetch('main.html')
.then(response => {
  if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
  return response.text();
})
.then(html => {
  document.body.innerHTML = html;
})
.catch(error => {
  console.error('Error:', error);
  document.body.textContent = 'Error loading content.';
});
