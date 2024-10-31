<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Book;
use Illuminate\Http\JsonResponse;
use Illuminate\Validation\ValidationException;

class BookController extends Controller
{
    //Read Show all data
    public function index(): JsonResponse{
        $books = Book::all();
        return response()->json(['data' => $books], 200);
    }

    public function show($id)
    {
        $book = Book::findOrFail($id);
        return response()->json(['data' => $book], 200); 
    }
    //Create
    public function store(Request $request){
        try {
            $request->validate([
                'title' => 'required|string|max:255',
                'author' => 'required|string|max:255',
                'published_year' => 'required|integer',
                'genre' => 'required|string|max:255',
                'description' => 'nullable|string',
            ]);
    
            $book = Book::create($request->all()); 
    
            return response()->json(['message' => 'Book created successfully!', 'data' => $book], 201);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Server error: ' . $e->getMessage()], 500);
        }
    }

    //Update
    public function update(Request $request, int $id): JsonResponse
    {
        $book = Book::findOrFail($id);

        if (!$book) {
            return response()->json(['error' => 'books not found'], 404);
        }

        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
                'author' => 'required|string|max:255',
                'published_year' => 'required|integer',
                'genre' => 'required|string|max:255',
                'description' => 'nullable|string',
        ]);

        $book->update($validatedData);
        return response()->json(['message' => 'books updated successfully', 'data' => $book], 200);
    }



    //Delete
    public function destroy(int $id): JsonResponse
    {
        $book = Book::findOrFail($id);

        if (!$book) {
            return response()->json(['error' => 'books not found'], 404);
        }

        $book->delete();
        return response()->json(['message' => 'books deleted successfully'], 200);
    }
}

