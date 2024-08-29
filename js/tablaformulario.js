"use strict"
document.addEventListener('DOMContentLoaded', () => {
    let apiUrl = 'https://6673417c6ca902ae11b3a2d3.mockapi.io/habitaciones';
    let form = document.getElementById('formulario');
    let tablaBody = document.getElementById('tbody');

    async function cargarHabitaciones() {
        try {
            let response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Error al cargar las habitaciones');
            }
            let habitaciones = await response.json();
            tablaBody.innerHTML = ''; 
            habitaciones.forEach(habitacion => {
                let row = document.createElement('tr');
                row.setAttribute('data-id', habitacion.id);

                let nNumero = document.createElement('td');
                nNumero.textContent = habitacion.numero;
                row.appendChild(nNumero);

                let tTipo = document.createElement('td');
                tTipo.textContent = habitacion.tipo;
                row.appendChild(tTipo);

                let pPrecio = document.createElement('td');
                pPrecio.textContent = habitacion.precio;
                row.appendChild(pPrecio);

                let eEstado = document.createElement('td');
                eEstado.textContent = habitacion.estado;
                row.appendChild(eEstado);

                let aAcciones = document.createElement('td');
                let btnEditar = document.createElement('button');
                btnEditar.textContent = 'Editar';
                btnEditar.classList.add('editar-btn');
                let btnBorrar = document.createElement('button');
                btnBorrar.textContent = 'Borrar';
                btnBorrar.classList.add('borrar-btn');
                aAcciones.appendChild(btnEditar);
                aAcciones.appendChild(btnBorrar);
                row.appendChild(aAcciones);

                tablaBody.appendChild(row);
            });
        } catch (error) {
            console.error('Error:', error);
        }
    }

    
    cargarHabitaciones();

    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        let numero = document.getElementById('numero').value.trim();
        let tipo = document.getElementById('tipo').value.trim();
        let precio = parseFloat(document.getElementById('precio').value);
        let estado = document.getElementById('estado').value;

        if (numero && tipo && !isNaN(precio)) {
            try {
               
                let id = form.dataset.id;
                let method = id ? 'PUT' : 'POST';
                let endpoint = apiUrl;
                if (id) endpoint += `/${id}`;

                let response = await fetch(endpoint, {
                    method,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ numero, tipo, precio, estado }),
                });
                if (!response.ok) {
                    throw new Error('Error al guardar habitacion');
                }
                cargarHabitaciones(); 
                form.reset();
                delete form.dataset.id;
            } catch (error) {
                console.error('Error:', error);
            }
        }
    });

    
    tablaBody.addEventListener('click', async (e) => {
        let target = e.target;
    
       
        if (target.tagName === 'BUTTON' && target.innerText === 'Borrar') {
            let row = target.parentNode.parentNode; 
            let id = row.dataset.id;
            try {
                let response = await fetch(`${apiUrl}/${id}`, {
                    method: 'DELETE',
                });
                if (!response.ok) {
                    throw new Error('Error al borrar habitación');
                }
                cargarHabitaciones();
            } catch (error) {
                console.error('Error:', error);
            }
        } 
        else if (target.tagName === 'BUTTON' && target.innerText === 'Editar') {
            let row = target.parentNode.parentNode; 
            let id = row.dataset.id;
            try {
                let response = await fetch(`${apiUrl}/${id}`);
                if (!response.ok) {
                    throw new Error('Error al obtener datos de habitación');
                }
                let habitacion = await response.json();
    
                document.getElementById('numero').value = habitacion.numero;
                document.getElementById('tipo').value = habitacion.tipo;
                document.getElementById('precio').value = habitacion.precio;
                document.getElementById('estado').value = habitacion.estado;
                form.dataset.id = habitacion.id; 
            } catch (error) {
                console.error('Error:', error);
            }
        }
    });
});