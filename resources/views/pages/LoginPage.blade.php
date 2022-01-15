@extends('layout.app')

@section('content')
    <div id="login-page">
        <div class="container">
            @include('components.login-page.login-form')
        </div>
    </div>
@endsection
