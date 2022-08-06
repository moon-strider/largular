<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Admin Panel</title>
    <link href="{{ URL::asset('resources/css/admin.css') }}" rel="stylesheet" />
</head>
<body>
@if ($logged != true)
    <div class="login-screen">
    <div class="login-screen-inner">
        <input id="login-input" type="text" placeholder="Login...">
        <input id="password-input" type="password" placeholder="Password...">
        <a class="login-screen-button" href="{{ url('/') }}">
            Login
            <?php
            return redirect()->route('/admin', ['logged' => true]);
            ?>
        </a>
    </div>
    </div>
@else
    Logged in as admin
@endif
</body>
</html>
