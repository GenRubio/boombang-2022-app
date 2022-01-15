@extends('layout.app')

@section('content')
    <div id="game-page">
        @include('components.game-page.flash')
        @include('components.game-page.game-container')
    </div>
@endsection