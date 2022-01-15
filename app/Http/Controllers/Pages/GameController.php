<?php

namespace App\Http\Controllers\Pages;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class GameController extends Controller
{
    public function index(Request $request){
        if (!Auth::check()){
            return redirect()->route('login');
        }
        return view('pages.GamePage');
    }
}
