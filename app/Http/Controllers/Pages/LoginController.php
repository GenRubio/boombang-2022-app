<?php

namespace App\Http\Controllers\Pages;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function index(Request $request){
        if (Auth::check()){
            return redirect()->route('game');
        }
        return view('pages.LoginPage');
    }
    
    public function login(Request $request){
        $response = [
            'success' => false
        ];

        $user = $this->getUser($request->name, $request->password);
        if ($user){
            $response = [
                'success' => true
            ];
            Auth::login($user);
        }

        return response()->json($response);
    }

    private function getUser($name, $password){
        return User::where('name', $name)->where('password', $password)->first();
    }
}
