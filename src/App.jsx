import { useState } from 'react';
import Form from './Form';
import { nanoid } from 'nanoid';
import Items from './Item';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  // Seteo de items al inicio, no es necesario usar useEffect por que lo llamamos luego de cada operación de escritura.
  const defaultItems = JSON.parse(localStorage.getItem('list') || '[]');

  //versión alternativa (en desuso por verbosidad) de seteo inicial
  const getLocalStorage = () => {
    let list = localStorage.getItem('list');
    if (list) {
      list = JSON.parse(localStorage.getItem('list'));
    } else {
      list = [];
    }
    return list;
  };
  const [items, setItems] = useState(defaultItems);

  //Guardado de datos.
  const setLocalStorage = (items) => {
    localStorage.setItem('list', JSON.stringify(items));
  };

  //Función para agregar items
  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    const newItems = [...items, newItem];
    //Modo directo de agregar las cosas sin variables intermedias.
    /* setItems([...items, newItem]);
    setLocalStorage([...items, newItem]); */

    //Seteo de items (básicamente acá sucede la creación)
    setItems(newItems);
    // guardado en local
    setLocalStorage(newItems);
    toast.success('Agregaste una nueva tarea con éxito!');
  };

  //Eliminar item
  const removeItems = (itemId) => {
    const newItems = items.filter((item) => itemId !== item.id);
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success('Eliminaste el registro!');
  };

  //Editar completado
  const editItems = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
  };
  return (
    <section className="section-center">
      <ToastContainer position="top-center" autoClose={1000} />
      <Form addItem={addItem} />
      <Items items={items} removeItems={removeItems} editItems={editItems} />
    </section>
  );
};

export default App;
