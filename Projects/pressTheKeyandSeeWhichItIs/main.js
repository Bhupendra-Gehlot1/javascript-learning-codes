let insert = document.querySelector('#insert')

window.addEventListener('keydown',(e)=>{
    console.log("hell")
    insert.innerHTML = `
    <table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr> 
</table>
    `
})