let btn = document.getElementById('generate');

btn.addEventListener('click', () => {
    let table = Number(document.getElementById('table').value);
    let range = Number(document.getElementById('range').value);

     for(let i=1 ; i<=range;i++){
        document.writeln('table' , ' x ' , i , ' = ', table*i, '<br>')
     }
})
