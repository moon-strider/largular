<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;

class CommentsController extends Controller
{
    public function index() {
        $comments = Comment::all();
        return view('comments', compact('comments'));
    }
}
