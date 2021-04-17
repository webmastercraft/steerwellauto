<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Route;
use Validator;

class RegisterController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email|unique:steer_well_users,email',
            'password' => 'required|min:6',
        ]);

        if ($validator->fails()) {
            return $this->handleErrorResponse($validator->errors());
        }

        try {
            event(new Registered($this->create($request->all())));

            request()->request->add([
                'grant_type' => 'password',
                'client_id' => env('PASSWORD_CLIENT_ID'),
                'client_secret' => env('PASSWORD_CLIENT_SECRET'),
                'username' => $request->get('email'),
                'password' => $request->get('password'),
                'remember' => false,
                'scope' => '',
            ]);

            $response = Route::dispatch(Request::create('/oauth/token', 'POST'));

            $data = json_decode($response->getContent(), true);

            if (!$response->isOk()) {
                $error_array = array('email' => ["The user credentials were incorrect."]);
                return $this->handleErrorResponse($error_array);
            }

            $data["success"] = true;
            $success_array = array();
            array_push($success_array, "The user registered successfully.");
            $data["messages"] = $success_array;

            return $data;
            
        } catch (\Exception $e) {
            dd($e->getMessage(), $e->getCode(), $e->getTrace());
            $error_array = array('email' => ["The user credentials were incorrect."]);
            return $this->handleErrorResponse($error_array);
        }
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array $data
     * @return User
     */
    protected function create(array $data)
    {
        return User::create([
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
        ]);
    }

    public function handleErrorResponse($messages) {
        $error_response = array();
        $error_response["success"] = false;
        $error_response["messages"] = $messages;
        return response()->json($error_response, 401);
    }
}
