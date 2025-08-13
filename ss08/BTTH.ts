//xay dung lop BOOk
class Book {
    id:number;
    title:string;
    author:string;
    year:number

    constructor(id:number,title:string,author:string,year:number){
        this.id=id;
        this.title=title;
        this.author=author;
        this.year=year;

    }
}
class textBook extends Book {
    grade: string

}
class Comic extends Book{
    studio:string
}
// xay dung lop GENERic Libary
class Library <T extends Book>{
    books:T[]=[];
    addBook(book:T): void{
        this.books.push(book)
    }
    getBookById(id:number):T | undefined{
        return this.books.find((books) => books.id === id)
        
    }
    removeBook(id:number):void{
        this.books = this.books.filter((book) => book.id !== id)
    }
    updateBook(id:number,updateBook:T):void{
        let book =this.books.find((book) => book.id === id);
        book = updateBook;
    }
    listBook() : T []{
        return this.books
    }
    findBookByTitleOrAuthor(searchString:string): T []{
        return this.books.filter((book)=> book.title.includes(searchString)|| book.author.includes(searchString))
    }
    getTotalBooks():number{
        return this.books.length
    }
    findBooksByYear(year:number):T[]{
        return this.books.filter(books=> books.year === year )
    }

}
let library =new Library<Comic>()
library.addBook({id:1,title:"Iroman",author:"author",year:1990,studio:"Marvel"})
console.log(library.listBook());
