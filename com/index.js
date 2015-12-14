function addInput(divName) {
    
                  var newdiv = document.createElement('div');
                  //newdiv.innerHTML += "<form id='formularioContacto'>";
                  newdiv.innerHTML += " <p> NOMBRE   : <input type='text' name='nombre'></p>";
                  newdiv.innerHTML += " <p> APELLIDO : <input type='text' name='apellido'></p>";
                  newdiv.innerHTML += " <p> TELEFONO : <input type='text' name='telefono'></p>";
                  newdiv.innerHTML += " <input type='submit' value='Registrar' onclick='alerta();'>";
                  //newdiv.innerHTML += "  </form>";
                  document.getElementById(divName).appendChild(newdiv);
}

function createTable(table_) {
             
             var head = ["NOMBRE ","APELLIDO","TELEFONO"];
             var fila = document.createElement('tr');
             
             for (var i = 0; i < head.length; i++) {
                   
                   fila.innerHTML += "  <td> "+head[i]+"   </td> ";
                 
             };

         
              
              document.getElementById(table_).appendChild(fila);

      
      
}