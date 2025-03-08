package com.mamba.bookservice.exceptions;

public class BookNotFoundException extends RuntimeException
{
    public BookNotFoundException(String message)
    {
        super(message);
    }

}
