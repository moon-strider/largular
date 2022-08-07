<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Admin Panel</title>
    <link href="{{ URL::asset('resources/css/comments.css') }}" rel="stylesheet" />
</head>
<body>
<div class="comment-container">
    <a href="{{ route('comments.index') }}">Back</a>
    @if (isset($comment))
        <div class="comment">
            {{ $comment->id }}.{{ $comment->message }}
            <form method="post" action={{ route('comments.destroy', $comment) }}>
                @csrf
                @method('DELETE')
                <button type="submit">Delete</button>
            </form>
        </div>
        <br>
    @else
        No comments found.
    @endif
</div>
</body>
</html>
