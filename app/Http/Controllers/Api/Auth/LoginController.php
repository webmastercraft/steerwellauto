<?php

namespace App\Http\Controllers\Api\Auth;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Route;
use Validator;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email|exists:steer_well_users,email',
            'password' => 'required|min:6',
        ]);

        if ($validator->fails()) {
            return $this->handleErrorResponse($validator->errors());
        }

        $input = $validator->validate();

        request()->request->add([
            'grant_type' => 'password',
            'client_id' => env('PASSWORD_CLIENT_ID'),
            'client_secret' => env('PASSWORD_CLIENT_SECRET'),
            'username' => $input['email'],
            'password' => $input['password'],
        ]);

        $response = Route::dispatch(Request::create('/oauth/token', 'POST'));

        $data = json_decode($response->getContent(), true);

        if (!$response->isOk()) {
            $error_array = array('password' => ["The user's password was incorrect."]);
            return $this->handleErrorResponse($error_array);
        }

        $data["success"] = true;
        $success_array = array();
        array_push($success_array, "The user logged in successfully.");
        $data["messages"] = $success_array;

        return $data;
    }

    public function logout(Request $request)
    {
        $accessToken = $request->user()->token();

        DB::table('oauth_refresh_tokens')
            ->where('access_token_id', $accessToken->id)
            ->update([
                'revoked' => true,
            ]);

        $accessToken->revoke();

        return response()->json([], 201);
    }

    public function handleErrorResponse($messages) {
        $error_response = array();
        $error_response["success"] = false;
        $error_response["messages"] = $messages;
        return response()->json($error_response, 401);
    }
}
