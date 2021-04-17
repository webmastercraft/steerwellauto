<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Route;
use Validator;

class ResetPasswordController extends Controller
{
    public function resetPassword(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email|exists:steer_well_users,email',
            'current_password' => 'required|min:6',
            'new_password' => 'required|min:6'
        ]);

        if ($validator->fails()) {
            return $this->handleErrorResponse($validator->errors());
        }

        try {
        	
            request()->request->add([
                'grant_type' => 'password',
                'client_id' => env('PASSWORD_CLIENT_ID'),
                'client_secret' => env('PASSWORD_CLIENT_SECRET'),
                'username' => $request->get('email'),
                'password' => $request->get('current_password'),
            ]);

            $response = Route::dispatch(Request::create('/oauth/token', 'POST'));

            $data = json_decode($response->getContent(), true);

            if (!$response->isOk()) {
            	$error_array = array('password' => ["The user's password was incorrect."]);
                return $this->handleErrorResponse($error_array);
            }

            $this->updatePassword($request->get('email'), $request->get('new_password'));

            return response()->json([
                "success" => true,
                "message" => "The user password updates successfully.",
                "data" => $data
            ], 201);
            
        } catch (\Exception $e) {
            dd($e->getMessage(), $e->getCode(), $e->getTrace());
            $error_array = array('email' => ["The user credentials were incorrect."]);
            return $this->handleErrorResponse($error_array);
        }
    }

    protected function updatePassword($email, $new_password)
    {
        return User::where('email', $email)
            ->get()
            ->first()
            ->update(['password' => bcrypt($new_password)]);
    }

    public function handleErrorResponse($messages) {
        $error_response = array();
        $error_response["success"] = false;
        $error_response["messages"] = $messages;
        return response()->json($error_response, 422);
    }
}

