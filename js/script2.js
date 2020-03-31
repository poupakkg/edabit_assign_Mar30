/**JavaScript doesn't really have classes like other languages. They are actually functions behind the scenes. There are several ways to create classes.

Challenge
Create a Book class using a JavaScript function - instantiable.
It should have a author and published property.

Create an Author class using a literal object - singleton.

It should have a name and books property.

Create a Publisher class by using the new constructor and an anonymous function - singleton.

It should have a authors and books property.

Create a Review class using a class declaration - instantiable.

It should have a rating and user property.
Bonus (optional)
Create a Bookstore class using an IIFE - singleton. It should have a books and prices property.

Notes
All classes should begin with Capital letters.
All class properties should have default(initial) values.
There are a few other ways to make classes but are not in this challenge, you can check the Resources tab to learn more. */

function Book(auther, published) {
    this.author = author;
    this.published = published;
}

function Author (name, books){
    name: this.name,
    books: this.books
}

function Publisher (author, books) = new function (author, books) {
    this.author = author;
    this.books = books;
}

class Review {
    constructorb(rating, user){
        this.rating =rating;
        this.user=user;
    }
}


