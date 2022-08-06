<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Admin Panel</title>
    <link href="{{ URL::asset('resources/css/comments.css') }}" rel="stylesheet" />
</head>
<body>
<div class="comment-container">
@if (count($comments))
    @foreach ($comments as $comment)
        <div class="comment">
            {{ $comment->message }}
        </div>
        <br>
    @endforeach
@else
    No comments found.
@endif
</div>
</body>
</html>
