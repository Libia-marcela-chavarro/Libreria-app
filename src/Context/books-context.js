import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export const BookContext = createContext();

export const BookProvider = (props) => {

    let defaultListBook = [
        { id: 12, nombre_libro: "Harry potter", genero: "ciencia ficcion", ubicacion: "A1", id_books: 1 },
        { id: 13, nombre_libro: "yo antes de ti", genero: "romance", ubicacion: "A2", id_books: 1 },
        { id: 14, nombre_libro: "HUSH HUSH", genero: "romance", ubicacion: "A1", id_books: 2 },
    ]

    const [loadModal, setLoadModal] = useState(false);
    const [loadedBooks, setLoadedBooks] = useState(true);
    const [loadFormLibrary, setLoadFormLibrary] = useState(false)
    const [loadFormBook, setLoadFormBook] = useState(false)
    const [listBooks, setListBooks] = useState([
        { id: 1, nombre_libreria: "libreria nacional", descripcion: "Libros y Revistas" },
        { id: 2, nombre_libreria: "Templari", descripcion: "Novelas y Ciecia Ficcion" },
        { id: 3, nombre_libreria: "Corpus", descripcion: "Revistas" }
    ]);
    const [booksSelected, setBooksSelected] = useState();

    const [searchBooks, setSearchBooks] = useState("");
    const [searchBook, setSearchBook] = useState("");
    const [loadedBook, setLoadedBook] = useState(true);
    const [listBook, setlistBook] = useState([]);

    const addBookToList = (namebook, gender, location) => {
        let newId = parseInt(listBook[listBook.length - 1].id, 10) + 1;
        listBook.push({ id: newId, nombre_libro: namebook, genero: gender, ubicacion: location, id_books: booksSelected });
        setlistBook(listBook);
    }

    const addBooksToList = (name, description) => {
        let newId = parseInt(listBooks[listBooks.length - 1].id, 10) + 1;
        listBooks.push({ id: newId, nombre_libreria: name, descripcion: description });
        setListBooks(listBooks);
    }

    useEffect(() => {

        let listBookFilter = defaultListBook.filter(book => {
            let id = book.id_books;
            if (id == booksSelected) {
                return book;
            }
        });
        setlistBook(listBookFilter);
    }, [booksSelected])


    const value = useMemo(() => {
        return ({
            loadModal,
            setLoadModal,
            loadedBooks,
            setLoadedBooks,
            listBooks,
            searchBooks,
            booksSelected,
            setBooksSelected,
            loadFormLibrary,
            addBooksToList,
            addBookToList,
            searchBook,
            setSearchBook,
            setLoadFormLibrary,
            loadFormBook,
            setLoadFormBook,
            setSearchBooks,
            setListBooks,
            loadedBook,
            setLoadedBook,
            listBook,
            setlistBook,
        })
    }, [
        loadModal,
        loadedBooks,
        searchBooks,
        listBooks,
        loadFormLibrary,
        setLoadFormLibrary,
        loadFormBook,
        searchBook,
        setSearchBook,
        setLoadFormBook,
        booksSelected,
        setBooksSelected,
        loadedBook,
        listBook,
        setSearchBooks
    ])
    return <BookContext.Provider value={value} {...props} />
}

export const useBook = () => {
    const context = useContext(BookContext);
    if (!context) {
        throw new Error('useBook debe estar dentro del Proveedor BookContext');
    }
    return context;
}