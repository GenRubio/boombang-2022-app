<br><br><br><br>
<h1>Iniciar sesión</h1>
<br>
<form id="login-form" data-url="{{ route('webapi.login') }}" data-next-route="{{ route('game') }}">
    @csrf
    <div class="form-group">
        <label for="exampleInputEmail1">Usuario</label>
        <input type="text" class="form-control" name="name" aria-describedby="emailHelp"
            placeholder="Usuario" required>
    </div>
    <div class="form-group">
        <label for="exampleInputEmail1">Contraseña</label>
        <input type="password" class="form-control" name="password" aria-describedby="emailHelp"
            placeholder="Introduce tu contarseña" required>
    </div>
    <br><br>
    <button type="submit" class="btn btn-primary btn-block" id="play-button">Iniciar sesíon</button>
</form>

