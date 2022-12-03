import React, { useState } from 'react';
import { PanelPrincipal } from './Components/PanelPrincipal/index.js'
import { PanelGrid } from './Components/PanelGrid/'
import { Logo } from './Components/Logo/'
import { PanelBusqueda } from './Components/PanelBusqueda/'
import { PanelCentral } from './Components/PanelCentral/'
import { ItemBooks } from './Components/ItemBooks/'
import { PanelInferior } from './Components/PanelInferior/'
import { ModalLibros } from './Components/ModalLibros/'
import { PanelModalPrincipal } from './Components/PanelModalPrincipal/'
import { PanelSuperiorModal } from './Components/PanelSuperiorModal/'
import { PanelCentralModal } from './Components/PanelCentralModal/'
import { ItemBook } from './Components/ItemBook'
import { PanelInferiorModal } from './Components/PanelInferiorModal/'

import './App.css';
import { useBook } from './Context/books-context.js';
import { FormInsertBooks } from './Components/Forms/FomInsertBooks/index.js';
import { FormInsertBook } from './Components/Forms/FormInsertBook/index.js';


function App() {

  const { searchBook, loadFormLibrary, loadFormBook ,searchBooks, loadModal, loadedBooks, listBooks, loadedBook, listBook } = useBook();
  let listBooksFilter = [];
  let listBookFilter = [];



  if (!searchBooks.length >= 1) {
    listBooksFilter = listBooks;
  } else {
    listBooksFilter = listBooks.filter(book => {
      const library_name = book.nombre_libreria.toLowerCase();
      const searchBoo = searchBooks.toLowerCase();
      return library_name.includes(searchBoo);
    });
  }

  if (!searchBook.length >= 1) {
    listBookFilter = listBook;
  } else {
    listBookFilter = listBook.filter(book => {
      const book_name = book.nombre_libro.toLowerCase();
      const searchBoo = searchBook.toLowerCase();
      return book_name.includes(searchBoo);
    });
  }

  return (
    <React.Fragment>
      <PanelPrincipal>
        <PanelGrid>
          <Logo />
          <PanelBusqueda />
        </PanelGrid>
        <PanelCentral>
          {loadedBooks && listBooksFilter.map(book => (
            <ItemBooks
              key={book.id}
              id={book.id}
              nombre_libreria={book.nombre_libreria}
              descripcion={book.descripcion}
            />
          ))}
          {!loadedBooks && <ItemBooks id={"Cargando ..."} />}
        </PanelCentral>
        <PanelInferior />
      </PanelPrincipal>

      {loadFormLibrary && <FormInsertBooks />}
      {loadFormBook && <FormInsertBook />}


      {loadModal &&
        <ModalLibros>
          <PanelModalPrincipal>
            <PanelSuperiorModal />
            <PanelCentralModal>
              {loadedBook && listBookFilter.map(item => (
                <ItemBook
                  key={item.id}
                  id={item.id}
                  nombre_libro={item.nombre_libro}
                  genero={item.genero}
                  ubicacion={item.ubicacion}
                  id_books={item.id_books}
                />
              ))}
              {!loadedBook && <ItemBooks id={"Cargando ..."} />}
            </PanelCentralModal>
            <PanelInferiorModal />
          </PanelModalPrincipal>
        </ModalLibros>
      }

    </React.Fragment>
  );
}

export default App;
