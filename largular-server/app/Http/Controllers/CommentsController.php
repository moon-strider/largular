<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;

class CommentsController extends Controller
{
    public function index() {
        $comments = Comment::orderBy('id')->paginate(10);
        return view('comments', compact('comments'));
    }

    public function show(Comment $comment) {
        return view('commentShow', compact('comment'));
    }

    public function update(Comment $comment, Comment $newcomment) {
        $comment->update($newcomment);
    }

    public function destroy(Comment $comment) {
        $comment->delete();
        return redirect()->route('comments.index');
//        $comments = Comment::orderBy('id')->paginate(10);
//        return view('comments', compact('comments'));
    }
}
